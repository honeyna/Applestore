import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { cartActions } from '../redux/slices/cartSlice'

import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'

import '../styles/cart.css'

const Cart = () => {
    const cartItems =useSelector((state) => state.cart.cartItems)

    const totalAmount = useSelector((state) => state.cart.totalAmount)

    return (
        <Helmet title='Cart'>
            <CommonSection title="Shopping Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg='9' className='mb-5'>
                            {
                                cartItems.length === 0 ? (
                                    <h2 className='fs-4 text-center'>No item added to the cart</h2>
                                ) : (
                                    <table className='table bordered'>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Pirce</th>
                                                <th>Qty</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                cartItems.map((item, index) => (
                                                    <Tr item={item} key={index} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                )
                            }
                        </Col>
                        <Col lg='3'>
                            <div>
                                <h6 className='d-flex fs-3 fw-bold align-items-center justify-content-between'>
                                    Subtotal
                                    <span>${totalAmount}</span>
                                </h6>
                            </div>
                            <p className='taxes mt-2 mb-2'>taxes and-shipping will calculate in checkout</p>
                            <div className='mt-5'>
                                <button className='shop_btn w-100'>
                                    <Link to='/checkout'>
                                        Checkout
                                    </Link>
                                </button>
                                <button className='shop_btn w-100 mt-2'>
                                    <Link to='/shop'>
                                        Continue Shopping
                                    </Link>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

const Tr = ({item}) => {
    const dispatch = useDispatch()

    const deletProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }

    return (
        <>
            <tr>
                <td><img src={item.imgUrl} alt={item.productName} /></td>
                <td>{item.productName}</td>
                <td>${item.price}</td>
                <td>{item.quantity}px</td>
                <td>
                    <motion.i 
                        whileTap={{scale: 1.2}} 
                        onClick={deletProduct}
                        class="ri-delete-bin-line"
                    ></motion.i>
                </td>
            </tr>
        </>
    )
}

export default Cart
