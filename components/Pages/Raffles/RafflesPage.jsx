import React from 'react';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import DrawCard from '../../DrawCard/DrawCard.jsx';
import Page from '../../Page/Page.jsx';
import facebookIcon from './facebook.png';
import raffleIcon from './raffle.svg';
import rafflesOgImage from './raffles_og_image.png';

import STYLES from './RafflesPage.module.scss';

const c = classNames.bind(STYLES);

const RafflesPage = () => {
  const { t } = useTranslation('Raffles');
  return (
    <Page
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      contentClassName={c('RafflesPage')}
      pageType="Raffles"
      ogImage={rafflesOgImage}
    >
      <div className={c('RafflesPage__container')}>
        <Typography variant="h1" align="center" className={c('RafflesPage__title')}>
          {t('section_title_raffles')}
        </Typography>
        <DrawCard icon={raffleIcon} href="/raffle">
          {t('draw_title_raffle')}
        </DrawCard>
        <DrawCard icon={facebookIcon} href="/facebook">
          {t('draw_title_facebook_raffle')}
        </DrawCard>
      </div>
    </Page>
  );
};

RafflesPage.propTypes = {};

export default RafflesPage;
