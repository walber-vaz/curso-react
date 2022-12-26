import React, { useEffect, useRef, useState } from 'react';

const useMyHook = (callback, delay = 1000) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [increment, setIncrement] = useState(100);

  useMyHook(() => setCounter(counter + 1), delay);

  return (
    <>
      <div>Contador: {counter}</div>
      <div>Delay: {delay}</div>
      <button
        onClick={() => {
          setDelay((d) => d + increment);
        }}
      >
        +{increment}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - increment);
        }}
      >
        -{increment}
      </button>
      <input
        type="number"
        value={increment}
        onChange={(e) => setIncrement(parseInt(e.target.value))}
      />
    </>
  );
};

export default App;
