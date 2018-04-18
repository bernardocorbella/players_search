import React from 'react';
import { shallow } from 'enzyme';

import Head from './Head';

describe('<Head />', () => {
  it('renders', () => {
    const wrapper = shallow(<Head />);

    expect(wrapper.is('thead')).toBe(true);
    expect(
      wrapper.contains([
        <tr>
          <th />
          <th />
          <th />
          <th />
        </tr>
      ])
    );
  });
});
