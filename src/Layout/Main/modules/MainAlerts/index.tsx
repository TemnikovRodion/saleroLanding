import React from 'react';
import { Title, Text } from '@/Components';
import { Button, Col, Input, Row } from 'antd';
import { Svg } from '@/Static';
import { SellerType } from '@/Types/SellerType';
import './styles.scss';

type Props = {
  seller?: SellerType;
  alertsBlockRef: React.RefObject<HTMLDivElement>;
};

export const MainAlerts = ({ seller, alertsBlockRef }: Props): React.ReactElement => {
  return (
    <Row align={'middle'} justify={'space-between'} className={'main-alerts-wrapper'}>
      <Col xl={10} xs={0}>
        <img style={{ width: '100%', height: 'auto' }} src={Svg.AnalyticsProcessSecond} />
      </Col>

      <Col xl={12} xs={24}>
        <Row gutter={[0, 27]}>
          <Col span={24}>
            <Text color={'gray'} align={'center'}>
              Своевременная поставка товаров на склад поможет избежать 
              <br />
              недополученной выручки и заработать больше, не терять позиции в выдаче.
            </Text>
          </Col>

          <Col span={24}>
            <div ref={alertsBlockRef} className={'main-alerts-form'}>
              <Title level={4} weight={'normal'}>
                {'Введите свою почту и получайте оповещения о заканчивающихся товарах для "ХХХ ЮРЛИЦО"'}
              </Title>

              <Input
                placeholder={'Введите почту'}
                className={'main-alerts-input'}
              />
              <Button disabled={!seller}>Получать алерты</Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
