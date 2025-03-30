'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityApiSearchResponse } from '@/types/ApiModels/Activity/ActivityApiResponse';
interface FilterProps {
  activities: ActivityApiSearchResponse | null;
  onFilterChange: (filters: any) => void;
}

export const ActivityFilter = ({ activities, onFilterChange }: FilterProps) => {
  const { t } = useTranslation();
  const [clearAll, setClearAll] = useState(false);
  const [activityName, setActivityName] = useState('');

  const handleClearAll = () => {
    setClearAll(false);
    setActivityName('');
    onFilterChange({
      activityName: '',
      // Reset other filters
    });
  };

  return (
    <div className="tab-container style1" id="hotel-main-content">
      <div className="panel style1 arrow-right">
        <h4 className="panel-title panel-title-modify filter-heading">
          <a className="collapsed cursor-default pull-left color-black">
            <i className="fas fa-filter"></i> {t('Filter')}
          </a>
          {(clearAll || activityName !== '') && (
            <a onClick={handleClearAll} 
               className="collapsed cursor-pointer text-right font-size-13 font-normal color-black"
               style={{ paddingRight: '10px' }} 
               href="javascript:void(0)">
              <i className="fas fa-sync-alt"></i>&nbsp; {t('Clearall')}
            </a>
          )}
        </h4>
        
        <div id="transfer-filter">
          <div className="panel-group margin-bottom-0">
            {/* Price Range Filter */}
            <div className="panel">
              <h4 className="panel-title">
                <a href="#price-filter" data-toggle="collapse">
                  {t('PriceRange')}
                </a>
              </h4>
              <div id="price-filter" className="panel-collapse collapse in">
                <div className="panel-content">
                  {/* Add price range slider component here */}
                </div>
              </div>
            </div>

            {/* Activity Name Filter */}
            <div className="panel">
              <h4 className="panel-title">
                <a href="#name-filter" data-toggle="collapse">
                  {t('ActivityName')}
                </a>
              </h4>
              <div id="name-filter" className="panel-collapse collapse in">
                <div className="panel-content">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t('SearchByActivityName')}
                    value={activityName}
                    onChange={(e) => {
                      setActivityName(e.target.value);
                      onFilterChange({ activityName: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Duration Filter */}
            <div className="panel">
              <h4 className="panel-title">
                <a href="#duration-filter" data-toggle="collapse">
                  {t('Duration')}
                </a>
              </h4>
              <div id="duration-filter" className="panel-collapse collapse in">
                <div className="panel-content">
                  {/* Add duration checkboxes here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};