import Cookies from 'js-cookie';

const getVariant = experiment => {
  let variant = Cookies.get(experiment);
  if (variant) {
    return variant;
  }

  variant = Math.random() > 0.5 ? 'A' : 'B';
  Cookies.set(experiment, variant);
  return variant;
};

const NEW_FROM_EXPERIMENT_NAME = 'newFormExperiment';

// This function is only used for tracking, as it will not allocate users into the experiment
// eslint-disable-next-line import/prefer-default-export
export const getExperimentsAllocation = () => ({
  // [NEW_FROM_EXPERIMENT_NAME]: Cookies.get(NEW_FROM_EXPERIMENT_NAME),  // Leaving this old experiment here as an example
});

export const shouldUseNewForm = () => getVariant(NEW_FROM_EXPERIMENT_NAME) === 'B';
