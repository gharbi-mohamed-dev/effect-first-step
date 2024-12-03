import { Schema } from "effect"

export const Email = Schema.NonEmptyTrimmedString.pipe(
  Schema.compose(Schema.Lowercase),
  Schema.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/),
  Schema.annotations({
    title: "Email",
    description: "An email address"
  }),
  Schema.brand("Email")
)

export type Email = typeof Email.Type
export const Phone = Schema.NonEmptyTrimmedString.pipe(
  Schema.brand("Phone")
)

export const HashedPassword = Schema.Redacted(Schema.String).pipe(Schema.brand("HashedPassword"))
export type HashedPassword = typeof HashedPassword.Type

export const Gender = Schema.Literal("MALE", "FEMALE")
export type Gender = typeof Gender.Type
