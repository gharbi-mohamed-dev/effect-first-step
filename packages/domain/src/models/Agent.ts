import { Schema } from "effect"
import { AgencyId } from "./Agency.js"
import { Email, Gender, Phone } from "./Shared.js"

export const AgentId = Schema.Number.pipe(Schema.brand("AgentId"))
export type AgentId = typeof AgentId.Type
export const AgentIdFromString = Schema.NumberFromString.pipe(
  Schema.compose(AgentId)
)
export class Agent extends Schema.Class<Agent>("Agent")({
  id: AgentId,
  agencyId: AgencyId,
  firstName: Schema.NonEmptyTrimmedString.pipe(Schema.compose(Schema.Lowercase)),
  lastName: Schema.NonEmptyTrimmedString.pipe(Schema.compose(Schema.Lowercase)),
  phones: Schema.Array(Phone), // TODO: add max length safety
  emails: Schema.Array(Email), // TODO: add max length safety
  hashedPassword: Schema.Redacted(Schema.String),
  gender: Schema.optionalWith(Gender, { exact: true, nullable: true })
}) {}
