import React from 'react';
import PropTypes from 'prop-types';

export class ErrorBoundary extends React.Component {
  // TODO: correctly test this on library update: https://github.com/airbnb/enzyme/issues/1553
  componentDidCatch(error, info) {
    const { raiseError } = this.props;

    raiseError(error);
    console.warn(error, info);
  }

  render() {
    const { error, children } = this.props;

    if (error) {
      return (
        <h2 className="f2 pv3 tc" data-testid="ErrorBoundary">
          There has been an error. Please try refreshing the app
        </h2>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  raiseError: PropTypes.func,
  children: PropTypes.object
};

export default ErrorBoundary;
