import { useState, useEffect } from 'react';

const evenFn = () => {
  console.log('clicou');
};

function App() {
  const [counter, setCounter] = useState(0);

  // componentDidUpdate - executa toda vez que atualizar o component
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount - executa uma vez se não estiver nada no array de dependências
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  // componentDidMount - com dependência - executa toda vez que dependência mudar
  useEffect(() => {
    console.log('Comtador mudou para: ', counter);
  }, [counter]);

  // componentWillUnmount
  useEffect(() => {
    document.querySelector('h1').addEventListener('click', evenFn);

    // limpa a sujeira deixado pelo componente
    return () => {
      document.querySelector('h1').removeEventListener('click', evenFn);
    };
  });

  return (
    <div>
      <h1>Hooks - useEffect</h1>
      <h2>counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
