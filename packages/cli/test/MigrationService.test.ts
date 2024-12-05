import { FileSystem, Path } from "@effect/platform"
import { NodeContext } from "@effect/platform-node"
import { SqlClient } from "@effect/sql"
import { describe, expect, it } from "@effect/vitest"
import { Effect, Fiber, Layer } from "effect"
import { Migrator } from "../src/Migrator.js"
import { PgContainer } from "./_testcontainer.js"

describe("MigrationService", () => {
  it("should pass", () => {
    expect(true).toBe(true)
  })
})
const EnvTest = Migrator.Default.pipe(
  Layer.provideMerge(PgContainer.ClientLive),
  Layer.provideMerge(PgContainer.Default),
  Layer.provideMerge(NodeContext.layer)
)
it.layer(EnvTest, { timeout: "1 minutes" })(
  "Migration",
  (it) => {
    // it.effect("test clean", () =>
    //   Effect.gen(function*() {
    //     const container = yield* PgContainer
    //     const migrator = yield* Migrator
    //     const db = yield* migrator.clean()
    //     expect(db).toEqual(container.getDatabase())
    //   }))
    it.effect("apply migration", () =>
      Effect.gen(function*() {
        const P = yield* Path.Path
        const Fs = yield* FileSystem.FileSystem
        const migrator = yield* Migrator
        const folder = P.join(import.meta.dirname, "../../../migrations")

        const files = yield* Fs.readDirectory(folder, { recursive: true })
        const fibers: Array<Fiber.RuntimeFiber<unknown, unknown>> = []
        for (const filePath of files) {
          if (/^[\d]{5,}.*\.sql$/.test(filePath)) {
            const absolutePath = P.join(folder, filePath)
            const fiber = yield* migrator.apply(absolutePath).pipe(
              Effect.forkScoped
            )
            fibers.push(fiber)
          }
        }
        yield* Fiber.joinAll(fibers)
        const sql = yield* SqlClient.SqlClient

        const users = yield* sql`INSERT INTO "users" (email, hashed_password) VALUES ('mohamed', 'mohamed') RETURNING *`
        expect(users.length).toBe(1)
      }).pipe(
        Effect.scoped
      ))
  }
)
