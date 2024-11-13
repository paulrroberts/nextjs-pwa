import '@/components/profile/profile.css'
import ProfileNav from '@/components/profile/profileNav'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-md-flex flex-nowrap container">
                    <ProfileNav active="account-profile" />
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
