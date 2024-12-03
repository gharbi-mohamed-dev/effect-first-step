import { describe, expect, it } from "@effect/vitest"
import { DateTime, Effect, Option, Schema } from "effect"
import { RuntimeException } from "effect/Cause"
import { FlightSegment } from "../src/models/Flight.js"

function unwraOption<T>(opt: Option.Option<T>): T {
  if (Option.isSome(opt)) {
    return opt.value
  } else {
    throw new RuntimeException(`cannot unwrap an option that is none`)
  }
}

describe("Flight manipulation test", () => {
  it.effect("one segment", () =>
    Effect.gen(function*() {
      const res = unwraOption(DateTime.makeZoned(new Date(), { timeZone: "Africa/Algiers" }))
      const segment = {
        departureAt: res.pipe(
          DateTime.formatIso
        ),
        arrivalAt: res.pipe(
          DateTime.add({ minutes: 10 }),
          DateTime.formatIso
        ),
        from: "alg" as const,
        to: "jed" as const
      }
      yield* Effect.logInfo({ res })
      const valid = yield* Schema.decode(FlightSegment)(segment)

      expect(valid.from).toBe("alg")
    }))
})
