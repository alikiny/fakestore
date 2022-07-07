import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import { useAppDispatch } from '../hooks/storeHook'
import { ProductInCart } from '../types/cart'
import { addToCart } from '../redux/reducer/cartReducer'

const AddToCardBtn = ({product}:{product:ProductInCart|undefined}) => {
    const dispatch = useAppDispatch()
    const addProduct = () => {
        if (product) {
            dispatch(addToCart(product))
        } else {
            alert('Product does not exist')
        }
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