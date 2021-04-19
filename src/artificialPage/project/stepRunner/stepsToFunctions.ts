import path from "path"

export function stepsToFunctions({
  steps,
  stepList,
}: {
  steps: Record<string, any>[]
  stepList: string[]
}): (() => Promise<any>)[] {
  return steps.map((step) => {
    if (step.async) {
      return async () => {
        return await Promise.all(
          stepsToFunctions({
            steps: step.async,
            stepList,
          }).map((fn) => fn())
        )
      }
    }

    if (Array.isArray(step)) {
      return async () => {
        const fns = stepsToFunctions({
          steps: step,
          stepList,
        })
        for (const fn of fns) {
          await fn()
        }
      }
    }

    const stepType = stepList.find(
      (s) => step[s] !== undefined
    )

    if (!stepType) {
      console.error(
        "Could not find type for step:",
        JSON.stringify(step)
      )

      return
    }

    const stepPath = path.join(
      __dirname,
      `../steps/${stepType}Step.js`
    )

    return async () => {
      const { default: fn } = await import(stepPath)
      return await fn(step)
    }
  })
}

export default stepsToFunctions
