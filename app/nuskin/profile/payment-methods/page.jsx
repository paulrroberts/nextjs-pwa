import '@/components/profile/profile.css'
import ProfileNav from '@/components/profile/profileNav'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-md-flex flex-nowrap container">
                    <ProfileNav active="payment-methods" />
                    <section id="my-account-details-wrapper" className="account-details-wrapper ">
                        <section className=" payment-block-wrapper">
                            <div className="add-payment-header p-3 shadow-sm mb-3">
                                <h1 className=" d-flex align-items-center mb-0 payment-header heading-2" data-testid="qa-payment-heading">
                                    {' '}
                                    Payment Methods
                                </h1>
                                <button data-testid="qa-add-payment-button" type="button" className="payment-btn px-4 btn btn-primary">
                                    Add New Card
                                </button>
                            </div>
                            <div className="payment-card-wrapper" data-testid="qa-payment-container">
                                <div className="payment-card-container p-3">
                                    <div className="payment-detail">
                                        <div className="card-detail d-flex pb-3">
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
                                            <div className="account-info-wrapper">
                                                <span data-testid="qa-type" className="heading-3 mb-2">
                                                    {' '}
                                                    VISA card ending in 7417
                                                </span>
                                                <span data-testid="qa-expirydate" className="paragraph-m">
                                                    Expires 11/27
                                                </span>
                                                <span className="holder_name" data-testid="qa-payment-holder-name">
                                                    JENNIFER GALLICHAN
                                                </span>
                                            </div>
                                        </div>
                                        <div className="button-wrapper">
                                            <div className="button-wrapper">
                                                <span>
                                                    <button
                                                        aria-label="Edit button for  VISA card &amp; card number 7417"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-edit-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Edit</span>
                                                    </button>
                                                </span>
                                                <span>
                                                    <button
                                                        aria-label="Delete button for  VISA card &amp; card number 7417"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-delete-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Delete</span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-card-wrapper" data-testid="qa-payment-container">
                                <div className="payment-card-container p-3">
                                    <div className="payment-detail">
                                        <div className="card-detail d-flex pb-3">
                                            <svg width="40" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M37.5 0A2.5 2.5 0 0 1 40 2.5v20a2.5 2.5 0 0 1-2.5 2.5h-35A2.5 2.5 0 0 1 0 22.5v-20A2.5 2.5 0 0 1 2.5 0h35z"
                                                    fill="#000"
                                                ></path>
                                                <path d="M23.75 6.5h-7.5v12.25h7.5V6.5z" fill="#FF5F00"></path>
                                                <path
                                                    d="M16.8 12.499a7.746 7.746 0 0 1 2.95-6.092 7.709 7.709 0 0 0-10.45.835 7.768 7.768 0 0 0 0 10.516 7.709 7.709 0 0 0 10.45.835A7.746 7.746 0 0 1 16.8 12.5z"
                                                    fill="#EB001B"
                                                ></path>
                                                <path
                                                    d="M31.865 17.5v-.207h.083v-.043h-.198v.043h.078v.207h.037zm.385 0v-.25h-.06l-.07.179-.07-.179h-.06v.25h.043v-.19l.065.163h.045l.065-.162v.189h.042zM32.5 12.501a7.751 7.751 0 0 1-4.35 6.97 7.706 7.706 0 0 1-8.15-.878 7.758 7.758 0 0 0 2.952-6.093A7.758 7.758 0 0 0 20 6.407a7.706 7.706 0 0 1 8.15-.878 7.751 7.751 0 0 1 4.35 6.97v.002z"
                                                    fill="#F79E1B"
                                                ></path>
                                            </svg>
                                            <div className="account-info-wrapper">
                                                <span data-testid="qa-type" className="heading-3 mb-2">
                                                    {' '}
                                                    MASTERCARD card ending in 5100
                                                </span>
                                                <span data-testid="qa-expirydate" className="paragraph-m">
                                                    Expires 11/29
                                                </span>
                                                <span className="holder_name" data-testid="qa-payment-holder-name">
                                                    TEST{' '}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="button-wrapper">
                                            <div className="button-wrapper">
                                                <span>
                                                    <button
                                                        aria-label="Edit button for  MASTERCARD card &amp; card number 5100"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-edit-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Edit</span>
                                                    </button>
                                                </span>
                                                <span>
                                                    <button
                                                        aria-label="Delete button for  MASTERCARD card &amp; card number 5100"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-delete-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Delete</span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-card-wrapper" data-testid="qa-payment-container">
                                <div className="payment-card-container p-3">
                                    <div className="payment-detail">
                                        <div className="card-detail d-flex pb-3">
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
                                            <div className="account-info-wrapper">
                                                <span data-testid="qa-type" className="heading-3 mb-2">
                                                    {' '}
                                                    VISA card ending in 7777
                                                </span>
                                                <span data-testid="qa-expirydate" className="paragraph-m">
                                                    Expires 12/26
                                                </span>
                                                <span className="holder_name" data-testid="qa-payment-holder-name">
                                                    TESTING{' '}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="button-wrapper">
                                            <div className="button-wrapper">
                                                <span>
                                                    <button
                                                        aria-label="Edit button for  VISA card &amp; card number 7777"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-edit-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Edit</span>
                                                    </button>
                                                </span>
                                                <span>
                                                    <button
                                                        aria-label="Delete button for  VISA card &amp; card number 7777"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-delete-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Delete</span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-card-wrapper" data-testid="qa-payment-container">
                                <div className="payment-card-container p-3">
                                    <div className="payment-detail">
                                        <div className="card-detail d-flex pb-3">
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
                                            <div className="account-info-wrapper">
                                                <span data-testid="qa-type" className="heading-3 mb-2">
                                                    {' '}
                                                    VISA card ending in 1000
                                                </span>
                                                <span data-testid="qa-expirydate" className="paragraph-m">
                                                    Expires 02/25
                                                </span>
                                                <span className="holder_name" data-testid="qa-payment-holder-name">
                                                    NUSKIN STORE
                                                </span>
                                            </div>
                                        </div>
                                        <div className="button-wrapper">
                                            <div className="button-wrapper">
                                                <span>
                                                    <button
                                                        aria-label="Edit button for  VISA card &amp; card number 1000"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-edit-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Edit</span>
                                                    </button>
                                                </span>
                                                <span>
                                                    <button
                                                        aria-label="Delete button for  VISA card &amp; card number 1000"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-delete-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Delete</span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-card-wrapper" data-testid="qa-payment-container">
                                <div className="payment-card-container p-3">
                                    <div className="payment-detail">
                                        <div className="card-detail d-flex pb-3">
                                            {/* <svg
                                                width="40"
                                                height="25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                            >
                                                <path
                                                    d="M37.5 0A2.5 2.5 0 0 1 40 2.5v20a2.5 2.5 0 0 1-2.5 2.5h-35A2.5 2.5 0 0 1 0 22.5v-20A2.5 2.5 0 0 1 2.5 0h35z"
                                                    fill="#F6F7F7"
                                                ></path>
                                                <path
                                                    d="M37.5 0A2.5 2.5 0 0 1 40 2.5v20a2.5 2.5 0 0 1-2.5 2.5h-35A2.5 2.5 0 0 1 0 22.5v-20A2.5 2.5 0 0 1 2.5 0h35zm0 1.25h-35c-.672 0-1.22.53-1.249 1.196L1.25 2.5v20c0 .672.53 1.22 1.196 1.249l.054.001h35c.672 0 1.22-.53 1.249-1.196l.001-.054v-20c0-.672-.53-1.22-1.196-1.249L37.5 1.25z"
                                                    fill="#CED0D0"
                                                ></path>
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M38.75 14.5s-8.918 6.39-25.25 9.25h25a.25.25 0 0 0 .25-.25v-9z"
                                                    fill="#F58220"
                                                ></path>
                                                <path fill="url(#c)" d="M4.75 10.25h31v5.25h-31z"></path>
                                                <defs>
                                                    <pattern id="c" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use xlink:href="#b" transform="scale(.00287 .01695)"></use>
                                                    </pattern>
                                                    <image
                                                        id="b"
                                                        width="348"
                                                        height="59"
                                                        xlink:href="data:image/png;base64,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"
                                                    ></image>
                                                </defs>
                                            </svg> */}
                                            <div className="account-info-wrapper">
                                                <span data-testid="qa-type" className="heading-3 mb-2">
                                                    {' '}
                                                    DISCOVER card ending in 0004
                                                </span>
                                                <span data-testid="qa-expirydate" className="paragraph-m">
                                                    Expires 02/29
                                                </span>
                                                <span className="holder_name" data-testid="qa-payment-holder-name">
                                                    NEW DC
                                                </span>
                                            </div>
                                        </div>
                                        <div className="button-wrapper">
                                            <div className="button-wrapper">
                                                <span>
                                                    <button
                                                        aria-label="Edit button for  DISCOVER card &amp; card number 0004"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-edit-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Edit</span>
                                                    </button>
                                                </span>
                                                <span>
                                                    <button
                                                        aria-label="Delete button for  DISCOVER card &amp; card number 0004"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-delete-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Delete</span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-card-wrapper" data-testid="qa-payment-container">
                                <div className="payment-card-container p-3">
                                    <div className="payment-detail">
                                        <div className="card-detail d-flex pb-3">
                                            <svg width="40" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M37.5 0A2.5 2.5 0 0 1 40 2.5v20a2.5 2.5 0 0 1-2.5 2.5h-35A2.5 2.5 0 0 1 0 22.5v-20A2.5 2.5 0 0 1 2.5 0h35z"
                                                    fill="#000"
                                                ></path>
                                                <path d="M23.75 6.5h-7.5v12.25h7.5V6.5z" fill="#FF5F00"></path>
                                                <path
                                                    d="M16.8 12.499a7.746 7.746 0 0 1 2.95-6.092 7.709 7.709 0 0 0-10.45.835 7.768 7.768 0 0 0 0 10.516 7.709 7.709 0 0 0 10.45.835A7.746 7.746 0 0 1 16.8 12.5z"
                                                    fill="#EB001B"
                                                ></path>
                                                <path
                                                    d="M31.865 17.5v-.207h.083v-.043h-.198v.043h.078v.207h.037zm.385 0v-.25h-.06l-.07.179-.07-.179h-.06v.25h.043v-.19l.065.163h.045l.065-.162v.189h.042zM32.5 12.501a7.751 7.751 0 0 1-4.35 6.97 7.706 7.706 0 0 1-8.15-.878 7.758 7.758 0 0 0 2.952-6.093A7.758 7.758 0 0 0 20 6.407a7.706 7.706 0 0 1 8.15-.878 7.751 7.751 0 0 1 4.35 6.97v.002z"
                                                    fill="#F79E1B"
                                                ></path>
                                            </svg>
                                            <div className="account-info-wrapper">
                                                <span data-testid="qa-type" className="heading-3 mb-2">
                                                    {' '}
                                                    MASTERCARD card ending in 2346
                                                </span>
                                                <span data-testid="qa-expirydate" className="paragraph-m">
                                                    Expires 02/29
                                                </span>
                                                <span className="holder_name" data-testid="qa-payment-holder-name">
                                                    NON-THREEDS{' '}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="button-wrapper">
                                            <div className="button-wrapper">
                                                <span>
                                                    <button
                                                        aria-label="Edit button for  MASTERCARD card &amp; card number 2346"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-edit-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Edit</span>
                                                    </button>
                                                </span>
                                                <span>
                                                    <button
                                                        aria-label="Delete button for  MASTERCARD card &amp; card number 2346"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-delete-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Delete</span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-card-wrapper" data-testid="qa-payment-container">
                                <div className="payment-card-container p-3">
                                    <div className="payment-detail">
                                        <div className="card-detail d-flex pb-3">
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
                                            <div className="account-info-wrapper">
                                                <span data-testid="qa-type" className="heading-3 mb-2">
                                                    {' '}
                                                    VISA card ending in 1111
                                                </span>
                                                <span data-testid="qa-expirydate" className="paragraph-m">
                                                    Expires 02/29
                                                </span>
                                                <span className="holder_name" data-testid="qa-payment-holder-name">
                                                    NON-THREEDS{' '}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="button-wrapper">
                                            <div className="button-wrapper">
                                                <span>
                                                    <button
                                                        aria-label="Edit button for  VISA card &amp; card number 1111"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-edit-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Edit</span>
                                                    </button>
                                                </span>
                                                <span>
                                                    <button
                                                        aria-label="Delete button for  VISA card &amp; card number 1111"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-delete-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Delete</span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-card-wrapper" data-testid="qa-payment-container">
                                <div className="payment-card-container p-3">
                                    <div className="payment-detail">
                                        <div className="card-detail d-flex pb-3">
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
                                            <div className="account-info-wrapper">
                                                <span data-testid="qa-type" className="heading-3 mb-2">
                                                    {' '}
                                                    VISA card ending in 1111
                                                </span>
                                                <span data-testid="qa-expirydate" className="paragraph-m">
                                                    Expires 03/27
                                                </span>
                                                <span className="holder_name" data-testid="qa-payment-holder-name">
                                                    TESTING SOMETHING
                                                </span>
                                            </div>
                                        </div>
                                        <div className="button-wrapper">
                                            <div className="button-wrapper">
                                                <span>
                                                    <button
                                                        aria-label="Edit button for  VISA card &amp; card number 1111"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-edit-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Edit</span>
                                                    </button>
                                                </span>
                                                <span>
                                                    <button
                                                        aria-label="Delete button for  VISA card &amp; card number 1111"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-delete-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Delete</span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-card-wrapper" data-testid="qa-payment-container">
                                <div className="payment-card-container p-3">
                                    <div className="payment-detail">
                                        <div className="card-detail d-flex pb-3">
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
                                            <div className="account-info-wrapper">
                                                <span data-testid="qa-type" className="heading-3 mb-2">
                                                    {' '}
                                                    VISA card ending in 2222
                                                </span>
                                                <span data-testid="qa-expirydate" className="paragraph-m">
                                                    Expires 12/24
                                                </span>
                                                <span className="holder_name" data-testid="qa-payment-holder-name">
                                                    KKK{' '}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="button-wrapper">
                                            <div className="button-wrapper">
                                                <span>
                                                    <button
                                                        aria-label="Edit button for  VISA card &amp; card number 2222"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-edit-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Edit</span>
                                                    </button>
                                                </span>
                                                <span>
                                                    <button
                                                        aria-label="Delete button for  VISA card &amp; card number 2222"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-delete-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Delete</span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-card-wrapper" data-testid="qa-payment-container">
                                <span className="text-success ml-2">Default Payment</span>
                                <div className="payment-card-container p-3">
                                    <div className="payment-detail">
                                        <div className="card-detail d-flex pb-3">
                                            <svg width="40" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M37.5 0A2.5 2.5 0 0 1 40 2.5v20a2.5 2.5 0 0 1-2.5 2.5h-35A2.5 2.5 0 0 1 0 22.5v-20A2.5 2.5 0 0 1 2.5 0h35z"
                                                    fill="#000"
                                                ></path>
                                                <path d="M23.75 6.5h-7.5v12.25h7.5V6.5z" fill="#FF5F00"></path>
                                                <path
                                                    d="M16.8 12.499a7.746 7.746 0 0 1 2.95-6.092 7.709 7.709 0 0 0-10.45.835 7.768 7.768 0 0 0 0 10.516 7.709 7.709 0 0 0 10.45.835A7.746 7.746 0 0 1 16.8 12.5z"
                                                    fill="#EB001B"
                                                ></path>
                                                <path
                                                    d="M31.865 17.5v-.207h.083v-.043h-.198v.043h.078v.207h.037zm.385 0v-.25h-.06l-.07.179-.07-.179h-.06v.25h.043v-.19l.065.163h.045l.065-.162v.189h.042zM32.5 12.501a7.751 7.751 0 0 1-4.35 6.97 7.706 7.706 0 0 1-8.15-.878 7.758 7.758 0 0 0 2.952-6.093A7.758 7.758 0 0 0 20 6.407a7.706 7.706 0 0 1 8.15-.878 7.751 7.751 0 0 1 4.35 6.97v.002z"
                                                    fill="#F79E1B"
                                                ></path>
                                            </svg>
                                            <div className="account-info-wrapper">
                                                <span data-testid="qa-type" className="heading-3 mb-2">
                                                    {' '}
                                                    MASTERCARD card ending in 4442
                                                </span>
                                                <span data-testid="qa-expirydate" className="paragraph-m">
                                                    Expires 12/30
                                                </span>
                                                <span className="holder_name" data-testid="qa-payment-holder-name">
                                                    QA{' '}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="button-wrapper">
                                            <div className="button-wrapper">
                                                <span>
                                                    <button
                                                        aria-label="Edit button for  MASTERCARD card &amp; card number 4442"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-edit-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Edit</span>
                                                    </button>
                                                </span>
                                                <span>
                                                    <button
                                                        aria-label="Delete button for  MASTERCARD card &amp; card number 4442"
                                                        role="button"
                                                        tabIndex="0"
                                                        data-testid="qa-delete-button"
                                                        type="button"
                                                        className="remove-button d-inline px-5 btn btn-outline-primary"
                                                    >
                                                        <span aria-hidden="true">Delete</span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="d-none">Please switch to your home market to make any changes.</div>
                    </section>
                </div>
            </div>
        </section>
    )
}
