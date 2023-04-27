import React, { useState, useEffect } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'

import { Container, Row } from 'reactstrap'

import '../styles/shop.css'

const Mac = () => {
    const [macProducts, setMacProducts] = useState([])
    // const [ipadProducts, setIpadProducts] = useState([])
    // const [iphoneProducts, setIphoneProducts] = useState([])
    // const [watchProducts, setWatchProducts] = useState([])
    // const [airpodsProducts, setAirpodsProducts] = useState([])

    useEffect(() => {
        const filteredmacProducts = products.filter(item => item.category === 'Mac')
        
        // const filteredipadProducts = products.filter(item => item.category === 'iPad')
        
        // const filterediphoneProducts = products.filter(item => item.category === 'iPhone')
        
        // const filteredwatchProducts = products.filter(item => item.category === 'Watch')
        
        // const filteredairpodsProducts = products.filter(item => item.category === 'AirPods')

        setMacProducts(filteredmacProducts)
        // setIpadProducts(filteredipadProducts)
        // setIphoneProducts(filterediphoneProducts)
        // setWatchProducts(filteredwatchProducts)
        // setAirpodsProducts(filteredairpodsProducts)
    }, [])

    return (
        <Helmet title='Mac'>
            <CommonSection title='Mac' />

            <section className="trending_products">
                <Container>
                    <Row>
                        <ProductsList data={macProducts} />
                    </Row>
                </Container>
            </section> 
        </Helmet>
    )
}

export default Mac
