import { render, screen } from '@testing-library/react';
import Home from '.';

describe('Home', () => {
  it('renders Home component', () => {
    render(<Home />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
