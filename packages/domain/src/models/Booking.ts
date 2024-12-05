import { BigDecimal, Schema } from "effect"
import { AgentId } from "./Agent.js"
import { FlightId } from "./Flight.js"
import * as Guest from "./Guest.js"
import * as Pricing from "./Pricing.js"
import { ProgramId } from "./Program.js"
import { Id } from "./Shared.js"
import * as User from "./User.js"

export const Details = Schema.Struct({
  total: Schema.BigDecimal.pipe(Schema.filter((total) => {
    return !BigDecimal.isNegative(total)
  })),
  details: Schema.Struct({
    guestId: Guest.Id,
    value: Pricing.PriceValue
  })
})

export const BookingValidation = Schema.Struct({
  validatedBy: User.User.pipe(Schema.pick("id")),
  validatedAt: Schema.Date
})

export const Booking = Schema.Struct({
  id: Id,
  title: Schema.NonEmptyTrimmedString,
  createdAt: Schema.Date,
  doneBy: AgentId,
  guests: Schema.Array(Guest.Guest),
  flightId: FlightId,
  programId: ProgramId,
  validation: Schema.NullOr(BookingValidation),
  details: Details
})

export class BookingNotFound extends Schema.TaggedError<BookingNotFound>()("BookingNotFound", {
  id: Id
}) {}
