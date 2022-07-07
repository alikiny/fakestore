import Grid from '@mui/material/Grid'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import ImageCarousel from '../components/product-component/ImageCarousel'
import Box from '@mui/material/Box';

import useProduct from '../hooks/useProduct'
import AddToCardBtn from '../components/AddToCardBtn';
import { ProductInCart } from '../types/cart';

const SingleProduct = () => {
  const { productId } = useParams()
  const { product, isLoading } = useProduct(productId)
  let productInCart: ProductInCart | undefined = undefined
  if (product) {
    productInCart = {
      product,
      quantity: 1
    }
  }
  return (
    <Box className='single-product'>
      {isLoading && <CircularProgress color="secondary" className='single-product' />}
      {product ? (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ImageCarousel images={product.images} />
          </Grid>
          <Grid item xs={8}>
            <Box className='single-product__info'>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>{product.category.name}</p>
              <p>{product.description}</p>
              <Grid>
                <Button>Buy now</Button>
                <IconButton><AddToCardBtn product={productInCart} /></IconButton>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Box>Product does not exist</Box>
      )
      }
    </Box >
  )
}

export default SingleProduct