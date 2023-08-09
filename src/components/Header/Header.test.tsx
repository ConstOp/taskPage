import React from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import Header from "./Header"

describe("Header component", () => {
  test("renders header with navigation links", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )
    const homeLink = getByText("Home")
    const profileLink = getByText("Profile")
    const favoriteLink = getByText("Favorite")
    const cartLink = getByText("Cart")

    expect(homeLink).toBeInTheDocument()
    expect(profileLink).toBeInTheDocument()
    expect(favoriteLink).toBeInTheDocument()
    expect(cartLink).toBeInTheDocument()
  })
})
