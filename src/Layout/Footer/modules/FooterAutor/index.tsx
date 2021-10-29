import React from 'react';
import { Text } from '@/Components';
import { Row, Col } from 'antd';
import './styles.scss';

type Props = {};

export const FooterAutor = ({}: Props): React.ReactElement => {
  return (
    <Row gutter={[0, 8]} justify={'space-between'} className="footer-autor">
      <Col xl={12} xs={24}>
        <Text>{`Сервис предоставляется © ${APP_NAME}`}</Text>
      </Col>

      <Col xl={12} xs={24}>
        <Text>{`Все права защищены, ${new Date().getFullYear()}`}</Text>
      </Col>
    </Row>
  );
};
