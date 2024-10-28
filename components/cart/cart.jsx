import Link from 'next/link'
import './cart.css'
import Image from 'next/image'

export default function Cart() {
    return (
        <div class="cart-container">
            <div class="cart">
                <div class="cart-header">
                    <input type="text" placeholder="Product Search Quick-Add" class="search-bar" />
                </div>

                <div class="cart-items">
                    <div class="cart-item">
                        <Image src="/products/bodybar.png" alt="Body Bar" class="product-image" width={100} height={100} />
                        <div class="product-details">
                            <h3>Body Bar (5 pack)</h3>
                            <p>SKU: 0110354</p>
                            <label>
                                <input type="checkbox" /> Subscribe
                            </label>
                            <div class="quantity">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <p>Price: $60.00</p>
                            <button class="save-for-later">Save For Later</button>
                        </div>
                        <div class="price-details">
                            <p>$60.00</p>
                            <p>SV: 35.15</p>
                        </div>
                    </div>

                    <div class="cart-item">
                        <Image src="/products/shampoo.png" alt="ReNu Smoothing Shampoo" class="product-image" width={100} height={100} />
                        <div class="product-details">
                            <h3>ReNu Smoothing Shampoo</h3>
                            <p>SKU: 01002368</p>
                            <label>
                                <input type="checkbox" /> Subscribe
                            </label>
                            <div class="quantity">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <p>Price: $49.00</p>
                            <button class="save-for-later">Save For Later</button>
                        </div>
                        <div class="price-details">
                            <p>$49.00</p>
                            <p>SV: 32.30</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="order-summary">
                <h2>Order Summary</h2>
                <p>Order Total</p>
                <p>One time subtotal</p>
                <div class="summary-details">
                    <p>Subtotal 2 items</p>
                    <p>Estimated Total</p>
                    <h3>$109.00</h3>
                </div>
                <p>Total SV: 67.45</p>
                <Link type="button" href="/cart/checkout" class="checkout-btn">
                    Checkout
                </Link>
                <div class="payment-options">
                    <button class="gpay">G Pay</button>
                    <button class="paypal">PayPal</button>
                    <p>Pay in 4 interest-free payments of $27.25. Learn more</p>
                    <button class="klarna">Klarna</button>
                </div>
            </div>
        </div>
    )
}
