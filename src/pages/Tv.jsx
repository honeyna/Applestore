import React, { useState, useEffect } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'

import { Container, Row } from 'reactstrap'

import '../styles/shop.css'

const Tv = () => {
    const [tvProducts, setTVProducts] = useState([])

    useEffect(() => {
        const filteredtvProducts = products.filter(item => item.category === 'TV')

        setTVProducts(filteredtvProducts)
    }, [])

    return (
        <Helmet title='TV & HOME'>
            <CommonSection title='TV & HOME' />

            <section className="trending_products">
                <Container>
                    <Row>
                        <ProductsList data={tvProducts} />
                    </Row>
                </Container>
            </section> 
        </Helmet>
    )
}

export default Tv
