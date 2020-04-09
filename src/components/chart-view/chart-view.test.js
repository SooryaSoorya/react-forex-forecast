import React from 'react';
import { shallow } from 'enzyme';
import ChartView from './chart-view';

describe('<ChartView />', () => {
  test('renders', () => {
    const wrapper = shallow(<ChartView />);
    expect(wrapper).toMatchSnapshot();
  });
});
