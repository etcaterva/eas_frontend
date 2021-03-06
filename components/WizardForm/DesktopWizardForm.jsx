import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import PropTypes from 'prop-types';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import classnames from 'classnames/bind';
import useTranslation from 'next-translate/useTranslation';
import LoadingButton from '../LoadingButton/LoadingButton.jsx';
import ErrorFeedback from '../ErrorFeedback/ErrorFeedback.jsx';
import STYLES from './WizardForm.module.scss';

const c = classnames.bind(STYLES);

const DesktopWizard = ({
  stepLabels,
  activeStep,
  handleNext,
  handleBack,
  submittedSteps,
  stepValidations,
  apiError,
  submitButtonLabel,
  loading,
  learnMoreSection,
  children,
}) => {
  const { t } = useTranslation('CommonCreateDraw');
  const isLastStep = activeStep === stepLabels.length - 1;
  return (
    <div className={c('WizardForm')}>
      <Stepper className={c('WizardForm__stepper')} activeStep={activeStep} alternativeLabel>
        {stepLabels.map((label, index) => {
          const props = {};
          const labelProps = {};
          if (submittedSteps[index] && !stepValidations[index]) {
            labelProps.error = true;
          }
          return (
            <Step key={label} {...props}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div className={c('WizardForm__content')}>{children}</div>
      {isLastStep && apiError && <ErrorFeedback error={apiError} />}
      <div className={c('WizardForm__buttons-row')}>
        <Button
          className={c('WizardForm__step-button')}
          disabled={loading || activeStep === 0}
          onClick={handleBack}
        >
          {t('wizard_back')}
        </Button>
        <LoadingButton
          variant="contained"
          color="primary"
          className={c('WizardForm__step-button')}
          data-testid="WizardForm__next-button"
          onClick={handleNext}
          loading={loading}
        >
          {isLastStep ? submitButtonLabel : t('wizard_next')}
        </LoadingButton>
      </div>
      {activeStep === 0 && learnMoreSection}
    </div>
  );
};

DesktopWizard.propTypes = {
  stepLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeStep: PropTypes.number.isRequired,
  apiError: PropTypes.bool,
  submittedSteps: PropTypes.arrayOf(PropTypes.bool).isRequired,
  submitButtonLabel: PropTypes.string.isRequired,
  stepValidations: PropTypes.arrayOf(PropTypes.bool).isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  learnMoreSection: PropTypes.node,
};

DesktopWizard.defaultProps = {
  apiError: false,
  loading: false,
  learnMoreSection: null,
};

export default DesktopWizard;
