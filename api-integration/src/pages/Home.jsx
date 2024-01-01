import axios from 'axios'
import { useEffect, useState } from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

const Home = () => {
  const [productData, setProductData] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      setLoading(false)
      const response = await axios.get('https://fakestoreapi.com/products')
      setProductData(response.data)
      setLoading(true)
    } catch (error) {
      // setLoading(true)
      console.log(error)
    }
  }
  // console.log(productData)
  return (
    <>
      <Header />
      {loading ?
      <Box sx={
        {
          mt:4,
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: 'center',
          alignItems: 'center'
        }
      }>
        {
          productData?.map((e, i) => (
            <Card key={i} sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
              <CardOverflow>
                <AspectRatio sx={{ minWidth: 200 }}>
                  <img
                    src={e.image}
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>

              </CardOverflow>
              <CardContent>
                <Typography level="body-xs">{e.title}</Typography>
                <Chip color="success"
                  onClick={function () { }}
                  size="sm"
                  variant="solid">
                  {e?.rating.rate}
                </Chip>
                <Typography
                  level="title-lg"
                  sx={{ mt: 1, fontWeight: 'xl' }}
                  endDecorator={
                    <Chip component="span" size="sm" variant="soft" color="success">
                      Lowest price
                    </Chip>
                  }
                >
                  {e?.price} $
                </Typography>
                <Typography level="body-sm">
                  {e?.description.slice(0, 50)}
                </Typography>
                <Typography level="body-sm">
                  <Chip component="span" size="sm" variant="soft" color="primary">
                    {e?.category.toUpperCase()}
                  </Chip>
                </Typography>
              </CardContent>
              <CardOverflow>
                <Button color='success' onClick={() => navigate(`/productdetail/${e.id}`)} variant="solid" size="lg">
                  Add to cart
                </Button>
              </CardOverflow>
            </Card>
          ))
        }
      <Footer />
      </Box>
        : <Loader />}
    </>


  )
}

export default Home