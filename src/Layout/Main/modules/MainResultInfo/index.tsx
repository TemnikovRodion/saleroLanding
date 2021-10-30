import React from 'react';
import { Col, Row } from 'antd';
import { Title } from '@/Components';
import { SellerInfoType } from '@/Types/SellerInfoType';
import './styles.scss';

type Props = {
  sellerInfo?: SellerInfoType;
};

export const MainResultInfo = ({ sellerInfo }: Props): React.ReactElement => {
  const placeholder = 'заполните поле поиска';

  // TODO: сделать нормальные числа и расчет дня/дней

  return (
    <Row>
      <Col xl={22} xs={24}>
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <Title level={4}>{'Поиск выдал: '}</Title>
          </Col>

          <Col span={24} className={'main-result-block'}>
            <Title level={3} weight={'normal'}>
              {'Товаров: '}
              <span className={'blue-title'}>{sellerInfo?.quantity ?? placeholder}</span>
            </Title>

            <Title level={3} weight={'normal'}>
              {'Отсутствовало на складе: '}
              <span className={'blue-title'}>{sellerInfo?.out_of_stock ?? placeholder}</span>
            </Title>

            <Title level={3} weight={'normal'}>
              {'Недополученная выручка: '}
              <span className={'blue-title'}>{sellerInfo ? `${sellerInfo.lost_revenue} рублей` : placeholder}</span>
            </Title>

            <Title level={3} weight={'normal'}>
              {'Среднее время отсутствия: '}
              {sellerInfo ? (
                <>
                  <span className={'blue-title'}>{`${sellerInfo.average_time_away} дня`}</span>
                  {' (считаем: среднее за 30 дней по товарам, которые хотя бы 1 день не были на складе)'}
                </>
              ) : (
                <span className={'blue-title'}>{placeholder}</span>
              )}
            </Title>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
