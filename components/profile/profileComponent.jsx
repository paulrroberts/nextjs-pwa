import Link from 'next/link'
import './profile.css'
import ProfileNav from './profileNav'

export default function Profile() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-md-flex flex-nowrap container">
                    <ProfileNav />
                    <section id="my-account-details-wrapper" className="account-details-wrapper ">
                        <div className="account-wrapper">
                            <div data-testid="qa-my-profile-container" className="mb-3 shadow-sm profileDetailCont card">
                                <div className="bg-white card-body">
                                    <h1 data-testid="qa-my-profile-heading" className="card-title heading-2-bold card-title h5">
                                        Profile Information
                                    </h1>
                                    <div className="mb-3 row">
                                        <div className="col-12">
                                            <div className="d-flex">
                                                <div className="profileDataLabel Name font-weight-bold">Name</div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="profileDataVal" data-testid="qa-profile-name">
                                                    JIM JIM
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <div className="col-12">
                                            <div className="d-flex">
                                                <div className="profileDataLabel Date Of Birth  font-weight-bold">Date Of Birth </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="profileDataVal" data-testid="">
                                                    25/05/1969
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
                                                <div className="profileDataVal" data-testid="qa-profile-phone-number">
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
                                                <div className="profileDataVal" data-testid="qa-profile-email">
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
                                                <div className="profileDataLabel Preferred Language font-weight-bold">Preferred Language</div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="profileDataVal" data-testid="qa-preferred-language">
                                                    English
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top row">
                                        <div className="col">
                                            <button data-testid="qa-edit-button" type="button" className="myaccount-btn mt-4 mb-2 md-0 btn btn-primary">
                                                Edit
                                            </button>
                                        </div>
                                        <div className="d-none">Please switch to your home market to make any changes.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="phone-verify-modal-cont"></div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
