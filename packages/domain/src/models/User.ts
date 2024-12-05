import { Schema } from "effect"
import { Email, HashedPassword, Id } from "./Shared.js"

export const User = Schema.Struct({
  id: Id,
  email: Email,
  hashedPassword: HashedPassword,
  createdAt: Schema.Date
})
