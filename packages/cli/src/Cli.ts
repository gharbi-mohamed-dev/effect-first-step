// import { Args, Command } from "@effect/cli"
// import { Effect } from "effect"
// import { MigrationService } from "./MigrationService.js"

// // const migrationFolderArg = Args.text({ name: "path" }).pipe(
// //   Args.withDescription("the path to the migration folder")
// // )
// const connectionUriArg = Args.text({ name: "uri" }).pipe(
//   Args.withDescription("connection string")
// )

// // const pushMigration = Command.make("push", { migrationFolder: migrationFolderArg, connectionUri: connectionUriArg })
// //   .pipe(
// //     Command.withDescription("push the schema to the databse"),
// //     Command.withHandler(({ connectionUri, migrationFolder }) =>
// //       MigrationService.pipe(
// //         Effect.flatMap((srv) => srv.push({ path: migrationFolder, uri: connectionUri }))
// //       )
// //     )
// //   )

// const cleanDb = Command.make("clean", { connectionUri: connectionUriArg }).pipe(
//   Command.withDescription("clean the database from all migrations"),
//   Command.withHandler(({ connectionUri }) =>
//     MigrationService.pipe(
//       Effect.flatMap((srv) => srv.clean(connectionUri))
//     )
//   )
// )

// const migrateSubCmd = Command.make("migrate").pipe(
//   Command.withSubcommands([cleanDb])
// )

// export const cli = Command.run(migrateSubCmd, {
//   name: "Dev CLI",
//   version: "0.0.1"
// })
