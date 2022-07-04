import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { CustomPaginationProp } from '../types/props'

const CustomPagination = ({ count, setPage }:CustomPaginationProp) => {
    return (
        <Pagination
            count={count}
            color="primary"
            renderItem={(item) => (
                <PaginationItem
                    components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                />
            )}
            onChange={(event, value)=>setPage(value)}
        />
    )
}

export default CustomPagination