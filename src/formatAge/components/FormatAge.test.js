import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import FormatAge from './FormatAge';

const oneYearBefore = moment()
  .subtract(1.1, 'years')
  .format('YYYY-MM-DD');

describe('<FormatAge />', () => {
  it('should display correct age', () => {
    const wrapper = shallow(<FormatAge date={oneYearBefore} />);

    expect(wrapper.text()).toEqual('1');
  });
});
