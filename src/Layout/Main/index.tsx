import React from 'react';
import { Row } from 'antd';
import { MainAlerts, MainResultInfo, MainSearchForm } from './modules';
import './styles.scss';

export const Main = (): React.ReactElement => {
  return (
    <main className={'main'}>
      <Row gutter={[0, 40]}>
        <MainSearchForm />
        <MainResultInfo />
        <MainAlerts />
      </Row>
    </main>
  );
};
