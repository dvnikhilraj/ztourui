'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityApiSearchResponse } from '@/types/ApiModels/Activity/ActivityApiResponse';
import { ActivityNoResultForm } from './ActivityNoResultForm';

interface FilterProps {
  activities: ActivityApiSearchResponse | null;
  initialFilters: {
    city: string;
    country: string;
    searchDate: string | null;
    guest: string[];
    otherParam: string[];
    lang: string;
  };
  onFilterChange: (filters: any) => void;
}

export const ActivityFilter = ({ activities, onFilterChange, initialFilters }: FilterProps) => {
  const { t } = useTranslation();
  const [clearAll, setClearAll] = useState(false);
  const [activityName, setActivityName] = useState('');
  const [showModifyPanel, setShowModifyPanel] = useState(false);

  const handleClearAll = () => {
    setClearAll(false);
    setActivityName('');
    onFilterChange({
      activityName: '',
      
    });
  };

  return (
    <>
    
      <div className="panel style1" style={{ boxShadow: 'none' }}>
        <h4 className="panel-title panel-title-modify">
          <a
            href="#"
            className="mod-panel"
            style={{ color: 'rgb(255, 255, 255)' }}
            onClick={(e) => {
              e.preventDefault();
              setShowModifyPanel(!showModifyPanel);
            }}
          >
            <i className="soap-icon-search"></i>&nbsp; {t('Modify Search')}
          </a>
        </h4>
        {showModifyPanel && (
          <div
            className="modify-panel"
            style={{
              boxShadow: 'rgb(86, 86, 86) 5px 5px 5px',
              display: 'block',
            }}
          >
            <a
              href="#"
              className="custom-close"
              onClick={(e) => {
                e.preventDefault();
                setShowModifyPanel(false);
              }}
            >
              ×
            </a>
            <ActivityNoResultForm initialFilters={initialFilters} />
          </div>
        )}
      </div>

     
      <div className="panel style1 arrow-right">
        <h4 className="panel-title panel-title-modify filter-heading">
          <a className="collapsed cursor-default pull-left color-black">
            <i className="fas fa-filter"></i> {t('Filter')}
          </a>
          {(clearAll || activityName !== '') && (
            <a
              onClick={handleClearAll}
              className="collapsed cursor-pointer text-right font-size-13 font-normal color-black"
              style={{ paddingRight: '10px' }}
              href="#"
            >
              <i className="fas fa-sync-alt"></i>&nbsp; {t('Clear all')}
            </a>
          )}
        </h4>

        <div id="transfer-filter">
          <div className="panel-group margin-bottom-0">
           
            <div className="panel">
              <h4 className="panel-title">
                <a href="#price-filter" data-toggle="collapse">
                  {t('Price Range')}
                </a>
              </h4>
              <div id="price-filter" className="panel-collapse collapse in">
                <div className="panel-content">
                  
                </div>
              </div>
            </div>
            <div className="panel">
              <h4 className="panel-title">
                <a href="#name-filter" data-toggle="collapse">
                  {t('Activity Name')}
                </a>
              </h4>
              <div id="name-filter" className="panel-collapse collapse in">
                <div className="panel-content">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t('Search by Activity Name')}
                    value={activityName}
                    onChange={(e) => {
                      setActivityName(e.target.value);
                      onFilterChange({ activityName: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="panel">
              <h4 className="panel-title">
                <a href="#duration-filter" data-toggle="collapse">
                  {t('Duration')}
                </a>
              </h4>
              <div id="duration-filter" className="panel-collapse collapse in">
                <div className="panel-content">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};