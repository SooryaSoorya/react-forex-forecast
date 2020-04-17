import React from 'react';
import { shallow, mount } from 'enzyme';
import ChartView from './chart-view';

const initialProps =
{
    header: "Chart View",
    renderData: [
        { INR: 83.494, USD: 1.0963, name: "14-04-2020" },
        { INR: 83.414, USD: 1.0903, name: "15-04-2020" },
        { INR: 83.705, USD: 1.0888, name: "16-04-2020" }
    ],
    toCurrency: "INR",
    areaColor: "#0baa3b"
}
describe('chart-component', () => {
    const chartView = shallow(<ChartView {...initialProps} />);
    it('<Converter /> should render', () => {
        expect(chartView.exists()).toBe(true);
    });
    const ChartContainer = mount(<ChartView {...initialProps} />);
    it('should match the snapshot', () => {
        expect(ChartContainer.debug()).toMatchSnapshot();
    });
    //props checking
    it("should have a prop with name renderData and data", () => {
        expect(ChartContainer.prop('renderData').length).toBe(initialProps['renderData'].length);
    });
    it("should have a prop with name toCurrency", () => {
        expect(ChartContainer.prop('toCurrency')).toEqual('INR');
    });
});