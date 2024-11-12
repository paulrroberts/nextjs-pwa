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
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3 active"
                                    data-testid="qa-account-profile"
                                    href="/nuskin/profile/account-profile"
                                    aria-current="page"
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
                                <a href="#" className="skip-myaccount-link text-primary bg-white">
                                    Skip to navigation Account Profile content
                                </a>
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
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-payments"
                                    href="/strokeWidth/payment-methods"
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
                        <div className="phone-verify-modal-cont"></div>
                        <div data-testid="qa-accountProfile-container" className="accountProfileInfoCont mb-3 shadow-sm  card">
                            <div className="bg-white card-body">
                                <h1 data-testid="qa-accountProfile-heading" className="card-title heading-2-bold card-title h5">
                                    Account Information
                                </h1>
                                <div className="mb-3 row">
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <div className="profileDataLabel Name font-weight-bold">Name</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="profileDataVal" data-testid="qa-account-name">
                                                JIM JIM
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <div className="profileDataLabel Phone Number font-weight-bold">Phone Number</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="profileDataVal" data-testid="qa-account-phone-number">
                                                +1 (347) 391-3410
                                            </div>
                                        </div>
                                        <form>
                                            <div className="phoneNotVerified alert-success hide-success-alert input-group">
                                                <div className="dTextInvalidEmail flex-column row">
                                                    <div className="phoneNotVerifiedClass col">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 512 512"
                                                            className="checkVal"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
                                                        </svg>
                                                        <div className="validPhonenumberText">Phone Number is Verified</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <div className="profileDataLabel Email font-weight-bold">Email</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="profileDataVal" data-testid="qa-account-email">
                                                usdist@nuskin.com
                                            </div>
                                        </div>
                                        <form>
                                            <div className="emailNotVerifiedSMSVerify alert-danger input-group">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 512 512"
                                                    className="checkNotVal circleclose"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
                                                </svg>
                                                <div className="dTextInvalidEmail flex-row w-100 row">
                                                    <div className="emailNotVerifiedText w-100 px-3" data-testid="qa-email-not-verified">
                                                        Email is not verified.
                                                    </div>
                                                    <div className="ancher-default-accounts email-notverified">
                                                        <div tabIndex="0">Click here</div>
                                                    </div>
                                                    <div className="emailNotVerifiedLinkFinishText ">&nbsp;to send email verification link</div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <div className="profileDataLabel Address font-weight-bold">Address</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="profileDataVal" data-testid="">
                                                75 w center st, Provo UT 84601
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top row">
                                    <div className="col">
                                        <button
                                            data-testid="qa-cancel-btn"
                                            type="submit"
                                            className="addressbook-add-button justify-content-center align-items-center mt-2 btn btn-primary btn-md"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                    <div className="d-none">Please switch to your home market to make any changes.</div>
                                </div>
                            </div>
                        </div>
                        <div className="accProfileInfoCont d-none">
                            <form className="">
                                <div className="shadow-sm form-card bg-white undefined form-row">
                                    <div data-testid="" className=" d-none col">
                                        <label className="form-label" aria-label="accountId" data-testid="undefined-label">
                                            accountId
                                            <input
                                                name="accountId"
                                                label="accountId"
                                                touched="[object Object]"
                                                placeholder=""
                                                errors="[object Object]"
                                                values="[object Object]"
                                                aria-invalid="false"
                                                formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                customclassname="d-none"
                                                forminputlabels="[object Object]"
                                                type="text"
                                                className="form-control"
                                            />
                                            <div className="display-duplicate-error"></div>
                                            <div id="accountId-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                            <div id="accountId-success" data-testid="undefined-success" className="isvalid-feedback">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 16 16"
                                                    className="tick-icon green valid-absolute"
                                                    height="1rem"
                                                    width="1rem"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                                </svg>
                                                <span id="success_entry">entry is valid</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div data-testid="" className=" d-none col">
                                        <label className="form-label" aria-label="addressId" data-testid="undefined-label">
                                            addressId
                                            <input
                                                name="addressId"
                                                label="addressId"
                                                touched="[object Object]"
                                                placeholder=""
                                                errors="[object Object]"
                                                values="[object Object]"
                                                aria-invalid="false"
                                                formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                customclassname="d-none"
                                                forminputlabels="[object Object]"
                                                type="text"
                                                className="form-control"
                                            />
                                            <div className="display-duplicate-error"></div>
                                            <div id="addressId-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                            <div id="addressId-success" data-testid="undefined-success" className="isvalid-feedback">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 16 16"
                                                    className="tick-icon green valid-absolute"
                                                    height="1rem"
                                                    width="1rem"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                                </svg>
                                                <span id="success_entry">entry is valid</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div data-testid="" className=" my-1 h1 accountInfo col-lg-12">
                                        <label className="form-label" aria-label="Account Information" data-testid="undefined-label">
                                            Account Information
                                            <div
                                                type="div"
                                                name="Account Information"
                                                label="Account Information"
                                                touched="[object Object]"
                                                placeholder="Account Information"
                                                errors="[object Object]"
                                                values="[object Object]"
                                                aria-invalid="false"
                                                formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                columntype="[object Object]"
                                                customclassname="my-1 h1 accountInfo"
                                                forminputlabels="[object Object]"
                                            ></div>
                                            <div className="display-duplicate-error"></div>
                                            <div id="Account Information-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                        </label>
                                    </div>
                                    <div data-testid="" className=" my-1 required-note col-lg-12">
                                        <label className="form-label" aria-label="Fields marked with * are required" data-testid="undefined-label">
                                            Fields marked with * are required
                                            <div
                                                type="div"
                                                name="required_note"
                                                label="Fields marked with * are required"
                                                touched="[object Object]"
                                                placeholder="Fields marked with * are required"
                                                errors="[object Object]"
                                                values="[object Object]"
                                                aria-invalid="false"
                                                formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                columntype="[object Object]"
                                                customclassname="my-1 required-note"
                                                forminputlabels="[object Object]"
                                            ></div>
                                            <div className="display-duplicate-error"></div>
                                            <div id="required_note-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                        </label>
                                    </div>
                                    <div data-testid="" className="  col-lg-6">
                                        <label className="form-label" htmlFor="qa-first-name" aria-label="First Name *" data-testid="qa-first-name-label">
                                            First Name *
                                            <input
                                                name="firstName"
                                                label="First Name *"
                                                touched="[object Object]"
                                                placeholder=""
                                                errors="[object Object]"
                                                values="[object Object]"
                                                disabled=""
                                                maxLength="35"
                                                data-testid="qa-first-name"
                                                aria-invalid="false"
                                                datatestid="qa-first-name"
                                                formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                columntype="[object Object]"
                                                required=""
                                                forminputlabels="[object Object]"
                                                type="text"
                                                id="qa-first-name"
                                                className="form-control"
                                            />
                                            <div className="display-duplicate-error"></div>
                                            <div id="firstName-feedback" data-testid="qa-first-name-error" className="invalid-feedback">
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
                                            <div id="firstName-success" data-testid="qa-first-name-success" className="isvalid-feedback">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 16 16"
                                                    className="tick-icon green valid-absolute"
                                                    height="1rem"
                                                    width="1rem"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                                </svg>
                                                <span id="success_entry">entry is valid</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div data-testid="" className="  col-lg-6">
                                        <label className="form-label" htmlFor="qa-last-name" aria-label="Last Name *" data-testid="qa-last-name-label">
                                            Last Name *
                                            <input
                                                name="lastName"
                                                label="Last Name *"
                                                touched="[object Object]"
                                                placeholder=""
                                                errors="[object Object]"
                                                values="[object Object]"
                                                disabled=""
                                                maxLength="35"
                                                data-testid="qa-last-name"
                                                aria-invalid="false"
                                                datatestid="qa-last-name"
                                                formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                columntype="[object Object]"
                                                customclassname=""
                                                required=""
                                                forminputlabels="[object Object]"
                                                type="text"
                                                id="qa-last-name"
                                                className="form-control"
                                            />
                                            <div className="display-duplicate-error"></div>
                                            <div id="lastName-feedback" data-testid="qa-last-name-error" className="invalid-feedback">
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
                                            <div id="lastName-success" data-testid="qa-last-name-success" className="isvalid-feedback">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 16 16"
                                                    className="tick-icon green valid-absolute"
                                                    height="1rem"
                                                    width="1rem"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                                </svg>
                                                <span id="success_entry">entry is valid</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="shadow-sm form-card bg-white undefined form-row">
                                    <div data-testid="" className=" my-1 h1 emailInfo col-lg-12">
                                        <label className="form-label" aria-label="Email" data-testid="undefined-label">
                                            Email
                                            <div
                                                type="div"
                                                name="Email"
                                                label="Email"
                                                touched="[object Object]"
                                                placeholder="Email"
                                                errors="[object Object]"
                                                values="[object Object]"
                                                aria-invalid="false"
                                                formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                columntype="[object Object]"
                                                customclassname="my-1 h1 emailInfo"
                                                forminputlabels="[object Object]"
                                            ></div>
                                            <div className="display-duplicate-error"></div>
                                            <div id="Email-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                        </label>
                                    </div>
                                    <div data-testid="" className=" my-1 required-note col-lg-12">
                                        <label className="form-label" aria-label="Fields marked with * are required" data-testid="undefined-label">
                                            Fields marked with * are required
                                            <div
                                                type="div"
                                                name="required_note"
                                                label="Fields marked with * are required"
                                                touched="[object Object]"
                                                placeholder="Fields marked with * are required"
                                                errors="[object Object]"
                                                values="[object Object]"
                                                aria-invalid="false"
                                                formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                columntype="[object Object]"
                                                customclassname="my-1 required-note"
                                                forminputlabels="[object Object]"
                                            ></div>
                                            <div className="display-duplicate-error"></div>
                                            <div id="required_note-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                        </label>
                                    </div>
                                    <div data-testid="" className=" add-box-height col-lg-12">
                                        <label
                                            className="form-label"
                                            htmlFor="qa-createaccount-email"
                                            aria-label="Email Address *"
                                            data-testid="qa-createaccount-email-label"
                                        >
                                            Email *
                                            <div className="input-group">
                                                <input
                                                    variant="secondary"
                                                    name="email"
                                                    label="Email *"
                                                    touched="[object Object]"
                                                    placeholder=""
                                                    errors="[object Object]"
                                                    values="[object Object]"
                                                    maxLength="256"
                                                    data-testid="qa-createaccount-email"
                                                    aria-invalid="false"
                                                    datatestid="qa-createaccount-email"
                                                    formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                    columntype="[object Object]"
                                                    required=""
                                                    customclassname="add-box-height"
                                                    forminputlabels="[object Object]"
                                                    type="accEmail"
                                                    id="qa-createaccount-email"
                                                    className="form-control"
                                                />
                                                <div className="info">
                                                    <button
                                                        aria-label="more information about preferred email address"
                                                        type="button"
                                                        className="infoIconBtn btn btn-primary"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 512 512"
                                                            aria-label="This will be your account's primary email for account correspondence and used for logging in."
                                                            className=" infoIcon"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M235.4 172.2c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2 0-20.5-8.6-20.5-20zm1.4 35.7H275V352h-38.2V207.9z"></path>
                                                            <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="display-duplicate-error"></div>
                                            <div id="email-feedback" data-testid="qa-createaccount-email-error" className="invalid-feedback">
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
                                            <div id="email-success" data-testid="qa-createaccount-email-success" className="isvalid-feedback">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 16 16"
                                                    className="tick-icon green valid-absolute"
                                                    height="1rem"
                                                    width="1rem"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                                </svg>
                                                <span id="success_entry">entry is valid</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div data-testid="" className="  col-lg-12">
                                        <div className="emailNotVerifiedSMSVerify alert-danger input-group">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 512 512"
                                                className="checkNotVal circleclose"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
                                            </svg>
                                            <div className="dTextInvalidEmail flex-row w-100 row">
                                                <div className="emailNotVerifiedText w-100 px-3" data-testid="qa-email-not-verified">
                                                    Email is not verified.
                                                </div>
                                                <div className="ancher-default-accounts email-notverified">
                                                    <div tabIndex="0">Click here</div>
                                                </div>
                                                <div className="emailNotVerifiedLinkFinishText ">&nbsp;to send email verification link</div>
                                            </div>
                                        </div>
                                        <div className="display-duplicate-error"></div>
                                        <div id="undefined-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                    <div data-testid="" className="  col-lg-12">
                                        <div
                                            type="div"
                                            touched="[object Object]"
                                            errors="[object Object]"
                                            values="[object Object]"
                                            aria-invalid="false"
                                            formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                            columntype="[object Object]"
                                            customclassname=""
                                            forminputlabels="[object Object]"
                                        ></div>
                                        <div className="display-duplicate-error"></div>
                                        <div id="undefined-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                </div>
                                <div className="shadow-sm form-card bg-white undefined form-row">
                                    <div data-testid="" className=" my-1 h1 phoneInfo col-lg-12">
                                        <label className="form-label" aria-label="Phone Number" data-testid="undefined-label">
                                            Phone Number
                                            <div
                                                type="div"
                                                name="Phone Number"
                                                label="Phone Number"
                                                touched="[object Object]"
                                                placeholder="Phone Number"
                                                errors="[object Object]"
                                                values="[object Object]"
                                                aria-invalid="false"
                                                formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                columntype="[object Object]"
                                                customclassname="my-1 h1 phoneInfo"
                                                forminputlabels="[object Object]"
                                            ></div>
                                            <div className="display-duplicate-error"></div>
                                            <div id="Phone Number-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                        </label>
                                    </div>
                                    <div data-testid="" className=" my-1 required-note col-lg-12">
                                        <label className="form-label" aria-label="Fields marked with * are required" data-testid="undefined-label">
                                            Fields marked with * are required
                                            <div
                                                type="div"
                                                name="required_note"
                                                label="Fields marked with * are required"
                                                touched="[object Object]"
                                                placeholder="Fields marked with * are required"
                                                errors="[object Object]"
                                                values="[object Object]"
                                                aria-invalid="false"
                                                formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                columntype="[object Object]"
                                                customclassname="my-1 required-note"
                                                forminputlabels="[object Object]"
                                            ></div>
                                            <div className="display-duplicate-error"></div>
                                            <div id="required_note-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                        </label>
                                    </div>
                                    <div data-testid="" className="  col-lg-4">
                                        <label
                                            className="form-label"
                                            htmlFor="qa-dropdown-countrycode"
                                            aria-label="Country Code *"
                                            data-testid="qa-dropdown-countrycode-label"
                                        >
                                            Country Code *
                                            <select
                                                name="phoneCountryCode"
                                                label="Country Code *"
                                                touched="[object Object]"
                                                placeholder=""
                                                errors="[object Object]"
                                                values="[object Object]"
                                                options="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                data-testid="qa-dropdown-countrycode"
                                                aria-invalid="false"
                                                autoComplete="on"
                                                datatestid="qa-dropdown-countrycode"
                                                formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                columntype="[object Object]"
                                                required=""
                                                forminputlabels="[object Object]"
                                                type="select"
                                                id="qa-dropdown-countrycode"
                                                className="form-control"
                                                style={{ appearance: 'none' }}
                                            >
                                                <option>AR(+54)</option>
                                                <option>AT(+43)</option>
                                                <option>AU(+61)</option>
                                                <option>BE(+32)</option>
                                                <option>BN(+673)</option>
                                                <option>CA(+1)</option>
                                                <option>CH(+41)</option>
                                                <option>CL(+56)</option>
                                                <option>CO(+57)</option>
                                                <option>CZ(+420)</option>
                                                <option>DE(+49)</option>
                                                <option>DK(+45)</option>
                                                <option>ES(+34)</option>
                                                <option>FI(+358)</option>
                                                <option>FR(+33)</option>
                                                <option>GB(+44)</option>
                                                <option>HK(+852)</option>
                                                <option>HU(+36)</option>
                                                <option>BN(+62)</option>
                                                <option>IE(+353)</option>
                                                <option>IL(+972)</option>
                                                <option>IS(+354)</option>
                                                <option>IT(+39)</option>
                                                <option>JP(+81)</option>
                                                <option>KR(+82)</option>
                                                <option>LU(+352)</option>
                                                <option>MO(+853)</option>
                                                <option>MX(+52)</option>
                                                <option>MY(+60)</option>
                                                <option>NC(+687)</option>
                                                <option>NL(+31)</option>
                                                <option>NO(+47)</option>
                                                <option>NZ(+64)</option>
                                                <option>PE(+51)</option>
                                                <option>PF(+689)</option>
                                                <option>PH(+63)</option>
                                                <option>PL(+48)</option>
                                                <option>PT(+351)</option>
                                                <option>RO(+40)</option>
                                                <option>RU(+7)</option>
                                                <option>SE(+46)</option>
                                                <option>SG(+65)</option>
                                                <option>SK(+421)</option>
                                                <option>TH(+66)</option>
                                                <option>TW(+886)</option>
                                                <option>UA(+380)</option>
                                                <option>US(+1)</option>
                                                <option>VN(+84)</option>
                                                <option>ZA(+27)</option>
                                            </select>
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 512 512"
                                                className="phoneCountryCode-select-arrow"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                            </svg>
                                            <div className="display-duplicate-error"></div>
                                            <div id="phoneCountryCode-feedback" data-testid="qa-dropdown-countrycode-error" className="invalid-feedback">
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
                                            <div id="phoneCountryCode-success" data-testid="qa-dropdown-countrycode-success" className="isvalid-feedback">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 16 16"
                                                    className="tick-icon green valid-absolute"
                                                    height="1rem"
                                                    width="1rem"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                                </svg>
                                                <span id="success_entry">entry is valid</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div data-testid="" className=" add-box-height col-lg-8">
                                        <label
                                            className="form-label"
                                            htmlFor="qa-create-account-phone"
                                            aria-label="Phone *"
                                            data-testid="qa-create-account-phone-label"
                                        >
                                            Phone *
                                            <div className="mask-input-control input-group">
                                                <input
                                                    name="mobilePhoneNumber"
                                                    label="Phone *"
                                                    touched="[object Object]"
                                                    placeholder=""
                                                    errors="[object Object]"
                                                    values="[object Object]"
                                                    data-testid="qa-create-account-phone"
                                                    aria-invalid="false"
                                                    datatestid="qa-create-account-phone"
                                                    formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                    columntype="[object Object]"
                                                    required=""
                                                    customclassname="add-box-height"
                                                    verifybtnlabel="Verify"
                                                    forminputlabels="[object Object]"
                                                    type="mask"
                                                    id="qa-create-account-phone"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="display-duplicate-error"></div>
                                            <div id="mobilePhoneNumber-feedback" data-testid="qa-create-account-phone-error" className="invalid-feedback">
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
                                            <div id="mobilePhoneNumber-success" data-testid="qa-create-account-phone-success" className="isvalid-feedback">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 16 16"
                                                    className="tick-icon green valid-absolute"
                                                    height="1rem"
                                                    width="1rem"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                                </svg>
                                                <span id="success_entry">entry is valid</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div data-testid="" className=" labelInfoText col-lg-12">
                                        <label className="form-label" data-testid="undefined-label">
                                            <div
                                                type="div"
                                                touched="[object Object]"
                                                errors="[object Object]"
                                                values="[object Object]"
                                                aria-invalid="false"
                                                formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                columntype="[object Object]"
                                                customclassname="labelInfoText"
                                                forminputlabels="[object Object]"
                                            ></div>
                                            <div className="display-duplicate-error"></div>
                                            <div id="undefined-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                        </label>
                                        We'll text a code to verify this number. Fees may apply.
                                    </div>
                                    <div data-testid="" className=" addPhoneSpace col-lg-12">
                                        <div
                                            type="div"
                                            touched="[object Object]"
                                            errors="[object Object]"
                                            values="[object Object]"
                                            aria-invalid="false"
                                            formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                            columntype="[object Object]"
                                            customclassname="addPhoneSpace"
                                            forminputlabels="[object Object]"
                                        ></div>
                                        <div className="display-duplicate-error"></div>
                                        <div id="undefined-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                    <div data-testid="" className="  col-lg-12">
                                        <div className="phoneNotVerified alert-success hide-success-alert input-group">
                                            <div className="dTextInvalidEmail flex-column row">
                                                <div className="phoneNotVerifiedClass col">
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 512 512"
                                                        className="checkVal"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
                                                    </svg>
                                                    <div className="validPhonenumberText">Phone Number is Verified</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="display-duplicate-error"></div>
                                        <div id="undefined-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                    <div data-testid="" className=" phoneVerifyBtn my-1  d-none col-lg-12">
                                        <input
                                            name="Verify"
                                            label="Verify"
                                            touched="[object Object]"
                                            placeholder=""
                                            errors="[object Object]"
                                            values="[object Object]"
                                            data-testid="qa-verify-phone-button"
                                            aria-label="Verify"
                                            aria-invalid="false"
                                            datatestid="qa-verify-phone-button"
                                            formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                            columntype="[object Object]"
                                            customclassname="phoneVerifyBtn my-1  d-none"
                                            forminputlabels="[object Object]"
                                            type="button"
                                            id="qa-verify-phone-button"
                                            className="form-control"
                                        />
                                        <div className="display-duplicate-error"></div>
                                        <div id="Verify-feedback" data-testid="qa-verify-phone-button-error" className="invalid-feedback">
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
                                        <div id="Verify-success" data-testid="qa-verify-phone-button-success" className="isvalid-feedback">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 16 16"
                                                className="tick-icon green valid-absolute"
                                                height="1rem"
                                                width="1rem"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                            </svg>
                                            <span id="success_entry">entry is valid</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="shadow-sm form-card bg-white undefined form-row">
                                    <div data-testid="" className=" my-1 h1 addressInfo col-lg-12">
                                        <label className="form-label" aria-label="Address *" data-testid="undefined-label">
                                            Address *
                                            <div
                                                type="div"
                                                name="Address *"
                                                label="Address *"
                                                touched="[object Object]"
                                                placeholder="Address *"
                                                errors="[object Object]"
                                                values="[object Object]"
                                                aria-invalid="false"
                                                formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                columntype="[object Object]"
                                                customclassname="my-1 h1 addressInfo"
                                                forminputlabels="[object Object]"
                                            ></div>
                                            <div className="display-duplicate-error"></div>
                                            <div id="Address *-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                        </label>
                                    </div>
                                    <div data-testid="" className=" d-none col">
                                        <label className="form-label" data-testid="undefined-label">
                                            <input
                                                touched="[object Object]"
                                                errors="[object Object]"
                                                values="[object Object]"
                                                aria-invalid="false"
                                                formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                customclassname="d-none"
                                                forminputlabels="[object Object]"
                                                type="text"
                                                className="form-control"
                                            />
                                            <div className="display-duplicate-error"></div>
                                            <div id="undefined-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                        </label>
                                    </div>
                                </div>
                            </form>
                            <div className="address-container  accountProfile">
                                <div data-testid="address-form-wrapper">
                                    <form className="">
                                        <div className="mb-2 undefined form-row">
                                            <div data-testid="" className=" addressfield-wrapper col-lg-12">
                                                <label
                                                    className="mb-1 form-label"
                                                    htmlFor="qa-address1"
                                                    aria-label="Address Line 1 *"
                                                    data-testid="qa-address1-label"
                                                >
                                                    Address Line 1 *
                                                    <input
                                                        name="addressLine1"
                                                        label="Address Line 1 *"
                                                        touched="[object Object]"
                                                        placeholder=""
                                                        errors="[object Object]"
                                                        values="[object Object]"
                                                        maxLength="250"
                                                        data-testid="qa-address1"
                                                        aria-invalid="false"
                                                        datatestid="qa-address1"
                                                        formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                        columntype="[object Object]"
                                                        customclassname="addressfield-wrapper"
                                                        forminputlabels="[object Object]"
                                                        type="text"
                                                        id="qa-address1"
                                                        className="form-control"
                                                    />
                                                    <div className="display-duplicate-error"></div>
                                                    <div id="addressLine1-feedback" data-testid="qa-address1-error" className="invalid-feedback">
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
                                                    <div id="addressLine1-success" data-testid="qa-address1-success" className="isvalid-feedback">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 16 16"
                                                            className="tick-icon green valid-absolute"
                                                            height="1rem"
                                                            width="1rem"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                                        </svg>
                                                        <span id="success_entry">entry is valid</span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mb-2 undefined form-row">
                                            <div data-testid="" className=" addressfield-wrapper col-lg-12">
                                                <label
                                                    className="mb-1 form-label"
                                                    htmlFor="qa-address2"
                                                    aria-label="Address line 2"
                                                    data-testid="qa-address2-label"
                                                >
                                                    Address Line 2/Company Name
                                                    <input
                                                        name="addressLine2"
                                                        label="Address Line 2/Company Name"
                                                        touched="[object Object]"
                                                        placeholder="Apt., suite, unit, building, floor, etc."
                                                        errors="[object Object]"
                                                        values="[object Object]"
                                                        maxLength="250"
                                                        data-testid="qa-address2"
                                                        aria-invalid="false"
                                                        datatestid="qa-address2"
                                                        formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                        columntype="[object Object]"
                                                        customclassname="addressfield-wrapper"
                                                        forminputlabels="[object Object]"
                                                        type="text"
                                                        id="qa-address2"
                                                        className="form-control"
                                                    />
                                                    <div className="display-duplicate-error"></div>
                                                    <div id="addressLine2-feedback" data-testid="qa-address2-error" className="invalid-feedback">
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
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mb-2 undefined form-row">
                                            <div data-testid="" className=" addressfield-wrapper col-lg-6">
                                                <label className="mb-1 form-label" htmlFor="qa-city" aria-label="City *" data-testid="qa-city-label">
                                                    City *{' '}
                                                    <input
                                                        name="city"
                                                        label="City *"
                                                        touched="[object Object]"
                                                        placeholder=""
                                                        errors="[object Object]"
                                                        values="[object Object]"
                                                        maxLength="189"
                                                        data-testid="qa-city"
                                                        aria-invalid="false"
                                                        datatestid="qa-city"
                                                        formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                        columntype="[object Object]"
                                                        customclassname="addressfield-wrapper"
                                                        forminputlabels="[object Object]"
                                                        type="text"
                                                        id="qa-city"
                                                        className="form-control"
                                                    />
                                                    <div className="display-duplicate-error"></div>
                                                    <div id="city-feedback" data-testid="qa-city-error" className="invalid-feedback">
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
                                                    <div id="city-success" data-testid="qa-city-success" className="isvalid-feedback">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 16 16"
                                                            className="tick-icon green valid-absolute"
                                                            height="1rem"
                                                            width="1rem"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                                        </svg>
                                                        <span id="success_entry">entry is valid</span>
                                                    </div>
                                                </label>
                                            </div>
                                            <div data-testid="" className=" addressfield-wrapper accountProfile-mobile-wrapper col-lg-6">
                                                <label className="mb-1 form-label" htmlFor="qa-state" aria-label="State *" data-testid="qa-state-label">
                                                    State/Province *
                                                    <select
                                                        name="stateList"
                                                        label="State/Province *"
                                                        touched="[object Object]"
                                                        placeholder=""
                                                        errors="[object Object]"
                                                        values="[object Object]"
                                                        options="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                        data-testid="qa-state"
                                                        aria-invalid="false"
                                                        autoComplete="on"
                                                        datatestid="qa-state"
                                                        formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                        columntype="[object Object]"
                                                        customclassname="addressfield-wrapper accountProfile-mobile-wrapper"
                                                        forminputlabels="[object Object]"
                                                        type="select"
                                                        id="qa-state"
                                                        className="form-control"
                                                        style={{ appearance: 'none' }}
                                                    >
                                                        <option data-testid="qa-options">Select Your State</option>
                                                        <option data-testid="qa-options">AA</option>
                                                        <option data-testid="qa-options">AE</option>
                                                        <option data-testid="qa-options">AK</option>
                                                        <option data-testid="qa-options">AL</option>
                                                        <option data-testid="qa-options">AP</option>
                                                        <option data-testid="qa-options">AR</option>
                                                        <option data-testid="qa-options">AS</option>
                                                        <option data-testid="qa-options">AZ</option>
                                                        <option data-testid="qa-options">CA</option>
                                                        <option data-testid="qa-options">CO</option>
                                                        <option data-testid="qa-options">CT</option>
                                                        <option data-testid="qa-options">DC</option>
                                                        <option data-testid="qa-options">DE</option>
                                                        <option data-testid="qa-options">FL</option>
                                                        <option data-testid="qa-options">GA</option>
                                                        <option data-testid="qa-options">GU</option>
                                                        <option data-testid="qa-options">HI</option>
                                                        <option data-testid="qa-options">IA</option>
                                                        <option data-testid="qa-options">ID</option>
                                                        <option data-testid="qa-options">IL</option>
                                                        <option data-testid="qa-options">IN</option>
                                                        <option data-testid="qa-options">KS</option>
                                                        <option data-testid="qa-options">KY</option>
                                                        <option data-testid="qa-options">LA</option>
                                                        <option data-testid="qa-options">MA</option>
                                                        <option data-testid="qa-options">MD</option>
                                                        <option data-testid="qa-options">ME</option>
                                                        <option data-testid="qa-options">MI</option>
                                                        <option data-testid="qa-options">MN</option>
                                                        <option data-testid="qa-options">MO</option>
                                                        <option data-testid="qa-options">MP</option>
                                                        <option data-testid="qa-options">MS</option>
                                                        <option data-testid="qa-options">MT</option>
                                                        <option data-testid="qa-options">NC</option>
                                                        <option data-testid="qa-options">ND</option>
                                                        <option data-testid="qa-options">NE</option>
                                                        <option data-testid="qa-options">NH</option>
                                                        <option data-testid="qa-options">NJ</option>
                                                        <option data-testid="qa-options">NM</option>
                                                        <option data-testid="qa-options">NV</option>
                                                        <option data-testid="qa-options">NY</option>
                                                        <option data-testid="qa-options">OH</option>
                                                        <option data-testid="qa-options">OK</option>
                                                        <option data-testid="qa-options">OR</option>
                                                        <option data-testid="qa-options">PA</option>
                                                        <option data-testid="qa-options">PR</option>
                                                        <option data-testid="qa-options">PW</option>
                                                        <option data-testid="qa-options">RI</option>
                                                        <option data-testid="qa-options">SC</option>
                                                        <option data-testid="qa-options">SD</option>
                                                        <option data-testid="qa-options">TN</option>
                                                        <option data-testid="qa-options">TX</option>
                                                        <option data-testid="qa-options">UT</option>
                                                        <option data-testid="qa-options">VA</option>
                                                        <option data-testid="qa-options">VI</option>
                                                        <option data-testid="qa-options">VT</option>
                                                        <option data-testid="qa-options">WA</option>
                                                        <option data-testid="qa-options">WI</option>
                                                        <option data-testid="qa-options">WV</option>
                                                        <option data-testid="qa-options">WY</option>
                                                    </select>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 512 512"
                                                        className="select-arrow"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                    </svg>
                                                    <div className="display-duplicate-error"></div>
                                                    <div id="stateList-feedback" data-testid="qa-state-error" className="invalid-feedback">
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
                                                    <div id="stateList-success" data-testid="qa-state-success" className="isvalid-feedback">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 16 16"
                                                            className="tick-icon green valid-absolute"
                                                            height="1rem"
                                                            width="1rem"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                                        </svg>
                                                        <span id="success_entry">entry is valid</span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mb-2 undefined form-row">
                                            <div data-testid="" className=" addressfield-wrapper col-lg-6">
                                                <label className="mb-1 form-label" htmlFor="qa-country" aria-label="Country" data-testid="qa-country-label">
                                                    Country *
                                                    <select
                                                        name="country"
                                                        label="Country *"
                                                        touched="[object Object]"
                                                        placeholder=""
                                                        errors="[object Object]"
                                                        values="[object Object]"
                                                        options="[object Object],[object Object],[object Object],[object Object]"
                                                        disabled=""
                                                        maxLength="50"
                                                        data-testid="qa-country"
                                                        aria-invalid="false"
                                                        autoComplete="on"
                                                        datatestid="qa-country"
                                                        formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                        columntype="[object Object]"
                                                        customclassname="addressfield-wrapper"
                                                        forminputlabels="[object Object]"
                                                        type="select"
                                                        id="qa-country"
                                                        className="form-control"
                                                        style={{ appearance: 'none' }}
                                                    >
                                                        <option data-testid="qa-options">Select Your Country</option>
                                                        <option data-testid="qa-options">United States</option>
                                                        <option data-testid="qa-options">Canada</option>
                                                        <option data-testid="qa-options">United States</option>
                                                    </select>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 512 512"
                                                        className="select-arrow"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                    </svg>
                                                    <div className="display-duplicate-error"></div>
                                                    <div id="country-feedback" data-testid="qa-country-error" className="invalid-feedback">
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
                                                    <div id="country-success" data-testid="qa-country-success" className="isvalid-feedback">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 16 16"
                                                            className="tick-icon green valid-absolute"
                                                            height="1rem"
                                                            width="1rem"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                                        </svg>
                                                        <span id="success_entry">entry is valid</span>
                                                    </div>
                                                </label>
                                            </div>
                                            <div data-testid="" className=" addressfield-wrapper accountProfile-mobile-wrapper zipcode-mobile col-lg-6">
                                                <label className="mb-1 form-label" htmlFor="qa-code" aria-label="Zip code *" data-testid="qa-code-label">
                                                    Zip Code *
                                                    <input
                                                        name="zip"
                                                        label="Zip Code *"
                                                        touched="[object Object]"
                                                        placeholder=""
                                                        errors="[object Object]"
                                                        values="[object Object]"
                                                        maxLength="10"
                                                        data-testid="qa-code"
                                                        aria-invalid="false"
                                                        datatestid="qa-code"
                                                        formjson="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                                        columntype="[object Object]"
                                                        customclassname="addressfield-wrapper accountProfile-mobile-wrapper zipcode-mobile"
                                                        forminputlabels="[object Object]"
                                                        type="text"
                                                        id="qa-code"
                                                        className="form-control"
                                                    />
                                                    <div className="display-duplicate-error"></div>
                                                    <div id="zip-feedback" data-testid="qa-code-error" className="invalid-feedback">
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
                                                    <div id="zip-success" data-testid="qa-code-success" className="isvalid-feedback">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 16 16"
                                                            className="tick-icon green valid-absolute"
                                                            height="1rem"
                                                            width="1rem"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                                        </svg>
                                                        <span id="success_entry">entry is valid</span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div>
                                <div className=" text-right col">
                                    <button
                                        data-testid="qa-save-changes"
                                        type="submit"
                                        className="addressbook-add-button justify-content-center align-items-center mt-2 btn btn-primary btn-md"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                                <div className=" text-right col">
                                    <button
                                        data-testid="qa-cancel-btn"
                                        type="submit"
                                        className="addressbook-add-button justify-content-center align-items-center mt-2 border border-primary btn btn-light btn-md"
                                    >
                                        Cancel
                                    </button>
                                </div>
                                <div className="d-none">Please switch to your home market to make any changes.</div>
                            </div>
                        </div>
                        <div className="mt-2  card">
                            <div className="bg-white card-body">
                                <div className="card-title h5">
                                    <h1 className="card-title heading-2">Account Type</h1>
                                </div>
                                <div>
                                    <form className="">
                                        <div className=" undefined form-row">
                                            <div data-testid="" className="  col-lg-6">
                                                <label className="form-label" aria-label="Account Type *" data-testid="undefined-label">
                                                    Account Type *{' '}
                                                    <input
                                                        name="changeAccountTypeName"
                                                        label="Account Type *"
                                                        touched="[object Object]"
                                                        placeholder=""
                                                        errors="[object Object]"
                                                        values="[object Object]"
                                                        disabled=""
                                                        maxLength="50"
                                                        data-testid="qa-account-type-text"
                                                        aria-invalid="false"
                                                        formjson="[object Object],[object Object]"
                                                        columntype="[object Object]"
                                                        required=""
                                                        forminputlabels="[object Object]"
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                    <div className="display-duplicate-error"></div>
                                                    <div id="changeAccountTypeName-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                                    <div id="changeAccountTypeName-success" data-testid="undefined-success" className="isvalid-feedback">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 16 16"
                                                            className="tick-icon green valid-absolute"
                                                            height="1rem"
                                                            width="1rem"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                                        </svg>
                                                        <span id="success_entry">entry is valid</span>
                                                    </div>
                                                </label>
                                            </div>
                                            <div data-testid="" className="  col-lg-6">
                                                <label className="form-label" aria-label="Sponsoring affiliate name *" data-testid="undefined-label">
                                                    Sponsoring affiliate name *{' '}
                                                    <span>
                                                        <button
                                                            aria-label="Sponsoring affiliate name more info icon"
                                                            role="button"
                                                            type="button"
                                                            className="infoIconBtn ariaLabelBtn btn btn-primary"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                aria-label="You should enter the ID number of the Brand Affiliate you have selected to be your sponsor. We will link your account to the Brand Affiliate you identify, and they may contact you to provide business and product support based on your sales and order history. See our "
                                                                className="question-circle-align"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                                                            </svg>
                                                        </button>
                                                    </span>
                                                    <span> </span>
                                                    <input
                                                        name="sponsorAffiliateName"
                                                        label="Sponsoring affiliate name *"
                                                        touched="[object Object]"
                                                        placeholder=""
                                                        errors="[object Object]"
                                                        values="[object Object]"
                                                        disabled=""
                                                        maxLength="50"
                                                        aria-invalid="false"
                                                        formjson="[object Object],[object Object]"
                                                        tooltipinfo="You should enter the ID number of the Brand Affiliate you have selected to be your sponsor. We will link your account to the Brand Affiliate you identify, and they may contact you to provide business and product support based on your sales and order history. See our "
                                                        tooltipaction="click"
                                                        tooltipid="sponsorTooltip"
                                                        columntype="[object Object]"
                                                        required=""
                                                        forminputlabels="[object Object]"
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                    <div className="display-duplicate-error"></div>
                                                    <div id="sponsorAffiliateName-feedback" data-testid="undefined-error" className="invalid-feedback">
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
                                                    <div id="sponsorAffiliateName-success" data-testid="undefined-success" className="isvalid-feedback">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 16 16"
                                                            className="tick-icon green valid-absolute"
                                                            height="1rem"
                                                            width="1rem"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                                        </svg>
                                                        <span id="success_entry">entry is valid</span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="p-0 col">
                                            <button type="submit" className="updateSponsorBtn mr-2 btn btn-outline-primary">
                                                Become a Brand Affiliate - Business Entity
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
