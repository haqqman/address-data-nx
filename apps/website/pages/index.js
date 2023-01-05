import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from './index.module.scss';

export function Index() {
  return (
    <>
      <Head>
        <title>Home — Address Data</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* SEO Meta description */}
        <meta
          name="description"
          content="Hyper-accurate Nigeria Address Validation Tool"
        />
        <meta name="author" content="Haqqman.Agency, agency@haqqman.com" />
        <meta name="designer" content="Abdulhaqq Sule" />
        {/* Meta Tags for Facebook, Twitter and LinkedIn */}
        <meta property="og:site_name" content="" /> {/* website name */}
        <meta property="og:site" content="" /> {/* website link */}
        <meta property="og:title" content="" />{' '}
        {/* title shown in the actual shared post */}
        <meta property="og:description" content="" />{' '}
        {/* description shown in the actual shared post */}
        <meta property="og:image" content="" />{' '}
        {/* image link, make sure it's jpg */}
        <meta property="og:url" content="" />{' '}
        {/* where do you want your post to link to */}
        <meta property="og:type" content="article" />
        {/*favicon icon*/}
        {/* <link
          rel="icon"
          href="assets/images/favicon.png"
          type="image/png"
          sizes="16x16"
        /> */}
      </Head>

      <body>
        <div className="main">
          {/* Start Hero Section */}
          <section
            className="hero-equal-height ptb-100 gradient-overlay"
            style={{
              background:
                'url("assets/images/hero-cover.jpg")no-repeat top center / cover',
            }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-9 col-lg-8">
                  <div className="hero-content-left position-relative z-index text-center text-white">
                    <h1 className="text-white">Address Data</h1>
                    <p className="lead">
                      Nigeria Open Source Address Validation
                    </p>
                    <div className="creator-form-wrapper my-4 m-auto">
                      <form action="#" className="creator-form mb-4">
                        <div className="input-group">
                          <input
                            type="search"
                            className="form-control"
                            id="search-id"
                            placeholder="Enter Address Data Number"
                            required=""
                          />
                          <div className="input-group-append">
                            <button
                              className="btn solid-btn creator-btn btn-hover"
                              type="submit"
                            >
                              Check{' '}
                              <span className="ti-arrow-right align-items-center" />
                            </button>
                          </div>
                        </div>
                      </form>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <span className="ti-check mr-2 rounded-circle gray-light-bg color-primary shadow-sm p-1" />{' '}
                          Address validation API
                        </li>
                        <li className="list-inline-item">
                          <span className="ti-check mr-2 rounded-circle gray-light-bg color-primary shadow-sm p-1" />{' '}
                          100% up-time
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shape-bottom">
              <Image
                src="assets/images/curve-shape-top.svg"
                alt="shape"
                className="bottom-shape img-fluid"
              />
            </div>
          </section>
          {/* End Hero Section*/}
          {/*promo section new start*/}
          <section className="promo-new ptb-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-9 col-lg-8">
                  <div className="section-heading text-center mb-2">
                    <h2>Hyper-accurate Address Validation</h2>
                    <p className="lead">
                      Reach the right persons and businesses at the right
                      address. Integrate Address Data into your platform and
                      save plenty of time while focusing on core development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-lg-4">
                  <div className="new-single-promo rounded p-5 border-color-3 mt-4">
                    <div className="promo-img-wrap mb-4">
                      <span className="ti-smallcap icon-lg color-7" />
                    </div>
                    <div className="promo-content-wrap">
                      <h5>Standard Address Data</h5>
                      <p>
                        Maintain standard address structure and spelling in your
                        database with our reference data.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="new-single-promo rounded p-5 border-color-4 mt-4">
                    <div className="promo-img-wrap mb-4">
                      <span className="ti-id-badge icon-lg color-7" />
                    </div>
                    <div className="promo-content-wrap">
                      <h5>Address Data Number</h5>
                      <p>
                        Capture verified user addresses with a unique address
                        data number and save time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="new-single-promo rounded p-5 border-color-3 mt-4">
                    <div className="promo-img-wrap mb-4">
                      <span className="ti-wand icon-lg color-7" />
                    </div>
                    <div className="promo-content-wrap">
                      <h5>Address Autocomplete</h5>
                      <p>
                        Provide users a pain-free way to precisely submit their
                        address information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*promo section new end*/}
          {/*feature section start*/}
          <section
            id="features"
            className="feature-section ptb-100 gray-light-bg"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-9 col-lg-8">
                  <div className="section-heading text-center mb-5">
                    <h2>Ridiculously Awesome</h2>
                    <p className="text-muted para-desc mb-0 mx-auto">
                      Prevent misspelled, invalid, incomplete, or even fake
                      addresses from reaching your database.
                    </p>
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="features mb-sm-0 mb-md-5 mb-lg-5">
                        <span className="ti-time icon-sm p-3 color-2 color-5-bg mr-4 mt-1 rounded-circle float-left" />
                        <div className="d-block overflow-hidden">
                          <h5 className="mb-2">Get rolling in minutes</h5>
                          <p>
                            Try out the full demo before signing up. Our service
                            averages sub-30 millisecond response time.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="features mb-sm-0 mb-md-5 mb-lg-5">
                        <span className="ti-stats-up icon-sm p-3 color-2 color-5-bg mr-4 mt-1 rounded-circle float-left" />
                        <div className="d-block overflow-hidden">
                          <h5 className="mb-2">99.99% Up-time</h5>
                          <p>
                            We guarantee our performance. Intelligent routing,
                            address data optimization and cache.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="features mb-sm-0 mb-md-5 mb-lg-5">
                        <span className="ti-flag-alt icon-sm p-3 color-2 color-5-bg mr-4 mt-1 rounded-circle float-left" />
                        <div className="d-block overflow-hidden">
                          <h5 className="mb-2">Every address in Nigeria</h5>
                          <p>
                            From Abuja to Lagos and everywhere in between.
                            Improve address submission with our validation APIs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="features mb-sm-0 mb-md-5 mb-lg-5">
                        <span className="ti-agenda icon-sm p-3 color-2 color-5-bg mr-4 mt-1 rounded-circle float-left" />
                        <div className="d-block overflow-hidden">
                          <h5 className="mb-2">Simple Documentation</h5>
                          <p>
                            Comprehensive and easy-to-digest documentation.
                            Quick forms configuration. We&apos;ve got you
                            covered.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="features mb-sm-0 mb-md-5 mb-lg-5">
                        <span className="ti-lock icon-sm p-3 color-2 color-5-bg mr-4 mt-1 rounded-circle float-left" />
                        <div className="d-block overflow-hidden">
                          <h5 className="mb-2">Data Encryption</h5>
                          <p>
                            Guaranteed data security, 24 hour monitoring,
                            encryption, and hashed. Firewall and DDoS
                            protection.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="features mb-sm-0 mb-md-5 mb-lg-5">
                        <span className="ti-credit-card icon-sm p-3 color-2 color-5-bg mr-4 mt-1 rounded-circle float-left" />
                        <div className="d-block overflow-hidden">
                          <h5 className="mb-2">Transparent Donation</h5>
                          <p>
                            Powered by donations and contributors. No setup
                            fees, commitments, or gimmicks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <Image
                    src="assets/images/image-10.png"
                    className="img-fluid mx-auto d-lg-block d-none"
                    alt="app screen"
                  />
                </div>
              </div>
            </div>
          </section>
          {/*feature section end*/}
          {/*stories section start*/}
          <section id="reviews" className="testimonial-section ptb-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-9 col-lg-8">
                  <div className="section-heading mb-5 text-center">
                    <h2>Don&apos;t take our word for it</h2>
                    <p className="lead">
                      From standard websites down to eCommerce, we serve them
                      all.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="owl-carousel owl-theme client-testimonial">
                    <div className="item">
                      <div className="testimonial-single shadow-sm gray-light-bg rounded p-4">
                        <blockquote>
                          Life is a breeze with Viral. Unlike Wordpress, using
                          Viral has been seamless, fully hosted with no loss of
                          performance.
                        </blockquote>
                        <div className="client-ratting mt-2">
                          <h6 className="font-weight-bold">
                            5,000+{' '}
                            <small className="font-weight-lighter">
                              Audience
                            </small>
                          </h6>
                        </div>
                      </div>
                      <div className="client-info-wrap d-flex align-items-center mt-5">
                        <div className="client-img mr-3">
                          <Image
                            src="assets/images/pamela.png"
                            alt="client"
                            width={60}
                            className="img-fluid rounded-circle shadow-sm"
                          />
                        </div>
                        <div className="client-info">
                          <Link
                            to="https://viral.blog/monseeka"
                            className="mb-0"
                          >
                            @monseeka
                          </Link>
                          <h5 className="mb-0">Pamela Leesi-vigbor</h5>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-single shadow-sm gray-light-bg rounded p-4">
                        <blockquote>
                          Ever since I switched over to Viral, my experience has
                          gone through the roof. Viral is just an amazing
                          experience. It just works.
                        </blockquote>
                        <div className="client-ratting mt-2">
                          <h6 className="font-weight-bold">
                            5,000+{' '}
                            <small className="font-weight-lighter">
                              Audience
                            </small>
                          </h6>
                        </div>
                      </div>
                      <div className="client-info-wrap d-flex align-items-center mt-5">
                        <div className="client-img mr-3">
                          <Image
                            src="assets/images/richmond.png"
                            alt="client"
                            width={60}
                            className="img-fluid rounded-circle shadow-sm"
                          />
                        </div>
                        <div className="client-info">
                          <Link
                            to="https://viral.blog/epicrich"
                            className="mb-0"
                          >
                            @epicrich
                          </Link>
                          <h5 className="mb-0">Richmond Okezie</h5>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-single shadow-sm gray-light-bg rounded p-4">
                        <blockquote>
                          Unlike many other blogging platforms, Viral supports
                          all features of running a successful online
                          publication, from technical SEO to a surprisingly
                          clean editing interface.hhhGhost has been a truly
                          game-changing product for me.
                        </blockquote>
                        <div className="client-ratting mt-2">
                          <h6 className="font-weight-bold">
                            5,000+{' '}
                            <small className="font-weight-lighter">
                              Audience
                            </small>
                          </h6>
                        </div>
                      </div>
                      <div className="client-info-wrap d-flex align-items-center mt-5">
                        <div className="client-img mr-3">
                          <Image
                            src="assets/images/nenye.png"
                            alt="client"
                            width={60}
                            className="img-fluid rounded-circle shadow-sm"
                          />
                        </div>
                        <div className="client-info">
                          <Link
                            to="https://viral.blog/nenyeuwa"
                            className="mb-0"
                          >
                            @nenyeuwa
                          </Link>
                          <h5 className="mb-0">Chinenye Okechukwu</h5>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-single shadow-sm gray-light-bg rounded p-4">
                        <blockquote>
                          I&apos;ve have a better insight on my blog views and
                          visits. I have integrated Google Analytics.
                          Performance is really great.
                        </blockquote>
                        <div className="client-ratting mt-2">
                          <h6 className="font-weight-bold">
                            5,000+{' '}
                            <small className="font-weight-lighter">
                              Audience
                            </small>
                          </h6>
                        </div>
                      </div>
                      <div className="client-info-wrap d-flex align-items-center mt-5">
                        <div className="client-img mr-3">
                          <Image
                            src="assets/images/omawumi.jpg"
                            alt="client"
                            width={60}
                            className="img-fluid rounded-circle shadow-sm"
                          />
                        </div>
                        <div className="client-info">
                          <Link
                            to="https://viral.blog/lebelleami"
                            className="mb-0"
                          >
                            @lebelleami
                          </Link>
                          <h5 className="mb-0">Omawumi Eyekpimi</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*stories section end*/}
          {/*client section start*/}
          <section className="client-section ptb-50">
            <div className="container">
              {/*clients logo start*/}
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="section-heading text-center mb-5">
                    <h2>Trusted by Great Brands</h2>
                    <p className="lead">
                      Spotlight of brands leveraging on Address Data validation
                      API.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="overlay-opacity-gradient" />
                  <div className="owl-carousel owl-theme clients-carousel dot-indicator">
                    <div className="item single-client">
                      <Image
                        src="assets/images/clients-logo-01.png"
                        alt="client logo"
                        className="img-fluid client-img"
                      />
                    </div>
                    <div className="item single-client">
                      <Image
                        src="assets/images/clients-logo-02.png"
                        alt="client logo"
                        className="img-fluid client-img"
                      />
                    </div>
                    <div className="item single-client">
                      <Image
                        src="assets/images/clients-logo-03.png"
                        alt="client logo"
                        className="img-fluid client-img"
                      />
                    </div>
                    <div className="item single-client">
                      <Image
                        src="assets/images/clients-logo-04.png"
                        alt="client logo"
                        className="img-fluid client-img"
                      />
                    </div>
                    <div className="item single-client">
                      <Image
                        src="assets/images/clients-logo-05.png"
                        alt="client logo"
                        className="img-fluid client-img"
                      />
                    </div>
                    <div className="item single-client">
                      <Image
                        src="assets/images/clients-logo-06.png"
                        alt="client logo"
                        className="img-fluid client-img"
                      />
                    </div>
                    <div className="item single-client">
                      <Image
                        src="assets/images/clients-logo-07.png"
                        alt="client logo"
                        className="img-fluid client-img"
                      />
                    </div>
                    <div className="item single-client">
                      <Image
                        src="assets/images/clients-logo-08.png"
                        alt="client logo"
                        className="img-fluid client-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*clients logo end*/}
            </div>
          </section>
          {/*client section start*/}
          {/*faq section start*/}
          <div id="faq" className="gray-light-bg pt-100">
            <div className="container">
              <div className="row justify-content-around align-items-end">
                <div className="col-md-6 col-lg-6">
                  <div className="faq-content-wrap pb-100">
                    <div className="section-heading mb-5">
                      <h2>Frequently Asked Queries</h2>
                      <p>
                        Viral blogs published should encourage contents that
                        educates, inspires, and moves understanding forward. We
                        maintain best practices to ensure a seamless experience.
                        Still have questions?{' '}
                        <Link to="#contact" className="page-scroll">
                          Contact us
                        </Link>
                      </p>
                    </div>
                    <div id="accordion" className="accordion">
                      <div className="card mb-0">
                        <Link
                          className="card-header collapsed px-4"
                          data-toggle="collapse"
                          to="#collapseOne"
                        >
                          <h6 className="mb-0 d-inline-block">
                            Do I need a subcription?
                          </h6>
                        </Link>
                        <div
                          id="collapseOne"
                          className="collapse"
                          data-parent="#accordion"
                          style={{}}
                        >
                          <div className="card-body">
                            <p className="px-4">
                              No, you don’t have to maintain a subscription to
                              publish a Viral blog. You can however subscribe to
                              enjoy extended features.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-0">
                        <Link
                          className="card-header collapsed px-4"
                          data-toggle="collapse"
                          to="#collapseTwo"
                        >
                          <h6 className="mb-0 d-inline-block">
                            Who owns my data?
                          </h6>
                        </Link>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          data-parent="#accordion"
                          style={{}}
                        >
                          <div className="card-body">
                            <p className="px-4">
                              We know it is pretty weird that your personal info
                              is sitting in the Viral database. While your datas
                              and contents are secured with a high level of
                              encryption, you own 100% of you contents.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-0">
                        <Link
                          className="card-header collapsed px-4"
                          data-toggle="collapse"
                          to="#collapseThree"
                        >
                          <h6 className="mb-0 d-inline-block">
                            Can I customize my social data?
                          </h6>
                        </Link>
                        <div
                          id="collapseThree"
                          className="collapse"
                          data-parent="#accordion"
                          style={{}}
                        >
                          <div className="card-body">
                            <p className="px-4">
                              Yes! You can fully customize and optimize your
                              meta data for Facebook and Twitter sharing cards,
                              as well as tags and topics to group your posts by.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-0">
                        <Link
                          className="card-header collapsed px-4"
                          data-toggle="collapse"
                          to="#collapseFour"
                        >
                          <h6 className="mb-0 d-inline-block">
                            What&apos;s next for Viral?
                          </h6>
                        </Link>
                        <div
                          id="collapseFour"
                          className="collapse"
                          data-parent="#accordion"
                          style={{}}
                        >
                          <div className="card-body">
                            <p className="px-4">
                              We are constantly improving the user exerience. It
                              would be a great experience for you to utilize the
                              Viral blog application and give feedbacks for us
                              to ensure a more strageic road map for all the
                              features you anticipate.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5">
                  <div className="d-flex align-items-end">
                    <Image
                      className="img-fluid"
                      src="assets/images/viral-faq.svg"
                      alt="Viral FAQ"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*faq section end*/}
          {/*download section start*/}
          <section
            className="gradient-overlay ptb-100"
            style={{
              background:
                'url("assets/images/hero-bg-3.jpg")no-repeat center center / cover fixed',
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-9 col-lg-8">
                  <div className="section-heading text-center">
                    <h2 className="text-white">Get the Address Data</h2>
                    <div className="action-btns download-btn mt-4">
                      <Link to="#" className="btn solid-white-btn page-scroll">
                        <span className="ti-apple mr-2" /> App Store
                      </Link>
                      <Link
                        to="#"
                        className="btn outline-white-btn mr-3 page-scroll"
                      >
                        <span className="ti-android mr-2" /> Play Store
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*download section end*/}
        </div>
        {/*body content wrap end*/}
      </body>
    </>
  )
}
export default Index
