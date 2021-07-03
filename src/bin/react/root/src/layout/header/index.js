module.exports = ({ typescript }) => `import React from 'react';
import s from './style.styl';

const Header${typescript ? ": React.SFC" : ""} = () => <header className={s.header}>header</header>;

export default Header;
`;
