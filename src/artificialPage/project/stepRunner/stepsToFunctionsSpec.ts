import expect from "expect"
import listSteps from "./listSteps"
import stepsToFunctions from "./stepsToFunctions"

describe("stepsToFunctions", () => {
  it("turns step objects into functions", async () => {
    const stepList = await listSteps()
    const fns = stepsToFunctions({
      stepList,
      steps: [{ command: "echo", args: ["hi"] }],
    })
    expect(fns).toEqual([expect.any(Function)])
    await fns[0]()
  })
})
