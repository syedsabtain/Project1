import React from 'react';



const ListComponent = props=>
{ 
 


    return(
        <li className="list-group-item list-group-item-action" >
                
                   <div className="row div_hover ">
                       <div className="col-md-6 text-left ">
                       
                       <span> <button className="badge border border-info btn_hover " id={props.id} onClick={props.clicked} > X </button> </span>
                       <span>{props.items.amountdescription}</span>
                       </div>
                       <div className="col-md-6 text-right">
                          {props.items.amount}
                       </div>
                   </div>
                </li>
    )
}

export default ListComponent;