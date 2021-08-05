import React from "react";
import { render, screen } from "@testing-library/react";
import { MyProfile } from "../../pages/MyProfile";
import { BrowserRouter as Router } from "react-router-dom";

describe("MyProfile", () => {
  it("should render correctly", () => {
    render(
      <Router>
        <MyProfile />;
      </Router>
    );
    expect(screen.getByText("Account Setting")).toBeInTheDocument();
    expect(screen.getByText("Update your informations")).toBeInTheDocument();
  });

  it("render 2 input components", () => {
    render(
      <Router>
        <MyProfile />;
      </Router>
    );
    expect(screen.getByTestId("input-email")).toBeInTheDocument();
    expect(screen.getByTestId("input-password")).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    render(
      <Router>
        <MyProfile />;
      </Router>
    );
    expect(screen.getByText("Update")).toBeInTheDocument();
  });
});
