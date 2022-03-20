import { render, screen } from "@testing-library/react";
import Card from "../../../components/card/card";

describe("Button component", () => {
  it("Renders its children", () => {
    render(
      <Card>
        <div>testing card</div>
      </Card>
    );

    const divElement = screen.getByText("testing card");
    expect(divElement).toBeInTheDocument();
  });
});
