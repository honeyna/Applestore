import React, { useState, useEffect } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'

import { Container, Row } from 'reactstrap'

import '../styles/shop.css'

const Airpods = () => {
    const [airpodsProducts, setAirpodsProducts] = useState([])

    useEffect(() => {
        const filteredairpodsProducts = products.filter(item => item.category === 'AirPods')

        setAirpodsProducts(filteredairpodsProducts)
    }, [])

    return (
        <Helmet title='AirPods'>
            <CommonSection title='AirPods' />

            <section className="trending_products">
                <Container>
                    <Row>
                        <ProductsList data={airpodsProducts} />
                    </Row>
                </Container>
            </section> 
        </Helmet>
    )
}

export default Airpods
