import { useAppDispatch } from '../hooks/storeHook'
import { logOut } from '../redux/reducer/userReducer'

const LogOutBtn = () => {
    const dispatch = useAppDispatch()
    return (
        <button
            className='btn--log'
            onClick={()=>dispatch(logOut())}
        >Log out</button>
    )
}

export default LogOutBtn