import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import AddToCardBtn from '../AddToCardBtn'
import { ProductCardProp } from '../../types/props'
import { ProductInCart } from '../../types/cart'

const ProductCard = ({ product }: ProductCardProp) => {
    const productToAdd: ProductInCart = {
        product,
        quantity: 1
    }
    const onNavigate = () => {
        window.open(`/products/${product.id}`)
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea
                onClick={onNavigate}>
                <CardMedia
                    component="img"
                    alt={product.title}
                    height="180"
                    image={product.images[0]}
                />
            </CardActionArea>
            <CardContent>
                <Grid container alignItems={'center'} display={{ xs: 'none', md: 'flex' }}>
                    <Grid item xs={9}>
                        <h6>
                            {product.title}
                        </h6>
                        <sub>
                            {product.category.name}
                        </sub>
                    </Grid>
                    <Grid item xs={3}>
                        <AddToCardBtn product={productToAdd} />
                    </Grid>
                </Grid>
                <Box display={{ xs: 'block', md: 'none' }}>
                    <Box>
                        <h6>
                            {product.title}
                        </h6>
                        <sub>
                            {product.category.name}
                        </sub>
                    </Box>
                    <Box>
                        <AddToCardBtn product={productToAdd} />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default ProductCard