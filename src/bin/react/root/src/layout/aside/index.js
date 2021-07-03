module.exports = ({ typescript }) => `import React from 'react';
import Nav from '../nav';
import s from './style.styl';

const Aside${typescript ? ": React.SFC" : ""} = () => (
  <div className={s.aside}>
    <Nav />
  </div>
);

export default Aside;
`;
