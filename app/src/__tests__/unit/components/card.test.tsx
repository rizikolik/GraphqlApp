import { render, screen } from "@testing-library/react";
import Card from "../../../components/card/card";

describe("Button component", () => {
  it("Renders its children", () => {
    render(<Card children={<div>testing card</div>} />);

    const divElement = screen.getByText("testing card");
    expect(divElement).toBeInTheDocument();
  });
});
