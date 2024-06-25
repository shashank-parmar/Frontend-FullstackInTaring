import  {  useReducer } from "react";

const initialState = 0;

const reducer = (state,action)=>{
    console.log(state,action)
    if(action.type==="incriment"){
        return state + 1;
    }
    else if(action.type==="dicrimnet"){
        return state - 1;
    }
    else{
        return state;
    }
}   
const UserReducer = ()=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    return(
        <div>
            <p>{state}</p>
            <button type="submit" onClick={()=>dispatch({type:'incriment'})}>incriment</button>
            <button type="submit" onClick={()=>dispatch({type:'dicrimnet'})}>dicriment</button>
        </div>
    )
}
export default UserReducer;