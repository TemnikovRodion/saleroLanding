import React from 'react';
import { Text } from '@/Components';
import { Row, Col } from 'antd';
import './styles.scss';

type Props = {};

export const FooterAuthor = ({}: Props): React.ReactElement => {
  return (
    <div className="footer-author">
        <Text>{`Сервис предоставляется © ${APP_NAME}`}</Text>
        <Text>{`Все права защищены, ${new Date().getFullYear()}`}</Text>
    </div>
  );
};
