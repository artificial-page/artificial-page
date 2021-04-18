import listSteps from "./stepRunner/listSteps"
import stepsToFunctions from "./stepRunner/stepsToFunctions"

export async function stepRunner(
  steps: Record<string, any>[]
): Promise<void> {
  const stepList = await listSteps()

  for (const step of steps) {
    if (step.async) {
      await Promise.all(
        stepsToFunctions({
          steps: step.async,
          stepList,
        }).map((fn) => fn())
      )
    } else {
      const functions = stepsToFunctions({
        steps: step.async,
        stepList,
      })
      for (const fn of functions) {
        await fn()
      }
    }
  }
}

export default stepRunner
