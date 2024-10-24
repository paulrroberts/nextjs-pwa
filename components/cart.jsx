import Link from 'next/link'
import './cart.css'

export default function Cart() {
    return (
        <section id="id-app-wrapper" className="app-wrapper position-relative">
            <div className="mt-2 checkout-wrapper view-cart-wrapper">
                <div className="font-weight-bold cart-title px-3 d-flex align-items-center heading-2-bold row no-gutters">Cart</div>
                <div data-testid="qa-cart-products-container" className="pb-2 checkout-bg">
                    <div className="px-2 cart-view-title-wrapper text-capitalize font-weight-bold d-none d-md-flex mt-3 mx-0 mb-1 w-100 paragraph-m-bold row no-gutters">
                        <div className="cart-view-title product d-flex align-items-center col-lg-5 col-md-6 col-sm-12">product</div>
                        <div className="cart-view-title quantity d-flex align-items-center justify-content-center  col-lg-4 col-md-2 col-sm-8">quantity</div>
                        <div className="cart-view-title itemprice d-flex align-items-center col-lg-2 col-md-3 col-sm-8">item price</div>
                        <div className="cart-view-title total d-flex align-items-center justify-content-center  col-lg-1 col-md-1 col-sm-8">total</div>
                    </div>
                    <div data-testid="qa-cart-products-container" className="pb-2 ">
                        <div data-testid="qa-grouped-products-wrapper" className="product-wrapper  w-100 product-bg cart-search-wrapper row no-gutters">
                            <div className="cart-product-collection">
                                <div className="search-box-container">
                                    <div className="cart-search-input-parent d-flex">
                                        <svg
                                            width="25"
                                            height="24"
                                            viewBox="0 0 25 24"
                                            className="enable-search-icon"
                                            data-testid="qa-search-icon"
                                            aria-label="search icon"
                                            alt="search icon"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.729736 9.98777C0.729736 4.47167 5.19572 0 10.7048 0C16.2139 0 20.6798 4.47167 20.6798 9.98777C20.6798 11.7568 20.2197 13.4205 19.4126 14.8629L23.9664 19.4844C24.9891 20.5223 24.9835 22.1921 23.9538 23.2231C22.9052 24.273 21.2001 24.2567 20.1718 23.1869L15.7613 18.5988C14.2782 19.4736 12.5489 19.9755 10.7048 19.9755C5.19572 19.9755 0.729736 15.5039 0.729736 9.98777ZM17.3685 17.42L21.5943 21.8159C21.8563 22.0884 22.2906 22.0926 22.5576 21.8251C22.8199 21.5625 22.8214 21.1372 22.5609 20.8728L18.2606 16.5087C17.9828 16.8311 17.6848 17.1355 17.3685 17.42ZM10.7048 1.97696C6.28617 1.97696 2.70418 5.56352 2.70418 9.98777C2.70418 14.412 6.28617 17.9986 10.7048 17.9986C12.4323 17.9986 14.0292 17.4515 15.3361 16.5208C16.1245 15.9594 16.8071 15.2583 17.3477 14.454C18.205 13.1784 18.7054 11.6431 18.7054 9.98777C18.7054 5.56352 15.1234 1.97696 10.7048 1.97696Z"
                                                fill="#5F5F5F"
                                            ></path>
                                        </svg>
                                        <input
                                            data-testid="qa-search-add-button"
                                            placeholder="Product Search Quick-Add"
                                            autoComplete="off"
                                            role="searchbox"
                                            aria-label="item search input"
                                            type="text"
                                            id="itemSearchInput"
                                            className="search-textBox bg-transparent  form-control"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="cart-item-category-heading view-cart-category font-weight-bold h4 heading-5 mt-2 mb-2 "
                                    data-testid="qa-minicart-title"
                                >
                                    ONE-TIME PURCHASE
                                </div>
                                <div data-testid="qa-cart-product" className="cart-product-wrapper view-cart-item-wrapper p-2  checkout-container  w-100 card">
                                    <div className="align-items-center pl-3 py-1 view-cart-header-section row no-gutters"></div>
                                    <div className="cart-product-item-btn-wrapper row no-gutters">
                                        <div className="mb-2 px-2 view-cart-delete-icon-wrapper col">
                                            <button
                                                data-testid="qa-product-remove"
                                                type="button"
                                                className="w-100 cart-remove-button d-flex justify-content-end align-items-end btn btn-outline-primary"
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 512 512"
                                                    className="close-icon mr-1"
                                                    aria-label="Remove Nu Colour® Peptide Pout"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-product-details row no-gutters">
                                        <div className="cart-product-block">
                                            <div data-testid="qa-products-container" className="p-0 cart-card-info col">
                                                <div className="row no-gutters">
                                                    <div className="p-0 cart-product-img">
                                                        <a href="/us/en/product/nu-colour-peptide-pout">
                                                            <div className="image-wrapper col-12 p-0 m-0 " style={{ width: '100px', height: '100px' }}>
                                                                <img
                                                                    src="https://media.nuskin.com/m/46ba64cd53166059/webimage-LipPeptide-White.png"
                                                                    data-src="https://media.nuskin.com/m/46ba64cd53166059/webimage-LipPeptide-White.png"
                                                                    srcSet=""
                                                                    loading="lazy"
                                                                    alt="Nu Colour® Peptide Pout"
                                                                    height="100px"
                                                                    width="100px"
                                                                    className=""
                                                                    aria-label=""
                                                                />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="pl-2 pr-0 view-cart-product-details col-lg-8 col-md-8 col-sm-7 col-7">
                                                        <div className="row no-gutters">
                                                            <div className="p-0 view-cart-product-name col-lg-12">
                                                                <a className="text-dark" href="/us/en/product/nu-colour-peptide-pout">
                                                                    <div className="card-title h5" data-testid="qa-product-name">
                                                                        Nu Colour® Peptide Pout
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="p-0 view-cart-sku-details col-lg-12">
                                                                <p className="card-text" data-testid="qa-product-number">
                                                                    <span className=" checkout-product-num checkout-product-details paragraph-m">SKU:</span>
                                                                    <span className="ml-1 paragraph-m view-cart-sku-id">01002983</span>
                                                                </p>
                                                            </div>
                                                            <div data-testid="qa-product-fis" className="d-none flex-wrap p-0 col-lg-12">
                                                                <span className="store-name-cart ">Pick It in Store:</span>
                                                                <span className="store-pickup-label-cart ml-2">
                                                                    <b>Select a Store</b>
                                                                </span>
                                                            </div>
                                                            <div className="view-cart-subscribe ">
                                                                <div className="pl-0 py-2 form-check">
                                                                    <input type="checkbox" id="toggle_03717324115705767" className="form-check-input" />
                                                                    <label title="" htmlFor="toggle_03717324115705767" className="form-check-label">
                                                                        Subscribe
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-1 cart-product-block">
                                                            <div className="cart-quantity-wrapper view-cart-quantity-wrapper p-0 col">
                                                                <div className="justify-content-md-left justify-content-lg-left quantity-field-wrapper row no-gutters">
                                                                    <div className="quantity-txt">Quantity:</div>
                                                                    <div
                                                                        data-testid="qa-quantity-field-wrapper"
                                                                        className="bg-white border border-secondary cart-prdct-qntity-count justify-content-center mr-2 v2-qty-design-quantity quantity row no-gutters"
                                                                    >
                                                                        <div className="d-flex justify-content-center col">
                                                                            <button
                                                                                disabled=""
                                                                                tabIndex="-1"
                                                                                data-testid="qa-quantity-minus"
                                                                                type="button"
                                                                                className="qty_button minus-btn border-0 btn btn-primary"
                                                                            >
                                                                                <svg
                                                                                    stroke="currentColor"
                                                                                    fill="currentColor"
                                                                                    strokeWidth="0"
                                                                                    viewBox="0 0 512 512"
                                                                                    className="minus-svg-icon"
                                                                                    aria-label="decrease quantity"
                                                                                    height="1em"
                                                                                    width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path d="M368.5 240h-225c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7h225c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                        <div className="col">
                                                                            <input
                                                                                tabIndex="0"
                                                                                data-testid="qa-product-quantity"
                                                                                aria-label="quantity"
                                                                                type="text"
                                                                                className="p-0 text-center quantity-value form-control"
                                                                            />
                                                                        </div>
                                                                        <div className="d-flex justify-content-center border-0 col">
                                                                            <button
                                                                                tabIndex="0"
                                                                                data-testid="qa-quantity-plus"
                                                                                type="button"
                                                                                className="qty_button plus-btn btn btn-primary"
                                                                            >
                                                                                <svg
                                                                                    stroke="currentColor"
                                                                                    fill="currentColor"
                                                                                    strokeWidth="0"
                                                                                    viewBox="0 0 512 512"
                                                                                    className="plus-svg-icon"
                                                                                    aria-label="increase quantity"
                                                                                    height="1em"
                                                                                    width="1em"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="cart-price-wrapper justify-content-md-center justify-content-lg-center p-0 m-md-0 m-lg-0 col">
                                                                <div data-testid="qa-product-price" className="price-text">
                                                                    <div>
                                                                        <div
                                                                            data-testid="qa-pdp-price"
                                                                            className="p-0 d-flex  price-wrapper plp-price-md pv-right-align sales    col-lg-12"
                                                                        >
                                                                            <div className="price-section d-flex flex-wrap align-items-center">
                                                                                <div className=" left-span  ">Price</div>
                                                                                <div className=" span-colon ">:&nbsp;</div>
                                                                                <div className="mini-cart-price   ">
                                                                                    <span
                                                                                        className="right-span pr-2 sale   "
                                                                                        data-testid="qa-product-reg-price"
                                                                                        aria-hidden="false"
                                                                                    >
                                                                                        $19.00
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
                                                <p className="availability-text ml-2 text-success font-weight-bold" data-testid="qa-product-availability">
                                                    <span className="availability-text mt-2 text-success font-weight-bold p-0 mb-0"></span>
                                                </p>
                                                <div className="mt-2 align-items-end justify-content-center view-cart-total-section  ">
                                                    <div data-testid="qa-product-total" className=" pl-1 p-0 cart-total-price-wrapper col">
                                                        <div className="mx-0 font-weight-bold row no-gutters">
                                                            <div className="mt-1 d-flex  p-0  totalValueFlexEnd view-cart-total-value col-lg-12">
                                                                <p className="pl-sm-1 pl-xs-1 mb-0 d-sm-block d-xs-block hide-total-label">Total :</p>
                                                                <span className=" pl-1" aria-live="polite">
                                                                    $19.00
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
                            <div className="cart-order-summary">
                                <div className="ordr-sumary" aria-live="polite">
                                    <div className="order-sumary-title" data-testid="qa-cart-order-summary">
                                        Order Summary
                                    </div>
                                    <div className="order-sub-total d-flex">
                                        <div className="ordr-sub-txt paragraph-m-bold" aria-hidden="true" data-testid="qa-cart-order-total">
                                            Order Total
                                        </div>
                                        <div className="ordr-sub-price" data-testid="qa-cart-order-total-price" aria-label="Order Total $19.00">
                                            {' '}
                                            $19.00
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <div className=" p-0 view-cart-summary-wrapper row no-gutters">
                                            <div className="col-auto"></div>
                                            <div aria-live="polite" className="cart-right-total-wrapper col-lg-12">
                                                <div className="shopping-cart-price-panel d-flex justify-content-end ordrs-price-info d-flex mt-0 mb-3">
                                                    <div className="left-span ordr-sub-txt paragraph-l" data-testid="qa-onetime-sub-total" aria-hidden="true">
                                                        One time subtotal
                                                    </div>
                                                    <div
                                                        className="right-span ordr-total-price paragraph-l "
                                                        data-testid="qa-onetime-sub-total-price"
                                                        aria-label="One time subtotal $19.00"
                                                    >
                                                        $19.00
                                                    </div>
                                                </div>
                                                <div
                                                    data-testid="qa-subtotal"
                                                    className="shopping-cart-price-panel d-flex justify-content-end mb-2 p-0 paragraph-m col-lg-12"
                                                >
                                                    <span className="left-span mr-1" aria-hidden="true">
                                                        Subtotal 1 items
                                                    </span>
                                                    <span className="right-span" aria-label="Subtotal 1  items $19.00">
                                                        $19.00
                                                    </span>
                                                </div>
                                                <div
                                                    data-testid="qa-estimated-total"
                                                    className="shopping-cart-price-panel d-flex justify-content-end mt-2 mb-2 p-0 paragraph-m grand-total-wrapper col-lg-12"
                                                >
                                                    <strong className="left-span mr-2" aria-hidden="true">
                                                        Estimated Total
                                                    </strong>
                                                    <strong className="right-span" aria-label="Estimated Total $19.00">
                                                        $19.00
                                                    </strong>
                                                </div>
                                                <div className="d-none grand-total-border border-top mt-3 mb-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-view-button-wrapper">
                                        <div className="flex-row justify-content-end w-100 row no-gutters">
                                            <div className="col-lg-12">
                                                <Link type="button" className="cart-view-checkout-button mr-2 w-100 btn btn-primary" href="/checkout">
                                                    <div>
                                                        <span>
                                                            <svg
                                                                className="view-cart-nuskin"
                                                                width="24px"
                                                                height="24px"
                                                                fill="#ffffff"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 51 52"
                                                                data-testid="view-cart-nuskin-icon"
                                                                aria-label="View Cart Nuskin Icon"
                                                            >
                                                                <path
                                                                    d="M50.041 20.6645C49.3218 18.9872 48.2764 17.4698 46.9662 16.2003C44.1811 13.5805 40.2549 12.5601 36.5481 13.4929C32.8413 14.4257 29.8642 17.1832 28.6486 20.8098C28.0296 22.5024 27.7126 24.2906 27.7116 26.0929C27.7116 33.9648 27.7116 41.8411 27.7116 49.7216C27.7116 51.0424 27.7116 51.0424 26.2599 50.9763C26.2599 50.7254 26.2599 50.4481 26.2599 50.1838C26.2599 41.2818 26.2599 32.3841 26.2599 23.491C26.0387 17.9401 29.4097 12.8766 34.6136 10.9436C35.2421 10.724 35.886 10.5518 36.5405 10.4284C37.1737 10.2964 37.8602 10.2435 38.4934 10.1643C37.6885 6.47933 30.9842 2.23962 25.547 1.98868C19.7457 1.84925 14.3682 5.01885 11.677 10.1643C12.2972 10.2435 12.9044 10.2832 13.4849 10.3888C18.8789 11.3104 23.0428 15.6436 23.7525 21.0739C23.8991 22.0622 23.974 23.0598 23.9766 24.0589C23.9766 32.7498 23.9766 41.4403 23.9766 50.1311C23.9766 50.8178 23.8182 51.1085 23.0793 51.0291C22.3401 50.95 22.4194 50.7254 22.4194 50.2369C22.4194 47.4762 22.4194 44.7158 22.4194 41.9422C22.4194 36.4742 22.4194 31.0062 22.4194 25.5382C22.4658 22.3249 21.2911 19.214 19.1332 16.8342C16.5801 14.0727 12.8165 12.7711 9.10424 13.3655C5.39204 13.96 2.22225 16.3718 0.657194 19.7928C0.485803 20.123 0.340436 20.4664 0.103027 20.9551C2.27367 8.88027 12.7463 0.076315 25.0052 0.0212557C37.2638 -0.0338037 47.8152 8.6757 50.0937 20.7305"
                                                                    fill=""
                                                                ></path>
                                                                <path
                                                                    d="M33.7936 49.431C33.7936 49.1801 33.7936 49.0083 33.7936 48.8367C33.7936 44.1873 33.7936 39.5913 33.7936 34.8761C33.7088 32.6202 34.5699 30.4318 36.1692 28.84C38.1948 26.8986 41.2056 26.4052 43.7444 27.5985C46.2721 28.5447 47.9495 30.9598 47.9543 33.6608C48.0301 36.4771 47.0132 39.213 45.1168 41.2948C42.3431 44.8074 38.7052 47.5382 34.5591 49.2195C34.3125 49.3078 34.0614 49.3828 33.8069 49.4441"
                                                                    fill=""
                                                                ></path>
                                                                <path
                                                                    d="M16.4134 49.6159C14.7636 48.7573 13.2065 48.0706 11.7681 47.1856C8.4545 45.2276 5.68241 42.4717 3.70443 39.1685C2.56468 37.3567 2.09748 35.2014 2.38472 33.0799C2.7694 29.7983 5.45008 27.2654 8.74587 27.0702C12.2156 26.6181 15.4457 28.923 16.1493 32.3534C16.3906 33.3479 16.5147 34.3676 16.5188 35.3911C16.5188 39.7762 16.5188 44.1743 16.5188 48.5988C16.5188 48.8498 16.5188 49.0877 16.4397 49.5762"
                                                                    fill=""
                                                                ></path>
                                                                <path
                                                                    d="M20.1482 50.4215C18.8285 50.4215 18.7095 50.329 18.7095 49.1931V30.3324C18.8828 26.8908 16.8673 23.7145 13.6814 22.4077C10.1653 20.926 6.10269 21.7193 3.40106 24.4153C1.68238 26.3654 0.742587 28.8813 0.76163 31.4814C0.767026 31.7585 0.698784 32.0319 0.563576 32.274C0.418211 31.64 0.24682 30.9531 0.167472 30.372C-0.284175 27.8833 0.184929 25.3151 1.48719 23.1473C2.39143 21.6203 3.78764 20.4465 5.44632 19.819C8.97191 18.434 12.9285 18.6806 16.2551 20.4926C18.706 21.7224 20.2237 24.2611 20.1482 27.004C20.2142 34.6776 20.1482 42.3513 20.1482 50.012C20.1482 50.1705 20.1482 50.3157 20.1482 50.4612"
                                                                    fill=""
                                                                ></path>
                                                                <path
                                                                    d="M29.9422 50.448V49.497C29.9422 42.4179 30.0213 35.3385 29.9422 28.259C29.8629 22.5268 33.0698 20.057 37.5834 19.1456C39.8521 18.6892 42.2024 18.8628 44.3797 19.6476C48.243 21.1143 50.6295 25.0063 50.1867 29.1175C50.0944 30.1917 49.9134 31.2563 49.6456 32.3005C49.4212 30.9798 49.3288 29.6591 48.9724 28.3383C48.2014 25.4523 46.0698 23.1256 43.2638 22.1071C40.4577 21.0885 37.3314 21.5066 34.891 23.2269C32.5944 24.7881 31.2823 27.4392 31.4333 30.2138C31.4333 36.5008 31.4333 42.7877 31.4333 49.0745C31.4333 50.3953 31.4333 50.3953 29.9159 50.3953"
                                                                    fill=""
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                        <span>Checkout</span>
                                                    </div>
                                                </Link>
                                                <p className="text-danger view-cart-error-message"></p>
                                            </div>
                                            <div className="col-lg-12">
                                                <span className="divider-viewcart">Or</span>
                                            </div>
                                            <div className="col-lg-12">
                                                <button
                                                    data-testid="qa-cart-express-google-pay"
                                                    aria-label="googlepay"
                                                    type="button"
                                                    className="express-gpay-btn mb-2 btn btn-outline-primary"
                                                >
                                                    <svg
                                                        id="express-gpay-icon-mark"
                                                        width="59"
                                                        height="24"
                                                        viewBox="0 0 59 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g id="Logo">
                                                            <path
                                                                id="Vector"
                                                                d="M27.9233 11.7362V18.5176H25.772V1.77066H31.4777C32.1587 1.75643 32.8359 1.87722 33.47 2.12606C34.1041 2.37489 34.6827 2.74685 35.1723 3.22046C35.6669 3.66532 36.0605 4.21089 36.3267 4.8205C36.5929 5.43012 36.7255 6.08965 36.7157 6.75478C36.7298 7.42347 36.5992 8.08731 36.3329 8.70081C36.0665 9.31431 35.6706 9.86296 35.1723 10.3091C34.1746 11.2605 32.9431 11.7358 31.4777 11.7349H27.9233V11.7362ZM27.9233 3.83246V9.67845H31.5311C31.9266 9.69017 32.3202 9.61922 32.6868 9.47012C33.0533 9.32102 33.3847 9.09706 33.6597 8.81257C33.9333 8.54658 34.1508 8.22843 34.2993 7.87693C34.4478 7.52543 34.5243 7.14772 34.5243 6.76614C34.5243 6.38456 34.4478 6.00685 34.2993 5.65535C34.1508 5.30385 33.9333 4.9857 33.6597 4.71971C33.3881 4.42922 33.0579 4.19978 32.6909 4.04659C32.324 3.89339 31.9286 3.81995 31.5311 3.83112H27.9233V3.83246Z"
                                                                fill="white"
                                                            ></path>
                                                            <path
                                                                id="Vector_2"
                                                                d="M41.6727 6.68359C43.2628 6.68359 44.518 7.10851 45.4382 7.95835C46.3584 8.8082 46.8181 9.97339 46.8172 11.4539V18.5159H44.7594V16.9258H44.6659C43.7751 18.2353 42.5903 18.89 41.1115 18.89C39.8492 18.89 38.7932 18.5159 37.9433 17.7676C37.5355 17.4242 37.2094 16.994 36.9889 16.5086C36.7683 16.0232 36.6589 15.4946 36.6686 14.9615C36.6686 13.7758 37.1166 12.8329 38.0128 12.1327C38.909 11.4325 40.1053 11.0816 41.6019 11.0798C42.8793 11.0798 43.9314 11.3136 44.7581 11.7813V11.2896C44.7605 10.9261 44.682 10.5667 44.5283 10.2374C44.3746 9.90803 44.1496 9.61702 43.8695 9.38545C43.3006 8.87217 42.5592 8.59211 41.793 8.60108C40.5913 8.60108 39.6403 9.10796 38.9401 10.1217L37.0454 8.92846C38.0876 7.43188 39.6301 6.68359 41.6727 6.68359ZM38.8894 15.0083C38.8879 15.2821 38.9519 15.5523 39.076 15.7963C39.2002 16.0404 39.3808 16.2512 39.6029 16.4113C40.0787 16.7856 40.6693 16.9839 41.2745 16.9725C42.1824 16.971 43.0526 16.6097 43.6944 15.9677C44.4071 15.2969 44.7634 14.5099 44.7634 13.6066C44.0926 13.0721 43.1573 12.8049 41.9573 12.8049C41.0835 12.8049 40.3548 13.0155 39.7713 13.4369C39.182 13.8645 38.8894 14.3843 38.8894 15.0083Z"
                                                                fill="white"
                                                            ></path>
                                                            <path
                                                                id="Vector_3"
                                                                d="M58.6296 7.05859L51.4461 23.5677H49.2253L51.891 17.7912L47.1675 7.05859H49.5059L52.9199 15.2898H52.9667L56.2872 7.05859H58.6296Z"
                                                                fill="white"
                                                            ></path>
                                                            <path
                                                                id="Vector_4"
                                                                d="M19.2299 10.2726C19.2307 9.61703 19.1753 8.96255 19.0642 8.31641H9.99121V12.0218H15.1878C15.0815 12.6136 14.8564 13.1777 14.5262 13.6802C14.1959 14.1826 13.7674 14.613 13.2663 14.9454V17.3506H16.3677C18.1836 15.6763 19.2299 13.2003 19.2299 10.2726Z"
                                                                fill="#4285F4"
                                                            ></path>
                                                            <path
                                                                id="Vector_5"
                                                                d="M9.99097 19.674C12.5873 19.674 14.7733 18.8215 16.3674 17.3517L13.2661 14.9465C12.4029 15.5317 11.2911 15.8658 9.99097 15.8658C7.48153 15.8658 5.35159 14.1741 4.58994 11.8945H1.39502V14.3732C2.19578 15.9667 3.42365 17.3062 4.94156 18.2422C6.45946 19.1782 8.20766 19.674 9.99097 19.674Z"
                                                                fill="#34A853"
                                                            ></path>
                                                            <path
                                                                id="Vector_6"
                                                                d="M4.58997 11.8957C4.18732 10.7012 4.18732 9.40761 4.58997 8.21308V5.73438H1.39505C0.721429 7.07482 0.370605 8.55421 0.370605 10.0544C0.370605 11.5546 0.721429 13.034 1.39505 14.3744L4.58997 11.8957Z"
                                                                fill="#FBBC04"
                                                            ></path>
                                                            <path
                                                                id="Vector_7"
                                                                d="M9.99097 4.24247C11.363 4.22006 12.6887 4.73845 13.6816 5.6856L16.4276 2.93965C14.6864 1.30421 12.3796 0.406326 9.99097 0.434225C8.20766 0.434306 6.45946 0.930038 4.94156 1.86608C3.42365 2.80211 2.19578 4.14162 1.39502 5.73504L4.58994 8.21374C5.35159 5.93414 7.48153 4.24247 9.99097 4.24247Z"
                                                                fill="#EA4335"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="col-lg-12">
                                                <button
                                                    data-testid="qa-cart-express-paypal"
                                                    aria-label="PayPal"
                                                    type="button"
                                                    className="paypal-btn mb-2 btn btn-outline-primary"
                                                >
                                                    <svg width="83" height="21" viewBox="0 0 83 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M31.2429 4.33713H26.6407C26.3258 4.33713 26.0579 4.56479 26.0087 4.87421L24.1474 16.615C24.1104 16.8468 24.2908 17.0555 24.527 17.0555H26.724C27.039 17.0555 27.3068 16.828 27.356 16.518L27.858 13.3512C27.9064 13.0413 28.1748 12.8136 28.4892 12.8136H29.9461C32.9775 12.8136 34.7271 11.3541 35.1841 8.462C35.39 7.19656 35.1928 6.20247 34.5972 5.50618C33.9431 4.74163 32.783 4.33713 31.2429 4.33713ZM31.7736 8.62534C31.522 10.2683 30.2603 10.2683 29.0404 10.2683H28.3458L28.833 7.19994C28.8621 7.01447 29.0234 6.87795 29.2119 6.87795H29.5302C30.3613 6.87795 31.1452 6.87795 31.5503 7.34921C31.7919 7.63031 31.8658 8.04813 31.7736 8.62534Z"
                                                            fill="#28356A"
                                                        ></path>
                                                        <path
                                                            d="M44.8124 8.91187H42.6255C42.4392 8.91187 42.2781 9.0461 42.2495 9.22846L42.1526 9.83139L41.9998 9.6129C41.5264 8.93547 40.4705 8.70905 39.4169 8.70905C37.0001 8.70905 34.936 10.5134 34.5341 13.0445C34.3252 14.307 34.6222 15.5143 35.3489 16.3562C36.0153 17.1302 36.9688 17.4529 38.1033 17.4529C40.0506 17.4529 41.1302 16.2187 41.1302 16.2187L41.0328 16.8177C40.9961 17.0467 41.1751 17.2521 41.4082 17.2521H43.378C43.6913 17.2521 43.9557 17.0283 44.0051 16.7235L45.187 9.34499C45.2245 9.11783 45.046 8.91187 44.8124 8.91187ZM41.7639 13.1077C41.553 14.3392 40.5614 15.166 39.2966 15.166C38.6616 15.166 38.1542 14.9652 37.8281 14.5848C37.5049 14.207 37.3822 13.6692 37.4849 13.0701C37.6821 11.8491 38.6902 10.9952 39.9358 10.9952C40.5567 10.9952 41.0616 11.1988 41.3941 11.5823C41.7273 11.9701 41.8595 12.5112 41.7639 13.1077Z"
                                                            fill="#28356A"
                                                        ></path>
                                                        <path
                                                            d="M56.7204 8.70905H54.4908C54.2781 8.70905 54.0783 8.81419 53.9578 8.99012L50.8829 13.4958L49.5795 9.16587C49.4975 8.89498 49.2463 8.70905 48.9616 8.70905H46.7709C46.5045 8.70905 46.3197 8.96785 46.4043 9.21721L48.8601 16.3863L46.5514 19.6285C46.3698 19.884 46.5527 20.2351 46.8664 20.2351H49.0931C49.3045 20.2351 49.5022 20.1326 49.6221 19.9602L57.0373 9.31216C57.2149 9.05751 57.0325 8.70905 56.7204 8.70905Z"
                                                            fill="#28356A"
                                                        ></path>
                                                        <path
                                                            d="M63.4132 4.33713H58.8102C58.496 4.33713 58.2282 4.56479 58.179 4.87421L56.3176 16.615C56.2806 16.8468 56.461 17.0555 56.6959 17.0555H59.0579C59.2772 17.0555 59.4649 16.8963 59.4992 16.6793L60.0276 13.3512C60.076 13.0413 60.3446 12.8136 60.6588 12.8136H62.1152C65.1473 12.8136 66.8964 11.3541 67.3541 8.462C67.5607 7.19656 67.3622 6.20247 66.7665 5.50618C66.113 4.74163 64.9536 4.33713 63.4132 4.33713ZM63.9442 8.62534C63.6931 10.2683 62.4313 10.2683 61.2106 10.2683H60.5169L61.0047 7.19994C61.0336 7.01447 61.1938 6.87795 61.3829 6.87795H61.7012C62.5316 6.87795 63.3163 6.87795 63.7214 7.34921C63.963 7.63031 64.0363 8.04813 63.9442 8.62534Z"
                                                            fill="#298FC2"
                                                        ></path>
                                                        <path
                                                            d="M77.3772 8.91187H75.1915C75.0039 8.91187 74.8443 9.0461 74.8162 9.22846L74.7193 9.83139L74.5658 9.6129C74.0923 8.93547 73.0371 8.70905 71.9833 8.70905C69.5665 8.70905 67.5031 10.5134 67.1011 13.0445C66.8927 14.307 67.1884 15.5143 67.915 16.3562C68.583 17.1302 69.5351 17.4529 70.6698 17.4529C72.617 17.4529 73.6969 16.2187 73.6969 16.2187L73.5994 16.8177C73.5628 17.0467 73.7416 17.2521 73.9762 17.2521H75.9455C76.2573 17.2521 76.5231 17.0283 76.5719 16.7235L77.7545 9.34499C77.7906 9.11783 77.6116 8.91187 77.3772 8.91187ZM74.3288 13.1077C74.1191 14.3392 73.126 15.166 71.8611 15.166C71.2274 15.166 70.7186 14.9652 70.3925 14.5848C70.0695 14.207 69.9479 13.6692 70.0493 13.0701C70.2478 11.8491 71.2547 10.9952 72.5003 10.9952C73.1213 10.9952 73.6262 11.1988 73.9588 11.5823C74.2932 11.9701 74.4255 12.5112 74.3288 13.1077Z"
                                                            fill="#298FC2"
                                                        ></path>
                                                        <path
                                                            d="M80.0441 4.65985L78.1613 16.615C78.1245 16.8468 78.3041 17.0555 78.5382 17.0555H80.4311C80.7458 17.0555 81.0126 16.828 81.0609 16.5181L82.9176 4.77836C82.9546 4.54659 82.7748 4.33713 82.5407 4.33713H80.4212C80.234 4.33769 80.073 4.47439 80.0441 4.65985Z"
                                                            fill="#298FC2"
                                                        ></path>
                                                        <path
                                                            d="M4.90653 19.8376L5.26021 17.5848L4.47233 17.5664H0.710083L3.32471 0.941868C3.33286 0.891527 3.35919 0.844796 3.39765 0.811552C3.43629 0.778308 3.48555 0.760071 3.53708 0.760071H9.88081C11.987 0.760071 13.4404 1.19946 14.1991 2.06685C14.5548 2.47376 14.7814 2.89909 14.8911 3.36698C15.0061 3.85804 15.008 4.44466 14.8958 5.16026L14.8877 5.21231V5.67089L15.2434 5.87301C15.5429 6.03239 15.7811 6.21476 15.9637 6.42353C16.2679 6.77155 16.4647 7.21379 16.5479 7.73791C16.6339 8.27703 16.6055 8.91874 16.4647 9.64517C16.3024 10.4806 16.04 11.2084 15.6856 11.8038C15.3597 12.3524 14.9445 12.8075 14.4514 13.1601C13.9806 13.4952 13.4214 13.7496 12.7891 13.9124C12.1762 14.0723 11.4776 14.1531 10.7113 14.1531H10.2176C9.8647 14.1531 9.52182 14.2805 9.25263 14.5091C8.98268 14.7423 8.80423 15.0611 8.74948 15.4097L8.71216 15.6126L8.0872 19.5834L8.05897 19.7291C8.0514 19.7753 8.03851 19.7983 8.01957 19.8139C8.00271 19.8281 7.97846 19.8376 7.95478 19.8376H4.90653Z"
                                                            fill="#28356A"
                                                        ></path>
                                                        <path
                                                            d="M15.3362 5.13199C15.318 5.25208 15.2969 5.3748 15.2734 5.50091C14.4625 9.76221 11.6883 11.2343 8.1453 11.2343H6.3413C5.90798 11.2343 5.54277 11.5563 5.47538 11.9938L4.29016 19.6889C4.24627 19.9763 4.46257 20.235 4.7457 20.235H7.94535C8.32414 20.235 8.64602 19.9533 8.70569 19.5709L8.73709 19.4046L9.33953 15.4915L9.37827 15.2769C9.43721 14.8931 9.75982 14.6112 10.1386 14.6112H10.6171C13.7171 14.6112 16.1439 13.3231 16.8532 9.59514C17.1493 8.03788 16.996 6.73754 16.212 5.82304C15.9748 5.54733 15.6804 5.31842 15.3362 5.13199Z"
                                                            fill="#298FC2"
                                                        ></path>
                                                        <path
                                                            d="M14.8064 4.75635C14.6804 4.71965 14.5505 4.68649 14.4173 4.65649C14.2833 4.62724 14.1461 4.60135 14.0048 4.57862C13.5105 4.49888 12.9687 4.46106 12.3885 4.46106H7.49039C7.36965 4.46106 7.25507 4.48826 7.15262 4.53744C6.92662 4.64587 6.75885 4.85938 6.71817 5.12076L5.6761 11.7096L5.64624 11.9017C5.71473 11.468 6.08591 11.1488 6.52633 11.1488H8.35985C11.9608 11.1488 14.7804 9.68876 15.6045 5.46524C15.6292 5.34023 15.6499 5.21857 15.6684 5.09952C15.4599 4.98905 15.2341 4.89459 14.9909 4.81411C14.9308 4.79417 14.8689 4.77498 14.8064 4.75635Z"
                                                            fill="#22284F"
                                                        ></path>
                                                        <path
                                                            d="M6.71821 5.12076C6.75889 4.85937 6.92666 4.64587 7.15265 4.53818C7.25585 4.48881 7.36969 4.46161 7.49043 4.46161H12.3886C12.9688 4.46161 13.5105 4.49962 14.0049 4.57936C14.1461 4.6019 14.2833 4.62798 14.4173 4.65723C14.5505 4.68704 14.6804 4.72039 14.8064 4.7569C14.8689 4.77554 14.9309 4.79491 14.9915 4.8141C15.2347 4.89458 15.4607 4.98978 15.6691 5.09952C15.9143 3.53848 15.6671 2.47561 14.8217 1.51316C13.8895 0.453464 12.2074 0 10.0547 0H3.80529C3.36562 0 2.99052 0.319139 2.92259 0.7536L0.31965 17.2253C0.26833 17.5512 0.520077 17.8451 0.84927 17.8451H4.7074L6.71821 5.12076Z"
                                                            fill="#28356A"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="col-lg-12">
                                                <div
                                                    data-pp-message="true"
                                                    data-pp-placement="product"
                                                    data-pp-layout="text"
                                                    data-pp-text-color="black"
                                                    data-pp-logo-type="inline"
                                                    data-pp-amount="19"
                                                    className="paylater-wrapper"
                                                    id="cart-paylater"
                                                    data-testid="qa-pdp-paypal-message"
                                                    data-pp-id="1"
                                                >
                                                    <span id="zoid-paypal-message-uid_2591d28457_mtq6ndu6mti"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="klarna-message">
                                        <div className="klarna-message-wrapper " data-testid="qa-pdp-klarna-message">
                                            <klarna-placement
                                                id="klarna-cart-message"
                                                data-key="credit-promotion-badge"
                                                data-locale="en-US"
                                                data-purchase-amount="1900"
                                            >
                                                <span></span>
                                            </klarna-placement>
                                            <link rel="stylesheet" href="https://x.klarnacdn.net/onsite-messaging/fonts/v1.2/fonts.css" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <script async data-chunk="main" src="https://test.nuskin.com/storefront/client/main-bundle.41e496113e2df57cd33c.js"></script>
        </section>
    )
}
