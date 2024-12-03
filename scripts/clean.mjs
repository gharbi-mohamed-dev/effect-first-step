import * as Glob from "glob"
import * as Fs from "node:fs"

const dirs = [".", ...Glob.sync("packages/*/")]
dirs.forEach((pkg) => {
  const files = ["pnpm-lock.yaml", ".tsbuildinfo", "build", "dist", "coverage", "node_modules"]

  files.forEach((file) => {
    Fs.rmSync(`${pkg}/${file}`, { recursive: true, force: true }, () => {})
  })
})
