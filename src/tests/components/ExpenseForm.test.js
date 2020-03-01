import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});
test('should render ExpenseForm correctly with expense', () => {
    const wrapper = shallow(<ExpenseForm espense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});