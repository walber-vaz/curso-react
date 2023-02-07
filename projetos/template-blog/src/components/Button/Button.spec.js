import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('Button', () => {
  it('renders Button component', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);
    const btn = screen.getByRole('button', { name: /load more/i });
    userEvent.click(btn);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
