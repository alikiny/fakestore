import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from "@mui/material/CardActionArea";
import { useAppSelector } from "../../hooks/storeHook";
import { useNavigate } from "react-router-dom";

const Collection = () => {
    const categories = useAppSelector(state => state.categoryReducer)
    const navigate = useNavigate()
    return (
        <Box className='home__collection'>
            <h2>
                Browse the latest collection
            </h2>
            <Box className='home__collection__grid'>
                {categories?.map((item, index) => (
                    <Card key={index}
                    onClick={()=>navigate(`/products?category=${item.id}`)}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="240"
                                image={item.image}
                                alt={item.name}
                            />
                            <CardContent>
                                <h4>
                                    {item.name}
                                </h4>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))
                }
            </Box>
        </Box>
    )
}

export default Collection