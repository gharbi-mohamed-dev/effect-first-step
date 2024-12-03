import { FileSystem } from "@effect/platform"
import { SqlClient } from "@effect/sql"
import { Effect, Schema } from "effect"

export class Migrator extends Effect.Service<Migrator>()("cli/Migrator", {
  accessors: true,
  effect: Effect.gen(function*() {
    const sql = yield* SqlClient.SqlClient
    const fs = yield* FileSystem.FileSystem
    function clean() {
      return Effect.gen(function*() {
        const [res] = yield* sql`SELECT current_database() as "dbName"`
        const { dbName } = yield* Schema.decodeUnknown(Schema.Struct({
          dbName: Schema.NonEmptyTrimmedString
        }))(res)
        yield* sql.withTransaction(Effect.gen(function*() {
          yield* sql`DROP DATABASE ${sql(dbName)}`
          yield* sql`CREATE DATABASE ${sql(dbName)}`
        }))
        return dbName
      })
    }

    function apply(path: string) {
      return Effect.gen(function*() {
        const content = yield* fs.readFileString(path)
        yield* sql.unsafe(content)
      })
    }

    return {
      clean,
      apply
    } as const
  })
}) {}
