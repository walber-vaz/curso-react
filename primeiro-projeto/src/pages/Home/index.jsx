import { Component } from "react";
import ButtonMorePosts from "../../components/ButtonMorePosts";

import Posts from "../../components/Posts";
import { loadPosts } from "../../utils/fetchPosts";
import "./styles.css";

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
    allPosts: [],
    page: 0,
    postsPerPage: 6,
    // timeoutUpdate: null,
  };

  /* LifeCircle Methods */

  // Sera executado uma vez assim que componente e montado
  async componentDidMount() {
    // this.handleTimeOut();
    await this.fetchPost();
  }

  fetchPost = async () => {
    const { page, postsPerPage } = this.state;
    const postAndImage = await loadPosts();
    this.setState({
      posts: postAndImage.slice(page, postsPerPage),
      allPosts: postAndImage,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
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
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    return (
      <section className="container">
        <Posts posts={posts} />
        <div className="btn-container">
          <ButtonMorePosts
            loadPosts={this.loadMorePosts}
            disabled={noMorePosts}
          />
        </div>
      </section>
    );
  }
}

export default App;
