import React from 'react';
import { shallow, mount } from 'enzyme';
import Converter from './converter';

let mockFn = jest.fn();
const initialProps = {
    fromCurrency: 'USD',
    toCurrency: 'INR',
    listOption: {},
    showLoading: mockFn
};
const onSubmitSpy = jest.fn();

describe('<Converter />', () => {
    const converter = shallow(<Converter {...initialProps} />);
    it('<Converter /> should render', () => {
        expect(converter.exists()).toBe(true);
    });
});

describe('converter-component', () => {
    const container = mount(<Converter {...initialProps} onSubmit={onSubmitSpy} />);
    it('should match the snapshot', () => {
        expect(container.debug()).toMatchSnapshot();
    });
    it('should have an base amount field', () => {
        expect(container.find('.rff-baseamount').hostNodes().length).toEqual(1);
    });
    it('should have an target amount field', () => {
        expect(container.find('.rff-targetamount').hostNodes().length).toEqual(1);
    });
    it('should have a from currency select box ', () => {
        expect(container.find('.rff-fromcurrency').hostNodes().length).toEqual(1);
    });
    it("when simulating a change, from currency should update its value", () => {
        const fromCurrencyEl = container.find('.rff-fromcurrency').hostNodes();
        // When AUD is selected
        fromCurrencyEl.simulate('change', { target: { defaultValue: 'USD' } });
        // Then its value changes to AUD
        expect(fromCurrencyEl.props().defaultValue).toEqual('USD');
    })
    it("when simulating a change, to currency should update its value", () => {
        const toCurrencyEl = container.find('.rff-tocurrency').hostNodes();
        // When INR is selected
        toCurrencyEl.simulate('change', { target: { defaultValue: 'INR' } });
        // Then its value changes to INR
        expect(toCurrencyEl.props().defaultValue).toEqual('INR');
    });
    it("should have a submit button", () => {
        const fakeEvent = { preventDefault: () => {} };
        expect(container.find('.rff-submitbtn').hostNodes().length).toEqual(1);
        container.find('.rff-submitbtn').hostNodes().simulate('click');
    });
    it("should not have chart views initially", () => {
        const toChartNoDataCont = container.find('.rff-chartnodata').hostNodes();
        expect(toChartNoDataCont.length).toEqual(1);
    });
    //props checking
    it("should have a prop with name fromCurrency", () => {
        expect(container.prop('fromCurrency')).toEqual('USD');
    });
    it("should have a prop with name toCurrency", () => {
        expect(container.prop('toCurrency')).toEqual('INR');
    });
});

