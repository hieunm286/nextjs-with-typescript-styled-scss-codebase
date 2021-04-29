import { render, screen } from '@testing-library/react';
import Home from '../src/pages';

describe('Should render the app without crashing', () => {
  it('Renders the home page', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: 'Welcome to Next.js!' })
    ).toBeInTheDocument();
  });
});
