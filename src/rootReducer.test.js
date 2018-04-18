import { createStore } from 'redux';
import rootReducer from './rootReducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  it('smoke tests', () => {
    expect(store.getState().app).toBeTruthy();
  });
});
