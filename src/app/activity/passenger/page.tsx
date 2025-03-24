'use client';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityFareDetails } from '@components/activity/passenger/activityFareDetails';
import { ActivityPaxDetail } from '@components/activity/passenger/activityPaxDetail';
import { ActivityPolicyDetails } from '@components/activity/passenger/activityPolicyDetails';
import { PaymentOptions } from '@components/activity/passenger/paymentOptions';
import  './style.css';

import {CancellationPolicy, ActivityInfo, PassengerInfoProps } from '@/types/Activity/passengerInfoProps';
import { FareDetails, ActivityPolicyDetailsProps, PolicyDetail } from '@/types/Activity/Passenger/passengerDetail';



export default function PassengerInfoPage() {
  const { t } = useTranslation();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [travelContractAccepted, setTravelContractAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showTravelContractModal, setShowTravelContractModal] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [fareDetails, setFareDetails] = useState<FareDetails>({
    totalAmount: 0,
    currency: 'USD',
    adultCount: 0,
    childCount: 0,
    activityName: '',
    activityDate: ''
  });
  const [policyDetails, setPolicyDetails] = useState<PolicyDetail[]>([]);
  const [cancellationPolicy, setCancellationPolicy] = useState<CancellationPolicy>({
    Policy: []
  });
  const [grossCurrency, setGrossCurrency] = useState('USD');
  const [grossROE, setGrossROE] = useState(1);

  const handleScroll = () => {
    if (window.innerWidth >= 768 && sidebarRef.current) {
      const sidebar = sidebarRef.current.querySelector('.booking-details');
      const headerHeight = document.getElementById('toparea')?.clientHeight || 0;
      const windowScroll = window.scrollY;
      const footerPosition = document.querySelector('footer')?.offsetTop || 0;
      const sidebarHeight = sidebar?.clientHeight || 0;
      const scrollHeight = footerPosition - sidebarHeight;

      if (windowScroll >= headerHeight) {
        sidebar?.classList.add('sidebarFixed');
      } else {
        sidebar?.classList.remove('sidebarFixed');
      }

      if (windowScroll >= scrollHeight) {
        sidebar?.classList.add('relative');
        if (sidebar) {
          (sidebar as HTMLElement).style.top = `${scrollHeight - headerHeight}px`;
        }
      } else {
        sidebar?.classList.remove('relative');
        if (sidebar) {
          (sidebar as HTMLElement).style.top = '0px';
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Click handlers for specific buttons
    const moreInfoBtn = document.querySelector('.moreinfobtn');
    const invalidValueBtn = document.querySelector('.invalid .value .button');
    
    moreInfoBtn?.addEventListener('click', handleScroll);
    invalidValueBtn?.addEventListener('click', handleScroll);

    // Set footer margin
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.marginTop = '30px';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      moreInfoBtn?.removeEventListener('click', handleScroll);
      invalidValueBtn?.removeEventListener('click', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Fetch fare details from API or state management
    const fetchFareDetails = async () => {
      try {
        const response = await fetch('/api/activity/fare-details');
        const data = await response.json();
        setFareDetails(data);
      } catch (error) {
        console.error('Error fetching fare details:', error);
      }
    };

    fetchFareDetails();
  }, []);

  useEffect(() => {
    const fetchPolicyDetails = async () => {
      try {
        const response = await fetch('/api/activity/policy-details');
        const data = await response.json();
        setPolicyDetails(data.policy);
        setCancellationPolicy(data.cancellationPolicy);
        setGrossCurrency(data.grossCurrency);
        setGrossROE(data.grossROE);
      } catch (error) {
        console.error('Error fetching policy details:', error);
      }
    };

    fetchPolicyDetails();
  }, []);

  const handleValidateAndSubmit = () => {
    if (!termsAccepted || !travelContractAccepted) {
      // Show error message
      return;
    }
    // Handle form submission
  };

  return (
    <form action="/Home/Activity/SubmitPassengerInfo" method="post" name="passenger">
      <section className="gray-area">
        <div className="container">
          <div className="row" id="mainApp">
            <div className="sidebar col-sms-6 col-sm-4 col-md-4" ref={sidebarRef}>
              <ActivityFareDetails fareDetails={fareDetails} />
            </div>
            
            <div id="content" className="col-sms-6 col-sm-8 col-md-8 paxpage passenger-info-wrapper">
              <div id="main">
                <ActivityPaxDetail />
                <ActivityPolicyDetails 
                  policy={policyDetails}
                  cancellationPolicy={cancellationPolicy}
                  grossCurrency={grossCurrency}
                  grossROE={grossROE}
                />
                
                <h3 className="cart-service-heading-container">
                  {t('CancellationPolicy')}
                </h3>
                
                <div className="booking-section travelo-box">
                  <div id="termandbutton">
                    <div className="row pd-bottom10">
                      <div className="col-lg-12">
                        <div className="checkbox custom_checkbox cancellation_policy">
                          <input
                            type="checkbox"
                            id="TermConditions"
                            name="TermConditions"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            style={{ marginLeft: '0px', float: 'left', cursor: 'pointer' }}
                          />
                          <label className="text-justify" htmlFor="TermConditions">
                            <span style={{ cursor: 'default' }}>
                              {t('IhavereadandaccepttheCancellationPolicyandthe')}
                            </span>
                            <a href="#ti-termandcondition" 
                               className="soap-popupbox link_paragraph"
                               onClick={() => setShowTermsModal(true)}>
                              {t('BookingTermsandConditions')}
                            </a>
                          </label>
                          <div className="alertMsg" id="id_conditions"></div>
                        </div>
                      </div>
                    </div>

                    <div className="row pd-bottom10">
                      <div className="col-lg-12">
                        <div className="checkbox custom_checkbox cancellation_policy">
                          <input
                            type="checkbox"
                            id="TravelContract"
                            name="TravelContract"
                            checked={travelContractAccepted}
                            onChange={(e) => setTravelContractAccepted(e.target.checked)}
                            style={{ marginLeft: '0px', float: 'left', cursor: 'pointer' }}
                          />
                          <label className="text-justify">
                            <span style={{ cursor: 'default' }}>
                              {t('Ihavereadandagree')}
                            </span>
                            <a href="#TravelContractPopup" 
                               className="soap-popupbox link_paragraph"
                               onClick={() => setShowTravelContractModal(true)}>
                              {t('TravelContract')}
                            </a>
                          </label>
                          <div className="alertMsg" id="TravelContract_Condition"></div>
                        </div>
                      </div>
                    </div>

                    <PaymentOptions isRefundable={true} />

                    <div className="row pd-bottom10 form-group">
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 pull-right padding_con_0 details">
                        <button
                          id="btnPaxSubmit"
                          type="button"
                          className="full-width btn btn-default search-btn border-radius-20"
                          onClick={handleValidateAndSubmit}
                        >
                          {t('PayAndBook')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}