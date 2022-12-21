import { useEffect, useMemo, useRef, useState } from 'react';
import { shape, number, string, func } from 'prop-types';

const Users = ({ post: { id, name, email, phone }, handleClick }) => {
  console.log('Filho Renderizou');
  return (
    <div key={id}>
      <h1 style={{ color: 'red' }} onClick={() => handleClick(name)}>
        {name}
      </h1>
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
  handleClick: func,
};

function App() {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  console.log('Pai renderizou');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => setUsers(res));
    }, 500);
  }, []);

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current);
  }, [value]);

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {useMemo(() => {
        return users.length <= 0 ? (
          <h1>Carregando...</h1>
        ) : (
          users.map((post) => (
            <Users key={post.id} post={post} handleClick={handleClick} />
          ))
        );
      }, [users])}
    </div>
  );
}

export default App;
