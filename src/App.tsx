import React, { useCallback } from 'react';
import { Footer, Header, Main } from './Layout';
import './App.scss';

type Props = {};

const App = ({ }: Props): React.ReactElement => {
  const alertsBlockRef = React.createRef<HTMLDivElement>();

  const scrollToAlerts = useCallback(() => {
    alertsBlockRef.current?.scrollIntoView();
  }, [alertsBlockRef])

  return (
    <>
      <Header scrollToAlerts={scrollToAlerts} />
      <Main alertsBlockRef={alertsBlockRef} />
      <Footer />
    </>
  );
};

export default App;
