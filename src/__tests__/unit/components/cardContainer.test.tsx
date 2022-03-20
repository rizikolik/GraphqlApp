import { render, screen } from "@testing-library/react";
import CardContainer from "../../../components/cardContainer/cardContainer";

describe("Button component", () => {
  it("Renders its children", () => {
    render(<CardContainer children={<div>test</div>} />);

    const divElement = screen.getByText("test");
    expect(divElement).toBeInTheDocument();
  });
});
