import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useAppDispatch } from '../../hooks/storeHook';
import { loginAsync } from '../../redux/reducer/userReducer';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()
    const onLogin = ()=> {
        dispatch(loginAsync({
            email,
            password
        }))
    }
    return (
        <Box
            component="form"
            className='form-account'>
            <TextField
                required
                label="Email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                required
                label="Password"
                type='password'
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={onLogin}>Login</Button>
        </Box>
    )
}

export default LoginForm