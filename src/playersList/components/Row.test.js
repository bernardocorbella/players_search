import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { FormatAge } from '../../formatAge';
import Row from './Row';

const oneYearBefore = moment().subtract(1.1, 'years');

describe('<Row />', () => {
  it('renders with props', () => {
    const row = { name: 'a', position: 'b', nationality: 'c', dateOfBirth: oneYearBefore.format() };
    const wrapper = shallow(<Row row={row} />);
    const td = wrapper.find('td');

    expect(wrapper.is('tr')).toBe(true);
    expect(wrapper.contains([<td />, <td />, <td />, <td />]));
    expect(td.at(0).text()).toEqual('a');
    expect(td.at(1).text()).toEqual('b');
    expect(td.at(2).text()).toEqual('c');
    expect(td.at(3).contains(<FormatAge />)).toBe(true);
  });
});
