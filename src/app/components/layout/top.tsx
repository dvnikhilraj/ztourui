"use client";
import { useTranslation } from 'react-i18next';
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { paths } from "@/paths";
import { SignIn } from "./signIn";
import { Register } from "./Register";
import { useLanguage } from '@/hooks/useLanguage';

interface TopProps {
  companySettings: {
    companyId: string;
    companyName: string;
    channelSetting: {
      tollFreeNo: string;
    };
    multiLingualLanguages: string;
  };
  languageResources: Record<string, string>;
  userDetails: any;
  selectedCurrency: {
    changeCurrency: string;
  };
}

export function Top({
  companySettings,
  userDetails,
}: TopProps): React.JSX.Element {

  const { t } = useTranslation();
  const [isSignInOpen, setIsSignInOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentCurrency, setCurrentCurrency] = React.useState("EUR");
  const [isCurrencyHovered, setIsCurrencyHovered] = React.useState(false);
  const [isLanguageHovered, setIsLanguageHovered] = React.useState(false);
  const [isAccountHovered, setIsAccountHovered] = React.useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);

  const { currentLanguage, handleLanguageChange } = useLanguage() as { currentLanguage: { code: string, name: string } | undefined, handleLanguageChange: (code: string, name: string) => Promise<void> };

  const handleCurrencyChange = (fromCurrency: string, toCurrency: string) => {
    
    setCurrentCurrency(toCurrency);
  };

  const onLanguageChange = (code: string, name: string) => {
    console.log('code', code, 'name', name);
    handleLanguageChange(code, name);
  };


  return (
    <>
      <SignIn isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
      <Register isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />

      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <Link href={`/?lang=${paths.home}`} className="navbar-brand">
            <Image
              src={`/assets/images/ZTO/logo.png`}
              alt="logo"
              width={150}
              height={50}
              priority
            />
          </Link>

          <ul className="nav navbar-nav navbar-right top-menu">
            <li>
              <a href={`tel:${companySettings.channelSetting.tollFreeNo}`}>
                <span>
                  <svg
                    className="svg-inline--fa fa-phone-alt fa-w-16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="phone-alt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                    ></path>
                  </svg>
                </span>
                <span className="hidden-xs">
                  {companySettings.channelSetting.tollFreeNo}
                </span>
              </a>
            </li>

            <li>
              <Link href="/enquiry">
                <span>
                  <svg
                    className="svg-inline--fa fa-file-alt fa-w-12"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="file-alt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
                    ></path>
                  </svg>{" "}
                </span>
                <span className="hidden-xs">{t('navigation.getQuote')}</span>
              </Link>
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => setIsCurrencyHovered(true)}
              onMouseLeave={() => setIsCurrencyHovered(false)}
            >
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="Currency"
                aria-expanded="false"
              >
                <span>
                  <svg
                    className="svg-inline--fa fa-credit-card fa-w-18"
                    style={{ fontSize: "16px" }}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="credit-card"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                    />
                  </svg>
                </span>
                <span className="hidden-xs">{currentCurrency}</span>
                <svg
                  className="svg-inline--fa fa-chevron-down fa-w-14 font-12"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fa"
                  data-icon="chevron-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                  />
                </svg>
              </a>
              {isCurrencyHovered &&
              (<ul className="dropdown-menu main-navigation" role="menu">
                <li className="dropdown" id="currencycompile">
                  <ul
                    className="dropdown"
                    aria-labelledby="language-dropdown"
                    id="CurrencyList"
                  >
                    <li className={currentCurrency === "EUR" ? "active" : ""}>
                      <a
                        href="#"
                        title="EUR"
                        onClick={() => handleCurrencyChange("EUR", "EUR")}
                      >
                        EUR
                      </a>
                    </li>
                    <li className={currentCurrency === "RON" ? "active" : ""}>
                      <a
                        href="#"
                        title="RON"
                        onClick={() => handleCurrencyChange("EUR", "RON")}
                      >
                        RON
                      </a>
                    </li>
                    <li className={currentCurrency === "USD" ? "active" : ""}>
                      <a
                        href="#"
                        title="USD"
                        onClick={() => handleCurrencyChange("EUR", "USD")}
                      >
                        USD
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              )}
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => setIsLanguageHovered(true)}
              onMouseLeave={() => setIsLanguageHovered(false)}
            >
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <span className="hidden-sm hidden-md hidden-lg">
                  <svg
                    className="svg-inline--fa fa-globe fa-w-16"
                    style={{ fontSize: "16px" }}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="globe"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4 73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                    />
                  </svg>
                </span>
                <span id="cultureSelectedLink" className="hidden-xs">
                  {currentLanguage?.name}
                </span>
                <svg
                  className="svg-inline--fa fa-chevron-down fa-w-14 font-12"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fa"
                  data-icon="chevron-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                  />
                </svg>
              </a>
              <ul
                className="dropdown-menu main-navigation"
                role="menu"
                style={{ display: isLanguageHovered ? "block" : "none" }}
              >
                <li className="dropdown">
                  <ul className="dropdown" id="cultureDropDown">
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          onLanguageChange("en", "English");
                        }}
                        title="en"
                        className={currentLanguage?.code === 'en' ? 'active' : ''}
                      >
                        English
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          onLanguageChange("ro", "Romanian");
                        }}
                        title="ro"
                        className={currentLanguage?.code === 'ro' ? 'active' : ''}
                      >
                        Romanian
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {userDetails ? (
              <li className="dropdown" id="loginUser">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  <span>
                    <i className="far fa-user" style={{ fontSize: "16px" }}></i>
                  </span>
                  <span className="hidden-xs">
                    {t('navigation.myAccount')}
                  </span>
                  <i className="fa fa-chevron-down font-12"></i>
                </a>
                {/* Add logged in user menu options */}
              </li>
            ) : (
              <li
                className="dropdown"
                id="linkmyaccount"
                onMouseEnter={() => setIsAccountHovered(true)}
                onMouseLeave={() => setIsAccountHovered(false)}
              >
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  <span>
                    <i className="far fa-user" style={{ fontSize: "16px" }}></i>
                  </span>
                  <span className="hidden-xs">
                    {t('navigation.myAccount')}
                  </span>
                  <i className="fa fa-chevron-down font-12"></i>
                </a>
                <ul
                  className="dropdown-menu main-navigation"
                  role="menu"
                  style={{ display: isAccountHovered ? "block" : "none" }}
                >
                  <li>
                    <a
                      href="#ti-login"
                      className="soap-popupbox"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsSignInOpen(true);
                      }}
                    >
                      {t('navigation.signIn')}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        setIsRegisterOpen(true);
                      }}
                      href="#ti-signup"
                      className="soap-popupbox"
                    >
                      {t('navigation.createAccount')}
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="bs-example-navbar-collapse-1"
        >
          {/* Add mobile menu items here */}
        </div>
      </div>

      <header className="header">
        <div className="menu-container">
          <nav id="main-menu" role="navigation" className="container">
            <span
              className="Discover-text"
              style={{
                display: "inline-block",
                marginTop: "6px",
                color: "white",
                fontSize: "18px",
              }}
            >
              <Link
                href="/DiscoverDestination"
                target="_blank"
                style={{ color: "white" }}
              >
                {t('menu.discoverDestinations')}
              </Link>
            </span>

            <ul className="menu">
              <li className="menu-item-has-children visible">
                <Link href="/Package">
                  <span>{t('menu.dynamicPackages')}</span>
                </Link>
              </li>

              <li className="menu-item-has-children visible">
                <a href="https://charter.ztour-travel.ro" target="_blank">
                  {t('menu.charter')}
                </a>
              </li>

              <li className="menu-item-has-children visible">
                <Link href="/Flight">{t('menu.flights')}</Link>
              </li>

              <li className="menu-item-has-children visible">
                <Link href="/Hotel">{t('menu.hotels')}</Link>
              </li>

              <li className="menu-item-has-children visible">
                <a href="https://charter.ztour-travel.ro/tours" target="_blank">
                  {t('menu.tours')}
                </a>
              </li>

              <li className="menu-item-has-children visible">
                <Link href="/Transfer">{t('menu.transfers')}</Link>
              </li>

              <li className="menu-item-has-children visible">
                <Link href="/FlightHotel">{t('menu.flightsHotels')}</Link>
              </li>

              <li className="menu-item-has-children visible">
                <Link href="/Insurance">{t('menu.insurance')}</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div id="ti-signup" className="ti-signup-box ti-box">
          {/* Add registration form component */}
        </div>
        <div id="ti-login" className="ti-login-box ti-box">
          {/* Add login form component */}
        </div>
      </header>
    </>
  );
}
