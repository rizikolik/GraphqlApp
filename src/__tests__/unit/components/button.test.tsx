import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../../../components/button/button";

describe("Button component", () => {
  it("Renders props that has given to it", () => {
    const onClick = jest.fn();

    render(<Button label="Test" onClick={onClick} />);

    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
