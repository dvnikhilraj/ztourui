import React from 'react';
import Image from 'next/image';
import { SightSeeing } from '@/types/ApiModels/Activity/ActivityApiResponse';
import Link from 'next/link';

interface ActivityListItemProps {
  activity: SightSeeing;
}

export const ActivityListItem: React.FC<ActivityListItemProps> = ({ activity }) => {
  // Get first tour for price and other details
  const tour = activity.Tours?.Tour?.[0];
  
  return (
    <div className="eligibilityTrackingWrapper__dvvw">
      <div className="productCardWithDebug__rM29">
        <div data-automation="ttd-product-list-card" className="productCardWrapper__BdSC">
          <Link 
            href={`/activity/details?id=${activity.SightId}`}
            className="productCard__A2Ct clickable__DG3l highlighted___Jjl inspiration__n1kn"
          >
            <div className="imageContainer__Pp_q">
              <div className="imageContainerContent__cF2_">
                <div className="badgeContainer__OpbM">
                  <div className="badge__tlD1">
                    <div className="label__wEV2 light-primary__yuF_ boxShadow__lA23">
                      <strong className="text__Sc4J">Best Seller</strong>
                    </div>
                  </div>
                </div>
                
              </div>
              <img 
                className="image__p6aL" 
                sizes="(min-width:768px and max-width:1023px) 800px,(min-width:1024px) 800px,(max-width:767px) 600px" 
                width="360" 
                height="240" 
                alt={activity.Name} 
                src={activity.Image || "https://via.placeholder.com/800x600?text=No+Image"} 
                loading="lazy"
              />
            </div>
            <div className="textContainer__CKz3 highlighted___Jjl">
              <div className="reviewAndTags__BEug">
                <div className="rating__Cpey" data-automation="ttd-product-list-card-rating">
                  <div className="starRating__VZ9P" aria-label="Rated 4.9 out of 5">
                    <div className="stars__shHz singleStar__vxAl">
                      <svg viewBox="0 0 15 15" fill="none" className="starIcon__oVLE sm__Ap18 starIconGreen__WpVu">
                        <path clipRule="evenodd" d="M7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.433 1.395L3.008 9.33c.185.192.269.46.225.724l-.654 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.423 1.882a.75.75 0 00.363.096.809.809 0 00.771-.958l-.654-3.987a.841.841 0 01.225-.724l2.77-2.823a.828.828 0 00-.434-1.396l-3.827-.581a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"></path>
                      </svg>
                    </div>
                    <div className="rating__JCMy singleStarRating__TOKG sm__Ap18">4.9</div>
                  </div>
                </div>
              </div>
              <span className="title__h6oh" data-automation="ttd-product-list-card-title">
                <strong>{activity.Name}</strong>
              </span>
              <ul className="features__UJ2p">
                <li className="feature__IPLG" data-automation="ttd-product-list-card-free-cancellation">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="icon__UJ21 featureIcon__gKvZ">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.85 6.85a.5.5 0 00-.7-.7 1079.74 1079.74 0 00-2.9 2.9l-1.4-1.4a.5.5 0 10-.7.7l1.75 1.76a.5.5 0 00.7 0l.34-.34a2174.78 2174.78 0 012.91-2.92zm-3.6 2.9l.35.36-.35-.36z"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 14A6 6 0 108 2a6 6 0 000 12zm5-6A5 5 0 113 8a5 5 0 0110 0z"></path>
                  </svg>
                  Free Cancellation
                </li>
                <li className="feature__IPLG" data-automation="ttd-product-list-card-duration">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="icon__UJ21 featureIcon__gKvZ">
                    <path d="M8.5 5.5a.5.5 0 00-1 0V8c0 .14.05.26.15.36l2.01 2.02a.5.5 0 10.7-.7L8.5 7.8V5.5z"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 13.96a6 6 0 100-12 6 6 0 000 12zm5-6a5 5 0 11-10 0 5 5 0 0110 0z"></path>
                  </svg>
                  {activity.Duration}
                </li>
              </ul>
              <div className="price__oBv_" data-automation="ttd-product-list-card-price">
                <div className="">
                  <span className="fromLabel__aH43">from &nbsp;</span> 
                  <strong className="currentPrice__Llbs">
                    <span className="moneyView__wf0H defaultColor__k7nd">
                      {tour?.SuppCurrency} {tour?.GrossPrice}
                    </span>
                  </strong>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};