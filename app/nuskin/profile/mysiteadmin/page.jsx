import '@/components/profile/profile.css'
import ProfileNav from '@/components/profile/profileNav'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-block container">
                    <ProfileNav active="mysiteadmin" />
                    <section id="my-account-details-wrapper" className="account-details-wrapper ">
                        <div>
                            <div className="p-3 mb-3 flex-column bg-white row no-gutters">
                                <div className="d-flex flex-row align-items-center justify-content-between p-0 col">
                                    <h1 data-testid="qa-addresses-heading" className="account-addressbook-title mb-0 pr-3 heading-2">
                                        My Site
                                    </h1>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-between p-0 col">
                                    <a
                                        className="account-addressbook-title mb-0 mt-3 pr-3 heading-2"
                                        href="https://test.nuskin.com/content/nuskin/en_US/tools/mysite.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button type="button" className="direct-btn px-5 btn btn-primary">
                                            Click Here
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
