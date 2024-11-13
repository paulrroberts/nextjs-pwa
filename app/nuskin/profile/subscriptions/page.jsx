import '@/components/profile/profile.css'
import ProfileNav from '@/components/profile/profileNav'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-md-flex flex-nowrap container">
                    <ProfileNav active="subscriptions" />
                    <section id="my-account-details-wrapper" className="account-details-wrapper ">
                        <div className="flexible-subscription-container">
                            <div>
                                <h1 className="heading-1 subs-primary-title">Subscriptions</h1>
                                <div className="subscription-details-section ">
                                    <div className="shipping-details-wrapper flex-xl-row d-flex flex-lg-row flex-sm-column flex-column flex-md-row">
                                        <div className="details-section">
                                            <div className="" data-testid="address-container">
                                                <div className="shipping-details-section">
                                                    <div className="details-section">
                                                        <div className="heading-wrapper d-flex justify-content-between">
                                                            <h5 className="details-heading mb-2 subs-secondary-title">Shipping Address</h5>
                                                            <button type="button" className="details-edit-button btn btn-black">
                                                                <svg
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    strokeWidth="2"
                                                                    viewBox="0 0 24 24"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    aria-label="address edit button"
                                                                    tabIndex="0"
                                                                    data-testid="qa-subscription-address-edit"
                                                                    height="1em"
                                                                    width="1em"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M12 20h9"></path>
                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="d-flex flex-column shipping-details-text">
                                                                <span className="m-0 line1" data-testid="qa-subscription-address-line1">
                                                                    JIM BOB
                                                                </span>
                                                                <span className="m-0 line2" data-testid="qa-subscription-address-line2">
                                                                    75 W Center st{' '}
                                                                </span>
                                                                <span className="m-0 line3" data-testid="qa-subscription-address-line3">
                                                                    Provo, UT, 84601-4432, US
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details-section">
                                            <div className="" data-testid="payment-container">
                                                <div className="shipping-details-section">
                                                    <div className="details-section">
                                                        <div className="heading-wrapper d-flex justify-content-between">
                                                            <h5 className="details-heading mb-2 subs-secondary-title">Payment Method</h5>
                                                            <button type="button" className="details-edit-button btn btn-black">
                                                                <svg
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    strokeWidth="2"
                                                                    viewBox="0 0 24 24"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    aria-label="payment edit button"
                                                                    tabIndex="0"
                                                                    data-testid="qa-subscription-payment-edit"
                                                                    height="1em"
                                                                    width="1em"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M12 20h9"></path>
                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="pr-2">
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
                                                                        <linearGradient
                                                                            id="a"
                                                                            x1="4.5"
                                                                            y1="12.5"
                                                                            x2="33.75"
                                                                            y2="12.5"
                                                                            gradientUnits="userSpaceOnUse"
                                                                        >
                                                                            <stop stopColor="#012E88"></stop>
                                                                            <stop offset="1" stopColor="#174489"></stop>
                                                                        </linearGradient>
                                                                    </defs>
                                                                </svg>
                                                            </div>
                                                            <div className="d-flex flex-column shipping-details-text">
                                                                <span className="m-0 line2" data-testid="qa-subscription-payment-line2">
                                                                    testing something
                                                                </span>
                                                                <span className="m-0 line3" data-testid="qa-subscription-payment-line3">
                                                                    VISA **** 1111, Exp. 03/27
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details-section">
                                            <div data-testid="shipping-method-container">
                                                <div className="shipping-details-section">
                                                    <div className="details-section">
                                                        <div className="heading-wrapper d-flex justify-content-between">
                                                            <h5 className="details-heading mb-2 subs-secondary-title">Shipping Method</h5>
                                                            <button type="button" className="details-edit-button btn btn-black">
                                                                <svg
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    strokeWidth="2"
                                                                    viewBox="0 0 24 24"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    aria-label="undefined edit button"
                                                                    tabIndex="0"
                                                                    data-testid="qa-subscription-undefined-edit"
                                                                    height="1em"
                                                                    width="1em"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M12 20h9"></path>
                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="d-flex flex-column shipping-details-text">
                                                                <span className="m-0 line1" data-testid="qa-subscription-undefined-line1">
                                                                    Standard (7-10 Business Day)
                                                                </span>
                                                                <span className="m-0 line2" data-testid="qa-subscription-undefined-line2">
                                                                    $2.99
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="subscription-tabs" data-testid="qa-subscription-process-tabs-wrapper">
                                        <nav className="subscription-tabs-wrapper subs-tabs-wrapper nav nav-tabs nav-fill" role="tablist">
                                            <a
                                                id="uncontrolled-tab-example-tab-schedule"
                                                href="#"
                                                role="tab"
                                                data-rb-event-key="schedule"
                                                aria-controls="uncontrolled-tab-example-tabpane-schedule"
                                                aria-selected="true"
                                                className="nav-item nav-link active"
                                            >
                                                Subscription Schedule
                                            </a>
                                            <a
                                                id="uncontrolled-tab-example-tab-nextOrder"
                                                href="#"
                                                role="tab"
                                                data-rb-event-key="nextOrder"
                                                aria-controls="uncontrolled-tab-example-tabpane-nextOrder"
                                                aria-selected="false"
                                                className="nav-item nav-link"
                                            >
                                                Next Orders
                                            </a>
                                        </nav>
                                        <div className="tab-content">
                                            <div
                                                data-testid="subscription_schedule"
                                                id="uncontrolled-tab-example-tabpane-schedule"
                                                aria-labelledby="uncontrolled-tab-example-tab-schedule"
                                                role="tabpanel"
                                                aria-hidden="false"
                                                className="fade tab-pane active show"
                                            >
                                                <div>
                                                    <div>
                                                        <div className="schedule-date-wrapper row no-gutters">
                                                            <span className="date-section" data-testid="monthly_date" id="November 8">
                                                                November 8, 2024
                                                            </span>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a className="prod-image-wrapper w-100" href="/us/en/product/ageloc-eye-mask">
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/35c7b9f23f6bb81f/webimage-01002109-ageloc-mask.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/35c7b9f23f6bb81f/webimage-01002109-ageloc-mask.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="ageLOC® Eye Mask"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section current-month">
                                                                            <a className="product-card-product-link" href="/us/en/product/ageloc-eye-mask">
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                ageLOC® Eye Mask
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01002109</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $29.70
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="original pr-2  strikeout-price"
                                                                                                        data-testid="qa-product-reg-price"
                                                                                                    >
                                                                                                        <del>$33.00</del>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        1
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $29.70
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">19.44</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="manage-next-button"
                                                                                tabIndex="0"
                                                                                type="button"
                                                                                className="manage-next-button p-0 d-flex align-items-center justify-content-center btn btn-outline-primary"
                                                                            >
                                                                                Manage next order
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="schedule-date-wrapper row no-gutters">
                                                            <span className="date-section" data-testid="monthly_date" id="November 22">
                                                                November 22, 2024
                                                            </span>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a
                                                                                className="prod-image-wrapper w-100"
                                                                                href="/us/en/product/g3-juice-8-bottles-8-pack-US"
                                                                            >
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/62c7c0ce12a9f865/webimage-g3-8-pack.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/62c7c0ce12a9f865/webimage-g3-8-pack.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="g3 Juice 8 bottles"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section current-month">
                                                                            <a
                                                                                className="product-card-product-link"
                                                                                href="/us/en/product/g3-juice-8-bottles-8-pack-US"
                                                                            >
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                g3 Juice 8 bottles
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01003649</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $360.00
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="original pr-2  strikeout-price"
                                                                                                        data-testid="qa-product-reg-price"
                                                                                                    >
                                                                                                        <del>$416.00</del>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        1
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $360.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">194.40</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="manage-next-button"
                                                                                tabIndex="0"
                                                                                type="button"
                                                                                className="manage-next-button p-0 d-flex align-items-center justify-content-center btn btn-outline-primary"
                                                                            >
                                                                                Manage next order
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="schedule-date-wrapper row no-gutters">
                                                            <span className="date-section" data-testid="monthly_date" id="November 28">
                                                                November 28, 2024
                                                            </span>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a
                                                                                className="prod-image-wrapper w-100"
                                                                                href="/us/en/product/ageloc-rose-gold-lumispa-io"
                                                                            >
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/68843b13a6540c2e/webimage-ageloc-lumispa-io-rose-gold_52337430814_o.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/68843b13a6540c2e/webimage-ageloc-lumispa-io-rose-gold_52337430814_o.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="ageLOC Rose Gold LumiSpa® iO"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section current-month">
                                                                            <a
                                                                                className="product-card-product-link"
                                                                                href="/us/en/product/ageloc-rose-gold-lumispa-io"
                                                                            >
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                ageLOC Rose Gold LumiSpa® iO
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01002594</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $199.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        2
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $398.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">334.00</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="manage-next-button"
                                                                                tabIndex="0"
                                                                                type="button"
                                                                                className="manage-next-button p-0 d-flex align-items-center justify-content-center btn btn-outline-primary"
                                                                            >
                                                                                Manage next order
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a className="prod-image-wrapper w-100" href="/us/en/product/ageloc-future-serum">
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/3f66b92a8395c4e/webimage-nu-skin-ageloc-transformation-ageloc-future-serum-packshot-image.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/3f66b92a8395c4e/webimage-nu-skin-ageloc-transformation-ageloc-future-serum-packshot-image.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="ageLOC® Future Serum"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section current-month">
                                                                            <a className="product-card-product-link" href="/us/en/product/ageloc-future-serum">
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                ageLOC® Future Serum
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01003883</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $207.00
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="original pr-2  strikeout-price"
                                                                                                        data-testid="qa-product-reg-price"
                                                                                                    >
                                                                                                        <del>$230.00</del>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        1
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $207.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">141.30</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="manage-next-button"
                                                                                tabIndex="0"
                                                                                type="button"
                                                                                className="manage-next-button p-0 d-flex align-items-center justify-content-center btn btn-outline-primary"
                                                                            >
                                                                                Manage next order
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card one-time-product">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a
                                                                                className="prod-image-wrapper w-100"
                                                                                href="/us/en/product/ageloc-tfeu-uplifting-cream"
                                                                            >
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/54181082ec58e9bf/webimage-nu-skin-ageloc-tru-face-essence-ultra-uplifting-cream-face-care-anti-aging.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/54181082ec58e9bf/webimage-nu-skin-ageloc-tru-face-essence-ultra-uplifting-cream-face-care-anti-aging.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="ageLOC® Tru Face® Essence Ultra Uplifting Cream"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section current-month">
                                                                            <a
                                                                                className="product-card-product-link"
                                                                                href="/us/en/product/ageloc-tfeu-uplifting-cream"
                                                                            >
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                ageLOC® Tru Face® Essence Ultra Uplifting Cream
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01102945</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $106.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        1
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        One-time item
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $106.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">77.16</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="manage-next-button"
                                                                                tabIndex="0"
                                                                                type="button"
                                                                                className="manage-next-button p-0 d-flex align-items-center justify-content-center btn btn-outline-primary"
                                                                            >
                                                                                Manage next order
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <div className="schedule-date-wrapper row no-gutters">
                                                            <span className="date-section" data-testid="monthly_date" id="December 8">
                                                                December 8, 2024
                                                            </span>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a className="prod-image-wrapper w-100" href="/us/en/product/ageloc-eye-mask">
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/35c7b9f23f6bb81f/webimage-01002109-ageloc-mask.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/35c7b9f23f6bb81f/webimage-01002109-ageloc-mask.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="ageLOC® Eye Mask"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section false">
                                                                            <a className="product-card-product-link" href="/us/en/product/ageloc-eye-mask">
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                ageLOC® Eye Mask
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01002109</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $29.70
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="original pr-2  strikeout-price"
                                                                                                        data-testid="qa-product-reg-price"
                                                                                                    >
                                                                                                        <del>$33.00</del>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        1
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $29.70
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">19.44</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="product-edit-button"
                                                                                type="button"
                                                                                className="product-edit-button btn btn-black"
                                                                            >
                                                                                <svg
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeWidth="2"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    aria-label="product edit button"
                                                                                    height="1em"
                                                                                    width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path d="M12 20h9"></path>
                                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="schedule-date-wrapper row no-gutters">
                                                            <span className="date-section" data-testid="monthly_date" id="December 22">
                                                                December 22, 2024
                                                            </span>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a
                                                                                className="prod-image-wrapper w-100"
                                                                                href="/us/en/product/g3-juice-8-bottles-8-pack-US"
                                                                            >
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/62c7c0ce12a9f865/webimage-g3-8-pack.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/62c7c0ce12a9f865/webimage-g3-8-pack.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="g3 Juice 8 bottles"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section false">
                                                                            <a
                                                                                className="product-card-product-link"
                                                                                href="/us/en/product/g3-juice-8-bottles-8-pack-US"
                                                                            >
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                g3 Juice 8 bottles
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01003649</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $360.00
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="original pr-2  strikeout-price"
                                                                                                        data-testid="qa-product-reg-price"
                                                                                                    >
                                                                                                        <del>$416.00</del>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        1
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $360.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">194.40</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="product-edit-button"
                                                                                type="button"
                                                                                className="product-edit-button btn btn-black"
                                                                            >
                                                                                <svg
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeWidth="2"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    aria-label="product edit button"
                                                                                    height="1em"
                                                                                    width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path d="M12 20h9"></path>
                                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="schedule-date-wrapper row no-gutters">
                                                            <span className="date-section" data-testid="monthly_date" id="December 28">
                                                                December 28, 2024
                                                            </span>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a className="prod-image-wrapper w-100" href="/us/en/product/ageloc-future-serum">
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/3f66b92a8395c4e/webimage-nu-skin-ageloc-transformation-ageloc-future-serum-packshot-image.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/3f66b92a8395c4e/webimage-nu-skin-ageloc-transformation-ageloc-future-serum-packshot-image.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="ageLOC® Future Serum"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section false">
                                                                            <a className="product-card-product-link" href="/us/en/product/ageloc-future-serum">
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                ageLOC® Future Serum
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01003883</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $207.00
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="original pr-2  strikeout-price"
                                                                                                        data-testid="qa-product-reg-price"
                                                                                                    >
                                                                                                        <del>$230.00</del>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        1
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $207.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">141.30</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="product-edit-button"
                                                                                type="button"
                                                                                className="product-edit-button btn btn-black"
                                                                            >
                                                                                <svg
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeWidth="2"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    aria-label="product edit button"
                                                                                    height="1em"
                                                                                    width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path d="M12 20h9"></path>
                                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a
                                                                                className="prod-image-wrapper w-100"
                                                                                href="/us/en/product/ageloc-rose-gold-lumispa-io"
                                                                            >
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/68843b13a6540c2e/webimage-ageloc-lumispa-io-rose-gold_52337430814_o.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/68843b13a6540c2e/webimage-ageloc-lumispa-io-rose-gold_52337430814_o.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="ageLOC Rose Gold LumiSpa® iO"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section false">
                                                                            <a
                                                                                className="product-card-product-link"
                                                                                href="/us/en/product/ageloc-rose-gold-lumispa-io"
                                                                            >
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                ageLOC Rose Gold LumiSpa® iO
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01002594</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $199.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        2
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $398.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">334.00</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="product-edit-button"
                                                                                type="button"
                                                                                className="product-edit-button btn btn-black"
                                                                            >
                                                                                <svg
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeWidth="2"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    aria-label="product edit button"
                                                                                    height="1em"
                                                                                    width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path d="M12 20h9"></path>
                                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <div className="schedule-date-wrapper row no-gutters">
                                                            <span className="date-section" data-testid="monthly_date" id="January 8">
                                                                January 8, 2025
                                                            </span>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a className="prod-image-wrapper w-100" href="/us/en/product/ageloc-eye-mask">
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/35c7b9f23f6bb81f/webimage-01002109-ageloc-mask.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/35c7b9f23f6bb81f/webimage-01002109-ageloc-mask.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="ageLOC® Eye Mask"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section false">
                                                                            <a className="product-card-product-link" href="/us/en/product/ageloc-eye-mask">
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                ageLOC® Eye Mask
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01002109</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $29.70
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="original pr-2  strikeout-price"
                                                                                                        data-testid="qa-product-reg-price"
                                                                                                    >
                                                                                                        <del>$33.00</del>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        1
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $29.70
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">19.44</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="product-edit-button"
                                                                                type="button"
                                                                                className="product-edit-button btn btn-black"
                                                                            >
                                                                                <svg
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeWidth="2"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    aria-label="product edit button"
                                                                                    height="1em"
                                                                                    width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path d="M12 20h9"></path>
                                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="schedule-date-wrapper row no-gutters">
                                                            <span className="date-section" data-testid="monthly_date" id="January 22">
                                                                January 22, 2025
                                                            </span>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a
                                                                                className="prod-image-wrapper w-100"
                                                                                href="/us/en/product/g3-juice-8-bottles-8-pack-US"
                                                                            >
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/62c7c0ce12a9f865/webimage-g3-8-pack.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/62c7c0ce12a9f865/webimage-g3-8-pack.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="g3 Juice 8 bottles"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section false">
                                                                            <a
                                                                                className="product-card-product-link"
                                                                                href="/us/en/product/g3-juice-8-bottles-8-pack-US"
                                                                            >
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                g3 Juice 8 bottles
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01003649</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $360.00
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="original pr-2  strikeout-price"
                                                                                                        data-testid="qa-product-reg-price"
                                                                                                    >
                                                                                                        <del>$416.00</del>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        1
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $360.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">194.40</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="product-edit-button"
                                                                                type="button"
                                                                                className="product-edit-button btn btn-black"
                                                                            >
                                                                                <svg
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeWidth="2"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    aria-label="product edit button"
                                                                                    height="1em"
                                                                                    width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path d="M12 20h9"></path>
                                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="schedule-date-wrapper row no-gutters">
                                                            <span className="date-section" data-testid="monthly_date" id="January 28">
                                                                January 28, 2025
                                                            </span>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a className="prod-image-wrapper w-100" href="/us/en/product/ageloc-future-serum">
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/3f66b92a8395c4e/webimage-nu-skin-ageloc-transformation-ageloc-future-serum-packshot-image.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/3f66b92a8395c4e/webimage-nu-skin-ageloc-transformation-ageloc-future-serum-packshot-image.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="ageLOC® Future Serum"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section false">
                                                                            <a className="product-card-product-link" href="/us/en/product/ageloc-future-serum">
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                ageLOC® Future Serum
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01003883</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $207.00
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="original pr-2  strikeout-price"
                                                                                                        data-testid="qa-product-reg-price"
                                                                                                    >
                                                                                                        <del>$230.00</del>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        1
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $207.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">141.30</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="product-edit-button"
                                                                                type="button"
                                                                                className="product-edit-button btn btn-black"
                                                                            >
                                                                                <svg
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeWidth="2"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    aria-label="product edit button"
                                                                                    height="1em"
                                                                                    width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path d="M12 20h9"></path>
                                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a
                                                                                className="prod-image-wrapper w-100"
                                                                                href="/us/en/product/ageloc-rose-gold-lumispa-io"
                                                                            >
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/68843b13a6540c2e/webimage-ageloc-lumispa-io-rose-gold_52337430814_o.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/68843b13a6540c2e/webimage-ageloc-lumispa-io-rose-gold_52337430814_o.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="ageLOC Rose Gold LumiSpa® iO"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section false">
                                                                            <a
                                                                                className="product-card-product-link"
                                                                                href="/us/en/product/ageloc-rose-gold-lumispa-io"
                                                                            >
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                ageLOC Rose Gold LumiSpa® iO
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01002594</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $199.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        2
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $398.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">334.00</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="product-edit-button"
                                                                                type="button"
                                                                                className="product-edit-button btn btn-black"
                                                                            >
                                                                                <svg
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeWidth="2"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    aria-label="product edit button"
                                                                                    height="1em"
                                                                                    width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path d="M12 20h9"></path>
                                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <div className="schedule-date-wrapper row no-gutters">
                                                            <span className="date-section" data-testid="monthly_date" id="February 8">
                                                                February 8, 2025
                                                            </span>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a className="prod-image-wrapper w-100" href="/us/en/product/ageloc-eye-mask">
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/35c7b9f23f6bb81f/webimage-01002109-ageloc-mask.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/35c7b9f23f6bb81f/webimage-01002109-ageloc-mask.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="ageLOC® Eye Mask"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section false">
                                                                            <a className="product-card-product-link" href="/us/en/product/ageloc-eye-mask">
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                ageLOC® Eye Mask
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01002109</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $29.70
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="original pr-2  strikeout-price"
                                                                                                        data-testid="qa-product-reg-price"
                                                                                                    >
                                                                                                        <del>$33.00</del>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        1
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $29.70
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">19.44</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="product-edit-button"
                                                                                type="button"
                                                                                className="product-edit-button btn btn-black"
                                                                            >
                                                                                <svg
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeWidth="2"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    aria-label="product edit button"
                                                                                    height="1em"
                                                                                    width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path d="M12 20h9"></path>
                                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="schedule-date-wrapper row no-gutters">
                                                            <span className="date-section" data-testid="monthly_date" id="February 22">
                                                                February 22, 2025
                                                            </span>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a
                                                                                className="prod-image-wrapper w-100"
                                                                                href="/us/en/product/g3-juice-8-bottles-8-pack-US"
                                                                            >
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/62c7c0ce12a9f865/webimage-g3-8-pack.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/62c7c0ce12a9f865/webimage-g3-8-pack.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="g3 Juice 8 bottles"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section false">
                                                                            <a
                                                                                className="product-card-product-link"
                                                                                href="/us/en/product/g3-juice-8-bottles-8-pack-US"
                                                                            >
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                g3 Juice 8 bottles
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01003649</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $360.00
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="original pr-2  strikeout-price"
                                                                                                        data-testid="qa-product-reg-price"
                                                                                                    >
                                                                                                        <del>$416.00</del>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        1
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $360.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">194.40</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="product-edit-button"
                                                                                type="button"
                                                                                className="product-edit-button btn btn-black"
                                                                            >
                                                                                <svg
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeWidth="2"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    aria-label="product edit button"
                                                                                    height="1em"
                                                                                    width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path d="M12 20h9"></path>
                                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="schedule-date-wrapper row no-gutters">
                                                            <span className="date-section" data-testid="monthly_date" id="February 28">
                                                                February 28, 2025
                                                            </span>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a className="prod-image-wrapper w-100" href="/us/en/product/ageloc-future-serum">
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/3f66b92a8395c4e/webimage-nu-skin-ageloc-transformation-ageloc-future-serum-packshot-image.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/3f66b92a8395c4e/webimage-nu-skin-ageloc-transformation-ageloc-future-serum-packshot-image.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="ageLOC® Future Serum"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section false">
                                                                            <a className="product-card-product-link" href="/us/en/product/ageloc-future-serum">
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                ageLOC® Future Serum
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01003883</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $207.00
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="original pr-2  strikeout-price"
                                                                                                        data-testid="qa-product-reg-price"
                                                                                                    >
                                                                                                        <del>$230.00</del>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        1
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $207.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">141.30</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="product-edit-button"
                                                                                type="button"
                                                                                className="product-edit-button btn btn-black"
                                                                            >
                                                                                <svg
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeWidth="2"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    aria-label="product edit button"
                                                                                    height="1em"
                                                                                    width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path d="M12 20h9"></path>
                                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-wrapper subs-product-wrapper">
                                                            <div>
                                                                <div className="product-list__product-card false">
                                                                    <div className="d-flex w-100">
                                                                        <div className="product-list-product-img">
                                                                            <a
                                                                                className="prod-image-wrapper w-100"
                                                                                href="/us/en/product/ageloc-rose-gold-lumispa-io"
                                                                            >
                                                                                <div
                                                                                    className="image-wrapper col-12 p-0 m-0 "
                                                                                    style={{ width: '100px', height: '100px' }}
                                                                                >
                                                                                    <img
                                                                                        src="https://media.nuskin.com/m/68843b13a6540c2e/webimage-ageloc-lumispa-io-rose-gold_52337430814_o.png?width=100"
                                                                                        data-src="https://media.nuskin.com/m/68843b13a6540c2e/webimage-ageloc-lumispa-io-rose-gold_52337430814_o.png?width=100"
                                                                                        srcSet=""
                                                                                        loading="lazy"
                                                                                        alt="ageLOC Rose Gold LumiSpa® iO"
                                                                                        height="100px"
                                                                                        width="100px"
                                                                                        className="mw-100 mh-100 prod-img"
                                                                                        aria-label=""
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex w-100 product-card-deatils-section false">
                                                                            <a
                                                                                className="product-card-product-link"
                                                                                href="/us/en/product/ageloc-rose-gold-lumispa-io"
                                                                            >
                                                                                <div className="d-flex flex-column">
                                                                                    <div className="product-details-wrapper d-flex">
                                                                                        <div className="product-info">
                                                                                            <div
                                                                                                className="subs-product-title"
                                                                                                data-testid="qa-sub-product-name"
                                                                                            >
                                                                                                ageLOC Rose Gold LumiSpa® iO
                                                                                            </div>
                                                                                            <div
                                                                                                className="subs-product-sku"
                                                                                                data-testid="qa-sub-product-skuId"
                                                                                            >
                                                                                                <span className="">SKU:</span>
                                                                                                <span className="pl-1">01002594</span>
                                                                                            </div>
                                                                                            <div className="subscription-price d-flex w-100 subs-product-price">
                                                                                                <div className="price-wrapper">
                                                                                                    <span className="sale" data-testid="qa-product-sale-price">
                                                                                                        $199.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="d-flex frequency-wrapper">
                                                                                                <div className="d-flex subs-product-frequency false">
                                                                                                    <div
                                                                                                        className="quantity-label pr-1 subs-product-quantity"
                                                                                                        data-testid="subs-product-quantity"
                                                                                                    >
                                                                                                        2
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="frequency-label subs-product-frequency"
                                                                                                        data-testid="frequency"
                                                                                                    >
                                                                                                        Monthly
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="false sub-total-label d-flex"
                                                                                                    data-testid="subtotal"
                                                                                                >
                                                                                                    <span className="subs-product-total-label">Subtotal:</span>
                                                                                                    <span
                                                                                                        className="subs-product-total-value pl-1"
                                                                                                        data-testid="qa-product-subtotal-value"
                                                                                                    >
                                                                                                        $398.00
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="pv-cv-wrapper" data-testid="qa-subscription-sv">
                                                                                                <p>
                                                                                                    SV :<span className="pl-1">334.00</span>
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <button
                                                                                data-testid="product-edit-button"
                                                                                type="button"
                                                                                className="product-edit-button btn btn-black"
                                                                            >
                                                                                <svg
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeWidth="2"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    aria-label="product edit button"
                                                                                    height="1em"
                                                                                    width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path d="M12 20h9"></path>
                                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="subfooter-line-divider"></div>
                                                    <div className="subfooter-button-container">
                                                        <div className="subfooter-terms">
                                                            <a role="button" tabIndex="0" href="">
                                                                Subscription Terms and Conditions
                                                            </a>
                                                        </div>
                                                        <button className="subfooter-cancel-allsub" data-testid="qa-cancel-all-subscription-items">
                                                            Cancel all subscription items
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
