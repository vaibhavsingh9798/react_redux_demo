import { useSelector, useDispatch} from "react-redux";
import {increment,decrement,increase} from '../features/counter/counterSlice'
const Counter = () =>{
 let count =     useSelector((state) => state.counter.count)
 let isAuthenticated = useSelector((state) => state.authentication.isAuthenticated)
 const dispatch = useDispatch()
    return(

        <>

       { isAuthenticated && <div><h3>Counter</h3>
        <h4>Value: {count}</h4>
        
       <div> <button onClick={() => dispatch(increment())}>INC 2</button></div>
         <div> <button onClick={() => dispatch(decrement())}>DEC 2</button>  </div>
         <div> <button onClick={() => dispatch(increase(10))}>DEC 10</button>  </div>
         </div>
}
        </>
    )
}

export default Counter;