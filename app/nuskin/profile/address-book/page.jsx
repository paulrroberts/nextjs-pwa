import '@/components/profile/profile.css'
import ProfileNav from '@/components/profile/profileNav'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-md-flex flex-nowrap container">
                    <ProfileNav active="address-book" />
                    <section id="my-account-details-wrapper" className="account-details-wrapper ">
                        <div data-testid="qa-address-list-container" className="p-0 container">
                            <div className="p-3 mb-3 flex-column bg-white shadow-sm row no-gutters">
                                <div className="">
                                    <div className="d-flex flex-row align-items-center justify-content-between p-0 col">
                                        <h1 data-testid="qa-addresses-heading" className="account-addressbook-title mb-0 pr-3 heading-2">
                                            Address Book
                                        </h1>
                                        <button
                                            data-testid="qa-add-address-button"
                                            type="button"
                                            className="account-addressbook-addnew-button d-inline px-3 btn btn-primary btn-md"
                                        >
                                            Add New Address
                                        </button>
                                    </div>
                                </div>
                                <div className="d-none">Please switch to your home market to make any changes.</div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">JIM</span>
                                                    <span>BOB</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    75 W Center st
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4432
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">matt</span>
                                                    <span>qa</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    540 Haleakala Hwy
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    HwyKahului
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Kahului
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    HI
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    96732-2302
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Test</span>
                                                    <span>Order</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    275 E 1325 S
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84606-7320
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Sayra</span>
                                                    <span></span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    3867 SE 38th Loop
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Ocala
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    FL
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    34480-4942
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">test</span>
                                                    <span></span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    2128 E 250 N
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Layton
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84040-3122
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Veronica</span>
                                                    <span>Gomez</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    75 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4432
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Veronica</span>
                                                    <span>Gomez</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    75 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4432
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Veronica</span>
                                                    <span>Gomez</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    75 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4432
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Veronica</span>
                                                    <span>Gomez</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    75 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4432
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Veronica</span>
                                                    <span>Gomez</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    75 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Springville
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84663-5900
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Veronica</span>
                                                    <span>Gomez</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    75 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4432
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Veronica</span>
                                                    <span>Gomez</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    75 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4432
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Veronica</span>
                                                    <span>Gomez</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    75 W Center Street
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4432
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Veronica</span>
                                                    <span>Gomez</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    75 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4432
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Veronica</span>
                                                    <span>Gomez</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    75 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4432
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Veronica</span>
                                                    <span>Gomez</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    75 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4432
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Megan</span>
                                                    <span>Christensen</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    75 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4432
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">new</span>
                                                    <span>address </span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    77 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4432
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">testing</span>
                                                    <span>dudes</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    76 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4417
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">Jimmy</span>
                                                    <span>Bob</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    75 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    ..........
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601-4049
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters"></div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">jim</span>
                                                    <span>jim bob</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    751 W Center St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street"></span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Provo
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    UT
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    84601
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="qa-address-container" className="p-3 my-3 bg-white address-container shadow-sm row no-gutters">
                                <div className="d-flex flex-column col">
                                    <button
                                        tabIndex="0"
                                        data-testid="qa-add-edit"
                                        type="button"
                                        className=" position-absolute p-0 edit-address shadow-none btn btn-black btn-lg"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            aria-label="Open edit Information"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </button>
                                    <div className="">
                                        <div className="flex-row text-capitalize row no-gutters" style={{ width: '50%' }}>
                                            <div className="w-100 row no-gutters">
                                                <span className="default-address-title paragraph-m">Default Address</span>
                                            </div>
                                            <div className="d-flex flex-column p-0 col">
                                                <span className="d-flex flex-wrap paragraph-l-bold mb-2">
                                                    <span className="mr-1">JIM</span>
                                                    <span>JIM</span>
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    701 Broadway St
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-street">
                                                    suite 2
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-region">
                                                    Little Rock
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-locality">
                                                    AR
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-country">
                                                    US
                                                </span>
                                                <span className="paragraph-m" data-testid="qa-zip">
                                                    72201-4121
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between mt-3 row no-gutters">
                                            <button
                                                data-testid="qa-remove-button"
                                                type="button"
                                                className="address-remove-button p-0 px-3 d-flex align-items-center justify-content-center btn btn-outline-primary btn-lg"
                                            >
                                                Remove
                                            </button>
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
