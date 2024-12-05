import { Schema } from "effect"
import { Gender, Phone } from "./Shared.js"

export const PersonName = Schema.Struct({})

export const Id = Schema.Positive.pipe(Schema.brand("@domain/Guest/Id"))
export const IdFromString = Schema.NumberFromString.pipe(Schema.compose(Id))

export const Chd = Schema.TaggedStruct("CHD", {
  firstName: Schema.NonEmptyTrimmedString.pipe(Schema.compose(Schema.Lowercase)),
  lastName: Schema.NonEmptyTrimmedString.pipe(Schema.compose(Schema.Lowercase)),
  birthDay: Schema.Date,
  withBed: Schema.Boolean
})
export const Inf = Schema.TaggedStruct("INF", {
  firstName: Schema.NonEmptyTrimmedString.pipe(Schema.compose(Schema.Lowercase)),
  lastName: Schema.NonEmptyTrimmedString.pipe(Schema.compose(Schema.Lowercase)),
  birthDay: Schema.Date
})

export const Adt = Schema.TaggedStruct("ADT", {
  firstName: Schema.NonEmptyTrimmedString.pipe(Schema.compose(Schema.Lowercase)),
  lastName: Schema.NonEmptyTrimmedString.pipe(Schema.compose(Schema.Lowercase)),
  gender: Gender,
  phones: Schema.Array(Phone)
})

export const Guest = Schema.Union(Inf, Chd, Adt)
export type Guest = typeof Guest.Type
