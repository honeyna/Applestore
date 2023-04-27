import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'

import { Container, Row, Col } from 'reactstrap'

import watch from '../assets/images/hero_logo_apple_watch_series_8.png'

import '../styles/home.css'

const Home = () => {
    // const [macProducts, setMacProducts] = useState([])
    // const [ipadProducts, setIpadProducts] = useState([])
    // const [iphoneProducts, setIphoneProducts] = useState([])
    // const [watchProducts, setWatchProducts] = useState([])
    // const [airpodsProducts, setAirpodsProducts] = useState([])

    // useEffect(() => {
    //     const filteredmacProducts = products.filter(item => item.category === 'Mac')
        
    //     const filteredipadProducts = products.filter(item => item.category === 'iPad')
        
    //     const filterediphoneProducts = products.filter(item => item.category === 'iPhone')
        
    //     const filteredwatchProducts = products.filter(item => item.category === 'Watch')
        
    //     const filteredairpodsProducts = products.filter(item => item.category === 'AirPods')

    //     setMacProducts(filteredmacProducts)
    //     setIpadProducts(filteredipadProducts)
    //     setIphoneProducts(filterediphoneProducts)
    //     setWatchProducts(filteredwatchProducts)
    //     setAirpodsProducts(filteredairpodsProducts)
    // }, [])

    return (
        <Helmet title={'Home'}>
            <section className="module_section">
                <Container>
                    <Row>
                        <Col>
                            <div className="module_content">
                                <h2 className='text-align-center'>
                                    iPhone 14 Pro
                                </h2>
                                <h3 className='text-align-center'>
                                    Pro.Beyond.
                                </h3>
                                <button className='buy_btn'>
                                    <Link to='/shop/16'>
                                        Buy
                                    </Link>
                                    <span>
                                        <i class="ri-arrow-right-s-line"></i>
                                    </span>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="module_section">
                <Container>
                    <Row>
                        <Col>
                            <div className="module_content">
                                <h2>
                                    iPhone 14
                                </h2>
                                <h3>
                                    Two great sizes.<br />
                                    Now with a splash of yellow.
                                </h3>
                                <button className='buy_link_btn'>
                                    <Link to='/shop/17'>
                                        Buy
                                    </Link>
                                    <span>
                                        <i class="ri-arrow-right-s-line"></i>
                                    </span>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="module_section">
                <Container>
                    <Row>
                        <Col>
                            <div className="module_content">
                                <h2>
                                    <img src={watch} alt="" />
                                </h2>
                                <h3>
                                    A healthy leap ahead.
                                </h3>
                                <button className='buy_btn'>
                                    <Link to='/shop/20'>
                                        Buy
                                    </Link>
                                    <span>
                                        <i class="ri-arrow-right-s-line"></i>
                                    </span>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="homepage_section">
                <div className="hompage">
                    <Container>
                        <Row>
                            <Col>
                                <div className="homepage_content">
                                    <h2>
                                        MacBook Pro
                                    </h2>
                                    <h3>
                                        Supercharged by M2 Pro and M2 Max.
                                    </h3>
                                    <button className='buy_btn'>
                                        <Link to='/shop/04'>
                                            Buy
                                        </Link>
                                        <span>
                                            <i class="ri-arrow-right-s-line"></i>
                                        </span>
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="hompage">
                    <Container>
                        <Row>
                            <Col>
                                <div className="homepage_content">
                                    <h2>
                                        iPad
                                    </h2>
                                    <h3>
                                        Lovable.Drawable.Magical.
                                    </h3>
                                    <button className='buy_link_btn'>
                                        <Link to='/shop/13'>
                                            Buy
                                        </Link>
                                        <span>
                                            <i class="ri-arrow-right-s-line"></i>
                                        </span>
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="hompage">
                    <Container>
                        <Row>
                            <Col>
                                <div className="homepage_content">
                                    <h2>
                                        AirPods Pro
                                    </h2>
                                    <h3>
                                        Up to 2x more<br />
                                        Active Noise Cancellation.
                                    </h3>
                                    <button className='buy_btn'>
                                        <Link to='/shop/25'>
                                            Buy
                                        </Link>
                                        <span>
                                            <i class="ri-arrow-right-s-line"></i>
                                        </span>
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="hompage">
                    <Container>
                        <Row>
                            <Col>
                                <div className="homepage_content">
                                    <h2>
                                        HomePod
                                    </h2>
                                    <h3>
                                        Profound sound.
                                    </h3>
                                    <button className='buy_btn'>
                                        <Link to='/shop/27'>
                                            Buy
                                        </Link>
                                        <span>
                                            <i class="ri-arrow-right-s-line"></i>
                                        </span>
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </Helmet>
    )
}

export default Home
