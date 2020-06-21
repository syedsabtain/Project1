import React, {useContext, useState} from 'react'
import {Globaldata} from './DataContext'

function FormComponent() {
    let {transaction,addDelete} = useContext(Globaldata);
    let [newamount, setAmount] = useState(0);
    let [newdescription, setDescription] = useState('');
    let [newid, setID] =useState(2)


    const Handlesubmit =(e)=>
    {
        e.preventDefault();
        if(newamount==0||newdescription==' '||newdescription>0||newdescription<0)
        {
            alert("\n Text field values can't be empty of just a space Please try to enter meaning full description \n Text Field can't start with 0 or negative 0 \n Amount Field can't be equal to zer0");
            
        }
       
        else{
            setID(++newid);
             addDelete[0]({
            amount: Number(newamount),
           amountdescription: newdescription,
           id: Number(newid),
        });
        setAmount(0)
        setDescription('')
        
    }
        

    }
   
    return (
        <div className="col-md-12">
            <form className="form-group" onSubmit={Handlesubmit} >
                <div className="form-group">
                    <label >Text</label>
                    <br/>
                    <input
                        className="form-control"
                        type="text"
                        name="text"
                        value={newdescription}
                        required
                        placeholder="Enter text.."
                        onChange={(e) => setDescription(e.target.value)}
                        />

                </div>
                <div className="form-group" >
                    <label >Amount</label>
                    <br/>
                    <label >(negative-expense,positive-income)</label>
                    <br/>
                    <input
                        type="Number"
                        name="amount"
                        value={newamount}
                        required
                        className="form-control"
                        placeholder="Enter amount.."
                        onChange={(e)=> setAmount(e.target.value)}
                        />
                    <input type='submit' 
                    className=" btn rounded mt-3 mb-3 btn-outline-primary "
                   value="Add transaction"
                   />
                    
                </div>
   
                

            </form>
        </div>
    )

}

export default FormComponent;