import React from 'react';
import { shallow } from 'enzyme';
import Loader from './loader';

describe('<Loader />', () => {
  test('renders', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
