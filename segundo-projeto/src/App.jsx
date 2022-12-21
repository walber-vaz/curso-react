import { useEffect, useMemo, useState } from 'react';
import { shape, number, string } from 'prop-types';

const Users = ({ post: { id, name, email, phone } }) => {
  console.log('Filho Renderizou');
  return (
    <div key={id}>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

Users.propTypes = {
  post: shape({
    id: number,
    name: string,
    email: string,
    phone: string,
  }).isRequired,
};

function App() {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState('');

  console.log('Pai renderizou');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => setUsers(res));
    }, 5000);
  }, []);

  return (
    <div>
      <input
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {useMemo(() => {
        return users.length <= 0 ? (
          <h1>Carregando...</h1>
        ) : (
          users.map((post) => <Users key={post.id} post={post} />)
        );
      }, [users])}
    </div>
  );
}

export default App;
