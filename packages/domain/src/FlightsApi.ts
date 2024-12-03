import { HttpApi, HttpApiEndpoint, HttpApiGroup } from "@effect/platform"
import { Schema } from "effect"
import { Program, ProgramId, ProgramIdFromString, ProgramNotFound, ProgramStatus } from "./models/Program.js"

const nbr = Schema.optionalWith(Schema.compose(Schema.NumberFromString, Schema.NonNegative), {
  exact: true
})

export class FlightApiGroup extends HttpApiGroup.make("flights")
  .add(
    HttpApiEndpoint.get("getAllFlights", "/flights")
      .setUrlParams(Schema.Struct({
        offset: nbr,
        limit: nbr
      }))
      .addSuccess(
        Schema.Array(Program)
      )
  )
  .add(
    HttpApiEndpoint.get("getProgramById", "/programs/:id")
      .addSuccess(Program)
      .addError(ProgramNotFound, { status: 404 })
      .setPath(Schema.Struct({ id: ProgramIdFromString }))
  )
  .add(
    HttpApiEndpoint.post("createProgram", "/programs")
      .addSuccess(Schema.Struct({ id: ProgramId }))
      .setPayload(Program.pipe(Schema.omit("createdAt", "id", "status")))
  )
  .add(
    HttpApiEndpoint.patch("patchStatus", "/programs/:id")
      .addSuccess(Program)
      .addError(ProgramNotFound, { status: 404 })
      .setPayload(Schema.Struct({ status: ProgramStatus }))
      .setPath(Schema.Struct({ id: ProgramIdFromString }))
  )
  .add(
    HttpApiEndpoint.del("remove", "/programs/:id")
      .addSuccess(Schema.Void)
      .addError(ProgramNotFound, { status: 404 })
      .setPath(Schema.Struct({ id: ProgramIdFromString }))
  )
{}

export class ProgramApi extends HttpApi.empty.add(FlightApiGroup) {}
