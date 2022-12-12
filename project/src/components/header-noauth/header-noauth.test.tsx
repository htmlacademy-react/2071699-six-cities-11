import {render, screen} from '@testing-library/react';
import HeaderNoAuth from './header-noauth';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';

describe('Component: HeaderNoAuth', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <HistoryRouter history={history}>
        <HeaderNoAuth />
      </HistoryRouter>,
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
