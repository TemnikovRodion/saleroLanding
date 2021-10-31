import React from 'react';
import { Modal } from '@/Components';
import { Text } from '@/Components';
import './styles.scss';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const ModalSubscribe = ({ visible, onClose }: Props): React.ReactElement => {
  return (
    <Modal
      title="Подписка оформлена"
      visible={visible}
      body={
        <div className={'modal-subscription'}>
          <Text>{'Вы подписались на получение алертов!'}</Text>
        </div>
      }
      onCancel={onClose}
    />
  );
};

export const SubscribeModal = React.memo(ModalSubscribe);
