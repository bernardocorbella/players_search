import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getPlayers, filterPlayers, raiseError } from '../actions';
import { Header, Form } from '../../playersFinder';
import { Table } from '../../playersList';
import { Loading } from '../../loading';
import { ErrorBoundary } from '../../errorBoundary';
import { getFilteredPlayers } from '../selectors';

export class App extends React.Component {
  componentDidMount() {
    this.props.getPlayers();
  }

  render() {
    const { players, fetching, filterPlayers, error, raiseError } = this.props;

    return (
      <div className="pa3 center">
        <Header />
        <Form filterPlayers={filterPlayers} />
        <ErrorBoundary error={error} raiseError={raiseError}>
          <Loading loading={fetching}>
            <Table rows={players} />
          </Loading>
        </ErrorBoundary>
      </div>
    );
  }
}

export const mapProps = state => ({
  error: state.app.error,
  fetching: state.app.fetching,
  filter: state.app.filter,
  players: getFilteredPlayers(state)
});

export const mapDispatch = dispatch => {
  return bindActionCreators(
    {
      getPlayers,
      filterPlayers,
      raiseError
    },
    dispatch
  );
};

export default connect(mapProps, mapDispatch)(App);
