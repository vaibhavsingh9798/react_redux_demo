import { useDispatch } from 'react-redux'
import {login,logout} from '../features/authentication/authSlice'

const Authentication = ()=>{
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
      e.preventDefault()
       dispatch(login())
    }
    return(
    <>
    <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <lable>Email:   </lable>
        <input type="email" />
        </div>
        <div>
        <label>password:    </label>
        <input type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    </>
    )
}

export default Authentication;