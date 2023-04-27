import React, { useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Container, Row } from 'reactstrap'

import './header.css'

const nav_links = [
    {
        path:'shop',
        display: 'All'
    },
    {
        path:'mac',
        display: 'Mac'
    },
    {
        path:'ipad',
        display: 'iPad'
    },
    {
        path:'iphone',
        display: 'iPhone'
    },
    {
        path:'watch',
        display: 'Watch'
    },
    {
        path:'airpods',
        display: 'AirPods'
    },
    {
        path:'tv&home',
        display: 'TV & Home'
    },
]

const Header = () => {
    const headerRef = useRef(null)

    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const menuRef = useRef(null)
    const navigate = useNavigate()

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header')
            } else {
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc()

        return () => window.removeEventListener('scroll', stickyHeaderFunc)
    })

    const menuToggle = () => menuRef.current.classList.toggle('active_menu')

    const navigateToCart = () => {
        navigate('/cart')
    }

    const navigateToLogin = () => {
        navigate('/login')
    }

    return (
        <header className='header' ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav_wrap">
                        <div className="logo">
                            <NavLink to='/home'className='d-flex align-items-center'>
                                <span>
                                    <i class="ri-apple-fill"></i>
                                </span>
                                <div>
                                    <h1>Apple Store</h1>
                                </div>
                            </NavLink>
                        </div>

                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            <ul className="menu p-0">
                                {
                                    nav_links.map((item, index) => (
                                        <li className="nav_item" key={index}>
                                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''}>
                                                {item.display}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="nav_icons">
                            <span className='user_icon' onClick={navigateToLogin}>
                                <i class="ri-user-3-line"></i>
                            </span>
                            <span className='cart_icon' onClick={navigateToCart}>
                                <i class="ri-shopping-bag-line"></i>
                                <span className='badge'>{totalQuantity}</span>
                            </span>
                            <div className="mobile_menu">
                            <span onClick={menuToggle}>
                                <i class="ri-menu-fill"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header
