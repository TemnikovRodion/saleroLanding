import React from 'react';
import { Col, Row } from 'antd';
import { Title } from '@/Components';
import './styles.scss';

type Props = {};

export const MainResultInfo = ({}: Props): React.ReactElement => {
  return (
    <Row>
      <Col xl={22} xs={24}>
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <Title level={4}>{'Поиск выдал: '}</Title>
          </Col>

          <Col span={24} className={'main-result-block'}>
            <Title level={3} weight={'normal'}>
              {'Товаров:  '}
              <span className={'blue-title'}>{'260'}</span>
            </Title>

            <Title level={3} weight={'normal'}>
              {'Отсутствовало на складе:  '}
              <span className={'blue-title'}>{'35'}</span>
            </Title>

            <Title level={3} weight={'normal'}>
              {'Недополученная выручка:  '}
              <span className={'blue-title'}>{'280 000 рублей'}</span>
            </Title>

            <Title level={3} weight={'normal'}>
              {'Среднее время отсутствия:  '}
              <span className={'blue-title'}>{'4 дня '}</span>
              {'(считаем: среднее за 30 дней по товарам, которые хотя бы 1 день не были на складе)'}
            </Title>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
