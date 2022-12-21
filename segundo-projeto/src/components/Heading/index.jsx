import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const Heading = () => {
  const {
    state: { title },
  } = useContext(GlobalContext);
  return <h1>{title}</h1>;
};
