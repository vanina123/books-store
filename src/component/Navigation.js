import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/Categories">Categories</Link>
      </li>
      <li>
        <Link to="/">Books</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
