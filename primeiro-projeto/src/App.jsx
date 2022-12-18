import { Component } from "react";

import Posts from "./components/Posts";
import { loadPosts } from "./utils/fetchPosts";
import "./App.css";

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
    // name: "Contador: ",
    // counter: 0,
    posts: [],
    // timeoutUpdate: null,
  };

  /* LifeCircle Methods */

  // Sera executado uma vez assim que componente e montado
  async componentDidMount() {
    // this.handleTimeOut();
    await this.fetchPost();
  }

  fetchPost = async () => {
    const postAndImage = await loadPosts();
    this.setState({ posts: postAndImage });
  };

  // componentDidUpdate() {
  //   // this.handleTimeOut();
  // }

  // // Limpando 'lixo' do componente
  // componentWillUnmount() {
  //   // clearTimeout(this.timeoutUpdate);
  // }

  // handleTimeOut = () => {
  //   const { posts, counter } = this.state;
  //   posts[0].title = "O titulo mundou!";
  //   this.timeoutUpdate = setTimeout(() => {
  //     this.setState({ posts, counter: counter + 1 });
  //   }, 1000);
  // };

  // Metodo
  // handleClickP = () => {
  //   // Mudar o estado
  //   // Sempre que mudar o estado o handler e chamado
  //   this.setState({ name: "w2k" });
  // };

  // Segunda forma de usar this no metodo
  // handleClickA = (event) => {
  //   event.preventDefault();
  //   const { counter } = this.state;
  //   this.setState({ counter: counter + 1 });
  // };

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}

export default App;
