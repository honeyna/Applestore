import React, { useState, useEffect } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'

import { Container, Row } from 'reactstrap'

import '../styles/shop.css'

const Ipad = () => {
    const [ipadProducts, setIpadProducts] = useState([])

    useEffect(() => {
        const filteredipadProducts = products.filter(item => item.category === 'iPad')

        setIpadProducts(filteredipadProducts)
    }, [])

    return (
        <Helmet title='iPad'>
            <CommonSection title='iPad' />

            <section className="trending_products">
                <Container>
                    <Row>
                        <ProductsList data={ipadProducts} />
                    </Row>
                </Container>
            </section> 
        </Helmet>
    )
}

export default Ipad
