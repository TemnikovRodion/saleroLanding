import React from 'react';
import { Text } from '@/Components';
import './styles.scss';

type Props = {};

export const FooterAutor = ({}: Props): React.ReactElement => {
  return (
    <div className="footer-autor">
      <Text>{`Сервис предоставляется © ${APP_NAME}`}</Text>
      <Text>{`Все права защищены, ${new Date().getFullYear()}`}</Text>
    </div>
  );
};
