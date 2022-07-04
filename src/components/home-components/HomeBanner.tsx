import Box from '@mui/material/Box'

import WhyUs from './WhyUs'

const HomeBanner = () => {
    return (
        <Box className="banner" role='banner'>
            <Box className='banner__body'>
                <h4>Only needed Ecommerce platform ever</h4>
                <h1>Beyond your expectations</h1>
                <hr />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam eget turpis ut enim faucibus faucibus.
            </Box>
            <WhyUs />
        </Box>
    )
}

export default HomeBanner