import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('<Loading />', () => {
  it('reacts to prop and changes content', () => {
    const wrapper = shallow(
      <Loading loading={true}>
        <div data-testid="Loading-children" />
      </Loading>
    );

    expect(wrapper.is('[data-testid="Loading"]')).toBe(true);
    wrapper.setProps({ loading: false });
    expect(wrapper.is('[data-testid="Loading-children"]')).toBe(true);
  });
});
