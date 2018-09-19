import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import SubmitButton from '../../SubmitButton/SubmitButton';
import withFormValidation from '../../withValidation/withFormValidation';
import Page from '../../Page/Page';
import RandomNumberConfigurationSection from './RandomNumberConfigurationSection';
import RandomNumberResult from './RandomNumberResult';

import STYLES from './RandomNumberQuickPage.scss';

const c = classNames.bind(STYLES);

const ValidatedForm = withFormValidation(props => <form {...props} />);

const RandomNumberQuickPage = props => {
  const {
    values,
    quickResult,
    shareResultLink,
    handleToss,
    onFieldChange,
    handleCheckErrorsInConfiguration,
    handleMakePublic,
    t,
  } = props;
  return (
    <Page htmlTitle={t('html_title')}>
      <div className={c('RandomNumberQuickPage__container')}>
        <div className={c('RandomNumberQuickPage__content')}>
          <Typography color="primary" variant="display1" align="center">
            {t('page_title')}
          </Typography>
          <Typography variant="body1" align="center" color={'textSecondary'}>
            {t('draw_subheading')}
          </Typography>
          <ValidatedForm
            onSubmit={e => {
              e.preventDefault();
              handleToss();
            }}
            checkErrors={() => handleCheckErrorsInConfiguration(t)}
          >
            <RandomNumberConfigurationSection values={values} onFieldChange={onFieldChange} t={t} />
            <SubmitButton label={t('generate_numbers')} />
          </ValidatedForm>
          {quickResult.length > 0 && (
            <div>
              <RandomNumberResult result={quickResult} />
              <br />
              {true && (
                <Button variant="raised" color="primary" href={shareResultLink}>
                  {t('share_result')}
                </Button>
              )}
            </div>
          )}
        </div>
        <div className={c('RandomNumberQuickPage__side-panel')}>
          {true && (
            <Card>
              <CardContent>
                <Typography component="p">
                  Si quieres hacer un sorteo público para asegurar a los participantes una eleccion
                  imparcial del resultado, te recomendamos que hagas un sorteo certificado
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="raised" onClick={handleMakePublic}>
                  {t('create_certificated_draw')}
                </Button>
              </CardActions>
            </Card>
          )}
        </div>
      </div>
    </Page>
  );
};

RandomNumberQuickPage.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rangeMax: PropTypes.string.isRequired,
    rangeMin: PropTypes.string.isRequired,
    numberOfResults: PropTypes.string.isRequired,
    allowRepeated: PropTypes.bool.isRequired,
  }).isRequired,
  shareResultLink: PropTypes.string,
  onFieldChange: PropTypes.func.isRequired,
  handleToss: PropTypes.func.isRequired,
  handleCheckErrorsInConfiguration: PropTypes.func.isRequired,
  quickResult: PropTypes.arrayOf(PropTypes.number),
  handleMakePublic: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

RandomNumberQuickPage.defaultProps = {
  quickResult: [],
  shareResultLink: '',
};

export default translate('RandomNumber')(RandomNumberQuickPage);
