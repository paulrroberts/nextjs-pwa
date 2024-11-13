import '@/components/profile/profile.css'
import ProfileNav from '@/components/profile/profileNav'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-md-flex flex-nowrap container">
                    <ProfileNav active="security" />
                    <section id="my-account-details-wrapper" className="account-details-wrapper ">
                        <div className="account-wrapper">
                            <div className="mb-2 shadow-sm card">
                                <div className="px-2 px-md-3 card-body">
                                    <div className="card-title h5">
                                        <h1 className="card-title heading-2">
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
                                                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
                                            </svg>
                                            <span className="ml-1 pb-1 pl-2" data-testid="qa-security-reset-password">
                                                Reset Password
                                            </span>
                                        </h1>
                                    </div>
                                    <p className="card-text">
                                        In order to reset the password, please click on the below change password button and you will be logged out of the
                                        application and will be redirected to Okta profile page in which you can reset your password. Once password reset is
                                        done, kindly login again in order to continue shopping.
                                    </p>
                                    <button data-testid="qa-change-password" type="button" className="change-password-button btn btn-primary">
                                        Change Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
