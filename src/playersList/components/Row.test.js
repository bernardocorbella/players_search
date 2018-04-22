import React from 'react';
import { shallow } from 'enzyme';

import { FormatAge } from '../../formatAge';
import Row from './Row';

describe('<Row />', () => {
  it('renders with props', () => {
    const row = { name: 'a', position: 'b', nationality: 'c', dateOfBirth: '2011-10-10' };
    const wrapper = shallow(<Row row={row} />);
    const td = wrapper.find('td');

    expect(wrapper.is('tr')).toBe(true);
    expect(wrapper.contains([<td />, <td />, <td />, <td />]));
    expect(td.at(0).text()).toEqual('a');
    expect(td.at(1).text()).toEqual('b');
    expect(td.at(2).text()).toEqual('c');
    expect(td.at(3).contains(<FormatAge date={row.dateOfBirth} />)).toBe(true);
  });
});
