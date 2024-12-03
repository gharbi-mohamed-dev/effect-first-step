import { DevTools } from "@effect/experimental"
import { HttpApiBuilder, HttpMiddleware } from "@effect/platform"
import { NodeHttpServer, NodeRuntime, NodeSocket } from "@effect/platform-node"
import { Effect, Layer } from "effect"
import { createServer } from "node:http"
import { ApiLive } from "./Api.js"
import { ProgramsRepository } from "./ProgramsRepository.js"
import { TodosRepository } from "./TodosRepository.js"

const HttpLive = HttpApiBuilder.serve(HttpMiddleware.logger).pipe(
  Layer.provide(ApiLive),
  Layer.provide(ProgramsRepository.Default),
  Layer.provide(TodosRepository.Default),
  Layer.provide(NodeHttpServer.layer(createServer, { port: 3000 }))
)
const DevToolsLive = DevTools.layerWebSocket().pipe(
  Layer.provide(NodeSocket.layerWebSocketConstructor)
)

Layer.launch(HttpLive).pipe(
  Effect.provide(DevToolsLive),
  NodeRuntime.runMain
)
