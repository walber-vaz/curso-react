import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonMorePosts from ".";

describe("<ButtonMorePosts />", () => {
  it("should render the button with the text", () => {
    render(<ButtonMorePosts />);

    const buttonMore = screen.getByText(/Proximo/i);
    expect(buttonMore).toBeInTheDocument();
  });

  it("should call function on buttonMore click", () => {
    const fn = jest.fn();
    render(<ButtonMorePosts onClick={fn} />);

    const buttonMore = screen.getByRole("button", { name: /Proximo/i });
    userEvent.click(buttonMore);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled is true", () => {
    render(<ButtonMorePosts disabled={true} />);

    const buttonMore = screen.getByText(/Proximo/i);
    expect(buttonMore).toBeDisabled();
  });

  it("should be disabled when disabled is false", () => {
    render(<ButtonMorePosts disabled={false} />);

    const buttonMore = screen.getByText(/Proximo/i);
    expect(buttonMore).not.toBeDisabled();
  });
});
