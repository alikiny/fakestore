import { useState } from 'react'
import Box from '@mui/material/Box'
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import Modal from '@mui/material/Modal'
import { Divider, Grid } from '@mui/material'

import { useAppDispatch } from '../hooks/storeHook'
import { addUser } from '../redux/reducer/userReducer'
import LoginForm from './user-components/LoginForm'
import SignUpForm from './user-components/SignUpForm'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const LoginModal = () => {
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        console.log('close')
        setOpen(false)
    }
    const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        if ('profileObj' in response) {
            dispatch(addUser({
                firstName: response.profileObj.givenName,
                lastName: response.profileObj.familyName,
                ...response.profileObj
            }))
        } else {
            alert('Cannot log in')
        }
    }
    return (
        <Box className='login'>
            <button className='btn--log' onClick={() => setOpen(true)}>Log in</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box className='login__form'>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <button>Create new account</button>
                            <SignUpForm />
                        </Grid>
                        <Grid item xs={6}>
                            <button>Login with your account</button>
                            <LoginForm />
                        </Grid>
                    </Grid>
                    <Divider />
                    <GoogleLogin
                        clientId="729884898728-j7ui1155atevur8s8e3fr5f8b30vvs89.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </Box>
            </Modal>
        </Box>
    )
}

export default LoginModal