import React, { useState } from 'react';
import { Title, Text } from '@/Components';
import { Col, Row, AutoComplete, Button, Input } from 'antd';
import { Svg } from '@/Static';
import { SearchOutlined } from '@ant-design/icons';
import { useAutocompleteOptions } from './hooks/useAutocompleteOptions';
import './styles.scss';
import { useCalculateForm } from './hooks/useCalculateForm';

type Props = {};

export const MainSearchForm = ({}: Props): React.ReactElement => {
  const { searchValue, setSearchValue, autocompleteOptions } = useAutocompleteOptions();
  const { calculate, isLoading } = useCalculateForm(searchValue, autocompleteOptions);

  return (
    <Row justify={'space-between'}>
      <Col xl={12} xs={24}>
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
            <div className={'main-search-form'}>
              <AutoComplete
                value={searchValue}
                options={autocompleteOptions}
                onChange={(value) => {
                  setSearchValue(value);
                }}
                className={'main-search-input'}
              >
                <Input
                  prefix={<SearchOutlined />}
                  placeholder={'ОГРН, ссылка на продавца, название юр.лица'}
                  className={'main-search-input'}
                />
              </AutoComplete>

              <Button
                disabled={isLoading}
                onClick={calculate}              
              >
                Найти
              </Button>
            </div>
          </Col>
        </Row>
      </Col>

      <Col xl={10} xs={0}>
        <img style={{ width: '100%', height: 'auto' }} src={Svg.AnalyticsProcessFirst} />
      </Col>
    </Row>
  );
};
