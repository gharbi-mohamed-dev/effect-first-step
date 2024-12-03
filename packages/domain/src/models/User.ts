import { Schema } from "effect"
import { Email, HashedPassword } from "./Shared.js"

export const UserId = Schema.NumberFromString.pipe(
  Schema.compose(Schema.BigIntFromNumber),
  Schema.brand("UserId")
)

export type UserId = typeof UserId.Type

export const User = Schema.Struct({
  id: UserId,
  email: Email,
  hashedPassword: HashedPassword,
  createdAt: Schema.Date
})
