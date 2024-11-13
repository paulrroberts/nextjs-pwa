import '@/components/profile/profile.css'
import ProfileNav from '@/components/profile/profileNav'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-md-flex flex-nowrap container">
                    <ProfileNav active="direct-deposit" />
                    <section id="my-account-details-wrapper" className="account-details-wrapper ">
                        <div>
                            <div className="p-3 mb-3 flex-column bg-white row no-gutters">
                                <div className="d-flex flex-row align-items-center justify-content-between p-0 col">
                                    <h1 data-testid="qa-addresses-heading" className="account-addressbook-title mb-0 pr-3 heading-2">
                                        Direct Deposit
                                    </h1>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-between p-0 col">
                                    <button type="button" className="direct-btn px-5 mt-3 btn btn-primary">
                                        Click Here
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
