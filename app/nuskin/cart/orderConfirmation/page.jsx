import Link from 'next/link'
import './confirmation.css'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="container">
                <div className="order-confirmation-container">
                    <div data-testid="order-congrats-text" className=" order-congrats-text font-weight-bold text-dark row no-gutters">
                        YOU ROCK!
                    </div>
                    <div className="order-congrats-text font-weight-bold text-dark row no-gutters">
                        <label data-testid="confirmation-thank-you-message">THANK YOU FOR SHOPPING Nu Skin.</label>
                    </div>
                    <div data-testid="qa-order-confirmation-id" className="order-id py-3 py-sm-4 border-bottom text-dark row no-gutters">
                        <a className="disable-order-id" href="/us/en#">
                            Order<span className="order-no">#</span>
                            <span>E172980473047397</span>
                        </a>
                    </div>
                    <div className="order-placed-email-container my-lg-4 my-3 p-0 col">
                        <p className="order-placed-text font-weight-bold mb-2">Your order has been placed. You will receive an email confirmation shortly.</p>
                    </div>
                    <Link href="/nuskin/cart" className="mb-4 continue-shopping btn btn-primary">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </section>
    )
}
