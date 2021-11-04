import React from 'react';
import { Link } from '@/Components';
import './styles.scss';

type Props = {
  scrollToAlerts: () => void;
  className?: string;
};

export const HeaderNavigation = ({ scrollToAlerts, className = '' }: Props): React.ReactElement => {
  return (
    <div className={`header-navigation ${className}`}>
      <Link color={'black'} target={'_blank'} weight={'bold'} location={'https://salero.io/?post_type=post'}>
        {'Блог'}
      </Link>

      <Link color={'black'} target={'_blank'} weight={'bold'} location={'https://app.salero.io/auth/login'}>
        {'Войти'}
      </Link>
      <div className={`header-navigation-button`} onClick={scrollToAlerts}>
        {'Получать уведомления'}
      </div>
    </div>
  );
};
