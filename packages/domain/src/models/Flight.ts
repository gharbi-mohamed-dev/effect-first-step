import { Array, DateTime, HashMap, Option, pipe, Schema } from "effect"
import { IllegalArgumentException } from "effect/Cause"

export const AirportIataCode = Schema.Literal("alg", "jed").pipe(Schema.brand("AirportIataCode"))
export type AirportIataCode = typeof AirportIataCode.Type
export const AirportsDetail = HashMap.empty<AirlineIataCode, { timezone: string; countryCode: string }>().pipe(
  HashMap.set("alg", { timezone: "Africa/Algiers", countryCode: "dz" }),
  HashMap.set("jed", { timezone: "Asia/Riyadh", countryCode: "sa" })
)

export const AirlineIataCode = Schema.Literal("ah", "sv", "tk", "ek").pipe(Schema.brand("AirlineIataCode"))
export type AirlineIataCode = typeof AirlineIataCode.Type

export const FlightId = Schema.Number.pipe(Schema.brand("FlightId"))
export type FlightId = typeof FlightId.Type

export const FlightIdFromString = Schema.NumberFromString.pipe(
  Schema.compose(FlightId)
)

export const FlightSegment = Schema.Struct({
  from: AirportIataCode,
  to: AirportIataCode,
  departureAt: Schema.Date,
  arrivalAt: Schema.Date
}).pipe(
  Schema.filter(({ departureAt }) => {
    if (departureAt.getTime() < Date.now()) {
      return {
        path: ["departureAt"],
        message: `cannot be in the past '${departureAt}'`
      }
    }
  }),
  Schema.filter(({ arrivalAt, departureAt }) => {
    if (departureAt.getTime() >= arrivalAt.getTime()) {
      return {
        path: ["arrivalAt"],
        message: `cannot be <= ${departureAt}`
      }
    }
  }),
  Schema.filter(({ from, to }) => {
    if (from === to) {
      return {
        path: ["to"],
        message: `invalid '${to}' airport`
      }
    }
  })
)

export const makeUnsafeZonedDateTime = (date: Date, airport: string) => {
  const opt = HashMap.get(AirportsDetail, airport)

  if (Option.isSome(opt)) {
    return DateTime.unsafeMakeZoned(date, { timeZone: opt.value.timezone })
  } else {
    throw new IllegalArgumentException(`invalid time zone given '${airport}'`)
  }
}

export const validateSegmentsOrder = (
  segments: Iterable<typeof FlightSegment.Type>
): Option.Option<[number, number]> => {
  const ordered = pipe(
    Array.fromIterable(segments),
    Array.map((segment, index) => ({
      ...segment,
      index
    })),
    Array.sortWith(({ departureAt }) => {
      return DateTime.unsafeFromDate(departureAt)
    }, DateTime.Order)
  )

  for (let index = 1; index < ordered.length; index++) {
    const cur = ordered[index]
    const prv = ordered[index - 1]

    if (
      prv.arrivalAt.getTime() >= cur.departureAt.getTime()
    ) {
      return Option.some([prv.index, cur.index])
    }
  }

  return Option.none()
}

export const Flight = Schema.Struct({
  id: FlightId,
  title: Schema.compose(Schema.NonEmptyTrimmedString, Schema.Lowercase),
  segments: Schema.Array(FlightSegment.pipe(
    Schema.filter(({ arrivalAt, departureAt }) => {
      return Option.all({
        lhs: DateTime.makeZoned(departureAt, { timeZone: "Africa/Algiers" }),
        rhs: DateTime.makeZoned(arrivalAt, { timeZone: "Asia/Riyadh" })
      }).pipe(
        Option.flatMap(({ lhs, rhs }) => DateTime.lessThan(lhs, rhs) ? Option.void : Option.none()),
        Option.isSome
      )
    })
  )),
  airline: AirlineIataCode,

  stock: Schema.Struct({
    total: Schema.Positive,
    visible: Schema.NonNegative,
    sold: Schema.NonNegative
  }).pipe(
    Schema.filter(({ total, visible }) => visible <= total),
    Schema.filter(({ sold, total }) => sold <= total)
  )
})
