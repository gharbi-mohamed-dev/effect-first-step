import { Schema } from "effect"
import { Email, Phone } from "./Shared.js"

export const AgencyId = Schema.Number.pipe(Schema.brand("AgencyId"))
export type AgencyId = typeof AgencyId.Type
export const AgencyIdFromString = Schema.NumberFromString.pipe(
  Schema.compose(AgencyId)
)
export class Agency extends Schema.Class<Agency>("Agency")({
  id: AgencyId,
  name: Schema.NonEmptyTrimmedString.pipe(Schema.compose(Schema.Lowercase)),
  phones: Schema.Array(Phone), // TODO: add max length safety
  emails: Schema.Array(Email) // TODO: add max length safety
}) {}
