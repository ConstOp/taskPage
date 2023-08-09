import React from "react"
import { render } from "@testing-library/react"
import Home from "./Home"

describe("Home component", () => {
  test("renders header, main title, form, and subsection", () => {
    const { getByText } = render(<Home />)

    const headerElement = getByText("Home")
    expect(headerElement).toBeInTheDocument()

    const mainTitleElement = getByText("Submit your details")
    expect(mainTitleElement).toBeInTheDocument()

    const formComponentElement = getByText("Form Component")
    expect(formComponentElement).toBeInTheDocument()

    const subsectionElement = getByText("Subsection")
    expect(subsectionElement).toBeInTheDocument()
  })
})
