import path from "path"

export function stepsToFunctions({
  steps,
  stepList,
}: {
  steps: Record<string, any>[]
  stepList: string[]
}): (() => any)[] {
  return steps.map((step) => {
    const stepType = stepList.find(
      (s) => step[s] !== undefined
    )

    if (!stepType) {
      console.error(
        "Could not find step type:",
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
