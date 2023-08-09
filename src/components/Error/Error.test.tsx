import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import Error from "./Error"

describe("Error Component", () => {
  it("renders the error message and 'Go back' button", () => {
    render(
      <Router>
        <Error />
      </Router>,
    )

    const errorMessage = screen.getByText(
      /Lorem ipsum dolor sit, amet consectetur adipisicing elit/i,
    )
    expect(errorMessage).toBeInTheDocument()

    const goBackButton = screen.getByText("Go back")
    expect(goBackButton).toBeInTheDocument()
  })

  it("navigates back to the home page when the 'Go back' button is clicked", () => {
    const mockNavigate = jest.fn()
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }))

    render(
      <Router>
        <Error />
      </Router>,
    )

    const goBackButton = screen.getByText("Go back")
    fireEvent.click(goBackButton)

    expect(mockNavigate).toHaveBeenCalledWith("/")
  })
})
