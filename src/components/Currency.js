import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext'
import './Currency.css'

const Currency = () => {
	const {currency,dispatch} = useContext(AppContext);
	return (
		<div className="alert alert-seconday dropdownContainer" width>
		Currency (
			<select className="dropdown" value={currency} onChange={(event) => dispatch({type: "CHG_CURRENCY", payload:event.target.value})}>
                <option className="water" defaultValue value='$'>$ Dollar</option>
                <option value='£' name="Currency">£ Pound</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Rupee</option>
                </select>
		)
		</div>
	);
};
export default Currency
