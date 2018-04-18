import React from 'react';

const Loading = ({ loading, children }) => {
  if (loading) {
    return (
      <h2 className="f1 tc pv3 lh-title" data-testid="Loading">
        Loading...
      </h2>
    );
  } else {
    return children;
  }
};

export default Loading;
