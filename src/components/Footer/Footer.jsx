import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

import './footer.css'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg='4' md='6' className='mb-4'>
                        <div className="logo">
                            <div>
                                <h1 className='text-white'>Apple Store</h1>
                            </div>
                        </div>
                        <p className="footer_text mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quas illo cupiditate doloribus eos aperiam recusandae atque commodi fuga assumenda.
                        </p>
                    </Col>

                    <Col lg='3' md='3' className='mb-4'>
                        <div className="footer_quick-links">
                            <h4 className="quick_links-title">Top Categories</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>
                                        Mac
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>
                                        iPad
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>
                                        iphone
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>
                                        AirPods
                                    </Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='2' md='3' className='mb-4'>
                        <div className="footer_quick-links">
                            <h4 className="quick_links-title">Useful Links</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/all'>
                                        Shop
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>
                                        Cart
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>
                                        Login
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>
                                        Privacy Policy
                                    </Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='3' md='4'>
                    <div className="footer_quick-links">
                            <h4 className="quick_links-title">Contact</h4>
                            <ListGroup className='footer_contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <i class="ri-map-pin-line"></i>
                                    </span>
                                    <p>123, ZindaBa, Sylhet, Bangladesh</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <i class="ri-phone-line"></i>
                                    </span>
                                    <p>+8201093489119</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <i class="ri-mail-line"></i>
                                    </span>
                                    <p>yundutls@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='12'>
                        <p className="footer_copyright">
                            COPYRIGHT {year} developed by YUNA PARK. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
