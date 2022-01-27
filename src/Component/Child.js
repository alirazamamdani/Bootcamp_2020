import React , {useContext} from 'react'
import counterContext from '../CreateContext';
const Child = () => {

    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return ( 
        <div>
                <h1>This is Child Component</h1>
                <h4>Counter value is : {counterValue}</h4>
            
                <button onClick={() => {counterValue[1](++counterValue[0])}}>Context Counter Increment</button>
                <button onClick={() => {counterValue[1](--counterValue[0])}}>Context Counter Increment</button>
        </div>
     );
}
 
export default Child;
