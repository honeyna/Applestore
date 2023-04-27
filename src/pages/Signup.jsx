import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'

import '../styles/login.css'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Helmet title='Signup'>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                            <h3 className='fw-bold mb-5'>Signup</h3>
                            <Form className='auth_form'>
                                <FormGroup className='form_group'>
                                    <input 
                                        type="text" 
                                        placeholder='Username' 
                                        value={username} 
                                        onChange={(e) => setUsername(e.target.value)} 
                                    />
                                </FormGroup>
                                <FormGroup className='form_group'>
                                    <input 
                                        type="email" 
                                        placeholder='Enter your email' 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </FormGroup>
                                <FormGroup className='form_group'>
                                    <input 
                                        type="password" 
                                        placeholder='Enter your password'
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                    />
                                </FormGroup>
                                <button type='submit' className="auth_btn">
                                    Create an Account
                                </button>
                                <p>
                                    Already have an account?
                                    <Link to='/login'>
                                        Login
                                    </Link>
                                </p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Signup
