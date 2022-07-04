
import { useAppSelector } from '../hooks/storeHook'
import LoginModal from '../components/LoginModal'
import Box from '@mui/material/Box'

const User = () => {
  const user = useAppSelector(state => state.userReducer.currentUser)
  console.log('user: ', user)
  return (
    <Box className='user-page'>
      {user ? (
        <h1>{user.name}</h1>
      ) : (
        <Box>
          <h1>You need to log in to see this page</h1>
          <LoginModal />
        </Box>
      )
      }
    </Box>
  )
}

export default User