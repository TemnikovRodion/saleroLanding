import React from 'react';
import { Col, Row } from 'antd';
import './styles.scss';

type Props = {};

export const MainResultInfo = ({}: Props): React.ReactElement => {
  return (
    <Col>
      <Row>Поиск выдал:</Row>

      <Row>
        Товаров: Отсутствовало на складе: Среднее время отсутствия: (считаем: среднее за 30 дней по товарам, которые
        хотя бы 1 день не были на складе) Недополученная выручка:
      </Row>
    </Col>
  );
};
