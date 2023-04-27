import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify';

import { Col } from 'reactstrap'
import { motion } from 'framer-motion'

import '../../styles/product-card.css'

const ProductCard = ({ item }) => {
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl
            })
        )

        toast.success('제품 추가 성공')
    }

    return (
        <Col lg='3' md='6' className='mb-4'>
            <div className="product_item">
                <Link to={`/shop/${item.id}`}>
                    <div className="product_img">
                        <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt={item.productName} />
                    </div>
                </Link>
                <div className='product_info'>
                    <h3 className="product_name">
                        <Link to={`/shop/${item.id}`}>
                            {item.productName}
                        </Link>
                    </h3>
                    <span>{item.category}</span>
                </div>
                <div className="product_card-bottom d-flex align-items-center justify-content-between">
                    <span className="price">${item.price}</span>
                    <motion.span whileTap={{scale: 1.2}} onClick={addToCart}>
                        <i class="ri-add-line"></i>
                    </motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard
