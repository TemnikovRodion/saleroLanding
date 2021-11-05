import React from 'react';
import { Title, Text } from '@/Components';
import { Tooltip, Button, Col, Input, Row } from 'antd';
import { Svg } from '@/Static';
import { SellerType } from '@/Types/SellerType';
import { useAlertsSubscription } from './hooks/useAlertsSubscription';
import { AlertsModal } from './modules/AlertsModal';
import './styles.scss';

type Props = {
  seller?: SellerType;
  alertsBlockRef: React.RefObject<HTMLDivElement>;
};

export const MainAlerts = ({ seller, alertsBlockRef }: Props): React.ReactElement => {
  const { email, setEmail, subscribe, isLoading, modal, setModal } = useAlertsSubscription(seller);

  return (
    <>
      <AlertsModal
        title={modal.title}
        message={modal.message}
        visible={modal.visible}
        onClose={() => setModal((prev) => ({ ...prev, visible: false }))}
      />

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
                  {`Введите свою почту и получайте оповещения о заканчивающихся товарах для ${
                    seller?.seller_name ?? '"ХХХ ЮРЛИЦО"'
                  }`}
                </Title>

                <Input
                  value={email}
                  placeholder={'Введите почту'}
                  className={'main-alerts-input'}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Tooltip
                  trigger={'hover'}
                  title={
                    !seller
                      ? 'Пожалуйста, сначала введите ОГРН, ссылку на продавца или название юр.лица в поле выше!'
                      : ''
                  }
                  placement={'topRight'}
                >
                  <Button loading={isLoading} disabled={!seller || !email || isLoading} onClick={subscribe}>
                    Получать уведомления
                  </Button>
                </Tooltip>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
