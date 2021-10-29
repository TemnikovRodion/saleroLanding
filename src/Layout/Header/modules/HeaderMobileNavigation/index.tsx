import React from 'react';
import { Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { HeaderNavigation } from '..';
import './styles.scss';

type Props = {};

export const HeaderMobileNavigation = ({}: Props): React.ReactElement => {
    return (
      <Dropdown trigger={['click']} arrow={true} placement="bottomRight" overlay={<HeaderNavigation className={'header-mobile-navigation'} />}>
        <MenuOutlined className={'header-mobile-navigation-icon'} />
      </Dropdown>
    );
};