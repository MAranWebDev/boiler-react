/* react */
import { useEffect } from 'react';

/* redux */
import { useAppDispatch } from '../../config/redux/hooks';
import { increment, decrement, reset } from './counterSlice';

const useCounter = (initialValue: number) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(reset(initialValue));
  }, [dispatch, initialValue]);

  const handleIncrement = () => dispatch(increment(1));
  const handleDecrement = () => dispatch(decrement(1));
  const handleReset = () => dispatch(reset(initialValue));

  return { handleIncrement, handleDecrement, handleReset };
};

export { useCounter };
