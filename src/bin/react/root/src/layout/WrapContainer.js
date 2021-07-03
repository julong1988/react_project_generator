module.exports = ({ typescript }) => `import React, { Suspense } from 'react';
import Container from './container';
import Loading from '../components/loading';
${typescript ? `
interface IWC {
  (page: string, isPub?: boolean): React.SFC;
}
` : ''}
const WrapContainer${typescript ? ': IWC' : ''} = (page, isPub = false) => {
  const Page = React.lazy(() => import(${"`../pages/${page}`"}));
  const Component${typescript ? ': React.SFC' : ''} = () => (
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  );
  return () => {
    if (isPub) {
      return <Component />;
    }
    return (
      <Container>
        <Component />
      </Container>
    );
  };
};

export default WrapContainer;
`;
