import { Svg } from '@/Static';
import React from 'react';
import './styles.scss';

type Props = {};

export const HeaderLogo = ({ }: Props): React.ReactElement => {
  return (
    <div className={`header-logo`}>
      <img src={Svg.Logo} alt={APP_NAME} />
    </div>
  );
};
