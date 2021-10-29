import React from 'react';
import { Title, Text } from '@/Components';
import { Col, Row, Input, Button } from 'antd';
import { Svg } from '@/Static';
import './styles.scss';

type Props = {};

export const MainGetAlerts = ({}: Props): React.ReactElement => {
  return (
    <Row justify={'space-between'}>
      <Col>
        <img src={Svg.AnalyticsProcessSecond} />
      </Col>

      <Col span={11}>
        <Row className={'main-alerts-info'}>
          <Text color={'gray'}>
            Своевременная поставка товаров на склад поможет избежать недополученной выручки и заработать больше, не
            терять позиции в выдаче.
          </Text>
        </Row>

        <Col className={'1'}>
          <Title level={4} weight={'normal'}>
            {'Введите свою почту и получайте оповещения о заканчивающихся товарах для "ХХХ ЮРЛИЦО"'}
          </Title>
        </Col>
      </Col>
    </Row>
  );
};
