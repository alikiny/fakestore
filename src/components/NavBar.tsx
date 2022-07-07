import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Badge from '@mui/material/Badge'
import { useTheme } from '@mui/material'

import LoginModal from './LoginModal'
import LogOutBtn from './LogOutBtn'
import ThemeContext from '../context/ThemeContext'
import { useAppSelector } from '../hooks/storeHook'

const drawerWidth = 240
const navItems = ['Home', 'Products', 'User', 'Contact', 'Cart']

const NavLink = () => {
    const currentUser = useAppSelector(state => state.userReducer.currentUser)
    const theme = useTheme()
    const colorMode = useContext(ThemeContext)
    const cartQuantity = useAppSelector(state => state.cartReducer.total)
    return (
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => {
                if (item === 'Cart') {
                    return (
                        <Link className='nav__link' key={item} to={item.toLowerCase()}>
                            <Badge badgeContent={cartQuantity} color="secondary">{item}</Badge>
                        </Link>
                    )
                } else {
                    return (
                        <Link className='nav__link' key={item} to={item.toLowerCase()}>
                            {item}
                        </Link>)
                }

            })}
            {currentUser ? (<LogOutBtn />) : (<LoginModal />)}
            <IconButton sx={{ ml: 1 }} onClick={() => colorMode.toggleColorMode()} >
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    )
}

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const navigate = useNavigate()

    const onNavigate = (route: string) => {
        navigate(`/${route}`)
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                SHOPEE
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText onClick={() => onNavigate(item)} secondary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <LoginModal />
        </Box>
    )

    return (
        <Box sx={{ display: { sm: 'block' } }}>
            <AppBar className='nav__bar' component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        SHOPEE
                    </Typography>
                    <NavLink />
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}


export default NavBar