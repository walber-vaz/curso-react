import { render } from '@testing-library/react';
import PostCard from '.';

const mock = {
  title: 'Teste PostCard',
  body: 'Testando postcard',
  id: 1,
  cover: 'https://via.placeholder/150',
};

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    const { debug } = render(<PostCard {...mock} />);

    debug();
  });
});
