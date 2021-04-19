import expect from "expect"
import stepLister from "../stepLister/stepLister"
import stepsToFunctions from "./stepsToFunctions"

describe("stepsToFunctions", () => {
  it("turns step objects into functions", async () => {
    const stepList = await stepLister()
    const fns = stepsToFunctions({
      stepList,
      steps: [{ command: "echo", args: ["hi"] }],
    })
    expect(fns).toEqual([expect.any(Function)])
  })
})
