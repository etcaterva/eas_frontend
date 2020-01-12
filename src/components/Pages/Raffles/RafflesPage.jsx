import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import DrawCard from '../../DrawCard/DrawCard.jsx';
import Page from '../../Page/Page.jsx';
import facebookIcon from './facebook.png';
import raffleIcon from './raffle.svg';

import STYLES from './RafflesPage.scss';

const c = classNames.bind(STYLES);

const RafflesPage = ({ t }) => (
  <Page
    htmlTitle={t('html_title')}
    htmlDescription={t('html_description')}
    contentClassName={c('RafflesPage')}
    pageType="Raffles"
  >
    <div className={c('RafflesPage__container')}>
      <Typography variant="h1" align="center" className={c('RafflesPage__title')}>
        {t('section_title_raffles')}
      </Typography>
      <DrawCard icon={raffleIcon} to="/raffle">
        {t('draw_title_raffle')}
      </DrawCard>
      <DrawCard icon={facebookIcon} to="/facebook">
        {t('draw_title_facebook_raffle')}
      </DrawCard>
    </div>
  </Page>
);

RafflesPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('RafflesPage')(RafflesPage);
