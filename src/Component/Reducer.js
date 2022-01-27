import React, {useReducer} from 'react'
import CounterReducer from '../CreateReducer'


const Reducer = () => {
    const [state, dispatch] = useReducer(CounterReducer, 0)
    // let counterReduer = useReducer(CounterReducer , 10)
    console.log(state)
    return (
        <div>
            <p>Counter Reducer count is : {state}</p>
            <button onClick={() => {dispatch('INCREMENT')}}>Reducer Increment</button>
            <button onClick={() => {dispatch('DECREMENT')}}>Reducer Decrement</button>
        </div>
    )
}

export default Reducer
