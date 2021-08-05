import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../../components/Header";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header", () => {
  it("should render correctly", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByText("My Profile")).toBeInTheDocument();
    expect(screen.getByText("Users List")).toBeInTheDocument();
  });

  it("Should link must be correct", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const myProfileLink = screen.getByRole("link", { name: "My Profile" });
    const usersListLink = screen.getByRole("link", { name: "Users List" });

    expect(myProfileLink).toHaveAttribute("href", "/my-profile");
    expect(usersListLink).toHaveAttribute("href", "/users-list");
  });
});
