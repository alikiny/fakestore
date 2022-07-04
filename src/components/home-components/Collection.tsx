import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from "@mui/material/CardActionArea";

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
];

const Collection = () => {
    return (
        <Box className='home__collection'>
            <h2>
                Browse the latest collection
            </h2>
            <Box className='home__collection__grid'>
                {itemData.map((item, index) => (
                    <Card key={index}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="240"
                                image={item.img}
                                alt={item.title}
                            />
                            <CardContent>
                                <h4>
                                    {item.title}
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