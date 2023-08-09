// Subsection.test.js
import React from "react"
import { render, waitFor } from "@testing-library/react"
import { Subsection } from "./Subsection"

jest.mock("../../app/hooks", () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}))

describe("Subsection component", () => {
  test("renders user's name and aboutMe content", async () => {
    const mockUser = {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar.jpg",
      aboutMe: "Lorem ipsum",
    }
    useAppSelector.mockReturnValue(mockUser)

    const { getByText, getByAltText } = render(<Subsection />)

    await waitFor(() => expect(useAppSelector).toHaveBeenCalled())

    const userNameElement = getByText("John Doe")
    const aboutMeElement = getByText("Lorem ipsum")
    const avatarElement = getByAltText("John Doe")

    expect(userNameElement).toBeInTheDocument()
    expect(aboutMeElement).toBeInTheDocument()
    expect(avatarElement).toBeInTheDocument()
    expect(avatarElement.src).toBe("https://example.com/avatar.jpg")
  })
})
