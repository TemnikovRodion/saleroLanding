import React from 'react';
import { Row } from 'antd';
import { MainGetAlerts, MainResultInfo, MainSearchForm } from './modules';
import './styles.scss';

export const Main = (): React.ReactElement => {
  return (
    <main className={'main'}>
      <Row gutter={[0, 20]}>
        <MainSearchForm />
        <MainResultInfo />
        <MainGetAlerts />
      </Row>
    </main>
  );
};
