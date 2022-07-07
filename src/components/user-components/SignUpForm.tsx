import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const SignUpForm = () => {
    return (
        <Box
            component="form"
            className='form-account'>
            <TextField
                required
                label="Required"
                defaultValue=''
            />
            <TextField
                required
                label="Required"
                defaultValue="s"
            />
            <Button>Register</Button>
        </Box>
    )
}

export default SignUpForm