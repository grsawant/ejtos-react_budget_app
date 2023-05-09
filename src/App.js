import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import Currency from './components/Currency';
import Remaining from './components/Remaining';
import AllocationForm from './components/AllocationForm';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {<div className='col-sm'><Budget /></div>}

                        {<div className='col-sm'><Remaining /></div>}

                        {<div className='col-sm'><ExpenseTotal /></div>}        
                        {<div className='col-sm'><Currency /></div>}        

                        {<div className='row mt-3'><ExpenseList /></div>}        
                        {<div className='row mt-3'><AllocationForm /></div>}        
                       
                        {/* Add ExpenseList component here under */}         

                        {/* Add ExpenseItem component here under */}        

                        {/* Add AllocationForm component here under */}        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
