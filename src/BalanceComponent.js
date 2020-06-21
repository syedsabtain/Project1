import React, {useContext} from 'react'
import {Globaldata} from './DataContext'

const BalanceCOmponent = () => {

    let {transaction, addTransaction} = useContext(Globaldata);

    const getincome = () => {
        let income = 0;
        for (let i = 0; i < transaction.length; i++) {
            if (transaction[i].amount > 0) {
                income += transaction[i].amount;
            }
        }
        return income
    }
    const getexpense = () => {
        let expense = 0;
        for (let i = 0; i < transaction.length; i++) {
            if (transaction[i].amount < 0) {
                expense += transaction[i].amount;
            }
        }
        return expense
    }
    return (
        <div className={'container shadow'}>

            <h2 className="pt-5 ">YOUR BALANCE
                <br/>
                ${getincome() + getexpense()}</h2>

            <div className="row mt-3  text-center shadow font-weight-bold ">
                <div className="col-sm-6 pt-3 pb-3 shadow">INCOME
                    <br/>
                    <span className="green font-size-14">${getincome()}</span>
                </div>
                <div className="col-sm-6 pt-3 shadow pb-3">EXPENSE
                    <br/>
                    <span className="red font-size-14">${getexpense()}</span>
                </div>

            </div>
        </div>
    )
}

export default BalanceCOmponent;
