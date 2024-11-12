import Link from 'next/link'
import '../../../../components/profile/profile.css'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-md-flex flex-nowrap container">
                    <aside className="account-menu-wrapper  mb-0 shadow">
                        <div className="d-flex menu-row pt-4">
                            <div className="card-wrapper flex-grow-1 card" style={{ border: '0px', borderRadius: '0px' }}>
                                <div className="text-white bg-dark account-name-wrapper p-3 card-body">
                                    <div className="mb-0 font-weight-light card-subtitle h6" data-testid="qa-account-welcome-text">
                                        Welcome!
                                    </div>
                                    <div className="font-weight-bold card-title h5" data-testid="qa-account-welcome-name">
                                        JIM JIM
                                    </div>
                                    <p className="font-weight-light account-id card-text" data-testid="qa-account-welcome-id">
                                        US00320640
                                    </p>
                                    <p className="mt-3 font-normal card-text" data-testid="qa-account-type">
                                        Brand Affiliate
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-block">
                            <div className="list-group" role="button">
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-volumes"
                                    href="/nuskin/build"
                                >
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        Volumes
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-my-profile"
                                    href="/nuskin/profile"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="account-menu-icon "
                                        aria-label="My Profile"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z"></path>
                                    </svg>
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        My Profile
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-account-profile"
                                    href="/nuskin/profile/account-profile"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 640 512"
                                        className="account-menu-icon "
                                        aria-label="Account Profile"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z"></path>
                                    </svg>
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        Account Profile
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-security"
                                    href="/nuskin/profile/security"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 640 512"
                                        className="account-menu-icon "
                                        aria-label="Security"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"></path>
                                    </svg>
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        Security
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-mysite"
                                    href="/nuskin/profile/mysiteadmin"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-icon "
                                        aria-label="My Site Admin"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z"></path>
                                    </svg>
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        My Site Admin
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-shipping-address-book"
                                    href="/nuskin/profile/address-book"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 576 512"
                                        className="account-menu-icon "
                                        aria-label="Address Book"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"></path>
                                    </svg>
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        Address Book
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3 active"
                                    data-testid="qa-payments"
                                    href="/nuskin/profile/payment-methods"
                                    aria-current="page"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 576 512"
                                        className="account-menu-icon "
                                        aria-label="Payment Methods"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"></path>
                                    </svg>
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        Payment Methods
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                                <a href="#" className="skip-myaccount-link text-primary bg-white">
                                    Skip to navigation Payment Methods content
                                </a>
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-loyalty-points"
                                    href="/nuskin/profile/store-credits"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-icon "
                                        aria-label="Store Credits"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"></path>
                                    </svg>
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        Store Credits
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-users"
                                    href="/nuskin/profile/associates"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="account-menu-icon "
                                        aria-label="Associates"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                    </svg>
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        Associates
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-order-history"
                                    href="/nuskin/profile/order-history"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 640 512"
                                        className="account-menu-icon "
                                        aria-label="Order History"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M621.3 237.3l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7H480V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v336c0 44.2 35.8 80 80 80 26.3 0 49.4-12.9 64-32.4 14.6 19.6 37.7 32.4 64 32.4 44.2 0 80-35.8 80-80 0-5.5-.6-10.8-1.6-16h163.2c-1.1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H624c8.8 0 16-7.2 16-16v-85.5c0-17-6.7-33.2-18.7-45.2zM80 432c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm128 0c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm272-224h37.5c4.3 0 8.3 1.7 11.3 4.7l43.3 43.3H480v-48zm48 224c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z"></path>
                                    </svg>
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        Order History
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-list"
                                    href="/nuskin/profile/lists"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-icon "
                                        aria-label="Lists"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M48 82.7v346.7c0 19.1 15.5 34.7 34.7 34.7h346.7c19.1 0 34.7-15.5 34.7-34.7V82.7c0-19.1-15.5-34.7-34.7-34.7H82.7C63.5 48 48 63.5 48 82.7zm89.3 297.1c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zM384.7 374h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14z"></path>
                                    </svg>
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        Lists
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-direct-deposit"
                                    href="/nuskin/profile/direct-deposit"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 640 512"
                                        className="account-menu-icon "
                                        aria-label="Direct Deposit"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M352 288h-16v-88c0-4.42-3.58-8-8-8h-13.58c-4.74 0-9.37 1.4-13.31 4.03l-15.33 10.22a7.994 7.994 0 0 0-2.22 11.09l8.88 13.31a7.994 7.994 0 0 0 11.09 2.22l.47-.31V288h-16c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h64c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 192c-53.02 0-96-50.15-96-112 0-61.86 42.98-112 96-112s96 50.14 96 112c0 61.87-43 112-96 112zm272 32h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"></path>
                                    </svg>
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        Direct Deposit
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-favorites"
                                    href="/nuskin/profile/favorites"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-icon favorites-icon"
                                        aria-label="Favorites"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                                    </svg>
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        Favorites
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-subscriptions"
                                    href="/nuskin/profile/subscriptions"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="account-menu-icon "
                                        aria-label="Subscriptions"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21a9 9 0 000-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path>
                                    </svg>
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        Subscriptions
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-privacy"
                                    href="/nuskin/profile/privacy"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 448 512"
                                        className="account-menu-icon "
                                        aria-label="Privacy"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                                    </svg>
                                    <div className="account-menu-item-text ml-2" style={{ flex: '1 1 0%' }}>
                                        Privacy
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="account-menu-link-arrow"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </aside>
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
