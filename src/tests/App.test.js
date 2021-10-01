import { render, screen } from '@testing-library/react';
import App from '../components/App';
describe('mi primer test', () =>{
  test('renders "Hola mundo"', () => {
    // Arrange
    render(<App />);
    // Act
    const divElement = screen.getByText('Hola mundo');
    // Assert
    expect(divElement).toBeInTheDocument();
  });
});
