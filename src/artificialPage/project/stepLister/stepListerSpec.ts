import expect from "expect"
import stepLister from "./stepLister"

describe("stepLister", () => {
  it("lists step names", async () => {
    const steps = await stepLister()
    expect(steps).toContain("command")
    expect(steps).toContain("function")
    expect(steps).toContain("vendor")
  })
})
