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
    name: "Contador: ",
    counter: 0,
    posts: [
      {
        id: 1,
        title: "O titulo 1",
        body: "O body 1",
      },
      {
        id: 2,
        title: "O titulo 2",
        body: "O body 2",
      },
      {
        id: 3,
        title: "O titulo 3",
        body: "O body 3",
      },
    ],
    timeoutUpdate: null,
  };

  /* LifeCircle Methods */

  // Sera executado uma vez assim que componente e montado
  componentDidMount() {
    this.handleTimeOut();
  }

  componentDidUpdate() {
    this.handleTimeOut();
  }

  // Limpando 'lixo' do componente
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeOut = () => {
    const { posts, counter } = this.state;
    posts[0].title = "O titulo mundou!";
    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000);
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
    const { name, counter, posts } = this.state;
    return (
      <div>
        <h1>Componente Class</h1>
        {/* Evento sintético onClick */}
        <h1 onClick={this.handleClickP}>
          {name} {counter}
        </h1>
        <a
          href="https://google.com.br"
          target="_blank"
          onClick={this.handleClickA}
        >
          Este é o link
        </a>
        <div>
          {posts.map(({ id, title, body }) => (
            <article key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
