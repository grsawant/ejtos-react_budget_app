import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
	const {budget, expenses, currency, dispatch} = useContext(AppContext);
	const totalExpenses = expenses.reduce((total,item) => {
		return (total += item.cost);
	}, 0);
	const submitEvent = (budget) => {
		if(budget > 20000) {
			alert("The value cannot exceed 20000");
			return;
		}
		else if(budget < totalExpenses) {
			alert("You cannot lower the budget value less than spending");
			return;
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: budget,
			})
		}
	}


	return (
		<div className='alert alert-secondary'>
		<span>Budget: {currency}</span>
		<input size="10" type='number' step = '10' value={budget} onChange={(event) => submitEvent(event.target.value)}>
		</input>
		</div>
	);
};
export default Budget;
