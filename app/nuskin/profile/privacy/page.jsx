import '@/components/profile/profile.css'
import ProfileNav from '@/components/profile/profileNav'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-md-flex flex-nowrap container">
                    <ProfileNav active="privacy" />
                    <section id="my-account-details-wrapper" className="account-details-wrapper ">
                        <div>
                            <div className="PrivacyPage">
                                <div className="box">
                                    <h1 className="privacy_box_header" tabIndex="0" data-testid="qa-privacy_box_header">
                                        Account Privacy
                                    </h1>
                                    <div className="box_card w-55 card">
                                        <div className="card-body">
                                            <p className="privacy_text_label card-text" tabIndex="0">
                                                Share my contact information with my sponsoring Brand Affiliate and upline?
                                            </p>
                                            <div className="privacy_bold_text card-title h5" tabIndex="0">
                                                Yes (Share all Personal Info).
                                            </div>
                                            <a className="card-link" tabIndex="0" id="privacylink" variant="link" color="primary">
                                                <div className="" data-testid="qa-edit-your-privacy-preference">
                                                    Edit your privacy preference
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <h1 className="privacy_box_header" tabIndex="0">
                                        Promotional Correspondence
                                    </h1>
                                    <div className="box_card mb-2 w-55 card">
                                        <div className="card-body">
                                            <p className="privacy_text_label card-text" tabIndex="0" data-testid="qa-opt-in-sms">
                                                Opt in to SMS
                                            </p>
                                            <div className="privacy_bold_text card-title h5" tabIndex="0">
                                                Yes
                                            </div>
                                            <p className="privacy_text_label card-text" tabIndex="0" data-testid="qa-opt-in-email">
                                                Opt in to Email
                                            </p>
                                            <div className="privacy_bold_text card-title h5" tabIndex="0">
                                                Yes
                                            </div>
                                            <a className="card-link" tabIndex="0" id="promotionalLink" variant="link" color="primary">
                                                <div className="" data-testid="qa-edit-your-promotional-preference">
                                                    Edit your promotional preference
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-none">Please switch to your home market to make any changes.</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
