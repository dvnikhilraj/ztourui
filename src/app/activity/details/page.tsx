'use client';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [activityDetails, setActivityDetails] = useState<ActivityDetails | null>(null);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const fetchActivityDetails = async () => {
      try {
        const response = await fetch('/api/activity/details');
        const data = await response.json();
        setActivityDetails(data);
        setShowContent(true);
      } catch (error) {
        console.error('Error fetching activity details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivityDetails();
  }, []);

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
            {/* content */}
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

                  {activityDetails.images.length > 0 && (
                    <ActivityGallery 
                      images={activityDetails.images}
                      noGallery={true}
                    />
                  )}

                  <ActivityRates 
                    tours={activityDetails.tours}
                    currency={activityDetails.currency}
                    onPolicyClick={() => {/* handle policy click */}}
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