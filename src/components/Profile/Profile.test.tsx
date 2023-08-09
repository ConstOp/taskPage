import React from "react"
import { render } from "@testing-library/react"
import Profile from "./Profile"

jest.mock("../../app/hooks", () => ({
  useAppSelector: jest.fn((selector) =>
    selector({
      user: { newUser: { name: "John Doe", aboutMe: "Lorem ipsum" } },
    }),
  ),
}))

describe("Profile component", () => {
  test("renders user's name and aboutMe content", () => {
    const { getByText } = render(<Profile />)

    const userNameElement = getByText("John Doe")
    expect(userNameElement).toBeInTheDocument()

    const aboutMeElement = getByText("Lorem ipsum")
    expect(aboutMeElement).toBeInTheDocument()
  })
})
