import React from 'react';
import { Footer, Header, Main } from './Layout';
import './App.scss';

type Props = {};

const App = ({ }: Props): React.ReactElement => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
