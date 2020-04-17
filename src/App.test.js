import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let props = {}
describe('app-component', () => {
    const app = shallow(<App {...props} />);
    it('<App /> should render', () => {
        expect(app.exists()).toBe(true);
    });
});
