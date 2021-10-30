import React from 'react';
import { Text, Link } from '@/Components';
import './styles.scss';

type Props = {
  className?: string;
};

export const HeaderNavigation = ({ className = '' }: Props): React.ReactElement => {
  return (
    <div className={`header-navigation ${className}`}>
      <Link color={'black'} target={'_blank'} weight={'bold'} location={'https://salero.io/?post_type=post'}>
        {'Блог'}
      </Link>

      <Link color={'black'} target={'_blank'} weight={'bold'} location={'https://salero.io/'}>
        {'Тарифы'}
      </Link>

      <Link color={'black'} target={'_blank'} weight={'bold'} location={'https://app.salero.io/auth/login'}>
        {'Войти'}
      </Link>

      <Link color={'blue'} target={'_self'} weight={'bold'} location={'#alerts'}>
        <div className={`header-navigation-button`}>{'Получать алерты'}</div>
      </Link>
    </div>
  );
};
