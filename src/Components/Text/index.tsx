import React, { PropsWithChildren } from 'react';
import './styles.scss';

type Props = {
  color?: 'black' | 'blue' | 'gray' | 'red' | 'white';
  weight?: 'normal' | 'medium' | 'bold';
  onClick?: () => void;
};

export const Text = ({
  color = 'black',
  weight = 'normal',
  onClick = () => null,
  children,
}: PropsWithChildren<Props>): React.ReactElement => {
  return (
    <span className={`text ${color} ${weight}`} onClick={onClick}>
      {children}
    </span>
  );
};
