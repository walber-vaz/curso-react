import { node } from 'prop-types';
import React from 'react';

function Heading({ children }) {
  return <h1>{children}</h1>;
}

Heading.propTypes = {
  children: node.isRequired,
};

export default Heading;
