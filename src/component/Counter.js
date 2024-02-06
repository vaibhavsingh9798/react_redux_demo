import { useSelector, useDispatch} from "react-redux";
import {increment,decrement} from '../features/counter/counterSlice'
const Counter = () =>{
 let count =     useSelector((state) => state.counter.count)
 const dispatch = useDispatch()
    return(
        <>
        <h3>Counter</h3>
        <h4>Value: {count}</h4>
        
       <div> <button onClick={() => dispatch(increment())}>+</button></div>
         <div> <button onClick={() => dispatch(decrement())}>-</button>  </div>
        
        </>
    )
}

export default Counter;