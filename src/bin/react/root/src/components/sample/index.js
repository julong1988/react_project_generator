const capitalize = (str) => str.replace(str[0], str[0].toUpperCase())

module.exports = ({ typescript, dirName }) => {
  const Components = capitalize(dirName);
  return `import React from 'react';
import s from './style.styl';

const ${Components}${typescript ? ': React.SFC' : ''} = () => <div>${Components} component</div>;

export default ${Components};
`
};
