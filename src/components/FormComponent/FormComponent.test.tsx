import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import FormComponent from "./FormComponent"
import { store } from "../../app/store"
import jest from "jest"

jest.mock("../../app/hooks", () => ({
  useAppDispatch: jest.fn(),
}))

jest.mock("../../features/user/asyncActions", () => ({
  onSubmitNewUser: jest.fn(),
}))

jest.mock("../../features/user/userSlice", () => ({
  onSubmit: jest.fn(),
}))

describe("FormComponent", () => {
  it("renders form with input fields and a button", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormComponent />
        </MemoryRouter>
      </Provider>,
    )

    const nameInput = screen.getByLabelText("Name")
    const emailInput = screen.getByLabelText("Email")
    const checkbox = screen.getByLabelText(
      "I want to reveive updates via email",
    )
    const button = screen.getByRole("button", { name: "Start the Cource" })

    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(checkbox).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it("validates input and displays error messages for invalid input", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormComponent />
        </MemoryRouter>
      </Provider>,
    )

    const nameInput = screen.getByLabelText("Name")
    const emailInput = screen.getByLabelText("Email")
    const button = screen.getByRole("button", { name: "Start the Cource" })

    fireEvent.change(nameInput, { target: { value: "123" } })
    fireEvent.change(emailInput, { target: { value: "invalid_email" } })

    fireEvent.click(button)

    expect(screen.getByText("Please provide a name!")).toBeInTheDocument()
    expect(screen.getByText("Please provide a email!")).toBeInTheDocument()
  })

  it("submits form with valid input and navigates to /profile", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormComponent />
        </MemoryRouter>
      </Provider>,
    )

    const nameInput = screen.getByLabelText("Name")
    const emailInput = screen.getByLabelText("Email")
    const button = screen.getByRole("button", { name: "Start the Cource" })

    fireEvent.change(nameInput, { target: { value: "John Doe" } })
    fireEvent.change(emailInput, { target: { value: "john@example.com" } })

    fireEvent.click(button)

    // Expect that navigation to "/profile" occurred
    expect(screen.getByText("Profile Component")).toBeInTheDocument() // Assuming there's a "Profile Component" text in the Profile component.
  })
})
