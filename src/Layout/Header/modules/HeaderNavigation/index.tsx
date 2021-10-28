import React from 'react';
import { Text, Link } from '@/Components';
import './styles.scss';

type Props = {};

export const HeaderNavigation = ({}: Props): React.ReactElement => {
  return (
    <div className={`header-navigation`}>
      <Text>
        <Link color={'black'} target={'_blank'} weight={'bold'} location={''}>
          {'Блог'}
        </Link>
      </Text>

      <Text>
        <Link color={'black'} target={'_blank'} weight={'bold'} location={''}>
          {'Тарифы'}
        </Link>
      </Text>

      <Text>
        <Link color={'black'} target={'_blank'} weight={'bold'} location={''}>
          {'Войти'}
        </Link>
      </Text>

      <Link color={'blue'} target={'_blank'} weight={'bold'} location={''}>
        <div className={`header-navigation-button`}>{'Получать алерты'}</div>
      </Link>
    </div>
  );
};
