import Button from '@mui/material/Button'
import StorefrontIcon from '@mui/icons-material/Storefront'
import { useNavigate } from 'react-router-dom'

const BuyNowBtn = () => {
    const navigate = useNavigate()
    return (
        <Button
            variant='outlined'
            startIcon={<StorefrontIcon />}
            size='small'
            onClick = {()=>navigate('')}
        >
        </Button>
    )
}

export default BuyNowBtn