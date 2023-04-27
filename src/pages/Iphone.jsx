import React, { useState, useEffect } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'

import { Container, Row } from 'reactstrap'

import '../styles/shop.css'

const Iphone = () => {
    const [iphoneProducts, setIphoneProducts] = useState([])

    useEffect(() => { 
        const filterediphoneProducts = products.filter(item => item.category === 'iPhone')

        setIphoneProducts(filterediphoneProducts)
    }, [])

    return (
        <Helmet title='iPhone'>
            <CommonSection title='iPhone' />

            <section className="trending_products">
                <Container>
                    <Row>
                        <ProductsList data={iphoneProducts} />
                    </Row>
                </Container>
            </section> 
        </Helmet>
    )
}

export default Iphone
