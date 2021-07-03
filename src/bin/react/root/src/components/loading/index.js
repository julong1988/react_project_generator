module.exports = ({ typescript }) => `import React from 'react';
import s from './style.styl';

const Loading${typescript ? ': React.SFC' : ''} = () => <div className={s.loading}>loading</div>;

export default Loading;
`;
