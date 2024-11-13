import '@/components/profile/profile.css'
import ProfileNav from '@/components/profile/profileNav'

export default function Page() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="myaccount-wrapper container-fluid pl-0 pr-0">
                <div className="account-container my-0 mx-auto d-md-flex d-md-flex flex-nowrap container">
                    <ProfileNav active="favorites" />
                    <section id="my-account-details-wrapper" className="account-details-wrapper ">
                        <section className="fav-wrapper">
                            <div className="fav-products">
                                <div className="favorites-wrapper px-0 container">
                                    <div className="py-3 row no-gutters">
                                        <div data-testid="qa-favorites-title" className="d-flex align-items-center favorites-page-title col">
                                            <h1 className="heading-2">
                                                <span className="pb-1">Favorites</span>
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="favorite-product-wrapper mb-3" data-testid="qa-favorite-container">
                                        <div
                                            data-testid="qa-product-container"
                                            className="plp-card-item card-wrap position-relative bg-white mb-0 border-0 w-100  border card"
                                        >
                                            <a
                                                className="image-container-wrap"
                                                aria-label="ageLOC Blue LumiSpaÂ® iO + Cleanser"
                                                id="product_card_img_PB000013"
                                                href="/us/en/product/blue-lumispa-io-cleanser-promotion"
                                            >
                                                <div className="image-wrapper col-12 p-0 m-0 " style={{ width: '230px', height: '200px' }}>
                                                    <img
                                                        data-testid="qa-plp-product-image"
                                                        src="https://media.nuskin.com/m/3b7f46cb7850874b/webimage-nu-skin-lumispa-io-essentials-kit-oily.png?width=230"
                                                        data-src="https://media.nuskin.com/m/3b7f46cb7850874b/webimage-nu-skin-lumispa-io-essentials-kit-oily.png?width=230"
                                                        srcSet=""
                                                        loading="lazy"
                                                        alt="ageLOC Blue LumiSpaÂ® iO + Cleanser"
                                                        height="200px"
                                                        width="230px"
                                                        className="plp-product-image"
                                                        aria-label=""
                                                    />
                                                </div>
                                            </a>
                                            <button
                                                data-testid="qa-favorites-selected"
                                                type="button"
                                                className="favorite-icon bg-transparent border-0 text-dark shadow-none btn btn-primary"
                                            >
                                                <div className="fav-icon-text-wrapper">
                                                    <span>
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 24 24"
                                                            className="favorite favorite-fill text-danger"
                                                            aria-label="remove from favorites"
                                                            height="1.5rem"
                                                            width="1.5rem"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </button>
                                            <div
                                                className="product-description flex-direction-column text-center px-2 pt-0 pb-2 mt-3  card-body"
                                                data-testid="qa-figcaption"
                                            >
                                                <div className="text-decoration-none">
                                                    <a
                                                        className="catalog-product-name flex-nowrap text-dark overflow-hidden h-auto paragraph-m"
                                                        data-testid="qa-product-name"
                                                        href="/us/en/product/blue-lumispa-io-cleanser-promotion"
                                                    >
                                                        ageLOC Blue LumiSpaÂ® iO + Cleanser
                                                    </a>
                                                </div>
                                                <div data-testid="qa-product-price" tabIndex="0" className="product-price row no-gutters">
                                                    <div className="product-card-price">
                                                        <div>
                                                            Price<span className="pr-1">:</span>
                                                        </div>
                                                        <div className="discounted-price">
                                                            <span className="discounted-price" datatestid="qa-product-sale-price">
                                                                $192.00
                                                            </span>
                                                            <span className="strikeThrough  stike-price-value" datatestid="qa-product-reg-price">
                                                                $240.00
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="qa-product-price" tabIndex="0" className="product-price pv-price row no-gutters">
                                                    <div>
                                                        <div
                                                            data-testid="qa-pdp-pvprice"
                                                            className="p-0 d-flex mt-3 price-wrapper plp-price-md pv-right-align  pvstyle    col-lg-12"
                                                        >
                                                            <div className="price-section d-flex flex-wrap align-items-center">
                                                                <div className="  ">SV</div>
                                                                <div className=" ">&nbsp;:&nbsp;</div>
                                                                <div className="mini-cart-price   ">
                                                                    <span
                                                                        className="right-span text-right discount-price sale "
                                                                        data-testid="qa-product-sale-price"
                                                                    >
                                                                        152.00
                                                                    </span>
                                                                    <span
                                                                        className="right-span  sale strikeThrough  "
                                                                        data-testid="qa-product-reg-price"
                                                                        aria-hidden="true"
                                                                    ></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="position-absolute pdt-promotion-tag-wrapper">
                                                    <div className="text-center plp-promotion-tag" data-testid="qa-promotion-tag">
                                                        Bundle discount
                                                    </div>
                                                    <div className="text-center plp-promotion-tag" data-testid="qa-promotion-tag">
                                                        20% off LumiSpa iO P...
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-testid="qa-product-container"
                                            className="plp-card-item card-wrap position-relative bg-white mb-0 border-0 w-100  border card"
                                        >
                                            <a
                                                className="image-container-wrap"
                                                aria-label="LumiSpa® Spray Bottle"
                                                id="product_card_img_bltad004a7051f102c8"
                                                href="/us/en/product/lumispa-spray-bottle"
                                            >
                                                <div className="image-wrapper col-12 p-0 m-0 " style={{ width: '230px', height: '200px' }}>
                                                    <img
                                                        data-testid="qa-plp-product-image"
                                                        src="https://nuskin.com/content/dam/global/library/july2021/86998902-LumiSpa-Spray-Bottle.jpg?width=230"
                                                        data-src="https://nuskin.com/content/dam/global/library/july2021/86998902-LumiSpa-Spray-Bottle.jpg?width=230"
                                                        srcSet=""
                                                        loading="lazy"
                                                        alt="LumiSpa® Spray Bottle"
                                                        height="200px"
                                                        width="230px"
                                                        className="plp-product-image"
                                                        aria-label=""
                                                    />
                                                </div>
                                            </a>
                                            <button
                                                tabIndex="0"
                                                className="text-uppercase quickview-label position-absolute m-auto py-1 px-3"
                                                data-testid="qa-quick-view-button"
                                            >
                                                quick view
                                            </button>
                                            <button
                                                data-testid="qa-favorites-selected"
                                                type="button"
                                                className="favorite-icon bg-transparent border-0 text-dark shadow-none btn btn-primary"
                                            >
                                                <div className="fav-icon-text-wrapper">
                                                    <span>
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 24 24"
                                                            className="favorite favorite-fill text-danger"
                                                            aria-label="remove from favorites"
                                                            height="1.5rem"
                                                            width="1.5rem"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </button>
                                            <div
                                                className="product-description flex-direction-column text-center px-2 pt-0 pb-2 mt-3  card-body"
                                                data-testid="qa-figcaption"
                                            >
                                                <div className="text-decoration-none">
                                                    <a
                                                        className="catalog-product-name flex-nowrap text-dark overflow-hidden h-auto paragraph-m"
                                                        data-testid="qa-product-name"
                                                        href="/us/en/product/lumispa-spray-bottle"
                                                    >
                                                        LumiSpa® Spray Bottle
                                                    </a>
                                                </div>
                                                <div data-testid="qa-product-price" tabIndex="0" className="product-price flex-row row no-gutters">
                                                    <div className="product-card-price">
                                                        <div>
                                                            Price<span className="pr-1">:</span>
                                                        </div>
                                                        <span className="reguler-price" datatestid="qa-product-sale-price">
                                                            $5.00
                                                        </span>
                                                    </div>
                                                </div>
                                                <div data-testid="qa-product-price" tabIndex="0" className="product-ProductPrice pv-price row no-gutters">
                                                    <div>
                                                        <div
                                                            data-testid="qa-pdp-pvprice"
                                                            className="p-0 d-flex mt-3 price-wrapper plp-price-md pv-right-align  pvstyle    col-lg-12"
                                                        >
                                                            <div className="price-section d-flex flex-wrap align-items-center">
                                                                <div className="  ">SV</div>
                                                                <div className=" ">&nbsp;:&nbsp;</div>
                                                                <div className="mini-cart-price   ">
                                                                    <span
                                                                        className="right-span  sale   "
                                                                        data-testid="qa-product-reg-price"
                                                                        aria-hidden="false"
                                                                    >
                                                                        0.00
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-testid="qa-product-container"
                                            className="plp-card-item card-wrap position-relative bg-white mb-0 border-0 w-100  border card"
                                        >
                                            <a
                                                className="image-container-wrap"
                                                aria-label="LumiSpa + Nutricentials® Subscription"
                                                id="product_card_img_01002292"
                                                href="/us/en/product/lumispa-nutricentials-subscription-dry-US"
                                            >
                                                <div className="image-wrapper col-12 p-0 m-0 " style={{ width: '230px', height: '200px' }}>
                                                    <img
                                                        data-testid="qa-plp-product-image"
                                                        src="https://nuskin.com/content/dam/global/library/may2021/01002292-lumi-nutri-subscription-dry.jpg?width=230"
                                                        data-src="https://nuskin.com/content/dam/global/library/may2021/01002292-lumi-nutri-subscription-dry.jpg?width=230"
                                                        srcSet=""
                                                        loading="lazy"
                                                        alt="LumiSpa + Nutricentials® Subscription"
                                                        height="200px"
                                                        width="230px"
                                                        className="plp-product-image"
                                                        aria-label=""
                                                    />
                                                </div>
                                            </a>
                                            <button
                                                data-testid="qa-favorites-selected"
                                                type="button"
                                                className="favorite-icon bg-transparent border-0 text-dark shadow-none btn btn-primary"
                                            >
                                                <div className="fav-icon-text-wrapper">
                                                    <span>
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 24 24"
                                                            className="favorite favorite-fill text-danger"
                                                            aria-label="remove from favorites"
                                                            height="1.5rem"
                                                            width="1.5rem"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </button>
                                            <div
                                                className="product-description flex-direction-column text-center px-2 pt-0 pb-2 mt-3  card-body"
                                                data-testid="qa-figcaption"
                                            >
                                                <div className="text-decoration-none">
                                                    <a
                                                        className="catalog-product-name flex-nowrap text-dark overflow-hidden h-auto paragraph-m"
                                                        data-testid="qa-product-name"
                                                        href="/us/en/product/lumispa-nutricentials-subscription-dry-US"
                                                    >
                                                        LumiSpa + Nutricentials® Subscription
                                                    </a>
                                                </div>
                                                <div data-testid="qa-product-price" tabIndex="0" className="product-price row no-gutters">
                                                    <div className="product-card-price">
                                                        <div>
                                                            Price<span className="pr-1">:</span>
                                                        </div>
                                                        <div className="discounted-price">
                                                            <span className="discounted-price" datatestid="qa-product-sale-price">
                                                                $72.00
                                                            </span>
                                                            <span className="strikeThrough  stike-price-value" datatestid="qa-product-reg-price">
                                                                $94.00
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="qa-product-price" tabIndex="0" className="product-price pv-price row no-gutters">
                                                    <div>
                                                        <div
                                                            data-testid="qa-pdp-pvprice"
                                                            className="p-0 d-flex mt-3 price-wrapper plp-price-md pv-right-align  pvstyle    col-lg-12"
                                                        >
                                                            <div className="price-section d-flex flex-wrap align-items-center">
                                                                <div className="  ">SV</div>
                                                                <div className=" ">&nbsp;:&nbsp;</div>
                                                                <div className="mini-cart-price   ">
                                                                    <span
                                                                        className="right-span text-right discount-price sale "
                                                                        data-testid="qa-product-sale-price"
                                                                    >
                                                                        50.50
                                                                    </span>
                                                                    <span
                                                                        className="right-span  sale strikeThrough  "
                                                                        data-testid="qa-product-reg-price"
                                                                        aria-hidden="true"
                                                                    ></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="position-absolute pdt-promotion-tag-wrapper">
                                                    <div className="text-center plp-promotion-tag" data-testid="qa-promotion-tag">
                                                        Bundle discount
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-testid="qa-product-container"
                                            className="plp-card-item card-wrap position-relative bg-white mb-0 border-0 w-100  border card"
                                        >
                                            <a
                                                className="image-container-wrap"
                                                aria-label="LumiSpa iO Blue Accessories Kit"
                                                id="product_card_img_01010773"
                                                href="/us/en/product/US_kit_lumispa-io-blue-accessories-kit-US"
                                            >
                                                <div className="image-wrapper col-12 p-0 m-0 " style={{ width: '230px', height: '200px' }}>
                                                    <img
                                                        data-testid="qa-plp-product-image"
                                                        src="https://images.contentstack.io/v3/assets/blt7d4c4f4a1bf5a819/blt6815164f7cd685d1/615aff304874c34f2593533b/nu-skin-ageloc-lumispa-accent-and-idealeyes-eyecare-kit-packshot-pdp-1.jpg?width=230"
                                                        data-src="https://images.contentstack.io/v3/assets/blt7d4c4f4a1bf5a819/blt6815164f7cd685d1/615aff304874c34f2593533b/nu-skin-ageloc-lumispa-accent-and-idealeyes-eyecare-kit-packshot-pdp-1.jpg?width=230"
                                                        srcSet=""
                                                        loading="lazy"
                                                        alt="LumiSpa iO Blue Accessories Kit"
                                                        height="200px"
                                                        width="230px"
                                                        className="plp-product-image"
                                                        aria-label=""
                                                    />
                                                </div>
                                            </a>
                                            <button
                                                data-testid="qa-favorites-selected"
                                                type="button"
                                                className="favorite-icon bg-transparent border-0 text-dark shadow-none btn btn-primary"
                                            >
                                                <div className="fav-icon-text-wrapper">
                                                    <span>
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 24 24"
                                                            className="favorite favorite-fill text-danger"
                                                            aria-label="remove from favorites"
                                                            height="1.5rem"
                                                            width="1.5rem"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </button>
                                            <div
                                                className="product-description flex-direction-column text-center px-2 pt-0 pb-2 mt-3  card-body"
                                                data-testid="qa-figcaption"
                                            >
                                                <div className="text-decoration-none">
                                                    <a
                                                        className="catalog-product-name flex-nowrap text-dark overflow-hidden h-auto paragraph-m"
                                                        data-testid="qa-product-name"
                                                        href="/us/en/product/US_kit_lumispa-io-blue-accessories-kit-US"
                                                    >
                                                        LumiSpa iO Blue Accessories Kit
                                                    </a>
                                                </div>
                                                <div data-testid="qa-product-price" tabIndex="0" className="product-price row no-gutters">
                                                    <div className="product-card-price">
                                                        <div>
                                                            Price<span className="pr-1">:</span>
                                                        </div>
                                                        <div className="discounted-price">
                                                            <span className="discounted-price" datatestid="qa-product-sale-price">
                                                                $103.00
                                                            </span>
                                                            <span className="strikeThrough  stike-price-value" datatestid="qa-product-reg-price">
                                                                $110.00
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="qa-product-price" tabIndex="0" className="product-price pv-price row no-gutters">
                                                    <div>
                                                        <div
                                                            data-testid="qa-pdp-pvprice"
                                                            className="p-0 d-flex mt-3 price-wrapper plp-price-md pv-right-align  pvstyle    col-lg-12"
                                                        >
                                                            <div className="price-section d-flex flex-wrap align-items-center">
                                                                <div className="  ">SV</div>
                                                                <div className=" ">&nbsp;:&nbsp;</div>
                                                                <div className="mini-cart-price   ">
                                                                    <span
                                                                        className="right-span text-right discount-price sale "
                                                                        data-testid="qa-product-sale-price"
                                                                    >
                                                                        75.00
                                                                    </span>
                                                                    <span
                                                                        className="right-span  sale strikeThrough  "
                                                                        data-testid="qa-product-reg-price"
                                                                        aria-hidden="true"
                                                                    ></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="position-absolute pdt-promotion-tag-wrapper">
                                                    <div className="text-center plp-promotion-tag" data-testid="qa-promotion-tag">
                                                        Bundle discount
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-testid="qa-product-container"
                                            className="plp-card-item card-wrap position-relative bg-white mb-0 border-0 w-100  border card"
                                        >
                                            <a
                                                className="image-container-wrap"
                                                aria-label="LumiSpa® Accent Head"
                                                id="product_card_img_bltbc99eaa6c785fdcc"
                                                href="/us/en/product/lumispa-accent-head"
                                            >
                                                <div className="image-wrapper col-12 p-0 m-0 " style={{ width: '230px', height: '200px' }}>
                                                    <img
                                                        data-testid="qa-plp-product-image"
                                                        src="https://nuskin.com/content/dam/NuskinVN/NG/Product_callout/IMG1807_00050-Lumispa-Accent-Head-White.jpg?width=230"
                                                        data-src="https://nuskin.com/content/dam/NuskinVN/NG/Product_callout/IMG1807_00050-Lumispa-Accent-Head-White.jpg?width=230"
                                                        srcSet=""
                                                        loading="lazy"
                                                        alt="LumiSpa® Accent Head"
                                                        height="200px"
                                                        width="230px"
                                                        className="plp-product-image"
                                                        aria-label=""
                                                    />
                                                </div>
                                            </a>
                                            <button
                                                tabIndex="0"
                                                className="text-uppercase quickview-label position-absolute m-auto py-1 px-3"
                                                data-testid="qa-quick-view-button"
                                            >
                                                quick view
                                            </button>
                                            <button
                                                data-testid="qa-favorites-selected"
                                                type="button"
                                                className="favorite-icon bg-transparent border-0 text-dark shadow-none btn btn-primary"
                                            >
                                                <div className="fav-icon-text-wrapper">
                                                    <span>
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 24 24"
                                                            className="favorite favorite-fill text-danger"
                                                            aria-label="remove from favorites"
                                                            height="1.5rem"
                                                            width="1.5rem"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </button>
                                            <div
                                                className="product-description flex-direction-column text-center px-2 pt-0 pb-2 mt-3  card-body"
                                                data-testid="qa-figcaption"
                                            >
                                                <div className="text-decoration-none">
                                                    <a
                                                        className="catalog-product-name flex-nowrap text-dark overflow-hidden h-auto paragraph-m"
                                                        data-testid="qa-product-name"
                                                        href="/us/en/product/lumispa-accent-head"
                                                    >
                                                        LumiSpa® Accent Head
                                                    </a>
                                                </div>
                                                <div data-testid="qa-product-price" tabIndex="0" className="product-price flex-row row no-gutters">
                                                    <div className="product-card-price">
                                                        <div>
                                                            Price<span className="pr-1">:</span>
                                                        </div>
                                                        <span className="reguler-price" datatestid="qa-product-sale-price">
                                                            $71.00
                                                        </span>
                                                    </div>
                                                </div>
                                                <div data-testid="qa-product-price" tabIndex="0" className="product-ProductPrice pv-price row no-gutters">
                                                    <div>
                                                        <div
                                                            data-testid="qa-pdp-pvprice"
                                                            className="p-0 d-flex mt-3 price-wrapper plp-price-md pv-right-align  pvstyle    col-lg-12"
                                                        >
                                                            <div className="price-section d-flex flex-wrap align-items-center">
                                                                <div className="  ">SV</div>
                                                                <div className=" ">&nbsp;:&nbsp;</div>
                                                                <div className="mini-cart-price   ">
                                                                    <span
                                                                        className="right-span  sale   "
                                                                        data-testid="qa-product-reg-price"
                                                                        aria-hidden="false"
                                                                    >
                                                                        48.50
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
