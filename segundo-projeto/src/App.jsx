import { useContext, useState, createContext } from 'react';

const globalState = {
  title: 'React Hook = useContext',
  body: 'useContext',
  counter: 0,
};

const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
const Div = () => {
  return (
    <>
      <Heading />
      <Content />
    </>
  );
};

// eslint-disable-next-line react/prop-types
const Heading = () => {
  const {
    contextState: { title },
  } = useContext(GlobalContext);
  return <h1>{title}</h1>;
};

// eslint-disable-next-line react/prop-types
const Content = () => {
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = useContext(GlobalContext);
  return (
    <p
      onClick={() => setContextState({ ...contextState, counter: counter + 1 })}
    >
      {body} {counter}
    </p>
  );
};

function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
