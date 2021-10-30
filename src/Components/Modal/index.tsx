import React from 'react';
import { Modal as ModalWindow } from 'antd';
import { Title } from '@/Components';
import './styles.scss';

type Props = {
  title: string;
  visible: boolean;
  width?: number;
  body?: JSX.Element;
  buttons?: JSX.Element;
  onCancel?: () => void;
};

export const Modal = ({ title, visible, width, body, onCancel }: Props): React.ReactElement => {
  return (
    <ModalWindow
      width={width}
      centered
      visible={visible}
      closable={Boolean(onCancel)}
      onCancel={onCancel}
      footer={false}
    >
      <div className={'modal-body'}>
        <div className={'modal-body-content'}>
          <Title level={4}>{title}</Title>
          {body}
        </div>
      </div>
    </ModalWindow>
  );
};
