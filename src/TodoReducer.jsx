import {useReducer, useState} from 'react';

const initialState = [];

function reducer(state,action){
    switch(action.type){
        case "ADD":
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }
            ];
        case "TOGGLE":
            return state.map((todo)=>todo.id === action.payload ? {
                ...todo,
                completed: !todo.completed
            } : todo)
        case "DELETE":
            return state.filter((todo)=>todo.id !== action.payload)
        default:
            return state;
    }
}

function TodoReducer(){
    const [todos,dispatch] = useReducer(reducer,initialState);
    const [text,setText] = useState('');
    const addTodo = ()=>{
        if(!text.trim) return;
        dispatch({
            type: "ADD",
            payload: text
        })
        setText('')
    }
    return(
        <div>
            <h1>Todo App</h1>
            <input type="text" value={text} placeholder="Enter Todo" onChange={(e)=>setText(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
            {todos.map((todo)=>(
                <div>
                    <span onClick={()=>dispatch({
                        type: "TOGGLE",
                        payload: todo.id
                    })}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}>{todo.text}</span>
                    <button onClick={()=>dispatch({
                        type: "DELETE",
                        payload: todo.id
                    })}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default TodoReducer