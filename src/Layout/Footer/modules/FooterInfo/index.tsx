import { Link } from '@/Components';
import { Svg } from '@/Static';
import React from 'react';
import './styles.scss';

type Props = {};

export const FooterInfo = ({}: Props): React.ReactElement => {
  return (
    <div className="footer-info-wrapper">
      <div className={'footer-info-logo'}>
        <img src={Svg.Logo} alt={APP_NAME} />
      </div>

      <div className={'footer-info-links'}>
        <div className={'footer-info-links-group'}>
          <Link location={'https://salero.io/privacy/'} target={'_blank'} color={'black'}>
            {'Политика Конфиденциальности'}
          </Link>

          <Link location={'https://salero.io/agreement/'} target={'_blank'} color={'black'}>
            {'Пользовательское соглашение'}
          </Link>

          <Link location={'https://salero.io/autopayment_agreement/'} target={'_blank'} color={'black'}>
            {'Приложение к пользовательскому соглашению'}
          </Link>
        </div>

        <div className={'footer-info-links-group'}>
          <Link location={'https://salero.io/'} target={'_blank'} color={'black'}>
            {'Тарифы'}
          </Link>

          <Link location={'https://salero.io/?post_type=post'} target={'_blank'} color={'black'}>
            {'Блог'}
          </Link>

          <Link location={'https://t.me/salerosupport'} target={'_blank'} color={'black'}>
            {'Поддержка'}
          </Link>
        </div>
      </div>
    </div>
  );
};
