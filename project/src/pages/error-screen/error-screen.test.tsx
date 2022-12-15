import {render, screen} from '@testing-library/react';
import ErrorScreen from './error-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    render(
      <ErrorScreen
        message={'Сообщение'}
        onReload={jest.fn()}
      />
    );

    expect(screen.getByText(/Сообщение/i)).toBeInTheDocument();
  });
});
