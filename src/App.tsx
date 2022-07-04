import { useState } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Products from "./pages/Products"
import User from "./pages/User"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct"
import { useAppDispatch } from "./hooks/storeHook"
import { useEffect } from "react"
import { fetchProducts } from "./redux/reducer/productReducer"
import ThemeContext from "./context/ThemeContext"
import amber from "@mui/material/colors/amber";
import grey from "@mui/material/colors/grey";
import deepOrange from "@mui/material/colors/deepOrange";
import Box from "@mui/material/Box";
import deepPurple from "@mui/material/colors/deepPurple";
import { fetchCategory } from "./redux/reducer/categoryReducer";

const App = () => {
  const dispatch = useAppDispatch()
  const [mode, setMode] = useState<'dark' | 'light'>('dark')
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
        : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepPurple[900],
            paper: deepPurple[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
    },
  })
  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategory())
  }, [])
  const manageTheme = {
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    }
  }
  return (
    <ThemeContext.Provider value={manageTheme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Box sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
            position: 'relative'
          }}>
          <NavBar />
            <Routes>
              <Route path='' element={<Home />} />
              <Route path='home' element={<Home />} />
              <Route path='products'>
                <Route path='' element={<Products />} />
                <Route path=':productId' element={<SingleProduct />} />
              </Route>
              <Route path='user' element={<User />} />
              <Route path='contact' element={<Contact />} />
              <Route path='cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>

  )
}

export default App
