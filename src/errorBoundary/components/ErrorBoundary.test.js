import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { ErrorBoundary } from './ErrorBoundary';

describe('<ErrorBoundary />', () => {
  it('reacts to prop and renders children', () => {
    const wrapper = shallow(
      <ErrorBoundary error={false}>
        <div data-testid="ErrorBoundary-children" />
      </ErrorBoundary>
    );

    expect(wrapper.is('[data-testid="ErrorBoundary-children"]')).toBe(true);
    wrapper.setProps({ error: new Error('error') });
    expect(wrapper.is('[data-testid="ErrorBoundary"]')).toBe(true);
  });

  // pending until update: https://github.com/airbnb/enzyme/issues/1553
  it('correctly catches an error');
});
