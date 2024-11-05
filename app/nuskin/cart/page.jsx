'use client'

import Link from 'next/link'
import './cart.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { SiKuula } from 'react-icons/si'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const cartProducts = [
    {
        title: 'Body Bar (5 pack)',
        sku: '0110354',
        quantity: 1,
        price: 60.0,
        sv: 35.15,
        image: '/products/bodybar.png'
    },
    {
        title: 'ReNu Smoothing Shampoo',
        sku: '01002368',
        quantity: 1,
        price: 49.0,
        sv: 32.3,
        image: '/products/shampoo.png'
    }
]

export default function Page() {
    const [totalCartPrice, setTotalCartPrice] = useState(0)
    const [totalSv, setTotalSV] = useState(0)
    const [cartItems, setCartItems] = useState(cartProducts)

    useEffect(() => {
        const total = cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2) // Round to two decimal places
        setTotalCartPrice(parseFloat(total)) // Convert back to a number
        const totalSV = cartItems.reduce((acc, product) => acc + product.sv * product.quantity, 0).toFixed(2) // Round to two decimal places
        setTotalSV(totalSV)
    }, [cartItems])

    const handleQtyAdded = (sku) => {
        setCartItems((prevItems) => prevItems.map((item) => (item.sku === sku ? { ...item, quantity: item.quantity + 1 } : item)))
    }

    const handleQtySubtracted = (sku) => {
        setCartItems((prevItems) => prevItems.map((item) => (item.sku === sku ? { ...item, quantity: item.quantity - 1 } : item)))
    }

    return (
        <div className="cart-container">
            <div className="cart">
                <div className="cart-header">
                    <input type="text" placeholder="Product Search Quick-Add" className="search-bar" />
                </div>

                <div className="cart-items">
                    {cartItems.map((product) => (
                        <div className="cart-item" key={product.sku}>
                            <div className="product-details">
                                <div>
                                    <Image src={product.image} alt="Body Bar" className="product-image" width={100} height={100} />
                                </div>
                                <div>
                                    <h3>{product.title}</h3>
                                    <p>SKU: {product.sku}</p>
                                    <label>
                                        <input type="checkbox" /> Subscribe
                                    </label>
                                    <div className="quantity">
                                        <Button onClick={() => handleQtySubtracted(product.sku)}>
                                            <RemoveIcon />
                                        </Button>
                                        <span>{product.quantity}</span>
                                        <Button onClick={() => handleQtyAdded(product.sku)}>
                                            <AddIcon />
                                        </Button>
                                    </div>
                                    <p>Price: ${product.price}</p>
                                    <button className="save-for-later">Save For Later</button>
                                </div>
                            </div>
                            <div className="price-details">
                                <p>${(product.price * product.quantity).toFixed(2)}</p>
                                <p>SV: {(product.sv * product.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="order-summary">
                <p>Order Summary</p>
                <p>Order Total</p>
                {/* <p>One time subtotal</p> */}
                {/* <p>Subtotal 2 items</p> */}
                <div className="cart-summary-details">
                    <div>
                        <div className="font-semibold">Estimated Total</div>
                        <div className="font-semibold">${totalCartPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        <div className="font-semibold">Total SV:</div>
                        <div className="font-semibold">{totalSv}</div>
                    </div>
                </div>
                <Link type="button" href="/nuskin/cart/checkout" className="checkout-btn">
                    Checkout
                </Link>
                <div className="payment-options">
                    <button className="gpay">G Pay</button>
                    <button className="paypal">PayPal</button>
                    <p>Pay in 4 interest-free payments of $27.25. Learn more</p>
                    <button className="klarna">Klarna</button>
                </div>
            </div>
        </div>
    )
}
