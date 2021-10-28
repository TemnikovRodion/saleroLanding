import { Link } from '@/Components';
import React from 'react';
import './styles.scss';

type Props = {};

export const FooterInfo = ({}: Props): React.ReactElement => {
  return (
    <div className="footer-info">
      <Link location={'https://salero.io/privacy'} color={'black'}>
        {'Политика Конфиденциальности'}
      </Link>
      <Link location={'https://salero.io/agreement'} color={'black'}>
        {'Тарифы'}
      </Link>
      <Link location={'https://salero.io/privacy'} color={'black'}>
        {'Пользовательское соглашение'}
      </Link>

      <Link location={'https://salero.io/privacy'} color={'black'}>
        {'Блог'}
      </Link>
      <Link location={'https://salero.io/privacy'} color={'black'}>
        {'Приложение к пользовательскому соглашению'}
      </Link>
      <Link location={'https://salero.io/privacy'} color={'black'}>
        {'Поддержка'}
      </Link>
    </div>
  );
};
