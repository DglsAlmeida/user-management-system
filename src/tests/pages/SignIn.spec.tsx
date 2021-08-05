import React from "react";
import { render, screen } from "@testing-library/react";
import { SignIn } from "../../pages/SignIn";

describe("SigIn", () => {
  it("should render correctly", () => {
    render(<SignIn />);
    expect(screen.getByText("Faça seu Login")).toBeInTheDocument();
  });

  it("render 2 input components", () => {
    render(<SignIn />);
    expect(screen.getByTestId("input-email")).toBeInTheDocument();
    expect(screen.getByTestId("input-password")).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    render(<SignIn />);
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });
});
