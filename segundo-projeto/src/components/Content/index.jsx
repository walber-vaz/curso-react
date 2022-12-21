import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const Content = () => {
  const {
    state: { body, counter },
    state,
    setState,
  } = useContext(GlobalContext);
  return (
    <p onClick={() => setState({ ...state, counter: counter + 1 })}>
      {body} {counter}
    </p>
  );
};
