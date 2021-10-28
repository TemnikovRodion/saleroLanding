import React, { PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './styles.scss';

type Props = {
  color?: 'black' | 'blue' | 'gray' | 'red' | 'white';
  weight?: 'normal' | 'medium' | 'bold';
  target?: '_blank';
  location: string;
};

export const Link = ({
  color = 'black',
  weight = 'normal',
  location,
  target,
  children,
}: PropsWithChildren<Props>): React.ReactElement => {
  return !target ? (
    <RouterLink to={location} className={`text ${color} ${weight}`}>
      {children}
    </RouterLink>
  ) : (
    <a href={location} target={target} className={`text ${color} ${weight}`}>
      {children}
    </a>
  );
};
