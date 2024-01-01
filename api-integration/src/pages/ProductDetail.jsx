import { Box, Button } from '@mui/material'
import axios from 'axios'
import Chip from '@mui/joy/Chip';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState(null)
    const [loading, setLoading] = useState(false)
    const params = useParams()
    useEffect(() => {
        getProductDetails()
    }, [])
    const getProductDetails = async () => {
        try {
            setLoading(false)
            const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
            setProductDetail(response.data)
            setLoading(true)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(productDetail)
    const [amount, setAmount] = useState(1);
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <Button onClick={() => navigate('/')} sx={{ marginLeft: 2, marginTop: 3 }} color='success'><ArrowBackIcon />Back</Button>
            {loading ?
                <Box sx={{
                    marginTop: 8
                }}>
                    <div style={{ textAlign: 'center' }} className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
                        <div style={{ justifyContent: "center", alignItems: 'center' }} className='flex flex-col gap-1 lg:w-2/4'>
                            <img width={'60%'} src={productDetail?.image} alt="" />

                        </div>
                        {/* ABOUT */}
                        <div className='flex flex-col gap-4 lg:w-2/4'>
                            <div>
                                <Chip color="success"
                                    onClick={function () { }}
                                    size="lg"
                                    variant="solid">
                                    {productDetail?.category.toUpperCase()}
                                </Chip>
                                <span className=' text-violet-600 font-semibold'></span>
                                <h1 className='text-3xl font-bold me-10 ms-10'>{productDetail?.title}</h1>
                                <Chip sx={{ mt: 2 }} color="primary"
                                    onClick={function () { }}
                                    size="md"
                                    variant="soft">
                                    Ratings: {productDetail?.rating.rate}
                                </Chip>
                            </div>

                            <p className='text-gray-700 me-10 ms-10'>{productDetail?.description}</p>

                            <h6 className='text-2xl font-semibold'>$ {productDetail?.price}</h6>
                            <div style={{ justifyContent: 'center' }} className='flex flex-row items-center gap-12'>
                                <div className='flex flex-row items-center'>
                                    <button className='bg-gray-200 py-2 px-4 rounded-lg text-green-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                                    <span className='py-4 px-6 rounded-lg'>{amount}</span>
                                    <button className='bg-gray-200 py-2 px-3 rounded-lg text-green-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                                </div>
                                <Button color="success" sx={{ px: 3 }} variant='contained'>Add to Cart</Button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </Box> : <Loader />}
        </>
    )
}

export default ProductDetail