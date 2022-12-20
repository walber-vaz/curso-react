import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import Heading from '.';

it('should render Heading with text Hello, World!', () => {
  expect(1).toBe(1);
});

it('should render Heading with text Hello, World!', () => {
  render(<Heading>Hello, World!</Heading>);
  const heading = screen.getByRole('heading', {
    nome: /Hello, World!/i,
  });
  expect(heading).toBeInTheDocument();
  screen.debug();
});
