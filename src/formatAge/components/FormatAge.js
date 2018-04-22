import React from 'react';
import PropTypes from 'prop-types';

import ageFromDate from '../../utils/ageFromDate';

const FormatAge = ({ date }) => <span>{ageFromDate(date)}</span>;

FormatAge.propTypes = {
  date: PropTypes.string.isRequired
};

export default FormatAge;
