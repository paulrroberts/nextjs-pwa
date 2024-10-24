import Link from 'next/link'
import './checkout.css'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="checkout-wrapper-container d-flex justify-content-center checkout-wrapper-container-flex-subs">
                <div className="px-0 px-md-3 py-0 py-md-3 w-100 m-0 row">
                    <div className="checkout-wrapper p-0 col-md-8 col-12">
                        <div>
                            <div no-gutters="true" className="accordion-block-wrapper  py-3 px-2 px-md-3 mb-3 checkout-accordion-wrapper ">
                                <button
                                    data-testid="qa-ship-title"
                                    aria-expanded="false"
                                    type="button"
                                    className="accordion-block-common-title-button justify-content-end d-flex bg-transparent p-0 border-0 align-items-center  btn btn-light btn-block btn-lg"
                                >
                                    <span className="accordion-block-text accordion-kit-text  flex-grow-1 flex-shrink-1 text-left text-capitalize  text-break">
                                        <div className="row no-gutters">
                                            <div className="d-flex justift-content-center align-items-center col-md-1 col-2">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 24 24"
                                                    className="text-success"
                                                    height="2rem"
                                                    width="2rem"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                </svg>
                                            </div>
                                            <div className="d-flex flex-column font-weight-bold col-md-11 col-10">
                                                <div className="mb-2 " aria-live="polite" aria-hidden="true">
                                                    SELECT SHIP TO
                                                </div>
                                                <span data-testid="qa-address" className="item-level-address font-weight-bold">
                                                    <div className="fname-bold-shiping">Paul Roberts</div>
                                                    <span className="fname-normal-shiping">75 W Center St, Provo, UT, US, 84601-4432</span>
                                                    <div className="fname-normal-shiping to-lower">proberts@nuskin.com</div>
                                                </span>
                                            </div>
                                        </div>
                                    </span>
                                    <div className="accordion-block-icon justify-content-center d-flex align-items-center ">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 512 512"
                                            style={{ opacity: 1 }}
                                            aria-label="downward arrow icon"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div id="collapse-text" className="accordion-block-collapse-section w-100 mt-3  collapse"></div>
                            </div>
                        </div>
                        <div>
                            <div no-gutters="true" className="accordion-block-wrapper  py-3 px-2 px-md-3 mb-3 checkout-accordion-wrapper ">
                                <button
                                    data-testid="qa-shipping-method-title"
                                    aria-expanded="false"
                                    type="button"
                                    className="accordion-block-common-title-button justify-content-end d-flex bg-transparent p-0 border-0 align-items-center  btn btn-light btn-block btn-lg"
                                >
                                    <span className="accordion-block-text accordion-kit-text  flex-grow-1 flex-shrink-1 text-left text-capitalize  text-break">
                                        <div className="row no-gutters">
                                            <div className="d-flex justift-content-center align-items-center col-md-1 col-2">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 24 24"
                                                    className="text-success"
                                                    height="2rem"
                                                    width="2rem"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                </svg>
                                            </div>
                                            <div className="d-flex flex-column font-weight-bold col-md-11 col-10">
                                                <div className="mb-2 " aria-live="polite" aria-hidden="true">
                                                    SHIPPING METHOD
                                                </div>
                                                <div className="font-weight-bold">Standard (7-10 Business Day) $5.99</div>
                                            </div>
                                        </div>
                                    </span>
                                    <div className="accordion-block-icon justify-content-center d-flex align-items-center ">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 512 512"
                                            style={{ opacity: 1 }}
                                            aria-label="downward arrow icon"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div id="collapse-text" className="accordion-block-collapse-section w-100 mt-3  collapse"></div>
                            </div>
                        </div>
                        <div>
                            <div no-gutters="true" className="accordion-block-wrapper  py-3 px-2 px-md-3 mb-3 checkout-accordion-wrapper ">
                                <button
                                    data-testid="qa-pay-title"
                                    aria-expanded="false"
                                    type="button"
                                    className="accordion-block-common-title-button justify-content-end d-flex bg-transparent p-0 border-0 align-items-center  btn btn-light btn-block btn-lg"
                                >
                                    <span className="accordion-block-text accordion-kit-text  flex-grow-1 flex-shrink-1 text-left text-capitalize  text-break">
                                        <div className="row no-gutters">
                                            <div className="d-flex justift-content-center align-items-center col-md-1 col-2">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 24 24"
                                                    className="text-success"
                                                    height="2rem"
                                                    width="2rem"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                </svg>
                                            </div>
                                            <div className="d-flex flex-column font-weight-bold col-md-11 col-10">
                                                <div className="mb-2 " aria-live="polite" aria-hidden="true">
                                                    BILLING AND PAYMENT METHOD
                                                </div>
                                                <div className="d-flex payment-details-wrapper" data-testid="payment-details-wrapper">
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
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="m18.983 7.918-1.955 9.188h-2.364l1.956-9.188h2.363zm9.944 5.933 1.244-3.45.716 3.45h-1.96zm2.637 3.255h2.186l-1.908-9.188h-2.017c-.454 0-.837.265-1.007.674l-3.546 8.514h2.481l.493-1.372h3.032l.286 1.372zm-6.17-3c.011-2.425-3.333-2.559-3.31-3.642.007-.33.319-.68 1.002-.77.338-.044 1.272-.078 2.33.412l.415-1.949a6.32 6.32 0 0 0-2.21-.407c-2.337 0-3.981 1.25-3.994 3.037-.016 1.323 1.173 2.06 2.069 2.501.92.45 1.23.739 1.226 1.142-.007.617-.735.888-1.415.899-1.188.019-1.878-.323-2.427-.58l-.428 2.013c.551.255 1.57.477 2.628.488 2.483 0 4.107-1.233 4.115-3.144zm-9.789-6.188-3.83 9.188H9.279L7.393 9.773c-.114-.451-.214-.617-.561-.807-.568-.31-1.507-.6-2.332-.782l.056-.266h4.022c.512 0 .973.343 1.09.937l.995 5.317 2.46-6.254h2.482z"
                                                            fill="#002297"
                                                        ></path>
                                                        <defs>
                                                            <linearGradient id="a" x1="4.5" y1="12.5" x2="33.75" y2="12.5" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#012E88"></stop>
                                                                <stop offset="1" stopColor="#174489"></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <div className="d-flex font-weight-bold">
                                                        <span className="selected-card-info ml-1 d-flex align-items-center font-weight-bold text-capitalize">
                                                            visa -**** 4242
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                    <div className="accordion-block-icon justify-content-center d-flex align-items-center ">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 512 512"
                                            style={{ opacity: 1 }}
                                            aria-label="downward arrow icon"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div id="collapse-text" className="accordion-block-collapse-section w-100 mt-3  collapse"></div>
                            </div>
                        </div>
                    </div>
                    <div className="px-0 px-md-2 col-md-4 col-12">
                        <div className="checkout-floating-bar-wrapper">
                            <div no-gutters="true" className="accordion-block-wrapper promo-accordion accordion-block-wrapper-active">
                                <button
                                    data-testid="qa-promo-view"
                                    aria-expanded="true"
                                    type="button"
                                    className="accordion-block-common-title-button justify-content-end d-flex bg-transparent p-0 border-0 align-items-center  btn btn-light btn-block btn-lg"
                                >
                                    <span className="accordion-block-text accordion-kit-text  flex-grow-1 flex-shrink-1 text-left text-capitalize  text-break">
                                        Promo Code
                                    </span>
                                    <div className="accordion-block-icon justify-content-center d-flex align-items-center ">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 512 512"
                                            aria-label="upward arrow icon"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M368.5 240h-225c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7h225c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div id="collapse-text" className="accordion-block-collapse-section w-100 mt-3  collapse show">
                                    <div className="promowallet-code-wrapper">
                                        <div data-testid="promocode-form-wrapper" className="promowallet-form-wrapper">
                                            <form className="">
                                                <div className=" undefined form-row">
                                                    <div data-testid="" className=" promo-code-field col-8 col">
                                                        <input
                                                            name="promoCode"
                                                            label="Promo code"
                                                            touched="[object Object]"
                                                            placeholder="Promo code"
                                                            errors="[object Object]"
                                                            values="[object Object]"
                                                            maxLength="64"
                                                            data-testid="qa-pay-promocode"
                                                            aria-label="Promo code"
                                                            aria-invalid="false"
                                                            datatestid="qa-pay-promocode"
                                                            formjson="[object Object],[object Object]"
                                                            customclassname="promo-code-field col-8"
                                                            forminputlabels="[object Object]"
                                                            type="text"
                                                            id="qa-pay-promocode"
                                                            className="form-control"
                                                        />
                                                        <div className="display-duplicate-error"></div>
                                                        <div id="promoCode-feedback" data-testid="qa-pay-promocode-error" className="invalid-feedback">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="tick-icon red valid-absolute"
                                                                height="1rem"
                                                                width="1rem"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div data-testid="" className=" promo-code-field col-4 col">
                                                        <button
                                                            data-testid="qa-pay-promo-apply"
                                                            type="submit"
                                                            className="rounded-0 promo-apply-button promo-code w-100 text-capitalize mt-sm-0 btn-bg-blue btn btn-primary"
                                                        >
                                                            apply
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="promo-code-list-wrapper">
                                            <div className="my-promo-title" tabIndex="0">
                                                My Promos
                                            </div>
                                            <div className="promo-code-list-container">
                                                <div tabIndex="0">
                                                    <div className="promo-code-name" data-testid="qa-promo-code-name">
                                                        FIXFLATACC
                                                    </div>
                                                    <div className="promo-code-exp-date" data-testid="qa-promo-code-exp-date">
                                                        Expire: 12/31/2024
                                                    </div>
                                                </div>
                                                <div>
                                                    <button
                                                        data-testid="qa-pay-promocode-apply"
                                                        type="button"
                                                        className="promo-apply-btn text-capitalize  btn btn-primary"
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="promo-code-list-container">
                                                <div tabIndex="0">
                                                    <div className="promo-code-name" data-testid="qa-promo-code-name">
                                                        AMOUNTEACHABP
                                                    </div>
                                                    <div className="promo-code-exp-date" data-testid="qa-promo-code-exp-date">
                                                        Expire: 12/31/2024
                                                    </div>
                                                </div>
                                                <div>
                                                    <button
                                                        data-testid="qa-pay-promocode-apply"
                                                        type="button"
                                                        className="promo-apply-btn text-capitalize  btn btn-primary"
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="show-more-container">
                                                <button data-testid="qa-pay-promo-showmore" type="button" className="show-more-btn btn btn-primary">
                                                    {' '}
                                                    See More
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 512 512"
                                                        aria-hidden="true"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="checkout-floating-bar" className="summary-wrapper d-flex flex-column checkout-floating-bar p-3">
                                <div className="review-item-category-heading font-weight-bold mb-2" data-testid="qa-minicart-title">
                                    One-time Purchase
                                </div>
                                <div className="mini-cart-product  border-bottom pb-3 mb-3" data-testid="qa-products-container">
                                    <div className="m-0 mini-cart-flex-subs row no-gutters">
                                        <div className="p-0 col-12">
                                            <div className="row no-gutters">
                                                <div className="expressCheckoutSummary col-3">
                                                    <div className="image-wrapper col-12 p-0 m-0 " style={{ width: '100px', height: '100px' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/46ba64cd53166059/webimage-LipPeptide-White.png"
                                                            data-src="https://media.nuskin.com/m/46ba64cd53166059/webimage-LipPeptide-White.png"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Nu Colour® Peptide Pout"
                                                            height="100px"
                                                            width="100px"
                                                            className=""
                                                            aria-label=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="pl-2 pr-0 mini-cart-product-info col-9">
                                                    <div className="justify-content-between mini-cart-product-info-row row no-gutters">
                                                        <div className="col-12">
                                                            <div
                                                                className="mb-1 product-name-flex-subs text-truncate paragraph-m card-title h5"
                                                                data-testid="qa-product-name"
                                                            >
                                                                Nu Colour® Peptide Pout
                                                            </div>
                                                        </div>
                                                        <div className="mt-1">
                                                            <span data-testid="qa-checkout-product-quantity">Quantity</span>
                                                            <span>:</span>
                                                            <span data-testid="qa-checkout-product-quantity-value">1</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <div>
                                                                <div
                                                                    data-testid="qa-pdp-price"
                                                                    className="p-0 d-flex mt-1 price-wrapper plp-price-md pv-right-align sales    col-lg-12"
                                                                >
                                                                    <div className="price-section d-flex flex-wrap align-items-center">
                                                                        <div className="mini-cart-price   ">
                                                                            <span
                                                                                className="right-span pr-2 sale   "
                                                                                data-testid="qa-product-reg-price"
                                                                                aria-hidden="false"
                                                                            >
                                                                                $19.00
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-summary-title" data-testid="qa-checkout-order-summary">
                                    Order Summary
                                </div>
                                <div className="  row no-gutters">
                                    <div className="col-auto"></div>
                                    <div aria-live="polite" className="cart-right-total-wrapper col-lg-12">
                                        <div className="shopping-cart-price-panel d-flex justify-content-end ordrs-price-info d-flex mt-0 mb-3">
                                            <div className="left-span ordr-sub-txt paragraph-l" data-testid="qa-onetime-sub-total" aria-hidden="true">
                                                One time subtotal
                                            </div>
                                            <div
                                                className="right-span ordr-total-price paragraph-l "
                                                data-testid="qa-onetime-sub-total-price"
                                                aria-label="One time subtotal $19.00"
                                            >
                                                $19.00
                                            </div>
                                        </div>
                                        <div
                                            data-testid="qa-subtotal"
                                            className="shopping-cart-price-panel d-flex justify-content-end mb-2 p-0 paragraph-m col-lg-12"
                                        >
                                            <span className="left-span mr-1" aria-hidden="true">
                                                Subtotal 1 items
                                            </span>
                                            <span className="right-span" aria-label="Subtotal 1  items $19.00">
                                                $19.00
                                            </span>
                                        </div>
                                        <div
                                            data-testid="qa-estimation"
                                            className="shopping-cart-price-panel d-flex justify-content-end mb-2 p-0 paragraph-m col-lg-12"
                                        >
                                            <span className="left-span mr-1" aria-hidden="true" data-testid="qa-shipping-charge">
                                                Shipping
                                            </span>
                                            <span className="right-span" data-testid="qa-shipping-charge-value" aria-label="Shipping $5.99">
                                                $5.99
                                            </span>
                                        </div>
                                        <div
                                            data-testid="qa-submit-estimated-shipping-tax"
                                            className="shopping-cart-price-panel d-flex justify-content-end mb-2 p-0 paragraph-m col-lg-12"
                                        >
                                            <span className="left-span mr-1" aria-hidden="true">
                                                Tax
                                            </span>
                                            <span className="right-span" aria-label="Tax $1.42">
                                                $1.42
                                            </span>
                                        </div>
                                        <div
                                            data-testid="qa-estimated-total"
                                            className="shopping-cart-price-panel d-flex justify-content-end mt-2 mb-2 p-0 paragraph-m grand-total-wrapper col-lg-12"
                                        >
                                            <strong className="left-span mr-2" aria-hidden="true">
                                                Grand Total
                                            </strong>
                                            <strong className="right-span" aria-label="Grand Total $26.41">
                                                $26.41
                                            </strong>
                                        </div>
                                        <div className="d-none grand-total-border border-top mt-3 mb-3"></div>
                                    </div>
                                    <div className="gift-receipt-container">
                                        <div id="gift-receipt" role="checkbox" aria-checked="false" tabIndex="0" data-testid="qa-gift-receipt-wrapper">
                                            <div className="d-flex gift-receipt-checkbox form-check">
                                                <input
                                                    data-testid="qa-gift-receipt-checkbox"
                                                    type="checkbox"
                                                    id="summary-gift-receipt-checkbox"
                                                    className="form-check-input"
                                                />
                                                <label title="" htmlFor="summary-gift-receipt-checkbox" className="form-check-label">
                                                    Gift Receipt
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-2 p-0 col-lg-12">
                                    <Link
                                        href="/orderConfirmation"
                                        className="w-100 submit-order-button-color submit-order-button btn btn-success"
                                        style={{ alignContent: 'center' }}
                                    >
                                        Submit Order
                                    </Link>
                                    {/* <button
                                        id="submit-order-button"
                                        data-testid="qa-submit-order"
                                        type="button"
                                        className="w-100 submit-order-button-color submit-order-button btn btn-success"
                                    >
                                        Submit Order
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
