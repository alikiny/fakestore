import { Box, TextField } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import Avatar from '@mui/material/Avatar'

const Icons = [FacebookIcon, YouTubeIcon, TwitterIcon, InstagramIcon]

const Footer = () => {
    return (
        <footer>
            <section role='banner'>
                <p>Subscribe to get more value</p>
                <sub>Get access to early offers, and cancel at anytime</sub>
                <form>
                    <TextField
                        variant='filled'
                        color='success'
                        placeholder='Enter your email'
                        aria-label='Enter your email' />
                </form>
            </section>
            <section role='footer'>
                <img src='images/shopping-cart.png' alt='' width={60} />
                <h1>SHOPEE</h1>
                <nav>
                    <h4>Service hours</h4>
                    <ul>
                        <li>Monday to Friday : 09:00am to 07:00pm</li>
                        <li>Saturday : 10:30am to 04:00pm</li>
                        <li>Sunday : On Demand</li>
                    </ul>
                    <h4>We are social</h4>
                    <Box className='footer__icons'>
                        {
                            Icons.map((Icon, index) => (
                                <Avatar key={index}><Icon /></Avatar>
                            ))
                        }
                    </Box>
                </nav>
                <section>
                    <h4>Contact us</h4>
                    <p>67B Alexanderkatu, 02300 Helsinki</p>
                    <a href="mailto:service@shopee.com">service@shopee.com</a>
                    <Avatar>
                        <LocalPhoneIcon />
                    </Avatar>
                </section>
            </section>


        </footer>
    )
}

export default Footer