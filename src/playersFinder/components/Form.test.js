import React from 'react';
import { shallow, mount } from 'enzyme';

import Form from './Form';
import { POSITIONS } from '../../app';

describe('<Form />', () => {
  let wrapper, filterPlayers, testState, preventDefault;

  beforeEach(() => {
    filterPlayers = jest.fn();
    preventDefault = jest.fn();
    testState = { name: 'a', position: 'b', age: 'c' };
    wrapper = shallow(<Form filterPlayers={filterPlayers} />);
  });

  it('renders without crashing and has correct class', () => {
    expect(wrapper.is('form.flex.flex-wrap.flex-nowrap-l'));
    expect(wrapper.contains([<input />, <select />, <input />]));
  });

  it('name input', () => {
    const input = wrapper.find('[name="name"]');

    expect(input.length).toBe(1);
    input.simulate('change', { target: { name: 'name', value: 'test' } });
    expect(wrapper.state('name')).toEqual('test');
  });

  it('position select', () => {
    const select = wrapper.find('[name="position"]');

    expect(select.length).toBe(1);
    select.simulate('change', { target: { name: 'position', value: POSITIONS[0] } });
    expect(wrapper.state('position')).toEqual(POSITIONS[0]);
  });

  it('age input', () => {
    const input = wrapper.find('[name="age"]');

    expect(input.length).toBe(1);
    input.simulate('change', { target: { name: 'age', value: 18 } });
    expect(wrapper.state('age')).toEqual(18);
  });

  it('getFormData', () => {
    wrapper.setState(testState);
    expect(wrapper.instance().getFormData()).toEqual(testState);
  });

  it('handleSubmit', () => {
    wrapper.setState(testState);
    wrapper.simulate('submit', { preventDefault });
    expect(preventDefault.mock.calls.length).toBe(1);
    expect(filterPlayers.mock.calls.length).toBe(1);
    expect(filterPlayers.mock.calls[0][0]).toEqual(testState);
  });
});
