import React, { useState } from 'react';
import { Row } from 'antd';
import { MainAlerts, MainResultInfo, MainSearchForm } from './modules';
import { SellerInfoType } from '@/Types/SellerInfoType';
import { SellerType } from '@/Types/SellerType';
import './styles.scss';

export const Main = (): React.ReactElement => {
  const [seller, setSeller] = useState<SellerType>();
  const [sellerInfo, setSellerInfo] = useState<SellerInfoType>();

  return (
    <main className={'main'}>
      <Row gutter={[0, 40]}>
        <MainSearchForm seller={seller} setSeller={setSeller} setSellerInfo={setSellerInfo} />
        <MainResultInfo sellerInfo={sellerInfo} />
        <MainAlerts />
      </Row>
    </main>
  );
};
