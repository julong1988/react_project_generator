module.exports = ({ typescript, pageNum }) => {
  let pageStr = ''
  for(let i=0;i<pageNum;i++){
    pageStr += `
      <Route path="/page${i+1}" component={WrapContainer('page${i+1}')} />`
  }
  return `import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import WrapContainer from './layout/WrapContainer';

const Main = WrapContainer('main');

const Router${typescript ? ': React.SFC' : ''} = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} exact />${pageStr}
    </Switch>
  </BrowserRouter>
);

export default Router;
`;
}
