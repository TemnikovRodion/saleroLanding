import React from 'react';
import { Layout } from 'antd';
import { HeaderLogo, HeaderNavigation, HeaderMobileNavigation } from './modules';
import './styles.scss';

type Props = {
  className?: string;
  scrollToAlerts: () => void;
};

export const Header = ({ scrollToAlerts }: Props): React.ReactElement => {
  return (
    <Layout.Header className={'header'} id={'header'}>
      <HeaderLogo />
      <HeaderNavigation scrollToAlerts={scrollToAlerts} />
      <HeaderMobileNavigation scrollToAlerts={scrollToAlerts} />
    </Layout.Header>
  );
};
