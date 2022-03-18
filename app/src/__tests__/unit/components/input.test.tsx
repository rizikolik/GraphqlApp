/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-node-access */
import { fireEvent, render } from "@testing-library/react";
import { ChangeEvent } from "react";
import Input from "../../../components/input/input";

describe("Button component", () => {
  const onChange = jest.fn();
  it("Renders html input element", () => {
    const { container } = render(<Input onChange={onChange} />);

    const input = container.firstChild;

    expect(input).toBeInTheDocument();
  });

  it("Triggers the OnChange event successfully", () => {
    let str = "";
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      str += e.target.value;
    };

    const { container } = render(<Input onChange={handleChange} />);

    const input = container.firstChild as HTMLInputElement;

    expect(input).toBeInTheDocument();
    if (input) {
      fireEvent.change(input, { target: { value: "hello" } });

      expect(input.value).toEqual("hello");
      expect(str).toEqual("hello");
    }
  });
});
