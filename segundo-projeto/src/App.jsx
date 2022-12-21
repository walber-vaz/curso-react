import { Div } from './components/Div';
import { AppContext } from './contexts/AppContext';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
