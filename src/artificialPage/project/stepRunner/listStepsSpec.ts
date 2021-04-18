import expect from "expect"
import listSteps from "./listSteps"

describe("listSteps", () => {
  it("lists step names", async () => {
    const steps = await listSteps()
    expect(steps).toContain("command")
    expect(steps).toContain("function")
    expect(steps).toContain("vendor")
  })
})
