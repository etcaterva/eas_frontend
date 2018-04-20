import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-translate';

import RaffleDrawForm from '../RaffleDrawForm/RaffleDrawForm';
import PublishDrawOptions from '../../../PublishDrawOptions/PublishDrawOptions';

const RaffleDraw = props => {
  const {
    title,
    description,
    participants,
    numberOfWinners,
    whenResultShown,
    dateScheduled,
  } = props.values;
  return (
    <div>
      <RaffleDrawForm
        title={title}
        description={description}
        participants={participants}
        numberOfWinners={numberOfWinners}
        onFieldChange={props.onFieldChange}
      />
      <PublishDrawOptions
        whenResultShown={whenResultShown}
        labelPublish={props.t('publish_draw')}
        dateScheduled={dateScheduled}
        onFieldChange={props.onFieldChange}
        handlePublish={props.handlePublish}
      />
    </div>
  );
};

RaffleDraw.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    participants: PropTypes.arrayOf(PropTypes.string).isRequired,
    numberOfWinners: PropTypes.number.isRequired,
    whenResultShown: PropTypes.string.isRequired,
    dateScheduled: PropTypes.string,
  }).isRequired,
  t: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  handlePublish: PropTypes.func.isRequired,
};

RaffleDraw.defaultPropTypes = {
  dateScheduled: Date(),
};

export default translate('RaffleDraw')(RaffleDraw);