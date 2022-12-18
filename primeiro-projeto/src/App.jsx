import { Component } from "react";
import PostCard from "./components/PostCard";

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
    this.fetchPost();
  }

  fetchPost = async () => {
    const postRes = fetch("https://jsonplaceholder.typicode.com/posts");
    const imageRes = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, image] = await Promise.all([postRes, imageRes]);

    const postsToJson = await posts.json();
    const imageToJson = await image.json();

    const postAndImage = postsToJson.map((post, index) => {
      return { ...post, cover: imageToJson[index].url };
    });

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
        <div className="posts">
          {posts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
      </section>
    );
  }
}

export default App;
