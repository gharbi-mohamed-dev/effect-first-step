import { DateTime, Duration, Effect, Schema } from "effect"
import type * as Guest from "./Guest.js"
import { isInvalidData } from "effect/ConfigError"

export const PriceSetId = Schema.Number.pipe(
  Schema.compose(Schema.BigIntFromNumber),
  Schema.compose(Schema.PositiveBigIntFromSelf),
  Schema.brand("PriceSetId")
)
export const PriceSetIdFromString = Schema.NumberFromString.pipe(
  Schema.compose(PriceSetId)
)
export type PriceSetId = typeof PriceSetId.Type

export const PriceRuleId = Schema.Number.pipe(
  Schema.compose(Schema.BigIntFromNumber),
  Schema.compose(Schema.PositiveBigIntFromSelf),
  Schema.brand("PriceRuleId")
)
export type PriceRuleId = typeof PriceRuleId.Type

export const PriceRuleIdFromString = Schema.NumberFromString.pipe(
  Schema.compose(PriceRuleId)
)

export const PriceListId = Schema.Number.pipe(
  Schema.compose(Schema.BigIntFromNumber),
  Schema.compose(Schema.PositiveBigIntFromSelf),
  Schema.brand("PriceListId")
)
export type PriceListId = typeof PriceListId.Type

export const PriceListIdFromString = Schema.NumberFromString.pipe(
  Schema.compose(PriceListId)
)

export const PriceRule = Schema.Struct({
  id: PriceRuleId,
  for: Schema.Literal("b2b"),
  values: Schema.Array(Schema.String)
})
export type PriceRule = typeof PriceRule.Type

export const PriceValue = Schema.Struct({
  minAge: Schema.NonNegative,
  maxAge: Schema.NullOr(Schema.NonNegative),
  priceListId: PriceListId,
  value: Schema.BigDecimal
})
export type PriceValue = typeof PriceValue.Type

export const PriceList = Schema.Struct({
  id: PriceListId,
  priceSetId: PriceSetId,
  startAt: Schema.Date,
  endAt: Schema.NullOr(Schema.Date),
  values: Schema.Array(PriceValue),
  rules: Schema.Array(PriceRule)
})
export const PriceListWithConstraint = PriceList.pipe(
  Schema.filter(({ endAt, startAt }) => {
    if (endAt !== null) {
      const isInvalidRange = DateTime.greaterThan(
        DateTime.unsafeMake(startAt),
        DateTime.unsafeMake(endAt)
      )
      if (isInvalidRange) {
        return {
          path: ["endAt"],
          message: `invalid PriceList Date Range startAt=${startAt} endAt=${endAt}`
        }
      }
    }
  })
)
export type PriceList = typeof PriceList.Type

export const PriceSet = Schema.Struct({
  id: PriceSetId,
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
