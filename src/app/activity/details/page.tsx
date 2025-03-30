'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { ActivityHeader } from '@components/activity/details/activityHeader';
import { ActivityGallery } from '@components/activity/details/activityGallery';
import { ActivityRates } from '@components/activity/details/activityRates';
import { ActivityDescription } from '@components/activity/details/activityDescription';
import { ActivityPolicy } from '@components/activity/details/activityPolicy';
import { ActivityDetails } from '@/types/Activity/activityDetails';
import styles from './styles.module.css';

export default function ActivityDetailsPage() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [activityDetails, setActivityDetails] = useState<ActivityDetails | null>(null);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Fetch values from the URL
    const id = searchParams.get('id') || '';
    const name = searchParams.get('name') || '';
    const city = searchParams.get('city') || '';
    const duration = searchParams.get('duration') || '';
    const price = searchParams.get('price') || '';
    const currency = searchParams.get('currency') || '';
    const image = searchParams.get('image') || '';
    const fromDate = searchParams.get('fromDate') || '';
    console.log("fr"+fromDate);
 
    const details: ActivityDetails = {
      id,
      name,
      city,
      duration,
      price,
      currency,
      image,
      displayCountryCityName: `${city}`, 
      fromDate: fromDate, 
      minPrice: 0, 
      images: [image], 
      tours: [], 
      descriptions: [], 
    };
console.log('Activity Details:', details); 
    setActivityDetails(details);
    setShowContent(true);
    setLoading(false);
  }, [searchParams]);

  const handleGotoElement = (elementId: string) => {
    setActiveSection(elementId);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="content">
      <div className="container">
        <div id="main1" className="col-md-12 row roompagepadding">
          <div data-spy="affix" data-offset-top="197" className="top_modify_room affix-top" id="fixedTop">
           
          </div>
          {loading ? (
            <div className="pageloader" style={{ height: '250px', background: '#fff' }}>
              <div className="loader"></div>
              <div className="loader-section left"></div>
              <div className="loader-section right"></div>
            </div>
          ) : (
            <div className="tab-container style1" id="hotel-main-content">
              {activityDetails && (
                <>
                  <ActivityHeader
                    activity={activityDetails}
                    onGotoElement={handleGotoElement}
                    activeSection={activeSection}
                  />

                  {activityDetails.images && activityDetails.images.length > 0 && (
                    <ActivityGallery 
                      images={activityDetails.images}
                      noGallery={true}
                    />
                  )}

                  <ActivityRates 
                    tours={activityDetails.tours}
                    currency={activityDetails.currency}
                    onPolicyClick={() => {}}
                  />

                  {activityDetails.descriptions.map((desc, index) => (
                    <ActivityDescription
                      key={index}
                      type={desc.type}
                      text={desc.text}
                      id={`tour${desc.type}`}
                    />
                  ))}

                  <ActivityPolicy 
                    id="ti-policy"
                    className="ti-box modal-popup"
                    style={{ display: 'none' }}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}