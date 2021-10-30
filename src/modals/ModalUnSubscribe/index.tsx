import React from 'react';
import { Modal } from '@/Components';
import { Text } from '@/Components';
import './styles.scss';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const ModalUnSubscribe = ({ visible, onClose }: Props): React.ReactElement => {
  return (
    <Modal
      title="Ошибка"
      visible={visible}
      body={
        <div className={'modal-unsubscription'}>
          <Text>{'Пожалуйста, введите ОГРН или название юр.лица'}</Text>
        </div>
      }
      onCancel={onClose}
    />
  );
};

export const UnSubscribeModal = React.memo(ModalUnSubscribe);
