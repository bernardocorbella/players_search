import React from 'react';
import PropTypes from 'prop-types';

import ageFromDate from '../../utils/ageFromDate';

const Row = ({ row }) => (
  <tr className="stripe-dark" data-testid="Row">
    <td className="pa3 bb">{row.name}</td>
    <td className="pa3 bb">{row.position}</td>
    <td className="pa3 bb">{row.nationality}</td>
    <td className="pa3 bb">{ageFromDate(row.dateOfBirth)}</td>
  </tr>
);

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    nationality: PropTypes.string,
    age: PropTypes.number
  })
};

export default Row;