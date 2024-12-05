import { BigDecimal, Schema } from "effect"

export const ExtraTarget = Schema.Literal("single", "room")
export const Extra = Schema.Struct({
  name: Schema.NonEmptyTrimmedString,
  target: ExtraTarget,
  value: Schema.Union(Schema.BigDecimal, Schema.BigDecimalFromSelf, Schema.BigDecimalFromNumber).pipe(
    Schema.filter((value) => !BigDecimal.isNegative(value))
  )
})
