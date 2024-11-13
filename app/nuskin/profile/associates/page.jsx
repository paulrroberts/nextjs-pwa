import '@/components/profile/profile.css'
import ProfileNav from '@/components/profile/profileNav'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-md-flex flex-nowrap container">
                    <ProfileNav active="associates" />
                    <section id="my-account-details-wrapper" className="account-details-wrapper ">
                        <div className="bg-white invite-user-table position-relative mb-2 d-flex justify-content-between">
                            <h1 className="heading-2">Associates</h1>
                        </div>
                        <div className="p-0 container">
                            <div data-testid="qa-list-user-management">
                                <div className="bg-white mb-2" data-testid="qa-list-user-management">
                                    <div no-gutters="true" className="accordion-block-wrapper user-list-accordian-wrapper ">
                                        <button
                                            data-testid=""
                                            aria-expanded="false"
                                            type="button"
                                            className="accordion-block-common-title-button justify-content-end d-flex bg-transparent p-0 border-0 align-items-center  btn btn-light btn-block btn-lg"
                                        >
                                            <span className="accordion-block-text accordion-kit-text  flex-grow-1 flex-shrink-1 text-left text-capitalize  text-break">
                                                <div className="user-list">
                                                    <div className="row no-gutters">
                                                        <div className="col">
                                                            <div data-testid="qa-user-name" className="user-list-item mb-1 user-colon-align">
                                                                <span className="font-weight-bold">First Name</span>
                                                                <span>: test</span>
                                                            </div>
                                                            <div data-testid="qa-user-name" className="user-list-item mb-1 user-colon-align">
                                                                <span className="font-weight-bold">Last Name</span>
                                                                <span>: test</span>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div data-testid="qa-email" className="user-list-item mb-1 user-colon-align">
                                                                <span className="font-weight-bold">Email</span>
                                                                <span className="toLowerCase">: </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </button>
                                        <div id="collapse-text" className="accordion-block-collapse-section w-100 mt-3  collapse"></div>
                                    </div>
                                    <div className="userLisdtCard-button-container row"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-none">Please switch to your home market to make any changes.</div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
