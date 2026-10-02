import {useReducer} from 'react';

const initiState = {
    count: 0
}

function reducer(state,action){
    switch(action.type){
        case "increment": 
            return{
                count: state.count+1
            }
        case "decrement":
            return{
                count: state.count-1
            }
        case "reset":
            return{
                count: 0
            }
        default:
            return state;
    }
}

function CountReducer(){
    const [state,dispatch] = useReducer(reducer,initiState);
    return(
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>+</button>
            <button onClick={()=>dispatch({type:"decrement"})}>-</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </div>
    )
}

export default CountReducer;