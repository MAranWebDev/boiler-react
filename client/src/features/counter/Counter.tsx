/* redux */
import { useAppSelector } from '../../config/redux/hooks';

/* hooks */
import { useCounter } from './useCounter';

interface CounterProps {
  value: number;
}

function Counter({ value }: CounterProps) {
  const { counter } = useAppSelector((state) => state.counter);
  const { handleIncrement, handleDecrement, handleReset } = useCounter(value);

  return (
    <div>
      <section>
        <h2>{counter}</h2>
      </section>

      <section>
        <button
          type="button"
          aria-label="btn-increment"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          aria-label="btn-decrement"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button type="button" aria-label="btn-reset" onClick={handleReset}>
          Reset
        </button>
      </section>
    </div>
  );
}

export { Counter };
