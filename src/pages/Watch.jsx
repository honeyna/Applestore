import React, { useState, useEffect } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'

import { Container, Row } from 'reactstrap'

import '../styles/shop.css'

const Watch = () => {
    const [watchProducts, setWatchProducts] = useState([])

    useEffect(() => {
        const filteredwatchProducts = products.filter(item => item.category === 'Watch')

        setWatchProducts(filteredwatchProducts)
    }, [])

    return (
        <Helmet title='Watch'>
            <CommonSection title='Watch' />

            <section className="trending_products">
                <Container>
                    <Row>
                        <ProductsList data={watchProducts} />
                    </Row>
                </Container>
            </section> 
        </Helmet>
    )
}

export default Watch
