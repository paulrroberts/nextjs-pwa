import Script from 'next/script'
import './home.css'

export default function HomeContent() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="home-page" no-gutters="true">
                <div className="position-relative w-100 hero-banner-section d-lg-flex px-0 container">
                    <div className="col-12 col-lg-7 p-0 hero-img-left" alt="">
                        <div className="">
                            <a className="link d-inline-block w-100" data-testid="hero-mainpanel" href="/us/en/catalog/mynd360">
                                <link
                                    rel="preload"
                                    href="https://media.nuskin.com/transform/a91e62ba-b38e-4d0b-804e-23303bc8048c/MYND-Web-Banner?format=webp&amp;io=transform:fill,width:800"
                                    as="image"
                                    fetchPriority="high"
                                />
                                <div
                                    className="w-100 pr-0 hero-banner-left d-md-flex align-items-center float-left position-relative"
                                    sx={{
                                        color: 'rgb(37, 37, 37)',
                                        background:
                                            'url("https://media.nuskin.com/transform/a91e62ba-b38e-4d0b-804e-23303bc8048c/MYND-Web-Banner?format=webp&amp;io=transform:fill,width:800")'
                                    }}
                                    role="img"
                                    data-alt-text-resolution="bynder"
                                    aria-label=""
                                >
                                    <div className="mob-heroleft"></div>
                                    <div className="hero-banner-left-inner position-relative">
                                        <h2 className="heading-1">MYND360™</h2>
                                        <h3 className="heading-3">A holistic way to conquer a new day</h3>
                                        <div className="banner-left-text-color-black">
                                            <button type="button" className="hero-btn btn btn-primary">
                                                Shop Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 p-0 hero-banner-right d-md-flex flex-lg-column float-left">
                        <div className="right-top-banner-container">
                            <div className="">
                                <a
                                    className="link d-inline-block w-100"
                                    data-testid="hero-subpanel-1"
                                    href="/us/en/product/ageloc-tru-face-peptide-retinol-complex"
                                >
                                    <link
                                        href="https://media.nuskin.com/transform/aee774c7-71d8-4627-88c6-8ee8065ca3ed/Retinol-Home-Page-Banner-2-3?format=webp&amp;io=transform:fill,width:800"
                                        as="image"
                                        fetchPriority="high"
                                    />
                                    <div
                                        className="w-100 hero-banner-right-inner one d-flex flex-column text-left justify-content-between"
                                        sx={{
                                            color: 'rgb(37, 37, 37)',
                                            background:
                                                'url("https://media.nuskin.com/transform/aee774c7-71d8-4627-88c6-8ee8065ca3ed/Retinol-Home-Page-Banner-2-3?format=webp&amp;io=transform:fill,width:800")'
                                        }}
                                        role="img"
                                        data-alt-text-resolution="bynder"
                                        aria-label=""
                                    >
                                        <p className="m-0">
                                            <span className="paragraph-m">ageLOC® Tru Face®</span>
                                        </p>
                                        <h2 className="heading-2 m-0">ageLOC® Tru Face® Peptide Retinol Complex</h2>
                                        <h3 className="h5-medium mb-10 paragraph-m m-0">is finally here!</h3>
                                        <div className="banner-right-text-color-black">
                                            <button sx={{ color: 'rgb(37, 37, 37)' }} type="button" className="text-left p-0 btn btn-link">
                                                <span className="paragraph-m">Shop Now</span>
                                            </button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="right-bottom-banner-container">
                            <div className="">
                                <a className="link d-inline-block w-100" data-testid="hero-subpanel-2" href="/us/en/catalog/beauty_devices">
                                    <link
                                        href="https://media.nuskin.com/transform/0bddcb18-2ce5-40e0-b333-eafe23a8a747/Small-devices-Home-page-banner-no-seal?format=webp&amp;io=transform:fill,width:800"
                                        as="image"
                                        fetchPriority="high"
                                    />
                                    <div
                                        className="w-100 hero-banner-right-inner two d-flex flex-column text-left justify-content-between"
                                        sx={{
                                            color: 'rgb(37, 37, 37)',
                                            background:
                                                'url("https://media.nuskin.com/transform/0bddcb18-2ce5-40e0-b333-eafe23a8a747/Small-devices-Home-page-banner-no-seal?format=webp&amp;io=transform:fill,width:800")'
                                        }}
                                        role="img"
                                        data-alt-text-resolution="bynder"
                                        aria-label=""
                                    >
                                        <p className="m-0">
                                            <span className="paragraph-m"></span>
                                        </p>
                                        <h2 className="heading-2 m-0">It's official!</h2>
                                        <h3 className="h5-medium paragraph-m m-0">We're your go-to for devices.</h3>
                                        <div className="banner-right-text-color-black">
                                            <button sx={{ color: 'rgb(37, 37, 37)' }} type="button" className="text-left p-0 w-auto btn btn-link">
                                                <span className="paragraph-m">Shop Now</span>
                                            </button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-title-section w-100 p-0 container-fluid">
                    <div sx={{ backgroundColor: 'rgb(245, 245, 245)' }} className="homepage-title row">
                        <div className="float-left homepage-title-left-img d-hide d-lg-show p-0 col-md-auto">
                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '63.2px', height: '70px' }}>
                                <img
                                    src="https://media.nuskin.com/m/6ae832a295e34362/webimage-H1-image2-cream.png"
                                    data-src="https://media.nuskin.com/m/6ae832a295e34362/webimage-H1-image2-cream.png"
                                    srcSet=""
                                    loading="lazy"
                                    height="70px"
                                    width="63.2px"
                                    className=""
                                    aria-label=""
                                    data-alt-text-resolution="bynder"
                                    alt="Squiggle zig-zag of lotion cream."
                                />
                            </div>
                        </div>
                        <div className="homepage-title-heading col-lg-10 col-md-12">
                            <h1 sx={{ color: 'rgb(95, 95, 95)' }}>Discover the best you, inside and out, with our integrated beauty and wellness products.</h1>
                        </div>
                        <div className="float-right homepage-title-right-img d-hide d-lg-show p-0 col-md-auto">
                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '63.2px', height: '70px' }}>
                                <img
                                    src="https://media.nuskin.com/m/7ffd795ce7cfbe68/webimage-H1-image2-leaf.png"
                                    data-src="https://media.nuskin.com/m/7ffd795ce7cfbe68/webimage-H1-image2-leaf.png"
                                    srcSet=""
                                    loading="lazy"
                                    height="70px"
                                    width="63.2px"
                                    className=""
                                    aria-label=""
                                    data-alt-text-resolution="bynder"
                                    alt="Eucalyptus leaves with capsule supplement."
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="separator-section w-100 p-0 container-fluid">
                    <div className="separator-container row">
                        <div className="hori-line"></div>
                        <h4 className="h4-bold subhead-l">DISCOVER OUR</h4>
                        <h3 className="heading-1">Most Popular Products</h3>
                    </div>
                </div>
                <div className="tabssection px-0 container-fluid">
                    <nav className="prodtabs heading-5 nav nav-tabs" role="tablist">
                        <a
                            id="controlled-tab-example-tab-LatestProducts"
                            href="#"
                            role="tab"
                            data-rb-event-key="LatestProducts"
                            aria-controls="controlled-tab-example-tabpane-LatestProducts"
                            aria-selected="true"
                            className="nav-item nav-link active"
                            data-testid="mpp-best-sellers-tab"
                        >
                            Latest Products
                        </a>
                        <a
                            id="controlled-tab-example-tab-BestSellers"
                            href="#"
                            role="tab"
                            data-rb-event-key="BestSellers"
                            aria-controls="controlled-tab-example-tabpane-BestSellers"
                            aria-selected="false"
                            className="nav-item nav-link"
                            data-testid="mpp-latest-products-tab"
                        >
                            Best Sellers
                        </a>
                    </nav>
                    <div className="tab-content">
                        <div
                            data-testid="mpp-best-seller-contents"
                            id="controlled-tab-example-tabpane-LatestProducts"
                            aria-labelledby="controlled-tab-example-tab-LatestProducts"
                            role="tabpanel"
                            aria-hidden="false"
                            className="fade tab-pane active show"
                        >
                            <div className="popular-section " id="product-section">
                                <div></div>
                                <div className="container">
                                    <div className="popular-section-inner position-relative">
                                        <img
                                            src="https://www.nuskin.com/static/nu-home/assets/img/gray-cream.c348e4d7.png"
                                            alt="gray cream"
                                            className="product-image-bg-left"
                                        />
                                        <img
                                            src="https://www.nuskin.com/static/nu-home/assets/img/white-cream.5a4c116c.png"
                                            alt="white cream"
                                            className="product-image-bg-right"
                                        />
                                        <div className="pt-2 row">
                                            <div className="popular-section-left col-lg-5 col-md-6 col-sm-12">
                                                <div
                                                    className="popular-sidebar"
                                                    sx={{
                                                        background: 'url("https://media.nuskin.com/transform/1894148f-308e-455b-ae2c-2664a23567b0/EMEA_MPP_3")'
                                                    }}
                                                    role="img"
                                                    aria-label="The next big thing"
                                                    data-alt-text-resolution="cs"
                                                >
                                                    <div className="populat-text">
                                                        <h3 className="heading heading-1" sx={{ color: 'rgb(37, 37, 37)' }}>
                                                            The next big thing
                                                        </h3>
                                                        <div className="popular-text-color-black">
                                                            <a
                                                                className="link underline1 d-flex paragraph-m"
                                                                data-testid="link"
                                                                fonttoggle=""
                                                                componentname="homepage_product"
                                                                href="/us/en/categoryLanding/new_and_loved"
                                                            >
                                                                <span>See what's new</span>
                                                                <svg
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    strokeWidth="2"
                                                                    viewBox="0 0 24 24"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="product-arrow-icon pl-2"
                                                                    height="1em"
                                                                    width="1em"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <circle cx="12" cy="12" r="10"></circle>
                                                                    <polyline points="12 16 16 12 12 8"></polyline>
                                                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="most-popular-slider col-lg-7 col-md-6 col-sm-12">
                                                <div className="viewmain">
                                                    <div className="">
                                                        <a className="link text-decoration-none d-inline-block" href="/us/en/catalog/all_new_and_loved">
                                                            <h6 className="viewsec paragraph-m">View All</h6>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="slider-arrow">
                                                        <div className="arrow-btn prev">
                                                            <button
                                                                aria-label="Previous Image"
                                                                data-testid="qa-pdp-left-arrow"
                                                                type="button"
                                                                className="undefined icon btn btn-primary"
                                                            >
                                                                <svg
                                                                    data-v-36192c72=""
                                                                    data-v-7c6384a4=""
                                                                    viewBox="0 0 24 24"
                                                                    preserveAspectRatio="xMidYMid meet"
                                                                    focusable="false"
                                                                    icon-size="icon-lg"
                                                                    sx={{ display: 'block' }}
                                                                >
                                                                    <g
                                                                        data-v-36192c72=""
                                                                        id="icon-narrow-angle-left-24"
                                                                        stroke="none"
                                                                        strokeWidth="1"
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    >
                                                                        <g transform="translate(-196, -226)" stroke="currentColor">
                                                                            <polyline
                                                                                transform="translate(209.000000, 237.500000) scale(-1.2, 1.2) rotate(90.000000) translate(-209.000000, -237.500000) "
                                                                                points="200 242 209 233 218 242"
                                                                            ></polyline>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="arrow-btn next">
                                                            <button
                                                                aria-label="Next Image"
                                                                data-testid="qa-pdp-right-arrow"
                                                                type="button"
                                                                className="undefined icon btn btn-primary"
                                                            >
                                                                <svg
                                                                    data-v-36192c72=""
                                                                    data-v-7c6384a4=""
                                                                    viewBox="0 0 24 24"
                                                                    preserveAspectRatio="xMidYMid meet"
                                                                    focusable="false"
                                                                    icon-size="icon-lg"
                                                                    sx={{ display: 'block' }}
                                                                >
                                                                    <g
                                                                        data-v-36192c72=""
                                                                        id="icon-narrow-angle-right-24"
                                                                        stroke="none"
                                                                        strokeWidth="1"
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    >
                                                                        <g transform="translate(-196, -226)" stroke="currentColor">
                                                                            <polyline
                                                                                transform="translate(209.000000, 237.500000) scale(-1.2, 1.2) rotate(-90.000000) translate(-209.000000, -237.500000) "
                                                                                points="200 242 209 233 218 242"
                                                                            ></polyline>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="slick-slider slick-initialized" dir="ltr">
                                                        <div className="slick-list">
                                                            <div
                                                                className="slick-track"
                                                                sx={{ width: '4662px', opacity: 1, transform: 'translate3d(-666px, 0px, 0px)' }}
                                                            >
                                                                <div
                                                                    data-index="-2"
                                                                    tabIndex="-1"
                                                                    className="slick-slide slick-cloned"
                                                                    aria-hidden="true"
                                                                    sx={{ width: '333px' }}
                                                                >
                                                                    <div>
                                                                        <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="card">
                                                                            <div className="card-body">
                                                                                <div className="">
                                                                                    <a
                                                                                        className="link text-decoration-none"
                                                                                        data-testid="link"
                                                                                        href="/us/en/product/pharmanex-nu-biome?variant=nu-biome"
                                                                                    >
                                                                                        <div className="product_image">
                                                                                            <div
                                                                                                className="image-wrapper col-12 p-0 m-0 "
                                                                                                sx={{ width: 'auto', height: 'auto' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="https://media.nuskin.com/m/2ff059bb44cf21b7/webimage-US-Nu-Biome-Bag.png"
                                                                                                    data-src="https://media.nuskin.com/m/2ff059bb44cf21b7/webimage-US-Nu-Biome-Bag.png"
                                                                                                    srcSet=""
                                                                                                    loading="lazy"
                                                                                                    alt="Pharmanex® Nu Biome®"
                                                                                                    height="auto"
                                                                                                    width="auto"
                                                                                                    className="ProductImg"
                                                                                                    aria-label=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card-title h5">
                                                                                            <h2 className="heading-3-bold limit-title-height">
                                                                                                Pharmanex® Nu Biome®
                                                                                            </h2>
                                                                                        </div>
                                                                                        <p className="card-text">
                                                                                            <span className="content paragraph-m-bold d-block">$80.00</span>
                                                                                        </p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="pop-add-btn d-flex cta text-uppercase btn btn-primary"
                                                                                        >
                                                                                            <svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                strokeWidth="0"
                                                                                                viewBox="0 0 1024 1024"
                                                                                                sx={{ fontSize: '24px' }}
                                                                                                height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                                                                                            </svg>
                                                                                            Add To Cart
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index="-1"
                                                                    tabIndex="-1"
                                                                    className="slick-slide slick-cloned"
                                                                    aria-hidden="true"
                                                                    sx={{ width: '333px' }}
                                                                >
                                                                    <div>
                                                                        <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="card">
                                                                            <div className="card-body">
                                                                                <div className="">
                                                                                    <a
                                                                                        className="link text-decoration-none"
                                                                                        data-testid="link"
                                                                                        href="/us/en/product/sunright-solar-sunscreen"
                                                                                        tabIndex="-1"
                                                                                    >
                                                                                        <div className="product_image">
                                                                                            <div
                                                                                                className="image-wrapper col-12 p-0 m-0 "
                                                                                                sx={{ width: 'auto', height: 'auto' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="https://media.nuskin.com/m/435636f4e40f8d16/webimage-01002652-sunright-solar-screen.png"
                                                                                                    data-src="https://media.nuskin.com/m/435636f4e40f8d16/webimage-01002652-sunright-solar-screen.png"
                                                                                                    srcSet=""
                                                                                                    loading="lazy"
                                                                                                    alt="Sunright® Solar Screen Mineral Face Sunscreen Broad Spectrum SPF 50+"
                                                                                                    height="auto"
                                                                                                    width="auto"
                                                                                                    className="ProductImg"
                                                                                                    aria-label=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card-title h5">
                                                                                            <h2 className="heading-3-bold limit-title-height">
                                                                                                Sunright® Solar Screen Mineral Face Sunscreen Broad Spectrum
                                                                                                SPF 50+
                                                                                            </h2>
                                                                                        </div>
                                                                                        <p className="card-text">
                                                                                            <span className="content paragraph-m-bold d-block">$40.00</span>
                                                                                        </p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="pop-add-btn d-flex cta text-uppercase btn btn-primary"
                                                                                            tabIndex="-1"
                                                                                        >
                                                                                            <svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                strokeWidth="0"
                                                                                                viewBox="0 0 1024 1024"
                                                                                                sx={{ fontSize: '24px' }}
                                                                                                height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                                                                                            </svg>
                                                                                            Add To Cart
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index="0"
                                                                    className="slick-slide slick-active slick-current"
                                                                    tabIndex="-1"
                                                                    aria-hidden="false"
                                                                    sx={{ outline: 'none', width: '333px' }}
                                                                >
                                                                    <div>
                                                                        <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="card">
                                                                            <div className="card-body">
                                                                                <div className="">
                                                                                    <a
                                                                                        className="link text-decoration-none"
                                                                                        data-testid="link"
                                                                                        href="/us/en/product/tru-face-essence-ultra-refill-pouches"
                                                                                    >
                                                                                        <div className="product_image">
                                                                                            <div
                                                                                                className="image-wrapper col-12 p-0 m-0 "
                                                                                                sx={{ width: 'auto', height: 'auto' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="https://media.nuskin.com/m/680e91493373414f/webimage-IMG2312010042-TFEU-Refill.png"
                                                                                                    data-src="https://media.nuskin.com/m/680e91493373414f/webimage-IMG2312010042-TFEU-Refill.png"
                                                                                                    srcSet=""
                                                                                                    loading="lazy"
                                                                                                    alt="TFEU Refill Pouches"
                                                                                                    height="auto"
                                                                                                    width="auto"
                                                                                                    className="ProductImg"
                                                                                                    aria-label=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card-title h5">
                                                                                            <h2 className="heading-3-bold limit-title-height">
                                                                                                TFEU Refill Pouches
                                                                                            </h2>
                                                                                        </div>
                                                                                        <p className="card-text">
                                                                                            <span className="content paragraph-m-bold d-block">$161.00</span>
                                                                                        </p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="pop-add-btn d-flex cta text-uppercase btn btn-primary"
                                                                                        >
                                                                                            <svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                strokeWidth="0"
                                                                                                viewBox="0 0 1024 1024"
                                                                                                sx={{ fontSize: '24px' }}
                                                                                                height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                                                                                            </svg>
                                                                                            Add To Cart
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index="1"
                                                                    className="slick-slide slick-active"
                                                                    tabIndex="-1"
                                                                    aria-hidden="false"
                                                                    sx={{ outline: 'none', width: '333px' }}
                                                                >
                                                                    <div>
                                                                        <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="card">
                                                                            <div className="card-body">
                                                                                <div className="">
                                                                                    <a
                                                                                        className="link text-decoration-none"
                                                                                        data-testid="link"
                                                                                        href="/us/en/product/nu-colour-peptide-pout"
                                                                                    >
                                                                                        <div className="product_image">
                                                                                            <div
                                                                                                className="image-wrapper col-12 p-0 m-0 "
                                                                                                sx={{ width: 'auto', height: 'auto' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="https://media.nuskin.com/m/46ba64cd53166059/webimage-LipPeptide-White.png"
                                                                                                    data-src="https://media.nuskin.com/m/46ba64cd53166059/webimage-LipPeptide-White.png"
                                                                                                    srcSet=""
                                                                                                    loading="lazy"
                                                                                                    alt="Nu Colour® Peptide Pout"
                                                                                                    height="auto"
                                                                                                    width="auto"
                                                                                                    className="ProductImg"
                                                                                                    aria-label=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card-title h5">
                                                                                            <h2 className="heading-3-bold limit-title-height">
                                                                                                Nu Colour® Peptide Pout
                                                                                            </h2>
                                                                                        </div>
                                                                                        <p className="card-text">
                                                                                            <span className="content paragraph-m-bold d-block">$19.00</span>
                                                                                        </p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="pop-add-btn d-flex cta text-uppercase btn btn-primary"
                                                                                        >
                                                                                            <svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                strokeWidth="0"
                                                                                                viewBox="0 0 1024 1024"
                                                                                                sx={{ fontSize: '24px' }}
                                                                                                height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                                                                                            </svg>
                                                                                            Add To Cart
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index="2"
                                                                    className="slick-slide"
                                                                    tabIndex="-1"
                                                                    aria-hidden="true"
                                                                    sx={{ outline: 'none', width: '333px' }}
                                                                >
                                                                    <div>
                                                                        <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="card">
                                                                            <div className="card-body">
                                                                                <div className="">
                                                                                    <a
                                                                                        className="link text-decoration-none"
                                                                                        data-testid="link"
                                                                                        href="/us/en/product/multi-beauty"
                                                                                        tabIndex="-1"
                                                                                    >
                                                                                        <div className="product_image">
                                                                                            <div
                                                                                                className="image-wrapper col-12 p-0 m-0 "
                                                                                                sx={{ width: 'auto', height: 'auto' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="https://media.nuskin.com/m/2b9bdbe1e97cd13b/webimage-01002267-multibeauty-product-image.png"
                                                                                                    data-src="https://media.nuskin.com/m/2b9bdbe1e97cd13b/webimage-01002267-multibeauty-product-image.png"
                                                                                                    srcSet=""
                                                                                                    loading="lazy"
                                                                                                    alt="Beauty Focus MultiBeauty"
                                                                                                    height="auto"
                                                                                                    width="auto"
                                                                                                    className="ProductImg"
                                                                                                    aria-label=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card-title h5">
                                                                                            <h2 className="heading-3-bold limit-title-height">
                                                                                                Beauty Focus MultiBeauty
                                                                                            </h2>
                                                                                        </div>
                                                                                        <p className="card-text">
                                                                                            <span className="content paragraph-m-bold d-block">$57.00</span>
                                                                                        </p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="pop-add-btn d-flex cta text-uppercase btn btn-primary"
                                                                                            tabIndex="-1"
                                                                                        >
                                                                                            <svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                strokeWidth="0"
                                                                                                viewBox="0 0 1024 1024"
                                                                                                sx={{ fontSize: '24px' }}
                                                                                                height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                                                                                            </svg>
                                                                                            Add To Cart
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index="3"
                                                                    className="slick-slide"
                                                                    tabIndex="-1"
                                                                    aria-hidden="true"
                                                                    sx={{ outline: 'none', width: '333px' }}
                                                                >
                                                                    <div>
                                                                        <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="card">
                                                                            <div className="card-body">
                                                                                <div className="">
                                                                                    <a
                                                                                        className="link text-decoration-none"
                                                                                        data-testid="link"
                                                                                        href="/us/en/product/renu-hair-mask?variant=01002374"
                                                                                        tabIndex="-1"
                                                                                    >
                                                                                        <div className="product_image">
                                                                                            <div
                                                                                                className="image-wrapper col-12 p-0 m-0 "
                                                                                                sx={{ width: 'auto', height: 'auto' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="https://media.nuskin.com/m/5bd49a3594ceadb3/webimage-Nu-Skin-ReNu-Hair-Mask-product-01.png"
                                                                                                    data-src="https://media.nuskin.com/m/5bd49a3594ceadb3/webimage-Nu-Skin-ReNu-Hair-Mask-product-01.png"
                                                                                                    srcSet=""
                                                                                                    loading="lazy"
                                                                                                    alt="Renu Hair Mask"
                                                                                                    height="auto"
                                                                                                    width="auto"
                                                                                                    className="ProductImg"
                                                                                                    aria-label=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card-title h5">
                                                                                            <h2 className="heading-3-bold limit-title-height">
                                                                                                Renu Hair Mask
                                                                                            </h2>
                                                                                        </div>
                                                                                        <p className="card-text">
                                                                                            <span className="content paragraph-m-bold d-block">$31.00</span>
                                                                                        </p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="pop-add-btn d-flex cta text-uppercase btn btn-primary"
                                                                                            tabIndex="-1"
                                                                                        >
                                                                                            <svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                strokeWidth="0"
                                                                                                viewBox="0 0 1024 1024"
                                                                                                sx={{ fontSize: '24px' }}
                                                                                                height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                                                                                            </svg>
                                                                                            Add To Cart
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index="4"
                                                                    className="slick-slide"
                                                                    tabIndex="-1"
                                                                    aria-hidden="true"
                                                                    sx={{ outline: 'none', width: '333px' }}
                                                                >
                                                                    <div>
                                                                        <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="card">
                                                                            <div className="card-body">
                                                                                <div className="">
                                                                                    <a
                                                                                        className="link text-decoration-none"
                                                                                        data-testid="link"
                                                                                        href="/us/en/product/pharmanex-nu-biome?variant=nu-biome"
                                                                                        tabIndex="-1"
                                                                                    >
                                                                                        <div className="product_image">
                                                                                            <div
                                                                                                className="image-wrapper col-12 p-0 m-0 "
                                                                                                sx={{ width: 'auto', height: 'auto' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="https://media.nuskin.com/m/2ff059bb44cf21b7/webimage-US-Nu-Biome-Bag.png"
                                                                                                    data-src="https://media.nuskin.com/m/2ff059bb44cf21b7/webimage-US-Nu-Biome-Bag.png"
                                                                                                    srcSet=""
                                                                                                    loading="lazy"
                                                                                                    alt="Pharmanex® Nu Biome®"
                                                                                                    height="auto"
                                                                                                    width="auto"
                                                                                                    className="ProductImg"
                                                                                                    aria-label=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card-title h5">
                                                                                            <h2 className="heading-3-bold limit-title-height">
                                                                                                Pharmanex® Nu Biome®
                                                                                            </h2>
                                                                                        </div>
                                                                                        <p className="card-text">
                                                                                            <span className="content paragraph-m-bold d-block">$80.00</span>
                                                                                        </p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="pop-add-btn d-flex cta text-uppercase btn btn-primary"
                                                                                            tabIndex="-1"
                                                                                        >
                                                                                            <svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                strokeWidth="0"
                                                                                                viewBox="0 0 1024 1024"
                                                                                                sx={{ fontSize: '24px' }}
                                                                                                height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                                                                                            </svg>
                                                                                            Add To Cart
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index="5"
                                                                    className="slick-slide"
                                                                    tabIndex="-1"
                                                                    aria-hidden="true"
                                                                    sx={{ outline: 'none', width: '333px' }}
                                                                >
                                                                    <div>
                                                                        <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="card">
                                                                            <div className="card-body">
                                                                                <div className="">
                                                                                    <a
                                                                                        className="link text-decoration-none"
                                                                                        data-testid="link"
                                                                                        href="/us/en/product/sunright-solar-sunscreen"
                                                                                        tabIndex="-1"
                                                                                    >
                                                                                        <div className="product_image">
                                                                                            <div
                                                                                                className="image-wrapper col-12 p-0 m-0 "
                                                                                                sx={{ width: 'auto', height: 'auto' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="https://media.nuskin.com/m/435636f4e40f8d16/webimage-01002652-sunright-solar-screen.png"
                                                                                                    data-src="https://media.nuskin.com/m/435636f4e40f8d16/webimage-01002652-sunright-solar-screen.png"
                                                                                                    srcSet=""
                                                                                                    loading="lazy"
                                                                                                    alt="Sunright® Solar Screen Mineral Face Sunscreen Broad Spectrum SPF 50+"
                                                                                                    height="auto"
                                                                                                    width="auto"
                                                                                                    className="ProductImg"
                                                                                                    aria-label=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card-title h5">
                                                                                            <h2 className="heading-3-bold limit-title-height">
                                                                                                Sunright® Solar Screen Mineral Face Sunscreen Broad Spectrum
                                                                                                SPF 50+
                                                                                            </h2>
                                                                                        </div>
                                                                                        <p className="card-text">
                                                                                            <span className="content paragraph-m-bold d-block">$40.00</span>
                                                                                        </p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="pop-add-btn d-flex cta text-uppercase btn btn-primary"
                                                                                            tabIndex="-1"
                                                                                        >
                                                                                            <svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                strokeWidth="0"
                                                                                                viewBox="0 0 1024 1024"
                                                                                                sx={{ fontSize: '24px' }}
                                                                                                height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                                                                                            </svg>
                                                                                            Add To Cart
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index="6"
                                                                    tabIndex="-1"
                                                                    className="slick-slide slick-cloned"
                                                                    aria-hidden="true"
                                                                    sx={{ width: '333px' }}
                                                                >
                                                                    <div>
                                                                        <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="card">
                                                                            <div className="card-body">
                                                                                <div className="">
                                                                                    <a
                                                                                        className="link text-decoration-none"
                                                                                        data-testid="link"
                                                                                        href="/us/en/product/tru-face-essence-ultra-refill-pouches"
                                                                                        tabIndex="-1"
                                                                                    >
                                                                                        <div className="product_image">
                                                                                            <div
                                                                                                className="image-wrapper col-12 p-0 m-0 "
                                                                                                sx={{ width: 'auto', height: 'auto' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="https://media.nuskin.com/m/680e91493373414f/webimage-IMG2312010042-TFEU-Refill.png"
                                                                                                    data-src="https://media.nuskin.com/m/680e91493373414f/webimage-IMG2312010042-TFEU-Refill.png"
                                                                                                    srcSet=""
                                                                                                    loading="lazy"
                                                                                                    alt="TFEU Refill Pouches"
                                                                                                    height="auto"
                                                                                                    width="auto"
                                                                                                    className="ProductImg"
                                                                                                    aria-label=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card-title h5">
                                                                                            <h2 className="heading-3-bold limit-title-height">
                                                                                                TFEU Refill Pouches
                                                                                            </h2>
                                                                                        </div>
                                                                                        <p className="card-text">
                                                                                            <span className="content paragraph-m-bold d-block">$161.00</span>
                                                                                        </p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="pop-add-btn d-flex cta text-uppercase btn btn-primary"
                                                                                            tabIndex="-1"
                                                                                        >
                                                                                            <svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                strokeWidth="0"
                                                                                                viewBox="0 0 1024 1024"
                                                                                                sx={{ fontSize: '24px' }}
                                                                                                height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                                                                                            </svg>
                                                                                            Add To Cart
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index="7"
                                                                    tabIndex="-1"
                                                                    className="slick-slide slick-cloned"
                                                                    aria-hidden="true"
                                                                    sx={{ width: '333px' }}
                                                                >
                                                                    <div>
                                                                        <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="card">
                                                                            <div className="card-body">
                                                                                <div className="">
                                                                                    <a
                                                                                        className="link text-decoration-none"
                                                                                        data-testid="link"
                                                                                        href="/us/en/product/nu-colour-peptide-pout"
                                                                                        tabIndex="-1"
                                                                                    >
                                                                                        <div className="product_image">
                                                                                            <div
                                                                                                className="image-wrapper col-12 p-0 m-0 "
                                                                                                sx={{ width: 'auto', height: 'auto' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="https://media.nuskin.com/m/46ba64cd53166059/webimage-LipPeptide-White.png"
                                                                                                    data-src="https://media.nuskin.com/m/46ba64cd53166059/webimage-LipPeptide-White.png"
                                                                                                    srcSet=""
                                                                                                    loading="lazy"
                                                                                                    alt="Nu Colour® Peptide Pout"
                                                                                                    height="auto"
                                                                                                    width="auto"
                                                                                                    className="ProductImg"
                                                                                                    aria-label=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card-title h5">
                                                                                            <h2 className="heading-3-bold limit-title-height">
                                                                                                Nu Colour® Peptide Pout
                                                                                            </h2>
                                                                                        </div>
                                                                                        <p className="card-text">
                                                                                            <span className="content paragraph-m-bold d-block">$19.00</span>
                                                                                        </p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="pop-add-btn d-flex cta text-uppercase btn btn-primary"
                                                                                            tabIndex="-1"
                                                                                        >
                                                                                            <svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                strokeWidth="0"
                                                                                                viewBox="0 0 1024 1024"
                                                                                                sx={{ fontSize: '24px' }}
                                                                                                height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                                                                                            </svg>
                                                                                            Add To Cart
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index="8"
                                                                    tabIndex="-1"
                                                                    className="slick-slide slick-cloned"
                                                                    aria-hidden="true"
                                                                    sx={{ width: '333px' }}
                                                                >
                                                                    <div>
                                                                        <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="card">
                                                                            <div className="card-body">
                                                                                <div className="">
                                                                                    <a
                                                                                        className="link text-decoration-none"
                                                                                        data-testid="link"
                                                                                        href="/us/en/product/multi-beauty"
                                                                                        tabIndex="-1"
                                                                                    >
                                                                                        <div className="product_image">
                                                                                            <div
                                                                                                className="image-wrapper col-12 p-0 m-0 "
                                                                                                sx={{ width: 'auto', height: 'auto' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="https://media.nuskin.com/m/2b9bdbe1e97cd13b/webimage-01002267-multibeauty-product-image.png"
                                                                                                    data-src="https://media.nuskin.com/m/2b9bdbe1e97cd13b/webimage-01002267-multibeauty-product-image.png"
                                                                                                    srcSet=""
                                                                                                    loading="lazy"
                                                                                                    alt="Beauty Focus MultiBeauty"
                                                                                                    height="auto"
                                                                                                    width="auto"
                                                                                                    className="ProductImg"
                                                                                                    aria-label=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card-title h5">
                                                                                            <h2 className="heading-3-bold limit-title-height">
                                                                                                Beauty Focus MultiBeauty
                                                                                            </h2>
                                                                                        </div>
                                                                                        <p className="card-text">
                                                                                            <span className="content paragraph-m-bold d-block">$57.00</span>
                                                                                        </p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="pop-add-btn d-flex cta text-uppercase btn btn-primary"
                                                                                            tabIndex="-1"
                                                                                        >
                                                                                            <svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                strokeWidth="0"
                                                                                                viewBox="0 0 1024 1024"
                                                                                                sx={{ fontSize: '24px' }}
                                                                                                height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                                                                                            </svg>
                                                                                            Add To Cart
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index="9"
                                                                    tabIndex="-1"
                                                                    className="slick-slide slick-cloned"
                                                                    aria-hidden="true"
                                                                    sx={{ width: '333px' }}
                                                                >
                                                                    <div>
                                                                        <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="card">
                                                                            <div className="card-body">
                                                                                <div className="">
                                                                                    <a
                                                                                        className="link text-decoration-none"
                                                                                        data-testid="link"
                                                                                        href="/us/en/product/renu-hair-mask?variant=01002374"
                                                                                        tabIndex="-1"
                                                                                    >
                                                                                        <div className="product_image">
                                                                                            <div
                                                                                                className="image-wrapper col-12 p-0 m-0 "
                                                                                                sx={{ width: 'auto', height: 'auto' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="https://media.nuskin.com/m/5bd49a3594ceadb3/webimage-Nu-Skin-ReNu-Hair-Mask-product-01.png"
                                                                                                    data-src="https://media.nuskin.com/m/5bd49a3594ceadb3/webimage-Nu-Skin-ReNu-Hair-Mask-product-01.png"
                                                                                                    srcSet=""
                                                                                                    loading="lazy"
                                                                                                    alt="Renu Hair Mask"
                                                                                                    height="auto"
                                                                                                    width="auto"
                                                                                                    className="ProductImg"
                                                                                                    aria-label=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card-title h5">
                                                                                            <h2 className="heading-3-bold limit-title-height">
                                                                                                Renu Hair Mask
                                                                                            </h2>
                                                                                        </div>
                                                                                        <p className="card-text">
                                                                                            <span className="content paragraph-m-bold d-block">$31.00</span>
                                                                                        </p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="pop-add-btn d-flex cta text-uppercase btn btn-primary"
                                                                                            tabIndex="-1"
                                                                                        >
                                                                                            <svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                strokeWidth="0"
                                                                                                viewBox="0 0 1024 1024"
                                                                                                sx={{ fontSize: '24px' }}
                                                                                                height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                                                                                            </svg>
                                                                                            Add To Cart
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index="10"
                                                                    tabIndex="-1"
                                                                    className="slick-slide slick-cloned"
                                                                    aria-hidden="true"
                                                                    sx={{ width: '333px' }}
                                                                >
                                                                    <div>
                                                                        <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="card">
                                                                            <div className="card-body">
                                                                                <div className="">
                                                                                    <a
                                                                                        className="link text-decoration-none"
                                                                                        data-testid="link"
                                                                                        href="/us/en/product/pharmanex-nu-biome?variant=nu-biome"
                                                                                        tabIndex="-1"
                                                                                    >
                                                                                        <div className="product_image">
                                                                                            <div
                                                                                                className="image-wrapper col-12 p-0 m-0 "
                                                                                                sx={{ width: 'auto', height: 'auto' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="https://media.nuskin.com/m/2ff059bb44cf21b7/webimage-US-Nu-Biome-Bag.png"
                                                                                                    data-src="https://media.nuskin.com/m/2ff059bb44cf21b7/webimage-US-Nu-Biome-Bag.png"
                                                                                                    srcSet=""
                                                                                                    loading="lazy"
                                                                                                    alt="Pharmanex® Nu Biome®"
                                                                                                    height="auto"
                                                                                                    width="auto"
                                                                                                    className="ProductImg"
                                                                                                    aria-label=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card-title h5">
                                                                                            <h2 className="heading-3-bold limit-title-height">
                                                                                                Pharmanex® Nu Biome®
                                                                                            </h2>
                                                                                        </div>
                                                                                        <p className="card-text">
                                                                                            <span className="content paragraph-m-bold d-block">$80.00</span>
                                                                                        </p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="pop-add-btn d-flex cta text-uppercase btn btn-primary"
                                                                                            tabIndex="-1"
                                                                                        >
                                                                                            <svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                strokeWidth="0"
                                                                                                viewBox="0 0 1024 1024"
                                                                                                sx={{ fontSize: '24px' }}
                                                                                                height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                                                                                            </svg>
                                                                                            Add To Cart
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-index="11"
                                                                    tabIndex="-1"
                                                                    className="slick-slide slick-cloned"
                                                                    aria-hidden="true"
                                                                    sx={{ width: '333px' }}
                                                                >
                                                                    <div>
                                                                        <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="card">
                                                                            <div className="card-body">
                                                                                <div className="">
                                                                                    <a
                                                                                        className="link text-decoration-none"
                                                                                        data-testid="link"
                                                                                        href="/us/en/product/sunright-solar-sunscreen"
                                                                                        tabIndex="-1"
                                                                                    >
                                                                                        <div className="product_image">
                                                                                            <div
                                                                                                className="image-wrapper col-12 p-0 m-0 "
                                                                                                sx={{ width: 'auto', height: 'auto' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="https://media.nuskin.com/m/435636f4e40f8d16/webimage-01002652-sunright-solar-screen.png"
                                                                                                    data-src="https://media.nuskin.com/m/435636f4e40f8d16/webimage-01002652-sunright-solar-screen.png"
                                                                                                    srcSet=""
                                                                                                    loading="lazy"
                                                                                                    alt="Sunright® Solar Screen Mineral Face Sunscreen Broad Spectrum SPF 50+"
                                                                                                    height="auto"
                                                                                                    width="auto"
                                                                                                    className="ProductImg"
                                                                                                    aria-label=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="card-title h5">
                                                                                            <h2 className="heading-3-bold limit-title-height">
                                                                                                Sunright® Solar Screen Mineral Face Sunscreen Broad Spectrum
                                                                                                SPF 50+
                                                                                            </h2>
                                                                                        </div>
                                                                                        <p className="card-text">
                                                                                            <span className="content paragraph-m-bold d-block">$40.00</span>
                                                                                        </p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="pop-add-btn d-flex cta text-uppercase btn btn-primary"
                                                                                            tabIndex="-1"
                                                                                        >
                                                                                            <svg
                                                                                                stroke="currentColor"
                                                                                                fill="currentColor"
                                                                                                strokeWidth="0"
                                                                                                viewBox="0 0 1024 1024"
                                                                                                sx={{ fontSize: '24px' }}
                                                                                                height="1em"
                                                                                                width="1em"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                                                                                            </svg>
                                                                                            Add To Cart
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul className="slick-dots">
                                                            <li className="slick-active">
                                                                <button aria-label="product image 1 of 6">1</button>
                                                            </li>
                                                            <li className="">
                                                                <button aria-label="product image 2 of 6">2</button>
                                                            </li>
                                                            <li className="">
                                                                <button aria-label="product image 3 of 6">3</button>
                                                            </li>
                                                            <li className="">
                                                                <button aria-label="product image 4 of 6">4</button>
                                                            </li>
                                                            <li className="">
                                                                <button aria-label="product image 5 of 6">5</button>
                                                            </li>
                                                            <li className="">
                                                                <button aria-label="product image 6 of 6">6</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="viewmain-mobile">
                                                    <div className="">
                                                        <a className="link text-decoration-none d-inline-block" href="/us/en/catalog/all_new_and_loved">
                                                            <h6 className="viewsec paragraph-m">View All</h6>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            data-testid="mpp-latest-products-contents"
                            id="controlled-tab-example-tabpane-BestSellers"
                            aria-labelledby="controlled-tab-example-tab-BestSellers"
                            role="tabpanel"
                            aria-hidden="true"
                            className="fade tab-pane"
                        >
                            <div className="popular-section " id="product-section">
                                <div></div>
                                <div className="container">
                                    <div className="popular-section-inner position-relative">
                                        <img
                                            src="https://www.nuskin.com/static/nu-home/assets/img/gray-cream.c348e4d7.png"
                                            alt="gray cream"
                                            className="product-image-bg-left"
                                        />
                                        <img
                                            src="https://www.nuskin.com/static/nu-home/assets/img/white-cream.5a4c116c.png"
                                            alt="white cream"
                                            className="product-image-bg-right"
                                        />
                                        <div className="pt-2 row">
                                            <div className="popular-section-left col-lg-5 col-md-6 col-sm-12">
                                                <div
                                                    className="popular-sidebar"
                                                    sx='background: url("https://media.nuskin.com/m/44c3a91f9eeb1c29/Small-MPP_Banner.jpg");'
                                                    role="img"
                                                    aria-label="Find out what everyone's talking about"
                                                    data-alt-text-resolution="cs"
                                                >
                                                    <div className="populat-text">
                                                        <h3 className="heading heading-1" sx={{ color: 'rgb(37, 37, 37)' }}>
                                                            Find out what everyone's talking about
                                                        </h3>
                                                        <div className="popular-text-color-black">
                                                            <a
                                                                className="link underline1 d-flex paragraph-m"
                                                                data-testid="link"
                                                                fonttoggle=""
                                                                componentname="homepage_product"
                                                                href="/us/en/catalog/all_new_and_loved"
                                                            >
                                                                <span>Browse our best</span>
                                                                <svg
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    strokeWidth="2"
                                                                    viewBox="0 0 24 24"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="product-arrow-icon pl-2"
                                                                    height="1em"
                                                                    width="1em"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <circle cx="12" cy="12" r="10"></circle>
                                                                    <polyline points="12 16 16 12 12 8"></polyline>
                                                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="most-popular-slider col-lg-7 col-md-6 col-sm-12">
                                                <div>
                                                    <div className="mpp-placeholder">
                                                        <div className="mb-2 col-lg-6 col-md-1">
                                                            <div className="product-card">
                                                                <div className="image mb-2"></div>
                                                                <div className="content">
                                                                    <h2></h2>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-2 col-lg-6 col-md-1">
                                                            <div className="product-card">
                                                                <div className="image mb-2"></div>
                                                                <div className="content">
                                                                    <h2></h2>
                                                                    <p></p>
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
                        </div>
                    </div>
                </div>
                <div className="category-head justify-content-center mx-0 row">
                    <h3 className="heading-1 mb-0 mt-5">Our Top Categories</h3>
                </div>
                <div id="our-top-categories" className="category-section-slider-wrapper row">
                    <div className="viewmain d-none d-md-block px-0 mx-0 col-md-auto">
                        <div className="">
                            <a className="link text-decoration-none" href="/us/en/categoryLanding/skin_and_beauty">
                                <h6 className="viewsec paragraph-m">View All</h6>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="slider-arrow">
                            <div className="arrow-btn prev">
                                <button aria-label="Previous Image" data-testid="qa-pdp-left-arrow" type="button" className="undefined icon btn btn-primary">
                                    <svg
                                        data-v-36192c72=""
                                        data-v-7c6384a4=""
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        focusable="false"
                                        icon-size="icon-lg"
                                        sx={{ display: 'block' }}
                                    >
                                        <g
                                            data-v-36192c72=""
                                            id="icon-narrow-angle-left-24"
                                            stroke="none"
                                            strokeWidth="1"
                                            fill="none"
                                            fillRule="evenodd"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <g transform="translate(-196, -226)" stroke="currentColor">
                                                <polyline
                                                    transform="translate(209.000000, 237.500000) scale(-1.2, 1.2) rotate(90.000000) translate(-209.000000, -237.500000) "
                                                    points="200 242 209 233 218 242"
                                                ></polyline>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            <div className="arrow-btn next">
                                <button aria-label="Next Image" data-testid="qa-pdp-right-arrow" type="button" className="undefined icon btn btn-primary">
                                    <svg
                                        data-v-36192c72=""
                                        data-v-7c6384a4=""
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        focusable="false"
                                        icon-size="icon-lg"
                                        sx={{ display: 'block' }}
                                    >
                                        <g
                                            data-v-36192c72=""
                                            id="icon-narrow-angle-right-24"
                                            stroke="none"
                                            strokeWidth="1"
                                            fill="none"
                                            fillRule="evenodd"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <g transform="translate(-196, -226)" stroke="currentColor">
                                                <polyline
                                                    transform="translate(209.000000, 237.500000) scale(-1.2, 1.2) rotate(-90.000000) translate(-209.000000, -237.500000) "
                                                    points="200 242 209 233 218 242"
                                                ></polyline>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slick-slider category-selection slick-initialized" dir="ltr">
                            <div className="slick-list">
                                <div className="slick-track" sx={{ width: '6525px', opacity: 1, transform: 'translate3d(-1305px, 0px, 0px)' }}>
                                    <div data-index="-5" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/oral_care">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/fab54a8c9cf2474/Small-category-oral_care.jpg"
                                                                data-src="https://media.nuskin.com/m/fab54a8c9cf2474/Small-category-oral_care.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Young woman smiling while holding toothbrush and AP24 whitening fluoride toothpaste in bathroom."
                                                                height="260px"
                                                                width="230px"
                                                                title="Oral Care"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Oral Care</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="-4" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/body" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/1852a3dab4aef1fa/Small-category-body_care.jpg"
                                                                data-src="https://media.nuskin.com/m/1852a3dab4aef1fa/Small-category-body_care.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman applying ageLOC moisturizer to her thigh."
                                                                height="260px"
                                                                width="230px"
                                                                title="Body Care"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Body Care</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="-3" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/makeup" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/4f5b0aee8fe3ff90/Small-category-makeup.jpg"
                                                                data-src="https://media.nuskin.com/m/4f5b0aee8fe3ff90/Small-category-makeup.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman with closed eyes holding forearm over forehead."
                                                                height="260px"
                                                                width="230px"
                                                                title="Makeup "
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Makeup </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="-2" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/facial_moisturizers" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/3353b9c05cb83860/Small-category-facial_moisturizers.jpg"
                                                                data-src="https://media.nuskin.com/m/3353b9c05cb83860/Small-category-facial_moisturizers.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Smiling woman holding Nutricentials products up over her face."
                                                                height="260px"
                                                                width="230px"
                                                                title="Facial Moisturizers"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Facial Moisturizers</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="-1" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/hair_care" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/625389d1cbe90c10/Small-category-hair_care.jpg"
                                                                data-src="https://media.nuskin.com/m/625389d1cbe90c10/Small-category-hair_care.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman applying ageLOC Scalp &amp; Hair Serum to side of her scalp."
                                                                height="260px"
                                                                width="230px"
                                                                title="Hair Care"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Hair Care</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-index="0"
                                        className="slick-slide slick-active slick-current"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        sx={{ outline: 'none', width: '261px' }}
                                    >
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/beauty_devices">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/7e772753b91e94c3/Small-category-beauty_devices.jpg"
                                                                data-src="https://media.nuskin.com/m/7e772753b91e94c3/Small-category-beauty_devices.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman cleansing her face with LumiSpa iO beauty device."
                                                                height="260px"
                                                                width="230px"
                                                                title="Beauty Devices"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Beauty Devices</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-index="1"
                                        className="slick-slide slick-active"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        sx={{ outline: 'none', width: '261px' }}
                                    >
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/multi_vitamins">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/5ae685e26f2b276a/Small-category-multivitamins.jpg"
                                                                data-src="https://media.nuskin.com/m/5ae685e26f2b276a/Small-category-multivitamins.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Hand holding out various dietary supplements with pink backdrop."
                                                                height="260px"
                                                                width="230px"
                                                                title="Multivitamins"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Multivitamins</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-index="2"
                                        className="slick-slide slick-active"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        sx={{ outline: 'none', width: '261px' }}
                                    >
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/anti-aging">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/46a91d9030549acb/Small-category-anti_aging.jpg"
                                                                data-src="https://media.nuskin.com/m/46a91d9030549acb/Small-category-anti_aging.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman with freshly cleansed skin with head turned looking off into the distance."
                                                                height="260px"
                                                                width="230px"
                                                                title="Anti-aging"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Anti-aging</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-index="3"
                                        className="slick-slide slick-active"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        sx={{ outline: 'none', width: '261px' }}
                                    >
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/targeted_wellness">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/43242a7f2ca249ad/Small-category-targeted_wellness.jpg"
                                                                data-src="https://media.nuskin.com/m/43242a7f2ca249ad/Small-category-targeted_wellness.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Couple dancing together outside."
                                                                height="260px"
                                                                width="230px"
                                                                title="Targeted Wellness"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Targeted Wellness</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-index="4"
                                        className="slick-slide slick-active"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        sx={{ outline: 'none', width: '261px' }}
                                    >
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/facial_cleansers">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/36f2a073f3de08a2/Small-category-facial_cleansers.jpg"
                                                                data-src="https://media.nuskin.com/m/36f2a073f3de08a2/Small-category-facial_cleansers.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman applying facial moisturizer to her face on front of a bathroom mirror."
                                                                height="260px"
                                                                width="230px"
                                                                title="Facial Cleansers"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Facial Cleansers</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="5" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/oral_care" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/fab54a8c9cf2474/Small-category-oral_care.jpg"
                                                                data-src="https://media.nuskin.com/m/fab54a8c9cf2474/Small-category-oral_care.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Young woman smiling while holding toothbrush and AP24 whitening fluoride toothpaste in bathroom."
                                                                height="260px"
                                                                width="230px"
                                                                title="Oral Care"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Oral Care</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="6" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/body" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/1852a3dab4aef1fa/Small-category-body_care.jpg"
                                                                data-src="https://media.nuskin.com/m/1852a3dab4aef1fa/Small-category-body_care.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman applying ageLOC moisturizer to her thigh."
                                                                height="260px"
                                                                width="230px"
                                                                title="Body Care"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Body Care</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="7" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/makeup" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/4f5b0aee8fe3ff90/Small-category-makeup.jpg"
                                                                data-src="https://media.nuskin.com/m/4f5b0aee8fe3ff90/Small-category-makeup.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman with closed eyes holding forearm over forehead."
                                                                height="260px"
                                                                width="230px"
                                                                title="Makeup "
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Makeup </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="8" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/facial_moisturizers" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/3353b9c05cb83860/Small-category-facial_moisturizers.jpg"
                                                                data-src="https://media.nuskin.com/m/3353b9c05cb83860/Small-category-facial_moisturizers.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Smiling woman holding Nutricentials products up over her face."
                                                                height="260px"
                                                                width="230px"
                                                                title="Facial Moisturizers"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Facial Moisturizers</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="9" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/hair_care" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/625389d1cbe90c10/Small-category-hair_care.jpg"
                                                                data-src="https://media.nuskin.com/m/625389d1cbe90c10/Small-category-hair_care.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman applying ageLOC Scalp &amp; Hair Serum to side of her scalp."
                                                                height="260px"
                                                                width="230px"
                                                                title="Hair Care"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Hair Care</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="10" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/beauty_devices" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/7e772753b91e94c3/Small-category-beauty_devices.jpg"
                                                                data-src="https://media.nuskin.com/m/7e772753b91e94c3/Small-category-beauty_devices.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman cleansing her face with LumiSpa iO beauty device."
                                                                height="260px"
                                                                width="230px"
                                                                title="Beauty Devices"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Beauty Devices</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="11" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/multi_vitamins" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/5ae685e26f2b276a/Small-category-multivitamins.jpg"
                                                                data-src="https://media.nuskin.com/m/5ae685e26f2b276a/Small-category-multivitamins.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Hand holding out various dietary supplements with pink backdrop."
                                                                height="260px"
                                                                width="230px"
                                                                title="Multivitamins"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Multivitamins</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="12" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/anti-aging" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/46a91d9030549acb/Small-category-anti_aging.jpg"
                                                                data-src="https://media.nuskin.com/m/46a91d9030549acb/Small-category-anti_aging.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman with freshly cleansed skin with head turned looking off into the distance."
                                                                height="260px"
                                                                width="230px"
                                                                title="Anti-aging"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Anti-aging</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="13" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/targeted_wellness" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/43242a7f2ca249ad/Small-category-targeted_wellness.jpg"
                                                                data-src="https://media.nuskin.com/m/43242a7f2ca249ad/Small-category-targeted_wellness.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Couple dancing together outside."
                                                                height="260px"
                                                                width="230px"
                                                                title="Targeted Wellness"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Targeted Wellness</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="14" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/facial_cleansers" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/36f2a073f3de08a2/Small-category-facial_cleansers.jpg"
                                                                data-src="https://media.nuskin.com/m/36f2a073f3de08a2/Small-category-facial_cleansers.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman applying facial moisturizer to her face on front of a bathroom mirror."
                                                                height="260px"
                                                                width="230px"
                                                                title="Facial Cleansers"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Facial Cleansers</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="15" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/oral_care" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/fab54a8c9cf2474/Small-category-oral_care.jpg"
                                                                data-src="https://media.nuskin.com/m/fab54a8c9cf2474/Small-category-oral_care.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Young woman smiling while holding toothbrush and AP24 whitening fluoride toothpaste in bathroom."
                                                                height="260px"
                                                                width="230px"
                                                                title="Oral Care"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Oral Care</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="16" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/body" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/1852a3dab4aef1fa/Small-category-body_care.jpg"
                                                                data-src="https://media.nuskin.com/m/1852a3dab4aef1fa/Small-category-body_care.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman applying ageLOC moisturizer to her thigh."
                                                                height="260px"
                                                                width="230px"
                                                                title="Body Care"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Body Care</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="17" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/makeup" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/4f5b0aee8fe3ff90/Small-category-makeup.jpg"
                                                                data-src="https://media.nuskin.com/m/4f5b0aee8fe3ff90/Small-category-makeup.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman with closed eyes holding forearm over forehead."
                                                                height="260px"
                                                                width="230px"
                                                                title="Makeup "
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Makeup </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="18" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/facial_moisturizers" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/3353b9c05cb83860/Small-category-facial_moisturizers.jpg"
                                                                data-src="https://media.nuskin.com/m/3353b9c05cb83860/Small-category-facial_moisturizers.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Smiling woman holding Nutricentials products up over her face."
                                                                height="260px"
                                                                width="230px"
                                                                title="Facial Moisturizers"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Facial Moisturizers</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="19" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="homepage category-section-card card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/hair_care" tabIndex="-1">
                                                        <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: '230px', height: '260px' }}>
                                                            <img
                                                                src="https://media.nuskin.com/m/625389d1cbe90c10/Small-category-hair_care.jpg"
                                                                data-src="https://media.nuskin.com/m/625389d1cbe90c10/Small-category-hair_care.jpg"
                                                                srcSet=""
                                                                loading="lazy"
                                                                alt="Woman applying ageLOC Scalp &amp; Hair Serum to side of her scalp."
                                                                height="260px"
                                                                width="230px"
                                                                title="Hair Care"
                                                                className=""
                                                                aria-label=""
                                                                data-alt-text-resolution="bynder"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Hair Care</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="slick-dots">
                                <li className="slick-active">
                                    <button aria-label="product image 1 of 10">1</button>
                                </li>
                                <li className="">
                                    <button aria-label="product image 2 of 10">2</button>
                                </li>
                                <li className="">
                                    <button aria-label="product image 3 of 10">3</button>
                                </li>
                                <li className="">
                                    <button aria-label="product image 4 of 10">4</button>
                                </li>
                                <li className="">
                                    <button aria-label="product image 5 of 10">5</button>
                                </li>
                                <li className="">
                                    <button aria-label="product image 6 of 10">6</button>
                                </li>
                                <li className="">
                                    <button aria-label="product image 7 of 10">7</button>
                                </li>
                                <li className="">
                                    <button aria-label="product image 8 of 10">8</button>
                                </li>
                                <li className="">
                                    <button aria-label="product image 9 of 10">9</button>
                                </li>
                                <li className="">
                                    <button aria-label="product image 10 of 10">10</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mob-view-all d-block d-md-none px-0 col">
                        <div className="">
                            <a className="link text-decoration-none" href="/us/en/categoryLanding/skin_and_beauty">
                                <h6 className="viewsec m-0 cta">View All</h6>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="features-section position-relative w-100 d-flex flex-column px-0 container">
                    <div className="features-new position-relative w-100 d-inline-block mx-auto row">
                        <div
                            sx={{ background: 'rgb(239, 229, 215)' }}
                            className="features-new-kit position-relative d-flex flex-column flex-wrap align-items-start align-items-md-center justify-content-start justify-content-lg-center row"
                        >
                            <div className="features-inner-text col">
                                <h6 className="paragraph-s ">RenuSpa iO™</h6>
                                <h3 className="heading-1">Get ready to reclaim whole-body wellness</h3>
                                <h4 className="paragraph-l">One personalized wellness and beauty device to restore, revitalize, and refresh.</h4>
                                <div className="">
                                    <a
                                        href="https://www.nuskin.com/content/nuskin/en_US/renuspa-io-beauty-market-introduction.html"
                                        className="link cta text-uppercase"
                                        target="_self"
                                    >
                                        <strong>Discover Now</strong>
                                    </a>
                                </div>
                                <div md="auto" className="features-bottom-image d-none d-md-block px-0">
                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                        <img
                                            src="https://media.nuskin.com/transform/59f93461-9141-4275-bd3c-be7829d4a851/nu-skin-renuspa-io-showcase-accent-image"
                                            data-src="https://media.nuskin.com/transform/59f93461-9141-4275-bd3c-be7829d4a851/nu-skin-renuspa-io-showcase-accent-image"
                                            srcSet=""
                                            loading="lazy"
                                            alt="features bottom image"
                                            height="auto"
                                            width="auto"
                                            className=""
                                            aria-label=""
                                            data-alt-text-resolution="bynder"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="features-new-kit-image px-0 row">
                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                <img
                                    src="https://media.nuskin.com/transform/1beeb826-6b26-4a05-b119-275b93a95c85/ageloc-wellspa-io-showcase-desktop-banner"
                                    data-src="https://media.nuskin.com/transform/1beeb826-6b26-4a05-b119-275b93a95c85/ageloc-wellspa-io-showcase-desktop-banner"
                                    srcSet=""
                                    loading="lazy"
                                    alt="Nu Skin RenuSpa iO"
                                    height="auto"
                                    width="auto"
                                    className=""
                                    aria-label=""
                                    data-alt-text-resolution="cs"
                                />
                            </div>
                            <div className="features-bottom-image d-block d-md-none px-0 col">
                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                    <img
                                        src="https://media.nuskin.com/transform/59f93461-9141-4275-bd3c-be7829d4a851/nu-skin-renuspa-io-showcase-accent-image"
                                        data-src="https://media.nuskin.com/transform/59f93461-9141-4275-bd3c-be7829d4a851/nu-skin-renuspa-io-showcase-accent-image"
                                        srcSet=""
                                        loading="lazy"
                                        alt="features bottom image"
                                        height="auto"
                                        width="auto"
                                        className=""
                                        aria-label=""
                                        data-alt-text-resolution="bynder"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="separator-section w-100 p-0 container-fluid">
                    <div className="separator-container row">
                        <div className="hori-line"></div>
                        <h4 className="h4-bold subhead-l">OUR COLLECTION</h4>
                        <h3 className="heading-1">Explore Some Of Our Brands</h3>
                    </div>
                </div>
                <div id="brandsec" className="brandsec d-block row">
                    <div className="viewmain d-none d-md-block px-0 col-md-auto">
                        <div className="">
                            <a className="link text-decoration-none" href="/us/en/categoryLanding/skin_and_beauty">
                                <h6 className="viewsec paragraph-m">View All</h6>
                            </a>
                        </div>
                    </div>
                    <div className="slider-arrow">
                        <div className="arrow-btn prev">
                            <button aria-label="Previous Image" data-testid="qa-pdp-left-arrow" type="button" className="undefined icon btn btn-primary">
                                <svg
                                    data-v-36192c72=""
                                    data-v-7c6384a4=""
                                    viewBox="0 0 24 24"
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                    icon-size="icon-lg"
                                    sx={{ display: 'block' }}
                                >
                                    <g
                                        data-v-36192c72=""
                                        id="icon-narrow-angle-left-24"
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <g transform="translate(-196, -226)" stroke="currentColor">
                                            <polyline
                                                transform="translate(209.000000, 237.500000) scale(-1.2, 1.2) rotate(90.000000) translate(-209.000000, -237.500000) "
                                                points="200 242 209 233 218 242"
                                            ></polyline>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div className="arrow-btn next">
                            <button aria-label="Next Image" data-testid="qa-pdp-right-arrow" type="button" className="undefined icon btn btn-primary">
                                <svg
                                    data-v-36192c72=""
                                    data-v-7c6384a4=""
                                    viewBox="0 0 24 24"
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                    icon-size="icon-lg"
                                    sx={{ display: 'block' }}
                                >
                                    <g
                                        data-v-36192c72=""
                                        id="icon-narrow-angle-right-24"
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <g transform="translate(-196, -226)" stroke="currentColor">
                                            <polyline
                                                transform="translate(209.000000, 237.500000) scale(-1.2, 1.2) rotate(-90.000000) translate(-209.000000, -237.500000) "
                                                points="200 242 209 233 218 242"
                                            ></polyline>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="slick-slider pb-3 slick-initialized" dir="ltr">
                            <div className="slick-list">
                                <div className="slick-track" sx={{ width: '6525px', opacity: 1, transform: 'translate3d(-1305px, 0px, 0px)' }}>
                                    <div data-index="-5" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/nutricentials">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/233bc4aad86697e8/Small-brand-nutricentials.jpg"
                                                                    data-src="https://media.nuskin.com/m/233bc4aad86697e8/Small-brand-nutricentials.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Nutricentials"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="Nutricentials"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/f3a91129cbbae32/webimage-brand-nutricentials-logo.png"
                                                                        data-src="https://media.nuskin.com/m/f3a91129cbbae32/webimage-brand-nutricentials-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="Nutricentials"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Nutricentials</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="-4" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/epoch" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/549aa3e5184434d8/Small-brand-epoch-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/549aa3e5184434d8/Small-brand-epoch-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Epoch"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="Epoch"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/63a454ff90d038b4/webimage-brand-epoch-logo.png"
                                                                        data-src="https://media.nuskin.com/m/63a454ff90d038b4/webimage-brand-epoch-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="Epoch"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Epoch</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="-3" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/sunright" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/14e238d7599e1811/Small-brand-sunright.jpg"
                                                                    data-src="https://media.nuskin.com/m/14e238d7599e1811/Small-brand-sunright.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Sunright"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="Sunright"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/3eb406f465d4b0fe/webimage-brand-sunright-logo.png"
                                                                        data-src="https://media.nuskin.com/m/3eb406f465d4b0fe/webimage-brand-sunright-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="Sunright"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Sunright</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="-2" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/nu_colour" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/2543e79419276727/Small-brand-nu_colour-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/2543e79419276727/Small-brand-nu_colour-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Nu Colour"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="Nu Colour"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/2d3276518912283b/webimage-brand-nu_colour-logo.png"
                                                                        data-src="https://media.nuskin.com/m/2d3276518912283b/webimage-brand-nu_colour-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="Nu Colour"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Nu Colour</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="-1" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/180_system" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/446c7a2aad513f58/Small-brand-nu_skin_180-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/446c7a2aad513f58/Small-brand-nu_skin_180-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="180 System"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="180 System"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/3855d3836d920639/webimage-brand-nuskin180-logo.png"
                                                                        data-src="https://media.nuskin.com/m/3855d3836d920639/webimage-brand-nuskin180-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="180 System"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">180 System</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-index="0"
                                        className="slick-slide slick-active slick-current"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        sx={{ outline: 'none', width: '261px' }}
                                    >
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/ageloc">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/42911c8b05600476/Small-brand-ageloc-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/42911c8b05600476/Small-brand-ageloc-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Open container of ageLOC® Tru Face® Essence Ultra with some capsules scattered around."
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="ageLOC"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="bynder"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/6245528b8f76ad32/webimage-brand-ageLOC-logo.png"
                                                                        data-src="https://media.nuskin.com/m/6245528b8f76ad32/webimage-brand-ageLOC-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="ageLOC logo White."
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="bynder"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">ageLOC</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-index="1"
                                        className="slick-slide slick-active"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        sx={{ outline: 'none', width: '261px' }}
                                    >
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/renuspa_io">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/transform/608744f0-243a-4f9f-afde-8af0158c1213/brand-nu-skin-renuspa-io"
                                                                    data-src="https://media.nuskin.com/transform/608744f0-243a-4f9f-afde-8af0158c1213/brand-nu-skin-renuspa-io"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="RenuSpa iO"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="RenuSpa iO"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/transform/19136d57-3fd4-4a21-a576-f2954108c652/Nu-Skin-RenuSpa-iO_logo-White"
                                                                        data-src="https://media.nuskin.com/transform/19136d57-3fd4-4a21-a576-f2954108c652/Nu-Skin-RenuSpa-iO_logo-White"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="RenuSpa iO"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">RenuSpa iO</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-index="2"
                                        className="slick-slide slick-active"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        sx={{ outline: 'none', width: '261px' }}
                                    >
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/lumispa">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/3604b5202b0b64c6/Small-brand-lumispa-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/3604b5202b0b64c6/Small-brand-lumispa-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="ageLOC LumiSpa"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="ageLOC LumiSpa"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/2571a0407433a6e8/webimage-brand-lumispa-logo.png"
                                                                        data-src="https://media.nuskin.com/m/2571a0407433a6e8/webimage-brand-lumispa-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="ageLOC LumiSpa"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">ageLOC LumiSpa</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-index="3"
                                        className="slick-slide slick-active"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        sx={{ outline: 'none', width: '261px' }}
                                    >
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/pharmanex">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/4a1245a63c595262/Small-brand-pharmanex-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/4a1245a63c595262/Small-brand-pharmanex-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Pharmanex"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="Pharmanex"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/4bd7ab9b46bd456d/webimage-brand-pharmanex-logo.png"
                                                                        data-src="https://media.nuskin.com/m/4bd7ab9b46bd456d/webimage-brand-pharmanex-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="Pharmanex"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Pharmanex</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-index="4"
                                        className="slick-slide slick-active"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        sx={{ outline: 'none', width: '261px' }}
                                    >
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/ap24">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/14a0fd6ef63e5dbb/Small-brand-ap_24.jpg"
                                                                    data-src="https://media.nuskin.com/m/14a0fd6ef63e5dbb/Small-brand-ap_24.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="AP 24"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="AP 24"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/501d638a8af80087/webimage-brand-ap24-logo.png"
                                                                        data-src="https://media.nuskin.com/m/501d638a8af80087/webimage-brand-ap24-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="AP 24"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">AP 24</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="5" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/nutricentials" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/233bc4aad86697e8/Small-brand-nutricentials.jpg"
                                                                    data-src="https://media.nuskin.com/m/233bc4aad86697e8/Small-brand-nutricentials.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Nutricentials"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="Nutricentials"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/f3a91129cbbae32/webimage-brand-nutricentials-logo.png"
                                                                        data-src="https://media.nuskin.com/m/f3a91129cbbae32/webimage-brand-nutricentials-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="Nutricentials"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Nutricentials</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="6" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/epoch" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/549aa3e5184434d8/Small-brand-epoch-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/549aa3e5184434d8/Small-brand-epoch-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Epoch"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="Epoch"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/63a454ff90d038b4/webimage-brand-epoch-logo.png"
                                                                        data-src="https://media.nuskin.com/m/63a454ff90d038b4/webimage-brand-epoch-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="Epoch"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Epoch</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="7" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/sunright" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/14e238d7599e1811/Small-brand-sunright.jpg"
                                                                    data-src="https://media.nuskin.com/m/14e238d7599e1811/Small-brand-sunright.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Sunright"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="Sunright"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/3eb406f465d4b0fe/webimage-brand-sunright-logo.png"
                                                                        data-src="https://media.nuskin.com/m/3eb406f465d4b0fe/webimage-brand-sunright-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="Sunright"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Sunright</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="8" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/nu_colour" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/2543e79419276727/Small-brand-nu_colour-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/2543e79419276727/Small-brand-nu_colour-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Nu Colour"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="Nu Colour"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/2d3276518912283b/webimage-brand-nu_colour-logo.png"
                                                                        data-src="https://media.nuskin.com/m/2d3276518912283b/webimage-brand-nu_colour-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="Nu Colour"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Nu Colour</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="9" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/180_system" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/446c7a2aad513f58/Small-brand-nu_skin_180-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/446c7a2aad513f58/Small-brand-nu_skin_180-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="180 System"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="180 System"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/3855d3836d920639/webimage-brand-nuskin180-logo.png"
                                                                        data-src="https://media.nuskin.com/m/3855d3836d920639/webimage-brand-nuskin180-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="180 System"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">180 System</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="10" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/ageloc" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/42911c8b05600476/Small-brand-ageloc-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/42911c8b05600476/Small-brand-ageloc-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Open container of ageLOC® Tru Face® Essence Ultra with some capsules scattered around."
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="ageLOC"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="bynder"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/6245528b8f76ad32/webimage-brand-ageLOC-logo.png"
                                                                        data-src="https://media.nuskin.com/m/6245528b8f76ad32/webimage-brand-ageLOC-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="ageLOC logo White."
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="bynder"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">ageLOC</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="11" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/renuspa_io" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/transform/608744f0-243a-4f9f-afde-8af0158c1213/brand-nu-skin-renuspa-io"
                                                                    data-src="https://media.nuskin.com/transform/608744f0-243a-4f9f-afde-8af0158c1213/brand-nu-skin-renuspa-io"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="RenuSpa iO"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="RenuSpa iO"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/transform/19136d57-3fd4-4a21-a576-f2954108c652/Nu-Skin-RenuSpa-iO_logo-White"
                                                                        data-src="https://media.nuskin.com/transform/19136d57-3fd4-4a21-a576-f2954108c652/Nu-Skin-RenuSpa-iO_logo-White"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="RenuSpa iO"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">RenuSpa iO</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="12" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/lumispa" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/3604b5202b0b64c6/Small-brand-lumispa-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/3604b5202b0b64c6/Small-brand-lumispa-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="ageLOC LumiSpa"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="ageLOC LumiSpa"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/2571a0407433a6e8/webimage-brand-lumispa-logo.png"
                                                                        data-src="https://media.nuskin.com/m/2571a0407433a6e8/webimage-brand-lumispa-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="ageLOC LumiSpa"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">ageLOC LumiSpa</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="13" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/pharmanex" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/4a1245a63c595262/Small-brand-pharmanex-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/4a1245a63c595262/Small-brand-pharmanex-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Pharmanex"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="Pharmanex"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/4bd7ab9b46bd456d/webimage-brand-pharmanex-logo.png"
                                                                        data-src="https://media.nuskin.com/m/4bd7ab9b46bd456d/webimage-brand-pharmanex-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="Pharmanex"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Pharmanex</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="14" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/ap24" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/14a0fd6ef63e5dbb/Small-brand-ap_24.jpg"
                                                                    data-src="https://media.nuskin.com/m/14a0fd6ef63e5dbb/Small-brand-ap_24.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="AP 24"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="AP 24"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/501d638a8af80087/webimage-brand-ap24-logo.png"
                                                                        data-src="https://media.nuskin.com/m/501d638a8af80087/webimage-brand-ap24-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="AP 24"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">AP 24</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="15" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/nutricentials" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/233bc4aad86697e8/Small-brand-nutricentials.jpg"
                                                                    data-src="https://media.nuskin.com/m/233bc4aad86697e8/Small-brand-nutricentials.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Nutricentials"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="Nutricentials"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/f3a91129cbbae32/webimage-brand-nutricentials-logo.png"
                                                                        data-src="https://media.nuskin.com/m/f3a91129cbbae32/webimage-brand-nutricentials-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="Nutricentials"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Nutricentials</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="16" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/epoch" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/549aa3e5184434d8/Small-brand-epoch-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/549aa3e5184434d8/Small-brand-epoch-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Epoch"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="Epoch"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/63a454ff90d038b4/webimage-brand-epoch-logo.png"
                                                                        data-src="https://media.nuskin.com/m/63a454ff90d038b4/webimage-brand-epoch-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="Epoch"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Epoch</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="17" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/sunright" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/14e238d7599e1811/Small-brand-sunright.jpg"
                                                                    data-src="https://media.nuskin.com/m/14e238d7599e1811/Small-brand-sunright.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Sunright"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="Sunright"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/3eb406f465d4b0fe/webimage-brand-sunright-logo.png"
                                                                        data-src="https://media.nuskin.com/m/3eb406f465d4b0fe/webimage-brand-sunright-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="Sunright"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Sunright</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="18" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/nu_colour" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/2543e79419276727/Small-brand-nu_colour-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/2543e79419276727/Small-brand-nu_colour-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Nu Colour"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="Nu Colour"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/2d3276518912283b/webimage-brand-nu_colour-logo.png"
                                                                        data-src="https://media.nuskin.com/m/2d3276518912283b/webimage-brand-nu_colour-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="Nu Colour"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">Nu Colour</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="19" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '261px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="brandsection card">
                                                <div className="">
                                                    <a className="link text-decoration-none" href="/us/en/catalog/180_system" tabIndex="-1">
                                                        <div className="brand-image">
                                                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: '260px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/446c7a2aad513f58/Small-brand-nu_skin_180-optweb.jpg"
                                                                    data-src="https://media.nuskin.com/m/446c7a2aad513f58/Small-brand-nu_skin_180-optweb.jpg"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="180 System"
                                                                    height="260px"
                                                                    width="auto"
                                                                    title="180 System"
                                                                    className="position-relative brand-img"
                                                                    aria-label=""
                                                                    data-alt-text-resolution="cs"
                                                                />
                                                            </div>
                                                            <div className="content-overlay"></div>
                                                            <div className="brand-logo">
                                                                <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                                    <img
                                                                        src="https://media.nuskin.com/m/3855d3836d920639/webimage-brand-nuskin180-logo.png"
                                                                        data-src="https://media.nuskin.com/m/3855d3836d920639/webimage-brand-nuskin180-logo.png"
                                                                        srcSet=""
                                                                        loading="lazy"
                                                                        alt="180 System"
                                                                        height="auto"
                                                                        width="auto"
                                                                        className=""
                                                                        aria-label=""
                                                                        data-alt-text-resolution="cs"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-0 w-100 brand-sec-body card-body">
                                                            <div className="head-3 heading-3 card-subtitle h6">180 System</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="slick-dots">
                                <li className="slick-active">
                                    <button aria-label="brand image 1 of 10">1</button>
                                </li>
                                <li className="">
                                    <button aria-label="brand image 2 of 10">2</button>
                                </li>
                                <li className="">
                                    <button aria-label="brand image 3 of 10">3</button>
                                </li>
                                <li className="">
                                    <button aria-label="brand image 4 of 10">4</button>
                                </li>
                                <li className="">
                                    <button aria-label="brand image 5 of 10">5</button>
                                </li>
                                <li className="">
                                    <button aria-label="brand image 6 of 10">6</button>
                                </li>
                                <li className="">
                                    <button aria-label="brand image 7 of 10">7</button>
                                </li>
                                <li className="">
                                    <button aria-label="brand image 8 of 10">8</button>
                                </li>
                                <li className="">
                                    <button aria-label="brand image 9 of 10">9</button>
                                </li>
                                <li className="">
                                    <button aria-label="brand image 10 of 10">10</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mob-view-all d-block d-md-none px-0 col">
                        <div className="">
                            <a className="link text-decoration-none mt-4" href="/us/en/categoryLanding/skin_and_beauty">
                                <h6 className="viewsec m-0 cta">View All</h6>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="separator-section w-100 p-0 container-fluid">
                    <div className="separator-container row">
                        <div className="hori-line"></div>
                        <h4 className="h4-bold subhead-l">WHO'S TALKING ABOUT US</h4>
                        <h3 className="heading-1">Featured In</h3>
                    </div>
                </div>
                <div className="featuredsec">
                    <div className="featured-container container">
                        <div className="slick-slider slick-initialized" dir="ltr">
                            <div className="slick-list">
                                <div className="slick-track" sx={{ opacity: 1, transform: 'translate3d(-1112px, 0px, 0px)', width: '6116px' }}>
                                    <div data-index="-4" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/3bd75528bebbddee/Small-featured_in-new_beauty.jpg"
                                                            data-src="https://media.nuskin.com/m/3bd75528bebbddee/Small-featured_in-new_beauty.jpg"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="New Beauty logo black"
                                                            height="auto"
                                                            width="auto"
                                                            title="New Beauty"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="-3" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/f5c8bdf7202bd30/Small-featured_in-essence.jpg"
                                                            data-src="https://media.nuskin.com/m/f5c8bdf7202bd30/Small-featured_in-essence.jpg"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Essence logo black."
                                                            height="auto"
                                                            width="auto"
                                                            title="Essence"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="-2" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/transform/fa6eaf93-c750-4ec9-a742-ca83bd6133e0/Byrdie-Logo-2"
                                                            data-src="https://media.nuskin.com/transform/fa6eaf93-c750-4ec9-a742-ca83bd6133e0/Byrdie-Logo-2"
                                                            srcSet=""
                                                            loading="lazy"
                                                            height="auto"
                                                            width="auto"
                                                            title="Byrdie"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="-1" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/18805cec2e5c1c3f/webimage-featured_in-bella.png"
                                                            data-src="https://media.nuskin.com/m/18805cec2e5c1c3f/webimage-featured_in-bella.png"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Bella Magazine black."
                                                            height="auto"
                                                            width="auto"
                                                            title="Bella Magazine"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-index="0"
                                        className="slick-slide slick-active slick-current"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        sx={{ outline: 'none', width: '278px' }}
                                    >
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/d66e3621b9a55/Small-featured_in-cosmopolitan.jpg"
                                                            data-src="https://media.nuskin.com/m/d66e3621b9a55/Small-featured_in-cosmopolitan.jpg"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Cosmopolitan logo black."
                                                            height="auto"
                                                            width="auto"
                                                            title="Cosmopolitan"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-index="1"
                                        className="slick-slide slick-active"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        sx={{ outline: 'none', width: '278px' }}
                                    >
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/115bb8fe8958b247/Small-featured_in-harpers_bazaar.jpg"
                                                            data-src="https://media.nuskin.com/m/115bb8fe8958b247/Small-featured_in-harpers_bazaar.jpg"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Bazaar Logo Black"
                                                            height="auto"
                                                            width="auto"
                                                            title="Harper's Bazaar "
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-index="2"
                                        className="slick-slide slick-active"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        sx={{ outline: 'none', width: '278px' }}
                                    >
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/1dbd128c979025cb/Small-featured_in-allure.jpg"
                                                            data-src="https://media.nuskin.com/m/1dbd128c979025cb/Small-featured_in-allure.jpg"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Allure logo black."
                                                            height="auto"
                                                            width="auto"
                                                            title="Allure"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-index="3"
                                        className="slick-slide slick-active"
                                        tabIndex="-1"
                                        aria-hidden="false"
                                        sx={{ outline: 'none', width: '278px' }}
                                    >
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/transform/ff6ae6a8-bc5b-4162-8326-5da0bd3ce002/whlogo"
                                                            data-src="https://media.nuskin.com/transform/ff6ae6a8-bc5b-4162-8326-5da0bd3ce002/whlogo"
                                                            srcSet=""
                                                            loading="lazy"
                                                            height="auto"
                                                            width="auto"
                                                            title="Women's Health"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="4" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/4d7bfc195003509e/Small-featured_in-popsugar.jpg"
                                                            data-src="https://media.nuskin.com/m/4d7bfc195003509e/Small-featured_in-popsugar.jpg"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Popsugar logo black."
                                                            height="auto"
                                                            width="auto"
                                                            title="POPSUGAR"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="5" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/3bd75528bebbddee/Small-featured_in-new_beauty.jpg"
                                                            data-src="https://media.nuskin.com/m/3bd75528bebbddee/Small-featured_in-new_beauty.jpg"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="New Beauty logo black"
                                                            height="auto"
                                                            width="auto"
                                                            title="New Beauty"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="6" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/f5c8bdf7202bd30/Small-featured_in-essence.jpg"
                                                            data-src="https://media.nuskin.com/m/f5c8bdf7202bd30/Small-featured_in-essence.jpg"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Essence logo black."
                                                            height="auto"
                                                            width="auto"
                                                            title="Essence"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="7" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/transform/fa6eaf93-c750-4ec9-a742-ca83bd6133e0/Byrdie-Logo-2"
                                                            data-src="https://media.nuskin.com/transform/fa6eaf93-c750-4ec9-a742-ca83bd6133e0/Byrdie-Logo-2"
                                                            srcSet=""
                                                            loading="lazy"
                                                            height="auto"
                                                            width="auto"
                                                            title="Byrdie"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="8" className="slick-slide" tabIndex="-1" aria-hidden="true" sx={{ outline: 'none', width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/18805cec2e5c1c3f/webimage-featured_in-bella.png"
                                                            data-src="https://media.nuskin.com/m/18805cec2e5c1c3f/webimage-featured_in-bella.png"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Bella Magazine black."
                                                            height="auto"
                                                            width="auto"
                                                            title="Bella Magazine"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="9" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/d66e3621b9a55/Small-featured_in-cosmopolitan.jpg"
                                                            data-src="https://media.nuskin.com/m/d66e3621b9a55/Small-featured_in-cosmopolitan.jpg"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Cosmopolitan logo black."
                                                            height="auto"
                                                            width="auto"
                                                            title="Cosmopolitan"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="10" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/115bb8fe8958b247/Small-featured_in-harpers_bazaar.jpg"
                                                            data-src="https://media.nuskin.com/m/115bb8fe8958b247/Small-featured_in-harpers_bazaar.jpg"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Bazaar Logo Black"
                                                            height="auto"
                                                            width="auto"
                                                            title="Harper's Bazaar "
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="11" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/1dbd128c979025cb/Small-featured_in-allure.jpg"
                                                            data-src="https://media.nuskin.com/m/1dbd128c979025cb/Small-featured_in-allure.jpg"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Allure logo black."
                                                            height="auto"
                                                            width="auto"
                                                            title="Allure"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="12" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/transform/ff6ae6a8-bc5b-4162-8326-5da0bd3ce002/whlogo"
                                                            data-src="https://media.nuskin.com/transform/ff6ae6a8-bc5b-4162-8326-5da0bd3ce002/whlogo"
                                                            srcSet=""
                                                            loading="lazy"
                                                            height="auto"
                                                            width="auto"
                                                            title="Women's Health"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="13" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/4d7bfc195003509e/Small-featured_in-popsugar.jpg"
                                                            data-src="https://media.nuskin.com/m/4d7bfc195003509e/Small-featured_in-popsugar.jpg"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Popsugar logo black."
                                                            height="auto"
                                                            width="auto"
                                                            title="POPSUGAR"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="14" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/3bd75528bebbddee/Small-featured_in-new_beauty.jpg"
                                                            data-src="https://media.nuskin.com/m/3bd75528bebbddee/Small-featured_in-new_beauty.jpg"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="New Beauty logo black"
                                                            height="auto"
                                                            width="auto"
                                                            title="New Beauty"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="15" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/f5c8bdf7202bd30/Small-featured_in-essence.jpg"
                                                            data-src="https://media.nuskin.com/m/f5c8bdf7202bd30/Small-featured_in-essence.jpg"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Essence logo black."
                                                            height="auto"
                                                            width="auto"
                                                            title="Essence"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="16" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/transform/fa6eaf93-c750-4ec9-a742-ca83bd6133e0/Byrdie-Logo-2"
                                                            data-src="https://media.nuskin.com/transform/fa6eaf93-c750-4ec9-a742-ca83bd6133e0/Byrdie-Logo-2"
                                                            srcSet=""
                                                            loading="lazy"
                                                            height="auto"
                                                            width="auto"
                                                            title="Byrdie"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="17" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" sx={{ width: '278px' }}>
                                        <div>
                                            <div tabIndex="-1" sx={{ width: '100%', display: 'inline-block' }} className="featuredinsec card">
                                                <div className="featured-box">
                                                    <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                                        <img
                                                            src="https://media.nuskin.com/m/18805cec2e5c1c3f/webimage-featured_in-bella.png"
                                                            data-src="https://media.nuskin.com/m/18805cec2e5c1c3f/webimage-featured_in-bella.png"
                                                            srcSet=""
                                                            loading="lazy"
                                                            alt="Bella Magazine black."
                                                            height="auto"
                                                            width="auto"
                                                            title="Bella Magazine"
                                                            className="featuredimg"
                                                            aria-label=""
                                                            data-alt-text-resolution="bynder"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="slick-dots">
                                <li className="slick-active">
                                    <button aria-label="featured image 1 of 9">1</button>
                                </li>
                                <li className="">
                                    <button aria-label="featured image 2 of 9">2</button>
                                </li>
                                <li className="">
                                    <button aria-label="featured image 3 of 9">3</button>
                                </li>
                                <li className="">
                                    <button aria-label="featured image 4 of 9">4</button>
                                </li>
                                <li className="">
                                    <button aria-label="featured image 5 of 9">5</button>
                                </li>
                                <li className="">
                                    <button aria-label="featured image 6 of 9">6</button>
                                </li>
                                <li className="">
                                    <button aria-label="featured image 7 of 9">7</button>
                                </li>
                                <li className="">
                                    <button aria-label="featured image 8 of 9">8</button>
                                </li>
                                <li className="">
                                    <button aria-label="featured image 9 of 9">9</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="mx-0 row">
                        <div
                            role="img"
                            data-alt-text-resolution="cs"
                            aria-label="It's Official!"
                            className="tagline mx-auto text-center taglineImgBackground p-0 col"
                        >
                            <div className="tagline-textcontainer">
                                <strong>
                                    <p className="tagline-title">It's Official!</p>
                                </strong>
                                <p className="paragraph-l text-uppercase">We're your go-to for devices that help you and feel your best!</p>
                                <p className="tagline-text2"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="separator-section w-100 p-0 container-fluid">
                    <div className="separator-container row">
                        <div className="hori-line"></div>
                        <h4 className="h4-bold subhead-l">OUR CORE</h4>
                        <h3 className="heading-1">The Nu Skin Way</h3>
                    </div>
                </div>
                <div className=" position-relative w-100 info-block-section d-flex">
                    <div className="container">
                        <div className="info-section d-lg-flex justify-content-between row">
                            <div className="p-0 mb-2 mb-lg-0 d-inline-block col-lg-5">
                                <h2 className="heading-1">
                                    Nu Skin,
                                    <br />
                                    Improving Lives Everyday
                                </h2>
                            </div>
                            <div className="p-0 col-lg-7">
                                <ul className="d-flex p-0 m-0 mb-md-0 d-inline-block">
                                    <li data-testid="infobar-item-0" className="nohover">
                                        <div className="">
                                            <a href="/" className="link " target="_blank" data-testid="link" tabIndex="-1">
                                                <h2 className="heading-1">
                                                    <span>
                                                        <span>25</span>
                                                    </span>
                                                    +
                                                </h2>
                                                <h5 className="h5-medium"> Years of Giving</h5>
                                            </a>
                                        </div>
                                    </li>
                                    <li data-testid="infobar-item-1" className="hover">
                                        <div className="">
                                            <a href="/content/globalffg/home.html" className="link " target="_blank" data-testid="link" tabIndex="0">
                                                <h2 className="heading-1">
                                                    <span>
                                                        <span>20</span>
                                                    </span>
                                                    +
                                                </h2>
                                                <h5 className="h5-medium"> Current Social Projects</h5>
                                            </a>
                                        </div>
                                    </li>
                                    <li data-testid="infobar-item-2" className="hover">
                                        <div className="">
                                            <a
                                                href="/content/globalffg/nourish-the-children/home.html"
                                                className="link "
                                                target="_blank"
                                                data-testid="link"
                                                tabIndex="0"
                                            >
                                                <h2 className="heading-1">
                                                    <span>
                                                        <span>850</span>
                                                    </span>
                                                    M+
                                                </h2>
                                                <h5 className="h5-medium"> Meals Donated through Nourish the Children</h5>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight-section container-fluid">
                    <div className="highlight-section-1 row">
                        <div className="highlight-image px-0 col">
                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                <img
                                    src="https://media.nuskin.com/m/7bdb7e1a3fef7a1/Small-NSWay_Force-for-Good.jpg"
                                    data-src="https://media.nuskin.com/m/7bdb7e1a3fef7a1/Small-NSWay_Force-for-Good.jpg"
                                    srcSet=""
                                    loading="lazy"
                                    alt="Several smiling African children eating Nu Skin Vita Meal."
                                    height="auto"
                                    width="auto"
                                    className=""
                                    aria-label=""
                                    data-alt-text-resolution="bynder"
                                />
                            </div>
                        </div>
                        <div className="highlight-section-content col">
                            <h2 className="heading-2">Being a Force for Good</h2>
                            <p className="paragraph-m pb-1">
                                Some call it corporate social responsibility. We call it our purpose. Together we're engaged in initiatives worldwide—nourishing
                                thousands of hungry children, funding pediatric health and wellness services, or striving for a more sustainable future. And
                                sometimes, we're simply taking meaningful steps to improve our local communities. Whatever we do, we believe changing the world
                                begins with a single action.
                            </p>
                            <div className="">
                                <a href="/content/globalffg/home.html" className="link paragraph-m" target="_blank">
                                    <span>Explore our projects</span>
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="arrow-icon1 pl-2"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 16 16 12 12 8"></polyline>
                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight-section-two container-fluid">
                    <div className="highlight-section-2 row">
                        <div className="highlight-image px-0 col">
                            <div className="image-wrapper col-12 p-0 m-0 " sx={{ width: 'auto', height: 'auto' }}>
                                <img
                                    src="https://media.nuskin.com/m/6a3ffb6d6d3dd68f/Small-NSWay_Nature-Science.jpg"
                                    data-src="https://media.nuskin.com/m/6a3ffb6d6d3dd68f/Small-NSWay_Nature-Science.jpg"
                                    srcSet=""
                                    loading="lazy"
                                    alt="highlight image"
                                    height="auto"
                                    width="auto"
                                    className=""
                                    aria-label=""
                                    data-alt-text-resolution="bynder"
                                />
                            </div>
                        </div>
                        <div className="highlight-section-two-content col">
                            <h2 className="heading-2">Nature + Science</h2>
                            <p className="paragraph-m pb-1">
                                Capturing the best in nature to bring you the best results is our personal mission. We combine powerful ingredients with
                                innovative science and technology. The result? World-className products that deliver real benefits. And even though we’ve spent
                                more than 30 years researching aging at the genetic level, Mother Nature continually inspires us to push the boundaries of
                                inquiry and innovation. We bottle what’s best and bring it right to your door.
                            </p>
                            <div className="">
                                <a href="/content/nuskin/en_US/topnav-skin-and-beauty/science.html" className="link paragraph-m" target="_blank">
                                    <span>Discover more</span>
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="arrow-icon2 pl-2"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 16 16 12 12 8"></polyline>
                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="awardssec">
                    <div className="container">
                        <div>
                            <div className="w-100 justify-content-center p-0 m-0 row">
                                <div className="disclaimer-wrap">
                                    <i>
                                        <p>
                                            *
                                            <span>
                                                Source Euromonitor International Limited; At-Home Beauty and Wellness Device Systems on a total retail level in
                                                RSP, excluding salon services that may offer packages; research conducted April – May 2024.
                                            </span>
                                        </p>
                                        <p>
                                            **These statements have not been evaluated by the Food and Drug Administration. This product is not intended to
                                            diagnose, treat, cure, or prevent any disease.
                                        </p>
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <script id="__LOADABLE_REQUIRED_CHUNKS__" type="application/json">[28727,62599,65425,17157]</script>
            <script id="__LOADABLE_REQUIRED_CHUNKS___ext" type="application/json">{"namedChunks":["src-views-components-UnSupported-UnSupported","src-views-pages-StudioPage"]}</script> */}

            {/* <Script async src="https://test.nuskin.com/storefront/client/main-bundle.a45760bcd1df2606e810.js"></Script>
            <Script async src="https://test.nuskin.com/storefront/client/src-views-components-UnSupported-UnSupported.a45760bcd1df2606e810.js"></Script>
            <Script async src="https://test.nuskin.com/storefront/client/62599.a45760bcd1df2606e810.js"></Script>
            <Script async src="https://test.nuskin.com/storefront/client/65425.a45760bcd1df2606e810.js"></Script>
            <Script async src="https://test.nuskin.com/storefront/client/src-views-pages-StudioPage.a45760bcd1df2606e810.js"></Script> */}
        </section>
    )
}
