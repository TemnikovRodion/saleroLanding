import React from 'react';
import { Layout } from 'antd';
import { HeaderLogo, HeaderNavigation, HeaderMobileNavigation } from './modules';
import './styles.scss';

type Props = {};

export const Header = ({ }: Props): React.ReactElement => {
  return (
    <Layout.Header className={'header'} id={'header'}>
      <HeaderLogo />
      <HeaderNavigation />
      <HeaderMobileNavigation />
    </Layout.Header>
  );
};
