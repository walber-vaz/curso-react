import { createContext, useContext, useReducer } from 'react';
import { node } from 'prop-types';

// data.js
const globalState = {
  title: 'Hook useReducer',
  body: 'useReducer',
  counter: 0,
};

// reducer.js
export const reducer = (state, action) => {
  return { ...state };
};

// appContext.js
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  return <Context.Provider value={{ state }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: node,
};

// Heading/index.js
export const Heading = () => {
  const context = useContext(Context);
  return <h1>{context.state.title}</h1>;
};

// App.jsx
function App() {
  return (
    <AppContext>
      <div>
        <Heading />
      </div>
    </AppContext>
  );
}

export default App;
