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
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3"
                                    data-testid="qa-payments"
                                    href="/nuskin/profile/payment-methods"
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
                                    className=" pt-3 pb-3  d-flex text-body align-items-center text-decoration-none pl-3 pr-3 active"
                                    data-testid="qa-subscriptions"
                                    href="/nuskin/profile/subscriptions"
                                    aria-current="page"
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
                                <a href="#" className="skip-myaccount-link text-primary bg-white">
                                    Skip to navigation Subscriptions content
                                </a>
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
