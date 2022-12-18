import { Component } from "react";

/* Componente funcional */
// function App() {
//   return (
//     <div>
//       <h1>Componente Funcional</h1>
//     </div>
//   );
// }

/* Componente Class */
class App extends Component {
  /* Estado do componente */
  // constructor(props) {
  //   super(props);
  //   // Fazer bind para que metodo posso recebe this da class
  //   this.handleClickP = this.handleClickP.bind(this);
  //   this.state = {
  //     name: "Walber Vaz da Silva",
  //     counter: 0,
  //   };
  // }

  // Class fields outra forma de usar state sem o constructor
  state = {
    name: "Walber Vaz da Silva",
    counter: 0,
  };

  // Metodo
  handleClickP = () => {
    // Mudar o estado
    // Sempre que mudar o estado o handler e chamado
    this.setState({ name: "w2k" });
  };

  // Segunda forma de usar this no metodo
  handleClickA = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { name, counter } = this.state;
    return (
      <div>
        <h1>Componente Class</h1>
        {/* Evento sintético onClick */}
        <p onClick={this.handleClickP}>
          {name} {counter}
        </p>
        <a
          href="https://google.com.br"
          target="_blank"
          onClick={this.handleClickA}
        >
          Este é o link
        </a>
      </div>
    );
  }
}

export default App;
