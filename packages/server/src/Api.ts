import { HttpApiBuilder } from "@effect/platform"
import { ProgramApi } from "@template/domain/ProgramsApi"
import { TodosApi } from "@template/domain/TodosApi"
import { Effect, Layer } from "effect"
import { ProgramsRepository } from "./ProgramsRepository.js"
import { TodosRepository } from "./TodosRepository.js"

const TodosApiLive = HttpApiBuilder.group(TodosApi, "todos", (handlers) =>
  Effect.gen(function*() {
    const todos = yield* TodosRepository
    return handlers
      .handle("getAllTodos", () => todos.getAll)
      .handle("getTodoById", ({ path: { id } }) => todos.getById(id))
      .handle("createTodo", ({ payload: { text } }) => todos.create(text))
      .handle("completeTodo", ({ path: { id } }) => todos.complete(id))
      .handle("removeTodo", ({ path: { id } }) => todos.remove(id))
  }))

const ProgramApiLive = HttpApiBuilder.group(ProgramApi, "programs", (handlers) =>
  Effect.gen(function*() {
    const programs = yield* ProgramsRepository
    return handlers
      .handle("getAllPrograms", () => programs.getAll)
      .handle("getProgramById", ({ path: { id } }) => programs.getById(id))
      .handle("createProgram", ({ payload: { title } }) => programs.create(title))
      .handle("patchStatus", ({ path: { id }, payload: { status } }) => programs.patchStatus(id, status))
      .handle("remove", ({ path: { id } }) => programs.remove(id))
  }))

export const ApiLive = HttpApiBuilder.api(TodosApi).pipe(
  Layer.provide(TodosApiLive),
  Layer.provide(ProgramApiLive)
)
