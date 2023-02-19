import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../src/config/redux/store';
import { Counter } from '../../../src/features/counter/Counter';

describe('tests in <Counter />', () => {
  const initialValue = 100;

  test('should match with the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Counter value={initialValue} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test('should show the initial value 100', () => {
    render(
      <Provider store={store}>
        <Counter value={initialValue} />
      </Provider>
    );
    expect(screen.getByText(initialValue)).toBeTruthy();
  });

  test('should increment in 1', () => {
    render(
      <Provider store={store}>
        <Counter value={initialValue} />
      </Provider>
    );
    const btnIncrement = screen.getByRole('button', { name: 'btn-increment' });
    fireEvent.click(btnIncrement);
    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test('should decrement in 1', () => {
    render(
      <Provider store={store}>
        <Counter value={initialValue} />
      </Provider>
    );
    const btnDecrement = screen.getByRole('button', { name: 'btn-decrement' });
    fireEvent.click(btnDecrement);
    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

  test('should reset to prop value', () => {
    render(
      <Provider store={store}>
        <Counter value={initialValue} />
      </Provider>
    );
    const btnIncrement = screen.getByRole('button', { name: 'btn-increment' });
    const btnReset = screen.getByRole('button', { name: 'btn-reset' });
    fireEvent.click(btnIncrement);
    fireEvent.click(btnIncrement);
    fireEvent.click(btnIncrement);
    fireEvent.click(btnReset);
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
