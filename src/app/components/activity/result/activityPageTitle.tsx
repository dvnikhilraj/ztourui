'use client';

import { ActivityApiSearchResponse } from "@/types/ApiModels/Activity/ActivityApiResponse";

interface ActivityPageTitleProps {
  activityResponse: ActivityApiSearchResponse | null;
}

export const ActivityPageTitle = ({ activityResponse }: ActivityPageTitleProps) => {
  const cityName = activityResponse?.SearchResponse?.Master?.CityName || "Goa";
  const currentYear = new Date().getFullYear();

  return (
    <div className="container__HTBo">
      <div 
        className="row__9U33" 
        style={{
          alignItems: 'normal',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <div 
          className="col__BXMO" 
          style={{
            width: '100%',
            flexBasis: 0,
            flexGrow: 1,
            flexShrink: 0,
            maxWidth: '100%',
            marginLeft: '0%',
            right: 'auto',
            left: 'auto'
          }}
        >
          <div 
            className="row__9U33 nogutter__LfUR" 
            style={{
              alignItems: 'normal',
              justifyContent: 'space-between',
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}
          >
            <div 
              className="col__BXMO nogutter__LfUR" 
              style={{
                width: '100%',
                flexBasis: 0,
                flexGrow: 1,
                flexShrink: 0,
                maxWidth: '100%',
                marginLeft: '0%',
                right: 'auto',
                left: 'auto'
              }}
            >
              <div className="titleRowContainer__LvE8">
                <h1 
                  className="title__mrvv title2__LFSd" 
                  data-automation="title-heading"
                >
                  All {cityName} Tours & Excursions in {currentYear}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};