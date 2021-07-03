module.exports = ({ typescript, antd }) => `import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Router from './Router';
${antd ? `import 'antd/dist/antd.less';` : ""}
import store from './store';

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('app')${typescript ? " as HTMLElement" : ""},
);
`;
