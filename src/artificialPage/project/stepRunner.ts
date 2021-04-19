import stepLister from "./stepLister/stepLister"
import stepsToFunctions from "./stepRunner/stepsToFunctions"

export async function stepRunner(
  steps: Record<string, any>[]
): Promise<void> {
  const stepList = await stepLister()

  const functions = stepsToFunctions({
    steps,
    stepList,
  })

  for (const fn of functions) {
    await fn()
  }
}

export default stepRunner
