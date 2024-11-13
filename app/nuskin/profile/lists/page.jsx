import '@/components/profile/profile.css'
import ProfileNav from '@/components/profile/profileNav'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-md-flex flex-nowrap container">
                    <ProfileNav active="lists" />
                    <section id="my-account-details-wrapper" className="account-details-wrapper ">
                        <section className="lists-block-wrapper">
                            <div className="p-3">
                                <h1 className="heading-2" data-testid="qa-your-list-heading">
                                    Your Lists
                                </h1>
                                <form className="position-relative">
                                    <input
                                        name="listName"
                                        placeholder="Search All Lists"
                                        data-testid="qa-search-list"
                                        aria-label="Search All Lists"
                                        className="pr-5 form-control"
                                    />
                                    <button
                                        aria-label="search icon button"
                                        type="button"
                                        className="search-icon-button position-absolute bg-transparent border-0 p-0 text-primary btn btn-primary"
                                        style={{ right: '10px' }}
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 512 512"
                                            className="search-icon"
                                            data-testid="qa-search-icon"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                            <div className="p-3 bg-white justify-content-between align-items-center mb-1 row no-gutters">
                                <div className="d-flex align-items-center col">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="mr-2 list-header-icon"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="92" cy="256" r="28"></circle>
                                        <circle cx="92" cy="132" r="28"></circle>
                                        <circle cx="92" cy="380" r="28"></circle>
                                        <path d="M432 240H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zM432 364H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zM191.5 148H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16z"></path>
                                    </svg>
                                    <span className="my-2 heading-2" data-testid="qa-list-title">
                                        Lists
                                    </span>
                                </div>
                                <div className="d-flex flex-column align-items-end col">
                                    <button data-testid="qa-create-list" type="button" className="create-lists px-4 btn btn-primary">
                                        Create List
                                    </button>
                                </div>
                            </div>
                            <div data-testid="qa-list-card" className="list-card-container p-0 border-bottom container">
                                <div className="d-flex p-3 list-card-title justify-content-between row no-gutters">
                                    <div className="d-flex align-items-center card-name mb-lg-0  col-lg-8 col-3">
                                        <span data-testid="qa-list-name" className="list-name">
                                            My List
                                        </span>
                                        <span className="ml-2">(0)</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center col-0 p-0">
                                        <div className="d-flex align-items-center col">
                                            <button
                                                data-testid="qa-list-delete"
                                                aria-label="Delete"
                                                type="button"
                                                className="delete-icon bg-transparent d-flex border-0 p-0  btn btn-light"
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 24 24"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <button
                                            data-testid="qa-list-details"
                                            tabIndex="0"
                                            className="d-flex bg-transparent border-0 list-details align-items-center col-0 p-0 col"
                                        >
                                            <span className="mr-2 text-nowrap">List Details</span>
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 512 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="accordion-block-collapse-section mt-2 w-100 mb-2 p-0 p-3 collapse" data-testid="qa-empty-product-list">
                                    You do not have any list items
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </section>
    )
}
