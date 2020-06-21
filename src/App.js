import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import HistoryComponent from './HistoryComponent'
import FormCompnent from './FormComponent'
import './bootstrap/bootstrap.min.css'
import BalanceCOmponent from './BalanceComponent';
import {Globaldataprovider} from './DataContext'

function App() {
    
    return (
        <Globaldataprovider>
            <div className="container text-center  ">
                <div className=" specfic shadow-lg">
                    <div className="mt-5 font-weight-bolder  pt-1     rounded font-size col-md-12">Expense Tracker</div>
                    <span className=" font-weight-bolder font-size-14">By Syed Sabtain Raza</span>
                    <BalanceCOmponent></BalanceCOmponent>
                    <h2 className="mt-5 ">History</h2>
                    <hr/>
                    <HistoryComponent></HistoryComponent>

                    <h3 className="mt-5">Add new transaction</h3>
                    <hr className="border shadow"/>
                    <FormCompnent></FormCompnent>

                </div>
            </div>
            </Globaldataprovider>
    )
}

export default App;
