import { DateTime, Duration, Effect, Schema } from "effect"
import type * as Guest from "./Guest.js"
import { Id } from "./Shared.js"

export const PriceRule = Schema.Struct({
  id: Id,
  for: Schema.Literal("b2b"),
  values: Schema.Array(Schema.String)
})
export type PriceRule = typeof PriceRule.Type

export const PriceValue = Schema.Struct({
  id: Id,
  minAge: Schema.NonNegative,
  maxAge: Schema.NullOr(Schema.NonNegative),
  priceListId: Id,
  value: Schema.BigDecimal
})
export type PriceValue = typeof PriceValue.Type

export const PriceList = Schema.Struct({
  id: Id,
  priceSetId: Id,
  startAt: Schema.Date,
  endAt: Schema.NullOr(Schema.Date),
  values: Schema.Array(PriceValue),
  rules: Schema.Array(PriceRule)
})

export type PriceList = typeof PriceList.Type

export const PriceSet = Schema.Struct({
  id: Id,
  title: Schema.NonEmptyTrimmedString,
  priceLists: Schema.Array(PriceList)
})
export type PriceSet = typeof PriceSet.Type

export const ADT_DEFAULT_AGE = 12

export function guestGuestAge(guest: Guest.Guest) {
  // TODO: for the time being the age is wrong because it's based on the current date but it must be based on the checkin date at the hotel
  // TODO: the age caclucation is not accurate enough use a library that takes into account leap days
  return Effect.gen(function*() {
    const now = yield* DateTime.now
    if (guest._tag === "ADT") {
      return ADT_DEFAULT_AGE
    }
    const age = DateTime.distanceDuration(now, DateTime.unsafeFromDate(guest.birthDay))
    const days = Duration.toDays(age)
    return days / 365
  })
}
type Config = {
  priceSet: PriceSet
  isValidRule: <E = never, R = never>(rule: ReadonlyArray<PriceRule>) => Effect.Effect<boolean, E, R>
  isValidValue: <E = never, R = never>(rule: PriceValue) => Effect.Effect<boolean, E, R>
}
export const filterPriceSet = ({ isValidRule, isValidValue, priceSet }: Config) =>
  Effect.gen(function*() {
    const candidates: Array<PriceValue> = []
    for (const priceList of priceSet.priceLists) {
      const ruleMatch = yield* isValidRule(priceList.rules)
      if (ruleMatch) {
        for (const priceValue of priceList.values) {
          const valueMatch = yield* isValidValue(priceValue)
          if (valueMatch) {
            candidates.push(priceValue)
          }
        }
      }
    }

    return candidates
  }).pipe(
    Effect.withSpan("filterPriceSet", {
      attributes: {
        priceSet
      }
    })
  )
