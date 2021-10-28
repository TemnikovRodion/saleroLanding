import React from 'react';
import { MainGetAlerts, MainResultInfo, MainSearchForm } from './modules';
import './styles.scss';


export const Main = (): React.ReactElement => {

  return (
    <main className={'main'}>
      <MainSearchForm />
      <MainResultInfo />
      <MainGetAlerts />
    </main>
  );
};
