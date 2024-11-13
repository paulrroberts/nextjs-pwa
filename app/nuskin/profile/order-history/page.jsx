import '@/components/profile/profile.css'
import ProfileNav from '@/components/profile/profileNav'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-md-flex flex-nowrap container">
                    <ProfileNav active="order-history" />
                    <section id="my-account-details-wrapper" className="account-details-wrapper ">
                        <div>
                            <div className="order-history-header bg-white p-3 shadow-sm" data-testid="qa-order-container">
                                <h1 className="d-inline heading-2" data-testid="qa-order-history-heading">
                                    Your Orders
                                </h1>
                                <div className="month-list-header d-flex justify-content-center text-uppercase pb-3 bg-white pt-3 row no-gutters">
                                    <div data-testid="qa-user-sub-upcoming-delivery-month" className="subsctription-tabs pr-3 selected col"></div>
                                    <div data-testid="qa-user-sub-upcoming-delivery-month" className="subsctription-tabs  col"></div>
                                </div>
                                <div className="order-search-form-container justify-content-between align-items-end row no-gutters">
                                    <div className="col-padding col-lg-6 col-md-12">
                                        <form data-testid="qa-order-search-textbox" className="order-search-box position-relative">
                                            <input
                                                placeholder="Search all orders"
                                                aria-label="Search all orders"
                                                data-testid="qa-order-search-input-box"
                                                type="text"
                                                className="form-control"
                                            />
                                            <button
                                                aria-label="clickable search icon"
                                                data-testid="qa-order-search-button"
                                                type="submit"
                                                className="position-absolute bg-transparent border-0 p-0 order-search-button btn btn-primary"
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="#000"
                                                    strokeWidth="0"
                                                    viewBox="0 0 512 512"
                                                    className="order-search-icon"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path>
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="col-padding col-lg-3 col-md-6 col-6">
                                        <label
                                            aria-label="true"
                                            className="order-search-form-label w-100 m-0 text-truncate heading-5"
                                            data-testid="qa-order-date-title"
                                        >
                                            Order Date
                                        </label>
                                        <div className="order-search-box dropdown">
                                            <button
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                data-testid="qa-order-date-dropdown"
                                                type="button"
                                                className="order-search-toggle w-100 d-flex align-items-center justify-content-between dropdown-toggle btn"
                                            >
                                                <span className="order-search-dropdown-text text-capitalize" data-testid="qa-order-selected-date">
                                                    Last 1 Month
                                                </span>
                                                <span
                                                    className="order-search-dropdown-arrow justify-content-center align-items-center d-flex"
                                                    data-testid="qa-order-date-dropdown-arrow"
                                                >
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 512 512"
                                                        aria-label="Toggle search box"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-padding col-lg-3 col-md-6 col-6">
                                        <label className="order-search-form-label w-100 m-0 text-truncate heading-5" data-testid="qa-order-status-title">
                                            Order Status
                                        </label>
                                        <div className="order-search-box  order-status-dropdown dropdown">
                                            <button
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                data-testid="qa-order-status-dropdown"
                                                type="button"
                                                className="order-search-toggle w-100 d-flex align-items-center justify-content-between dropdown-toggle btn"
                                            >
                                                <span className="order-search-dropdown-text text-capitalize" data-testid="qa-order-selected-status">
                                                    All
                                                </span>
                                                <span
                                                    className="order-search-dropdown-arrow justify-content-center align-items-center d-flex"
                                                    data-testid="qa-order-status-dropdown-arrow"
                                                >
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 512 512"
                                                        aria-label="Toggle search box"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-orders-container" className="mt-2 row no-gutters">
                                <div className="px-3 pb-4">You currently have no orders available. Recently placed orders will appear here.</div>
                            </div>
                        </div>
                        <div className="m-0 mt-2 row no-gutters">
                            <div className="px-3 col-lg-12">
                                <span className="m-0">Why can't I return / cancel my order?</span>
                                <p className="m-0">
                                    Once your order has been delivered, you can start the return process. Partially shipped or pending orders cannot be
                                    cancelled.
                                </p>
                            </div>
                            <div className="col"></div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
