import React from 'react';
import { shallow } from 'enzyme';
import Alert from './alert';

describe('<Alert />', () => {
  test('renders', () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper).toMatchSnapshot();
  });
});
