module.exports = ({ typescript, pageNum }) => {
  let pageStr = ''
  for(let i=0;i<pageNum;i++){
    pageStr += `
    <NavLink to="/page${i+1}">page${i+1}</NavLink>`
  }
  return `import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.styl';

const Nav${typescript ? ": React.SFC" : ""} = () => (
  <nav className={s.nav}>
    <h3>내비게이션</h3>
    <NavLink to="/">메인</NavLink>${pageStr}
  </nav>
);

export default Nav;
`;
}