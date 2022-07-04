import HomeBanner from "../components/home-components/HomeBanner"
import Collection from "../components/home-components/Collection"
import Box from "@mui/material/Box"

const Home = () => {
  return (
    <Box>
      <HomeBanner />
      <Collection />
    </Box>
  )
}

export default Home