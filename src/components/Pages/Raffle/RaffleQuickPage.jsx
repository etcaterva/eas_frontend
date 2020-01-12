import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import { RaffleResult } from 'echaloasuerte-js-sdk';
import classnames from 'classnames/bind';
import ErrorFeedback from '../../ErrorFeedback/ErrorFeedback.jsx';
import SubmitFormButton from '../../SubmitFormButton/SubmitFormButton.jsx';
import useScrollToResults from '../../../hooks/useScrollToResults';
import Page from '../../Page/Page.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import MakeCertifiedDrawPanel from '../../MakeCertifiedDrawPanel/MakeCertifiedDrawPanel.jsx';
import RaffleConfigurationSection from './RaffleConfigurationSection.jsx';
import LoadingCoin from '../../LoadingCoin/LoadingCoin.jsx';
import WinnersList from '../../WinnersList/WinnersList.jsx';
import ShareDrawModal from '../../ShareDrawModal/ShareDrawModal.jsx';
// import LearnMoreSection from '../../LearnMoreSection/LearnMoreSection.jsx';
import ValidationProvider from '../../FormValidation/ValidationProvider.jsx';
import raffleOgImage from './raffle_og_image.png';
import STYLES from './RaffleQuickPage.scss';

const c = classnames.bind(STYLES);

const analyticsDrawType = 'Raffle';

const RafflePage = ({
  values,
  apiError,
  loadingResult,
  onFieldChange,
  quickResult,
  handleToss,
  handleCheckErrorsInConfiguration,
  t,
}) => {
  const publicDrawUrl = '/raffle/public';
  const resultsRef = React.createRef();

  useScrollToResults(quickResult, resultsRef);

  return (
    <Page
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      ogImage={raffleOgImage}
      pageType="Raffle Quick"
      sidePanel={
        <MakeCertifiedDrawPanel
          buttonLabel={t('create_certificated_draw')}
          publicDrawUrl={publicDrawUrl}
          analyticsDrawType={analyticsDrawType}
        >
          <span>
            <Trans i18nKey="certified_draw_description">
              Si quieres hacer un sorteo público para asegurar a los participantes una eleccion
              imparcial del resultado, te recomendamos que hagas un sorteo certificado
            </Trans>
          </span>
        </MakeCertifiedDrawPanel>
      }
    >
      <DrawHeading title={t('page_title')} subtitle={t('draw_subheading')} />
      <ValidationProvider
        onSubmit={e => {
          e.preventDefault();
          handleToss();
        }}
        onFormErrorsCheck={() => handleCheckErrorsInConfiguration(t)}
      >
        <RaffleConfigurationSection values={values} onFieldChange={onFieldChange} t={t} />
        {apiError && <ErrorFeedback error={t('ApiError:api_error')} />}
        <SubmitFormButton label={t('generate_results')} />
      </ValidationProvider>
      <div ref={resultsRef} className={c('RaffleQuickPage__quickResults')}>
        {loadingResult && <LoadingCoin />}
        {!loadingResult && quickResult && (
          <>
            <WinnersList winners={quickResult.value} />
            <ShareDrawModal
              publicDrawUrl={publicDrawUrl}
              trackingData={{
                mp: {
                  name: `Start Public Draw - ${analyticsDrawType}`,
                  properties: { drawType: analyticsDrawType, source: 'From Quick Result' },
                },
                ga: {
                  category: analyticsDrawType,
                  action: 'Start Public',
                  label: 'From Quick Result',
                },
              }}
              t={t}
            />
          </>
        )}
      </div>
    </Page>
  );
};

RafflePage.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    participants: PropTypes.arrayOf(PropTypes.string),
    numberOfGroups: PropTypes.string,
  }).isRequired,
  quickResult: PropTypes.instanceOf(RaffleResult),
  apiError: PropTypes.bool,
  loadingResult: PropTypes.bool,
  onFieldChange: PropTypes.func.isRequired,
  handleToss: PropTypes.func.isRequired,
  handleCheckErrorsInConfiguration: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

RafflePage.defaultProps = {
  quickResult: null,
  loadingResult: false,
  apiError: false,
};

export default withTranslation('Raffle')(RafflePage);
