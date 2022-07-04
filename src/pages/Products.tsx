import { useState } from 'react'
import Grid from '@mui/material/Grid'

import ProductCard from '../components/product-component/ProductCard'
import { useAppDispatch, useAppSelector } from '../hooks/storeHook'
import CustomPagination from '../components/CustomPage'
import Box from '@mui/material/Box'
import { useDispatch } from 'react-redux'
import { getProductByCategory } from '../redux/reducer/productReducer'

const Products = () => {
  const products = useAppSelector(state => state.productReducer.filteredProducts)
  const categories = useAppSelector(state => state.categoryReducer)
  const [perPage, setPerPage] = useState(20)
  const [page, setPage] = useState(1)
  const dispatch = useAppDispatch()
  window.scroll({ top: 0 })
  const paginationProducts = products.slice((page - 1) * perPage, page * perPage)
  const count = ((products.length) % perPage) > 0 ? Math.floor((products.length) / perPage) + 1 : ((products.length) / perPage)
  return (
    <Box className='products'>
      <div className='products__categories'>
        {categories.length > 0 && categories.map(category => (
          <div
            key={category.id}
            onClick={() => dispatch(getProductByCategory(category.id))}
          >{category.name}</div>
        ))}
      </div>
      <Grid container spacing={2}>
        {products.length > 0 && paginationProducts.map(product => (
          <Grid key={product.id} item xs={4} >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <CustomPagination count={count} setPage={setPage} />
    </Box>
  )
}

export default Products