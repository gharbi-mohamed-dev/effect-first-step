// #!/usr/bin/env node

// import { NodeContext, NodeHttpClient, NodeRuntime } from "@effect/platform-node"
// import { Effect, Layer } from "effect"
// import { PgContainer } from "../test/testcontainer.js"
// import { cli } from "./Cli.js"
// import { MigrationService } from "./MigrationService.js"

// const MainLive = MigrationService.Live.pipe(
//   Layer.provide(PgContainer.ClientLive),
//   Layer.provide(NodeHttpClient.layerUndici),
//   Layer.merge(NodeContext.layer)
// )

// cli(process.argv).pipe(
//   Effect.provide(MainLive),
//   NodeRuntime.runMain
// )
