import React, { useCallback, useState } from 'react';
import { func } from 'prop-types';

const Button = React.memo(function Button({ handleClick }) {
  console.log('Componete Filho');
  return <button onClick={() => handleClick(10)}>+</button>;
});

Button.propTypes = {
  handleClick: func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = useCallback((num) => {
    setCounter((prevState) => prevState + num);
  }, []);

  console.log('Componete Pai');

  return (
    <div>
      <h1>Hooks - useEffect</h1>
      <h2>counter: {counter}</h2>
      <Button handleClick={handleClick}>+</Button>
    </div>
  );
}

export default App;
