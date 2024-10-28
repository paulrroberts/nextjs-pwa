import Link from 'next/link'
import './cart.css'
import Image from 'next/image'

export default function Cart() {
    return (
        <div className="cart-container">
            <div className="cart">
                <div className="cart-header">
                    <input type="text" placeholder="Product Search Quick-Add" className="search-bar" />
                </div>

                <div className="cart-items">
                    <div className="cart-item">
                        <Image src="/products/bodybar.png" alt="Body Bar" className="product-image" width={100} height={100} />
                        <div className="product-details">
                            <h3>Body Bar (5 pack)</h3>
                            <p>SKU: 0110354</p>
                            <label>
                                <input type="checkbox" /> Subscribe
                            </label>
                            <div className="quantity">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <p>Price: $60.00</p>
                            <button className="save-for-later">Save For Later</button>
                        </div>
                        <div className="price-details">
                            <p>$60.00</p>
                            <p>SV: 35.15</p>
                        </div>
                    </div>

                    <div className="cart-item">
                        <Image src="/products/shampoo.png" alt="ReNu Smoothing Shampoo" className="product-image" width={100} height={100} />
                        <div className="product-details">
                            <h3>ReNu Smoothing Shampoo</h3>
                            <p>SKU: 01002368</p>
                            <label>
                                <input type="checkbox" /> Subscribe
                            </label>
                            <div className="quantity">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <p>Price: $49.00</p>
                            <button className="save-for-later">Save For Later</button>
                        </div>
                        <div className="price-details">
                            <p>$49.00</p>
                            <p>SV: 32.30</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="order-summary">
                <h2>Order Summary</h2>
                <p>Order Total</p>
                <p>One time subtotal</p>
                <div className="summary-details">
                    <p>Subtotal 2 items</p>
                    <p>Estimated Total</p>
                    <h3>$109.00</h3>
                </div>
                <p>Total SV: 67.45</p>
                <Link type="button" href="/cart/checkout" className="checkout-btn">
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
