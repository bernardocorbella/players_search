import React from 'react';
import PropTypes from 'prop-types';
import Head from './Head';
import Row from './Row';

const Table = ({ rows }) => {
  if (rows.length) {
    return (
      <table className="w-100 tc mt4" data-testid="Table">
        <Head />
        <tbody>{rows.map((r, idx) => <Row row={r} key={idx} />)}</tbody>
      </table>
    );
  } else {
    return <h2 className="pv4 tc lh-title">No results. Please try changing the search terms</h2>;
  }
};

Table.propTypes = {
  fetching: PropTypes.bool,
  filter: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    position: PropTypes.string
  }),
  rows: PropTypes.array
};

export default Table;
