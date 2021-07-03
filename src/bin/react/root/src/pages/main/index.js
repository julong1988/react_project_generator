module.exports = ({ typescript }) => `import React from 'react';

const Main${typescript ? ": React.SFC" : ""} = () => {
  return <div>Main Component</div>;
};

export default Main;
`;
