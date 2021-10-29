import React from 'react';
import { HeaderLogo } from '../Header/modules';
import { FooterAuthor, FooterInfo } from './modules';
import './styles.scss';

type Props = {};

export const Footer = ({ }: Props): React.ReactElement => {
  return (
    <footer className="footer">
      <FooterInfo />
      <FooterAuthor />
    </footer>
  );
};
