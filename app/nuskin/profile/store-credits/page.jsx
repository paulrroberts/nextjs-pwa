import '@/components/profile/profile.css'
import ProfileNav from '@/components/profile/profileNav'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-md-flex flex-nowrap container">
                    <ProfileNav active="store-credits" />
                    <section id="my-account-details-wrapper" className="account-details-wrapper ">
                        <section className="loyalty-container loyalty-shadow-sm">
                            <div className="loyalty-store-credit">
                                <div className="loyalty-header text justify-content d-flex">
                                    <h1 className="d-inline loyalty-header-text m-0 heading-2" data-testid="qa-loyalty-heading">
                                        Store Credit
                                    </h1>
                                </div>
                                <div className="justify-content row no-gutters">
                                    <div className="loyalty-current-points d-flex mr-10 mt-1 py-1 pr-2 col-md-3 col-12">
                                        <div className="points-container d-flex flex-column justify-content-center align-items-center">
                                            <div className="loyalty-wrap-text col">
                                                <span className="loyalty-text mb-auto text-uppercase">Available Store Credits</span>
                                            </div>
                                            <span className="point">0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </section>
    )
}
