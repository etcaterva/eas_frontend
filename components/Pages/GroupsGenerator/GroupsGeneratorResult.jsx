import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames/bind';
import useTranslation from 'next-translate/useTranslation';
import STYLES from './GroupsGeneratorResult.module.scss';

const c = classnames.bind(STYLES);

const GroupsGeneratorResult = ({ result }) => {
  const { t } = useTranslation('DrawGroups');
  return (
    <div className={c('GroupsGeneratorResult')}>
      <div className={c('GroupsGeneratorResult__container')}>
        {result.value.map((group, index) => (
          <div
            key={group[0].id}
            className={c('GroupsGeneratorResult__group')}
            data-testid="GroupsGeneratorResult__group"
          >
            <Typography variant="caption">
              {t('result_label_group', { groupNumber: index + 1 })}
            </Typography>
            <ul>
              {group.map(participant => (
                <li key={participant.id}>
                  <Typography variant="body1" data-testid="GroupsGeneratorResult__result">
                    {participant.name}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

GroupsGeneratorResult.propTypes = {
  result: PropTypes.shape({
    created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    schedule_date: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())),
  }).isRequired,
};

export default GroupsGeneratorResult;
