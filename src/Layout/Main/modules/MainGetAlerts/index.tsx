import React from 'react';
import { Text } from '@/Components';
import { Col, Row, Input, Form, Button } from 'antd';
import { Svg } from '@/Static';
import './styles.scss';

type Props = {};

export const MainGetAlerts = ({}: Props): React.ReactElement => {
  return (
    <Row className="main-get-alerts">
      <Col span={12}>
        <Row>
          <img src={Svg.AnalyticsProcessSecond} />
        </Row>
      </Col>

      <Col span={12}>
        <Row>
          Своевременная поставка товаров на склад поможет избежать недополученной выручки и заработать больше, не терять
          позиции в выдаче.
        </Row>

        <Form<FormData> layout="vertical" name="login-form">
          <Form.Item
            name="email"
            label={
              <Text weight={'medium'}>
                {'Введите свою почту и получайте оповещения о заканчивающихся товарах для "ХХХ ЮРЛИЦО"'}
              </Text>
            }
          />

          <Input className="login-input" />
          <Button>{'Получать алерты'}</Button>
        </Form>
      </Col>
    </Row>
  );
};
