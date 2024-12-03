import { Schema } from "effect"
import { AgentId } from "./Agent.js"
import { FlightId } from "./Flight.js"
import { Guest } from "./Guest.js"
import { ProgramId } from "./Program.js"
import * as User from "./User.js"

export const BookingId = Schema.Number.pipe(Schema.brand("BookingId"))
export type BookingId = typeof BookingId.Type
export const BookingIdFromString = Schema.NumberFromString.pipe(
  Schema.compose(BookingId)
)
export const BookingStatus = Schema.Literal("waiting", "valid")
export type BookingStatus = typeof BookingStatus

export const BookingValidation = Schema.Struct({
  validatedBy: User.User.pipe(Schema.pick("id")),
  validatedAt: Schema.Date
})

export class Booking extends Schema.Class<Booking>("Booking")({
  id: BookingId,
  title: Schema.NonEmptyTrimmedString,
  status: BookingStatus,
  createdAt: Schema.Date,
  doneBy: AgentId,
  guests: Schema.Array(Guest),
  flightId: FlightId,
  programId: ProgramId,
  validation: Schema.NullOr(BookingValidation)
  //   cancelation: Schema.NullOr(BookingCancelation)
}) {}

export class BookingNotFound extends Schema.TaggedError<BookingNotFound>()("BookingNotFound", {
  id: BookingId
}) {}
