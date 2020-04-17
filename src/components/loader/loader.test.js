import React from 'react';
import { shallow } from 'enzyme';
import Loader from './loader';

describe('loader-component', () => {
    const loaderContainer = shallow(<Loader />);
    it('<Loader /> should render', () => {
        expect(loaderContainer.exists()).toBe(true);
    });
});