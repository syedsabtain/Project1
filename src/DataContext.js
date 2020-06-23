import React ,{createContext, useReducer} from 'react';
import Datareducer from './Datareducer'


const initialtransaction = [
    {amount:500, amountdescription:'cash'},
    
]
export const Globaldata = createContext(initialtransaction);


export const Globaldataprovider =({children})=>
{
    let[state,dispatch] = useReducer(Datareducer,initialtransaction);

    function addTransaction(transobj)
    {
        dispatch(
            {
                type: "Add_transaction",
                payload:
                {
                    amount: transobj.amount,
                    amountdescription: transobj.amountdescription,
                    id: transobj.id
                },
            }
        )
    }
    function deleteTransaction(id)
    {
        dispatch(
            {
                type: "Delete_transaction",
                payload:id
            }
        )
    }

    return (
        <Globaldata.Provider value={{
            transaction: state,
            addDelete: [addTransaction,deleteTransaction]
        }}>

        {children}
        </Globaldata.Provider>
    )
}