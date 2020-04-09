import React from 'react';
import { shallow } from 'enzyme';
import Converter from './converter';

describe('<Converter />', () => {
  test('renders', () => {
    const wrapper = shallow(<Converter />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Converter component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Converter debug />);
  
    expect(component).toMatchSnapshot();
  });
});