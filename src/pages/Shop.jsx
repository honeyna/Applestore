import React, { useState } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import ProductsList from '../components/UI/ProductsList'

import products from '../assets/data/products'

import { Container, Row, Col } from 'reactstrap'

import '../styles/shop.css'

const Shop = () => {
    const [productsData, setProducstsData] = useState(products)

    const handleFilter = (e) => {
        const filterValue = e.target.value
        if(filterValue === 'Mac'){
            const filteredProducts = products.filter(item => item.category === 'Mac')

            setProducstsData(filteredProducts)
        }
        if(filterValue === 'iPad'){
            const filteredProducts = products.filter(item => item.category === 'iPad')

            setProducstsData(filteredProducts)
        }
        if(filterValue === 'iPhone'){
            const filteredProducts = products.filter(item => item.category === 'iPhone')

            setProducstsData(filteredProducts)
        }
        if(filterValue === 'Watch'){
            const filteredProducts = products.filter(item => item.category === 'Watch')

            setProducstsData(filteredProducts)
        }
        if(filterValue === 'AirPods'){
            const filteredProducts = products.filter(item => item.category === 'AirPods')

            setProducstsData(filteredProducts)
        }
        if(filterValue === 'TV'){
            const filteredProducts = products.filter(item => item.category === 'TV')

            setProducstsData(filteredProducts)
        }
    }

    const handleSearch = (e) => {
        const searchTerm = e.target.value

        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        setProducstsData(searchedProducts)
    }

    return (
        <Helmet title='All Products'>
            <CommonSection title='Products' />

            <section>
                <Container>
                    <Row>
                        <Col>
                            <div className="filter_widget">
                                <select onChange={handleFilter}>
                                    <option>Category</option>
                                    <option value="Mac">Mac</option>
                                    <option value="iPad">iPad</option>
                                    <option value="iPhone">iPhone</option>
                                    <option value="Watch">Watch</option>
                                    <option value="AirPods">AirPods</option>
                                    <option value="TV">TV & Home</option>
                                </select>
                            </div>
                        </Col>
                        <Col>
                            <div className="search_box">
                                <input 
                                    type="text" 
                                    placeholder='검색하세요.' 
                                    onChange={handleSearch}
                                    autofocus="autofocus"
                                />
                                <span>
                                    <i class="ri-search-2-line"></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        {
                            productsData.length === 0? <h1 className='text-center fs-4'>The page you’re looking<br/> for can’t be found.</h1> : <ProductsList data={productsData} />
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Shop
