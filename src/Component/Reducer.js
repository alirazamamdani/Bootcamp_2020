import React, {useReducer} from 'react'
import CounterReducer from '../CreateReducer'


const Reducer = () => {
    const [state, dispatch] = useReducer(CounterReducer, 5)
    // let counterReduer = useReducer(CounterReducer , 10)
    console.log(state)
    return (
        <div>
            <p>Counter Reducer count is : {state}</p>
            <button onClick={() => {dispatch('INCREMENT')}}>Increment</button>
        </div>
    )
}

export default Reducer
