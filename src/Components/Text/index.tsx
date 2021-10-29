import React, { PropsWithChildren } from 'react';
import './styles.scss';

type Props = {
  align?: 'left' | 'right' | 'center';
  color?: 'black' | 'blue' | 'gray' | 'red' | 'white';
  weight?: 'normal' | 'medium' | 'bold';
  onClick?: () => void;
};

export const Text = ({
  align = 'left',
  color = 'black',
  weight = 'normal',
  onClick = () => null,
  children,
}: PropsWithChildren<Props>): React.ReactElement => {
  return (
    <p className={`text ${color} ${weight} ${align}`} onClick={onClick}>
      {children}
    </p>
  );
};
