// import banner from "../../assets/img/banner.jpg";
import { Link } from "react-router-dom";
import bgDoc from "../../assets/img/bg-document-01.png";
import documentBox from "../../assets/img/document-box.png";
import AnalogClock from "../../components/clock/analog.component";
import ShapeOne from "../../components/shapes/shape-one.component";
import "./home.style.scss";
const Home = () => {
  return (
    <>
      <ShapeOne />
      <section
        className="banner-top style-1"
        style={{
          padding: "231px 0 99px",
          // background: `url(${banner}) no-repeat`,
          position: "relative",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="banner-top__content">
                <div className="sale-top">
                  <a href="#!">Hello</a>
                  <p>Welcome</p>
                </div>
                <h2 className="title">
                  Utilities tools to make your day easier
                </h2>
                <p className="desc">
                  Calculator, and Converters
                  (length,temperature,area,volume,wight), and Currency
                  Converters (with crypto-currency converter)
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="banner-top__sale">
                <div className="sale-content">
                  <center>
                    <AnalogClock />
                  </center>
                  <br />
                  {/* <div className="token-bar">
                    <div className="top">
                      <h6>
                        Raised - <span>1,450 Tokens</span>
                      </h6>
                      <h6>
                        Target - <span>150,000 Tokens</span>
                      </h6>
                    </div>
                    <div className="main">
                      <div className="progress-token">
                        <p className="fs-14">60,490</p>
                      </div>
                    </div>

                    <div className="bottom">
                      <p className="fs-14">Soft cap</p>
                      <p className="fs-14">Crowdsale</p>
                      <p className="fs-14">Hard cap</p>
                    </div>
                  </div> */}

                  {/* <div className="sale-bottom">
                    <ul className="list-coin">
                      <li>
                        <a href="#!">
                          <span className="icon-bitcoin"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_2162_9675)">
                              <path
                                d="M5.40872 12L2.71735 14.695L0 12L2.71635 9.281L5.40872 12ZM11.9883 5.414L16.6238 10.054L19.3411 7.336L11.9883 0L4.63547 7.36L7.35282 10.078L11.9883 5.414ZM21.2602 9.281L18.5679 12L21.2842 14.719L23.9996 12L21.2602 9.281ZM11.9883 18.586L7.35282 13.922L4.63547 16.641L11.9883 24L19.3411 16.64L16.6238 13.922L11.9883 18.586ZM11.9883 14.696L14.7046 11.976L11.9883 9.282L9.27195 12L11.9883 14.695V14.696ZM40.5544 14.976V14.93C40.5544 13.172 39.6173 12.281 38.0958 11.695C39.0319 11.18 39.8281 10.335 39.8281 8.859V8.813C39.8281 6.75 38.1657 5.414 35.4963 5.414H29.3853V18.563H35.6372C38.6103 18.586 40.5544 17.367 40.5544 14.977V14.976ZM36.9479 9.352C36.9479 10.336 36.1517 10.734 34.864 10.734H32.1956V7.945H35.0518C36.2696 7.945 36.9479 8.437 36.9479 9.305V9.352ZM37.6742 14.602C37.6742 15.586 36.902 16.032 35.6362 16.032H32.1956V13.148H35.5433C37.0189 13.148 37.6742 13.688 37.6742 14.578V14.602ZM46.6185 18.586V5.414H43.7153V18.563H46.6185V18.586ZM62.1663 18.586V5.414H59.3091V13.524L53.1511 5.414H50.4817V18.563H53.3389V10.219L59.7077 18.586H62.1653H62.1663ZM78.1807 18.586L72.5392 5.344H69.8708L64.2273 18.586H67.2014L68.3952 15.633H73.9448L75.1386 18.586H78.1827H78.1807ZM72.9128 13.078H69.4242L71.1805 8.813L72.9128 13.078ZM91.9732 18.586V5.414H89.116V13.524L82.958 5.414H80.2886V18.563H83.1458V10.219L89.5146 18.586H91.9722H91.9732ZM106.888 16.453L105.038 14.602C104.007 15.539 103.094 16.148 101.573 16.148C99.325 16.148 97.7565 14.273 97.7565 12.023V11.953C97.7565 9.703 99.348 7.852 101.573 7.852C102.884 7.852 103.915 8.414 104.945 9.328L106.794 7.195C105.577 6 104.101 5.156 101.62 5.156C97.5927 5.156 94.7595 8.226 94.7595 11.953V12C94.7595 15.773 97.6387 18.773 101.503 18.773C104.031 18.797 105.53 17.906 106.888 16.453ZM119.228 18.586V16.008H112.086V13.242H118.29V10.664H112.086V7.992H119.134V5.414H109.229V18.563H119.228V18.586Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2162_9675">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <span className="icon-coinp"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <span className="icon-kyber-network"></span>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <section
        className="documents style-2"
        id="document"
        style={{ background: `url(${bgDoc}) no-repeat` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block-text center">
                <h3>Utilities</h3>
                <p className="mt-12">
                  Enjoy some of the utilities <br /> I provided.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-67">
            <div className="col-xl-4 col-md-6">
              <div className="document-box">
                <div className="card-title">
                  <img src={documentBox} alt="ICOLand" />
                  <a className="fs-16" href="#!" style={{ color: "#fff" }}>
                    CALCULATOR
                  </a>
                </div>
                <div className="content">
                  <a href="#!" className="title">
                    Basic Calculator
                  </a>
                  <Link to="/calculator" className="download">
                    <span className="icon-Group"></span>VIEW
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="document-box">
                <div className="card-title bg-2">
                  <img src={documentBox} alt="ICOLand" />
                  <a className="fs-16" href="#!">
                    CONVERTER
                  </a>
                </div>
                <div className="content">
                  <a href="#!" className="title">
                    Measurement Converter
                  </a>
                  <Link to="/converter" className="download">
                    <span className="icon-Group"></span>VIEW
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="document-box">
                <div className="card-title bg-3">
                  <img src={documentBox} alt="ICOLand" />
                  <a className="fs-16" href="#!">
                    CURRENCY CONVERTER
                  </a>
                </div>
                <div className="content">
                  <a href="#!" className="title">
                    Currency Converter
                  </a>

                  <Link to="/currency/converter" className="download">
                    <span className="icon-Group"></span>VIEW
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3 col-md-6">
              <div className="document-box">
                <div className="card-title bg-4">
                  <img src={documentBox} alt="ICOLand" />
                  <a className="fs-16" href="#!">
                    TERM OF COIN SALES
                  </a>
                </div>
                <div className="content">
                  <a href="#!" className="title">
                    Terms of Sale
                  </a>
                  <a href="#!" className="download">
                    <span className="icon-Group"></span>PDF
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
