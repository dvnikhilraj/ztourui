"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@public/assets/css/ZTO/footer.css';

const ContactInfo = () => (
  <div className="contact-box">
    <ul>
      <li>
        <span className="con-icon">
          <i className="fas fa-phone-alt" />
        </span>
        <span>&nbsp;+40 364 643000</span>
      </li>
      <li>
        <span className="con-icon">
          <i className="fa fa-envelope" />
        </span>
        <a href="mailto:office@ztour-travel.ro" className="contact-email">
          office@ztour-travel.ro
        </a>
      </li>
    </ul>
  </div>
);

const SocialMedia = () => (
  <div className="social_info m-t-20">
    <ul className="social-icons clearfix">
      <li className="facebook">
        <a title="facebook" href="https://www.facebook.com/ztourtravel/">
          <i className="fab fa-facebook-f" />
        </a>
      </li>
      <li className="instagram">
        <a title="instagram" href="https://www.instagram.com/ztour.travel">
          <i className="fab fa-instagram" />
        </a>
      </li>
      <li className="youtube">
        <a title="" href="https://www.youtube.com/channel/UCz3SHShurGawyZa5ofCicXw">
          <i className="fab fa-youtube" />
        </a>
      </li>
      <li className="twitter">
        <a title="" href="https://www.tiktok.com/@ztourtravel?lang=en">
          <i className="tiktok" style={{ display: 'flex', padding: '7px' }}>
            <img style={{ width: '100%' }} src="/assets/images/ZTO/icon/tik-tok.png" alt="TikTok" />
          </i>
        </a>
      </li>
      <li className="blog">
        <a title="" href="https://blog.ztour-travel.ro/">
          <i className="fa fa-rss" />
        </a>
      </li>
    </ul>
  </div>
);

const Newsletter = () => {
  const handleSubmit = () => {
  
  };

  return (
    <div className="footer-box">
      <div className="contact-box">
        <form className="explosive-form">
          <div className="row">
            <div className="col-md-12">
              <h4>Subscribe to the <strong className="ProximaNova-Extrabld">Newsletter</strong></h4>
              <p className="font-12 italic">For a FREE holiday guide with the most important tourist destinations</p>
            </div>
            <div className="col-sm-8 col-xs-8 col-md-7 col-lg-9">
              <div className="form-group">
                <input 
                  className="form-control bg-higlight-white" 
                  id="NewsemailId" 
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />
                <span id="lblNewsemailId" className="alertMsg"></span>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 col-md-5 col-lg-3">
              <div className="form-group">
                <button 
                  className="exlore_now btn-default text-uppercase ProximaNova-Extrabld font-12" 
                  type="button"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const FooterLinks = () => (
  <div className="footer-bottom-box font-14">
    <ul>
      <li><Link href="/AboutUs?lang=en">About Us</Link></li>
      <li><Link href="/General/ContactUs?lang=en">Contact Us</Link></li>
      <li><Link href="/PrivacyAndPolicy?lang=en">Privacy Policy</Link></li>
      <li><Link href="/TermAndConditions?lang=en">Terms of Services</Link></li>
      <li><a href="https://www.mae.ro/" target="_blank" rel="noopener noreferrer">Travel Guidelines</a></li>
      <li><Link href="/CookiePolicy?lang=en">Cookie Policy</Link></li>
      <li><Link href="/News?lang=en">News</Link></li>
      <li><Link href="/SpecialEvents?lang=en">Special Events</Link></li>
      <li><Link href="/CompanyInfo?lang=en">COMPANY INFO</Link></li>
    </ul>
  </div>
);

export function Footer(): React.JSX.Element {
  return (
    <footer className="m-t-30">
      <div className="top-footer p-t-25">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-3">
              <div className="footer-box">
                <ContactInfo />
                <SocialMedia />
              </div>
            </div>
            <div className="col-md-4 col-sm-4" />
            <div className="col-sm-4 col-md-5">
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <FooterLinks />
            </div>
            <div className="col-sm-4">
              <div className="footer-bottom-box">
                <p className="text-right font-14">
                  © {new Date().getFullYear()} Z Tour All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="back-to-top" id="gototopfrombottom">
          <a 
          id='back-to-top'
            href="javascript:void(0)" 
            className="animated" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg className="svg-inline--fa fa-angle-up fa-w-10" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="angle-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
          </a>
        </div>
        
        <div className="elfsight-app-748031f2-48d5-419e-a687-c99396f3c047" data-elfsight-app-lazy="" />
      </div>
    </footer>
  );
}