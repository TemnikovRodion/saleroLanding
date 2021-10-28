import React from 'react';
import { Title, Text } from '@/Components';
import { Col, Row, Input, Button } from 'antd';
import { Svg } from '@/Static';
import { SearchOutlined } from '@ant-design/icons';
import './styles.scss';

type Props = {};

export const MainSearchForm = ({}: Props): React.ReactElement => {
  return (
    <Row justify={'space-between'}>
      <Col span={11}>
        <Row gutter={[0, 20]} className={'main-search-title'}>
          <Col span={24}>
            <Title level={1} weight={'bold'}>
              {'Сервис анализа и увеличения продаж на '}
              <span className={'purple-title'}>{'Wildberries'}</span>
            </Title>
          </Col>

          <Col span={18}>
            <Text color={'gray'}>
              Топовые продавцы в первую очередь следят за наличием товара на складе. Если товара нет в продаже - вы
              теряете деньги. Если товар был и внезапно кончился - вы теряете деньги. Остановите это!
            </Text>
          </Col>
        </Row>

        <Row gutter={[0, 15]}>
          <Col span={15}>
            <Title level={4}>
              {'Проверьте упущенную выручку по любому продавцу '}
              <span className={'purple-title'}>{'Wildberries'}</span>
            </Title>
          </Col>

          <Col span={24}>
            <div className={'search-button-group'}>
              <Input
                prefix={<SearchOutlined />}
                placeholder={'ОГРН, ссылка на продавца, название юр.лица'}
                className={'main-search-input'}
              />
              <Button>Найти</Button>
            </div>
          </Col>
        </Row>
      </Col>

      <Col>
        <img src={Svg.AnalyticsProcessFirst} />
      </Col>
    </Row>
  );
};
