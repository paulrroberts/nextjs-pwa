import Link from 'next/link'
import './checkout.css'

export default function Page() {
    return (
        <div class="checkout-container">
            <div class="checkout-sections">
                <div class="checkout-section">
                    <div class="section-header">
                        <span>✔</span> SELECT SHIP TO
                        <button class="toggle-section">+</button>
                    </div>
                    <div class="section-content">
                        <p>Paul Roberts</p>
                        <p>75 W Center St, Provo, UT, US, 84601-4432</p>
                        <p>proberts@nuskin.com</p>
                    </div>
                </div>

                <div class="checkout-section">
                    <div class="section-header">
                        <span>✔</span> SHIPPING METHOD
                        <button class="toggle-section">+</button>
                    </div>
                    <div class="section-content">
                        <p>Standard (7-10 Business Day) $5.99</p>
                    </div>
                </div>

                <div class="checkout-section">
                    <div class="section-header">
                        <span>✔</span> BILLING AND PAYMENT METHOD
                        <button class="toggle-section">+</button>
                    </div>
                    <div class="section-content">
                        <p>
                            <svg width="40" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M37.5.012a2.5 2.5 0 0 1 2.5 2.5v20a2.5 2.5 0 0 1-2.5 2.5h-35a2.5 2.5 0 0 1-2.5-2.5v-20a2.5 2.5 0 0 1 2.5-2.5h35z"
                                    fill="#F6F7F7"
                                ></path>
                                <path
                                    d="M37.5.012a2.5 2.5 0 0 1 2.5 2.5v20a2.5 2.5 0 0 1-2.5 2.5h-35a2.5 2.5 0 0 1-2.5-2.5v-20a2.5 2.5 0 0 1 2.5-2.5h35zm0 1.25h-35c-.672 0-1.22.53-1.249 1.195l-.001.055v20c0 .672.53 1.22 1.196 1.248l.054.002h35c.672 0 1.22-.53 1.249-1.196l.001-.054v-20c0-.672-.53-1.22-1.196-1.25H37.5z"
                                    fill="#CED0D0"
                                ></path>
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="m18.983 7.918-1.955 9.188h-2.364l1.956-9.188h2.363zm9.944 5.933 1.244-3.45.716 3.45h-1.96zm2.637 3.255h2.186l-1.908-9.188h-2.017c-.454 0-.837.265-1.007.674l-3.546 8.514h2.481l.493-1.372h3.032l.286 1.372zm-6.17-3c.011-2.425-3.333-2.559-3.31-3.642.007-.33.319-.68 1.002-.77.338-.044 1.272-.078 2.33.412l.415-1.949a6.32 6.32 0 0 0-2.21-.407c-2.337 0-3.981 1.25-3.994 3.037-.016 1.323 1.173 2.06 2.069 2.501.92.45 1.23.739 1.226 1.142-.007.617-.735.888-1.415.899-1.188.019-1.878-.323-2.427-.58l-.428 2.013c.551.255 1.57.477 2.628.488 2.483 0 4.107-1.233 4.115-3.144zm-9.789-6.188-3.83 9.188H9.279L7.393 9.773c-.114-.451-.214-.617-.561-.807-.568-.31-1.507-.6-2.332-.782l.056-.266h4.022c.512 0 .973.343 1.09.937l.995 5.317 2.46-6.254h2.482z"
                                    fill="#002297"
                                ></path>
                                <defs>
                                    <linearGradient id="a" x1="4.5" y1="12.5" x2="33.75" y2="12.5" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#012E88"></stop>
                                        <stop offset="1" stop-color="#174489"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>{' '}
                            Visa - **** 4242
                        </p>
                    </div>
                </div>
            </div>

            <div class="order-side-panel">
                <div class="promo-code-section">
                    <div class="promo-code-input">
                        <input type="text" placeholder="Promo code" />
                        <button class="apply-btn">Apply</button>
                    </div>
                </div>

                <div class="order-summary">
                    <h3>One-time Purchase</h3>
                    <div class="order-item">
                        <p>ageLOC® Youth Anti-aging Supplement</p>
                        <p>Quantity: 1</p>
                        <p>$169.00</p>
                    </div>
                    <div class="order-item">
                        <p>Lifepak® Nano Anti-aging Multivitamin</p>
                        <p>Quantity: 1</p>
                        <p>$225.00</p>
                    </div>

                    <h3>ORDER SUMMARY</h3>
                    <div class="summary-details">
                        <p>One time subtotal $394.00</p>
                        <p>Shipping $5.99</p>
                        <p>Shipping Discount -$3.00</p>
                        <p>Tax $11.82</p>
                        <h3>Grand Total $408.81</h3>
                    </div>
                    <label>
                        <input type="checkbox" /> Gift Receipt
                    </label>
                    <Link type="button" href="/cart/orderConfirmation" class="submit-order">
                        Submit Order
                    </Link>
                </div>
            </div>
        </div>
    )
}
