import React from 'react';
import { shallow, mount } from 'enzyme';
import Alert from './alert';

const alertProps =
{
    showAlert: true,
    showAlertMessage: {
        error: "Symbols are invalid"
    }
}
describe('alert-component', () => {
    const alert = shallow(<Alert {...alertProps} />);
    it('<Alert /> should render', () => {
        expect(alert.exists()).toBe(true);
    });
    const alertContainer = mount(<Alert {...alertProps} />);
    it('should match the snapshot', () => {
        expect(alertContainer.debug()).toMatchSnapshot();
    });

    //props checking
    it("should have a prop with name showAlert", () => {
        expect(alertContainer.prop('showAlert')).toEqual(true);
    });
});
