import { Schema } from "effect"
import { FlightId } from "./Flight.js"

export const ProgramId = Schema.Number.pipe(Schema.brand("ProgramId"))
export type ProgramId = typeof ProgramId.Type
export const ProgramIdFromString = Schema.NumberFromString.pipe(
  Schema.compose(ProgramId)
)
export const ProgramStatus = Schema.Literal("waiting", "valid")
export type ProgramStatus = typeof ProgramStatus

export class Program extends Schema.Class<Program>("Program")({
  id: ProgramId,
  title: Schema.NonEmptyTrimmedString,
  status: ProgramStatus,
  createdAt: Schema.DateFromSelf,
  flights: Schema.optionalWith(Schema.Array(FlightId), { exact: true, default: () => [] })
}) {}

export class ProgramNotFound extends Schema.TaggedError<ProgramNotFound>()("ProgramNotFound", {
  id: ProgramId
}) {}
