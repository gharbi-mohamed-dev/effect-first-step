import { Program, ProgramId, ProgramNotFound, type ProgramStatus } from "@template/domain/models/Program"
import type { Schema } from "effect"
import { Effect, HashMap, Ref } from "effect"

export class ProgramsRepository extends Effect.Service<ProgramsRepository>()("api/ProgramsRepository", {
  effect: Effect.gen(function*() {
    const programs = yield* Ref.make(HashMap.empty<ProgramId, Program>())

    const getAll = Ref.get(programs).pipe(
      Effect.map((programs) => Array.from(HashMap.values(programs)))
    )

    function getById(id: ProgramId): Effect.Effect<Program, ProgramNotFound> {
      return Ref.get(programs).pipe(
        Effect.flatMap(HashMap.get(id)),
        Effect.catchTag("NoSuchElementException", () => new ProgramNotFound({ id }))
      )
    }

    function create(title: string): Effect.Effect<Program> {
      return Ref.modify(programs, (map) => {
        const id = ProgramId.make(HashMap.reduce(map, 0, (max, todo) => todo.id > max ? todo.id : max))
        const program = new Program({ id, title, status: "waiting", createdAt: new Date() })
        return [program, HashMap.set(map, id, program)]
      })
    }

    function patchStatus(
      id: ProgramId,
      status: Schema.Schema.Type<ProgramStatus>
    ): Effect.Effect<Program, ProgramNotFound> {
      return getById(id).pipe(
        Effect.map((program) => new Program({ ...program, status })),
        Effect.tap((program) => Ref.update(programs, HashMap.set(program.id, program)))
      )
    }

    function remove(id: ProgramId): Effect.Effect<void, ProgramNotFound> {
      return getById(id).pipe(
        Effect.flatMap((program) => Ref.update(programs, HashMap.remove(program.id)))
      )
    }

    return {
      getAll,
      getById,
      create,
      patchStatus,
      remove
    } as const
  })
}) {}
