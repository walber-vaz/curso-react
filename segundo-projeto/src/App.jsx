import { useReducer } from 'react';

const globalState = {
  title: 'Hook useReducer',
  body: 'useReducer',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda com ', action.payload);
      return { ...state, title: 'Mudou', body: action.payload };
    }
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  console.log('NENHUMA ACTION ENCOTRADA');
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { title, body, couter } = state;

  return (
    <div>
      <h1>
        {title} {couter}
      </h1>
      <p>{body}</p>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-br'),
          })
        }
      >
        Muda nome
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>
        Inverter nome
      </button>
      <button onClick={() => dispatch({ type: '' })}>sem ação</button>
    </div>
  );
}

export default App;
