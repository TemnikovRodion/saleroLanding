import React from 'react';
import { Title, Text } from '@/Components';
import { Col, Row, Select, Button } from 'antd';
import { Svg } from '@/Static';
import { useAutocompleteOptions } from './hooks/useAutocompleteOptions';
import { useCalculateForm } from './hooks/useCalculateForm';
import { SellerType } from '@/Types/SellerType';
import { SellerInfoType } from '@/Types/SellerInfoType';
import './styles.scss';
import { searchUtils } from '@/Utils/SearchUtils';

type Props = {
  seller?: SellerType;
  setSeller: (seller?: SellerType) => void;
  setSellerInfo: (sellerInfo: SellerInfoType) => void;
};

export const MainSearchForm = ({
  seller,
  setSeller,
  setSellerInfo
}: Props): React.ReactElement => {
  const { loadAutocompleteOptions, selectSeller, autocompleteOptions } = useAutocompleteOptions(setSeller);
  const { calculate, isLoading } = useCalculateForm(setSellerInfo, seller);

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
              <Select
                showSearch={true}
                showArrow={false}
                placeholder={'ОГРН, ссылка на продавца, название юр.лица'}
                options={autocompleteOptions}
                onSearch={(value) => { loadAutocompleteOptions(value); }}
                filterOption={(value, option) => {
                  if(option) {
                    const sellerInfo = option.seller as SellerType;

                    const searchExpressionType = searchUtils.getSearchExpressionType(value);
                    const formattedFilterExpression = searchUtils.getFormattedFilterExpression(value, searchExpressionType);

                    return sellerInfo.seller_name.toLowerCase().includes(formattedFilterExpression)
                      || (sellerInfo.ogrn?.toLowerCase().includes(formattedFilterExpression) ?? false)
                      || (sellerInfo.matched_product_id?.toString().toLowerCase().includes(formattedFilterExpression) ?? false)
                      || (sellerInfo.url.toLowerCase().includes(formattedFilterExpression));
                  } // if

                  return false;
                }}
                onChange={(value) => { selectSeller(String(value)); }}
                className={'main-search-input'}
              />

              <Button
                loading={isLoading}
                disabled={isLoading || !seller}
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
