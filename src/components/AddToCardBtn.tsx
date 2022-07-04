import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import { useAppDispatch } from '../hooks/storeHook'
import { ProductInCart } from '../types/cart'
import { addToCart } from '../redux/reducer/cartReducer'

const AddToCardBtn = ({product}:{product:ProductInCart}) => {
    const dispatch = useAppDispatch()
    const addProduct = () => {
        dispatch(addToCart(product))
    }
    return (
        <IconButton
            color="primary"
            aria-label="add product to cart"
            onClick={addProduct}
        >
            <AddShoppingCartIcon className='icon--small'/>
        </IconButton>
    )
}

export default AddToCardBtn