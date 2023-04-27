import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import ProductsList from '../components/UI/ProductsList'
import { cartActions } from '../redux/slices/cartSlice'

import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'

import '../styles/product-details.css'

const ProductDetails = () => {
    const [tab, setTab] = useState('desc')
    const dispatch = useDispatch()

    const {id} = useParams()
    const product = products.find(item => item.id === id)

    const {
        imgUrl, 
        productName, 
        price, 
        avgRating, 
        reviews, 
        description, 
        shortDesc,
        category
    } = product

    const relatedProducts = products.filter(item => item.category === category)

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                image: imgUrl,
                productName,
                price,
            })
        )

        toast.success('Product add successfully')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    return (
        <Helmet title={productName}>
            <CommonSection title={productName} />

            <section className='p-0'>
                <Container>
                    <Row className='mt-5 justify-content-between'>
                        <Col lg='4'>
                            <img src={imgUrl} alt="" />
                        </Col>
                        <Col lg='7'>
                            <div className="product_details">
                                <h2 className='mb-5'>{productName}</h2>
                                <div className='d-flex align-items-center justify-content-between gap-5'>
                                    <span className='product_price'>${price}</span>
                                    <span>Category: {category.toUpperCase()}</span>
                                </div>
                                <div className="product_rating d-flex align-items-center">
                                    <div>
                                        <span>
                                            <i class="ri-star-s-fill"></i>
                                        </span>
                                        <span>
                                            <i class="ri-star-s-fill"></i>
                                        </span>
                                        <span>
                                            <i class="ri-star-s-fill"></i>
                                        </span>
                                        <span>
                                            <i class="ri-star-s-fill"></i>
                                        </span>
                                        <span>
                                            <i class="ri-star-half-s-fill"></i>
                                        </span>
                                    </div>
                                    <p>(<span>{avgRating}</span> ratings)</p>
                                </div>
                                <p className='mt-4 mb-4'>{shortDesc}</p>
                                <motion.button 
                                    whileTap={{scale: 1.2}} 
                                    className='product_btn' 
                                    onClick={addToCart}
                                >
                                    Buy Now
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="tab_wrap d-flex align-items-center gap-5">
                                <h6 className={`${tab} === 'desc' ? 'active_tab' : ''`} onClick={() => setTab('desc')}>Description</h6>
                                <h6 className={`${tab} === 'rev' ? 'active_tab' : ''`} onClick={() => setTab('rev')}>Reviews ({reviews.length})</h6>
                            </div>
                            {
                                tab === 'desc' ? (<div className="tab_content mt-5">
                                <p>{description}</p>
                                </div>) : (<div className='product_review mt-5'>
                                    <div className="review_wrap">
                                        <ul className='p-0'>
                                            {
                                                reviews.map((item, index) => 
                                                    <li key={index} className='mb-4'>
                                                        <h6>Jone</h6>
                                                        (<span>{item.rating} rating</span>)
                                                        <p>{item.text}</p>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>)
                            }
                        </Col>

                        <Col lg='12' className='mt-5'>
                            <h2 className="relate_title">
                                You might also like
                            </h2>
                        </Col>

                        <ProductsList data={relatedProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default ProductDetails
