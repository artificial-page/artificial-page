import glob from "fast-glob"

export async function stepLister(): Promise<string[]> {
  return (
    await glob(["../steps/*.js"], {
      cwd: __dirname,
      objectMode: true,
    })
  ).map((entry) => entry.name.replace(/Step\.js$/, ""))
}

export default stepLister
