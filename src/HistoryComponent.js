import React,{useContext} from 'react'
import ListComponent from './ListComponent'
import {Globaldata}  from './DataContext'

const HistoryComponent = () => {
    
   let {transaction,addDelete} = useContext(Globaldata);
    return (
       
        <div className="col-md-12">
        
            <ul className="list-group">
             
             {transaction.map((item,index)=> { return(
                 <ListComponent key={index} items={item} id={item.id}  clicked={()=> addDelete[1](item.id)} />
             )})}
            </ul>
        </div>
    )
}

export default HistoryComponent;