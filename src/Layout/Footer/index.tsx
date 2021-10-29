import React from 'react';
import { HeaderLogo } from '../Header/modules';
import { FooterAutor, FooterInfo } from './modules';
import './styles.scss';

type Props = {};

export const Footer = ({ }: Props): React.ReactElement => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <HeaderLogo />
        <FooterInfo />
      </div>
      
      <FooterAutor />
    </footer>
  );
};
