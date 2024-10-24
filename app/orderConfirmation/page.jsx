import Link from 'next/link'
import './confirmation.css'

export default function Page() {
    return (
        <section id="id-app-wrapper" class="app-wrapper position-relative">
            <div class="container">
                <div class="order-confirmation-container">
                    <div data-testid="order-congrats-text" class=" order-congrats-text font-weight-bold text-dark row no-gutters">
                        YOU ROCK!
                    </div>
                    <div class="order-congrats-text font-weight-bold text-dark row no-gutters">
                        <label data-testid="confirmation-thank-you-message">THANK YOU FOR SHOPPING Nu Skin.</label>
                    </div>
                    <div data-testid="qa-order-confirmation-id" class="order-id py-3 py-sm-4 border-bottom text-dark row no-gutters">
                        <a class="disable-order-id" href="/us/en#">
                            Order<span class="order-no">#</span>
                            <span>E172980473047397</span>
                        </a>
                    </div>
                    <div class="order-placed-email-container my-lg-4 my-3 p-0 col">
                        <p class="order-placed-text font-weight-bold mb-2">Your order has been placed. You will receive an email confirmation shortly.</p>
                    </div>
                    <Link href="/cart" class="mb-4 continue-shopping btn btn-primary">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </section>
    )
}
