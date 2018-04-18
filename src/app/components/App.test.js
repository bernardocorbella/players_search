import React from 'react';
import { shallow } from 'enzyme';

import { App, mapProps, mapDispatch } from './App';
import { initialState } from '../reducer';
import * as types from '../constants/ActionTypes';
import { Header, Form } from '../../playersFinder';
import { Table } from '../../playersList';
import { Loading } from '../../loading';
import { ErrorBoundary } from '../../errorBoundary';

describe('<App />', () => {
  let getPlayers, raiseError, wrapper;

  beforeEach(() => {
    getPlayers = jest.fn();
    raiseError = jest.fn();
    const props = { getPlayers, raiseError, error: false, rows: [] };
    wrapper = shallow(<App {...props} />);
  });

  it('renders without crashing, calls `getPlayers` and has correct className', () => {
    expect(getPlayers.mock.calls.length).toBe(1);
    expect(
      wrapper.contains([
        <Header />,
        <Form />,
        <ErrorBoundary>
          <Loading>
            <Table />
          </Loading>
        </ErrorBoundary>
      ])
    );
    expect(wrapper.is('.pa3.center'));
  });

  it('maps state to props', () => {
    const state = { app: initialState };

    expect(mapProps(state)).toEqual({
      error: null,
      fetching: false,
      filter: { name: '', position: '', age: '' },
      players: []
    });
  });

  it('maps dispatch to props', () => {
    const dispatch = jest.fn();

    mapDispatch(dispatch).getPlayers();

    mapDispatch(dispatch).filterPlayers();
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: types.FILTER_PLAYERS,
      payload: { filter: undefined }
    });

    mapDispatch(dispatch).raiseError();
    expect(dispatch.mock.calls[2][0]).toEqual({
      type: types.RAISE_ERROR,
      payload: { error: undefined }
    });
  });
});
