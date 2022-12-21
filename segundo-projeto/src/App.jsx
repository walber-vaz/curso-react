import { useState } from 'react';

function App() {
  const [trocar, setTrocar] = useState('Ola');

  const handleClick = () => {
    setTrocar('w2k');
  };

  return (
    <div>
      <h1>{trocar}</h1>
      <button type="button" onClick={handleClick}>
        Trocar
      </button>
    </div>
  );
}

export default App;
