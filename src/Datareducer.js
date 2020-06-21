


const datareducer = ((state,action)=>
{
 
    
    switch(action.type)
    {
        case "Add_transaction":
            return [...state, action.payload] 
        
        case "Delete_transaction":
            
            return state.filter( item => item.id !== action.payload)
             
        default:
            return state;   
    }
})


export default datareducer;