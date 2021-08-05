import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "../../components/Input";

describe("Input", () => {
  it("should render correctly", () => {
    const props = {
      name: "fake-input",
    };

    render(<Input {...props} />);

    expect(screen.getByTestId("input-element")).toBeInTheDocument();
  });
});
