import React from 'react';
import { Modal } from '@/Components';
import { Text } from '@/Components';
import { Button } from 'antd';
import './styles.scss';

type Props = {
  title: string;
  message: string;
  visible: boolean;
  onClose: () => void;
};

const AlertsModalComponent = ({ title, message, visible, onClose }: Props): React.ReactElement => {
  return (
    <Modal
      title={title}
      visible={visible}
      body={
        <div className={'modal-subscription'}>
          <Text>{message}</Text>
        </div>
      }
      onCancel={onClose}
      buttons={
        <Button onClick={onClose} className={'ok-button'}>Ок</Button>
      }
    />
  );
};

export const AlertsModal = React.memo(AlertsModalComponent);
