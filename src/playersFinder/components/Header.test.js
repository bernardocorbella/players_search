import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header />', () => {
  it('renders with correct style', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.is('f3.f2-l.lh-title.mv3'));
  });
});
