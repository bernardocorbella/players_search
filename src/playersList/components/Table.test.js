import React from 'react';
import { shallow, mount } from 'enzyme';

import Head from './Head';
import Row from './Row';
import Table from './Table';

const player = {
  dateOfBirth: '2018-10-03',
  name: 'a',
  nationality: 'b',
  position: 'c'
};

describe('<Table />', () => {
  it('renders no results and then table with correct props', () => {
    const wrapper = shallow(<Table rows={[]} />);

    expect(wrapper.is('h2')).toBe(true);
    wrapper.setProps({ rows: [player] });
    expect(wrapper.is('table')).toBe(true);
    expect(
      wrapper.contains([
        <Head />,
        <tbody>
          <Row />
        </tbody>
      ])
    );
  });
});
