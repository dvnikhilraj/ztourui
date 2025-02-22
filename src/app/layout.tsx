import React from "react";
import '../../public/assets/css/ZTO/Home/all.min.css';
import '../../public/assets/css/ZTO/Home/bootstrap.min.css';
import '../../public/assets/css/ZTO/Home/slick.css';
import '../../public/assets/css/ZTO/Home/slick-theme.css';
import '../../public/assets/css/ZTO/header.css';
import '../../public/assets/css/ZTO/footer.css';
import '../../public/assets/css/ZTO/Home/stylehome.css';
import '../../public/assets/css/ZTO/Home/custom.css';
import '../../public/assets/css/ZTO/Home/select2.min.css';
import '../../public/assets/css/ZTO/Home/responsive.css';
import '../../public/assets/css/ZTO/inline_style.css';
// import '../../public/assets/css/ZTO/Home/flag-icon.min.css';
import Head from "next/head";
// import Script from "next/script";
import { Top } from "./components/layout/top";
import { Footer } from "./components/layout/footer";



interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const mockCompanySettings = {
    companyId: "ZTO",
    companyName: "Z Tour",
    channelSetting: {
      tollFreeNo: "+40 123 456 789",
    },
    multiLingualLanguages: "en:English,ro:Romanian",
  };

  const mockLanguageResources = {
    GetaQuote: "Request a personalized offer",
    MyAccount: "My Account",
    SIGNIN: "Sign In",
    CreateanAccount: "Create Account",
  };
  const mockSelectedCurrency = {
    changeCurrency: "EUR",
  };
  // useEffect(() => {
  //   // Initialize scripts that need to run after component mounts
  //   const initScripts = () => {
  //     // Add any initialization scripts here
  //   };

  //   initScripts();
  // }, []);

  return (
    <>
      <html>
        <body>
          <Head>
            <base href="/" />
            <link rel="canonical" href="https://www.ztour-travel.ro/" />
            <link
              rel="shortcut icon"
              href="/images/favicon.ico"
              type="image/x-icon"
            />
            {/* <Script
              id="gtm-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5CJRFBG');
            `,
              }}
            /> */}
          </Head>

          <div id="page-wrapper">
            {/* Top Navigation */}
            <div id="toparea">
              <Top
                companySettings={mockCompanySettings}
                languageResources={mockLanguageResources}
                userDetails={null} // Replace with actual user details from auth state
                selectedCurrency={mockSelectedCurrency}
              />
            </div>

            {/* Main Content */}
            <div id="main">
            {children}
            </div>
            <main></main>

            <Footer/>
            {/* Add Footer component here */}
          </div>

          {/* Cookie Consent */}
          <div id="cookiePopup">
            <div className="constant clear">
              <b>Consimțământul pentru cookie-uri Z-Tour</b>
            </div>
            <p>
              Pentru a vă oferi o mai bună experiență de navigare, acest website
              foloseste cookie-uri...
              {/* Add rest of cookie consent text */}
            </p>
            <div className="accept">
              <button id="acceptCookie">Accept</button>
            </div>
          </div>

          {/* Scripts */}
          {/* <Script src="/js/jquery-1.11.1.min.js" strategy="beforeInteractive" />
          <Script src="/js/jquery.noconflict.js" />
          <Script src="/js/jquery-ui.1.10.4.min.js" />
          <Script src="/js/bootstrap.min.js" />
          <Script src="/js/slick.js" /> */}
        </body>
      </html>
    </>
  );
};

export default Layout;
