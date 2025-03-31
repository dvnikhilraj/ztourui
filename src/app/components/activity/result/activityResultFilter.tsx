'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityApiSearchResponse } from '@/types/ApiModels/Activity/ActivityApiResponse';
import { ActivityNoResultForm } from '@components/activity/ActivityNoResultForm';

interface FilterProps {
  activities: ActivityApiSearchResponse | null;
  initialFilters: {
    city: string;
    country: string;
    searchDate : string | null;
    guest: string[];
    otherParam: string[];
    lang: string;
  };
  onFilterChange: (filters: any) => void;
}

export const ActivityResultFilter = ({ activities, onFilterChange, initialFilters }: FilterProps) => {
  const { t } = useTranslation();
  const [clearAll, setClearAll] = useState(false);
  const [activityName, setActivityName] = useState('');
  const [showModifyPanel, setShowModifyPanel] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Format the date for display
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Get the date from the search parameters or from activities response
  const displayDate = initialFilters.searchDate ? formatDate(initialFilters.searchDate) 
    : activities?.SearchResponse?.Master?.FromDate 
      ? formatDate(activities.SearchResponse.Master.FromDate)
      : 'Select Date';

  const handleClearAll = () => {
    setClearAll(false);
    setActivityName('');
    onFilterChange({
      activityName: '',
    });
  };

  const handleFilterClick = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      {/* Sticky Filter Bar */}
      <div className="stickyBar__X2yK applyStickyBar__d2Q3">
        <div className="container__HTBo">
          <div className="row__9U33" style={{ 
            alignItems: 'normal', 
            justifyContent: 'flex-start', 
            flexFlow: 'wrap' 
          }}>
            <div className="col__BXMO" style={{ 
              width: '100%', 
              flex: '1 0 0px', 
              maxWidth: '100%', 
              marginLeft: '0%', 
              right: 'auto', 
              left: 'auto' 
            }}>
              <div className="dynamicFiltersContainerSmall__D_BP dynamicFiltersContainerWithoutLeftPadding__zmxC">
                <div className="dynamicFilters__Wn30">
                  <button 
                    data-automation="ttd-dates-modal-button" 
                    type="button" 
                    className="button__nE7K"
                    onClick={() => setShowModifyPanel(!showModifyPanel)}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" className="icon__UJ21">
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M5.5 1c.28 0 .5.23.5.5V2h4v-.5a.5.5 0 011 0V2h1.25C13.22 2 14 2.8 14 3.75v8.5c0 .97-.78 1.75-1.75 1.75h-8.5C2.78 14 2 13.22 2 12.25v-8.5C2 2.8 2.78 2 3.75 2H5v-.5c0-.27.22-.5.5-.5zm0 3a.5.5 0 00.5-.5V3h4v.5a.5.5 0 001 0V3h1.25c.41 0 .75.34.75.75V5H3V3.75c0-.41.34-.75.75-.75H5v.5c0 .28.22.5.5.5zm6.75 9c.41 0 .75-.33.75-.75V6H3v6.25c0 .42.34.75.75.75h8.5z"
                      ></path>
                    </svg>
                    <div className="label__tUc3" data-automation="dates-text">
                      {displayDate}
                    </div>
                  </button>
                  <button 
                    data-automation="ttd-filter-button" 
                    role="button" 
                    type="button" 
                    className="filterChip___2Zh"
                    onClick={handleFilterClick}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" className="icon__UJ21">
                      <path d="M2.53 5.5h5.03a2 2 0 003.88 0 .5.5 0 00.06 0h2a.5.5 0 100-1h-2a.5.5 0 00-.06 0 2 2 0 00-3.88 0H2.53a.5.5 0 000 1zM6.5 13a2 2 0 01-1.94-1.5H2.53a.5.5 0 010-1h2.03a2 2 0 013.88 0h5.07a.5.5 0 110 1H8.44A2 2 0 016.5 13z"></path>
                    </svg>
                    <div className="label__ZqOp">Filters</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modify Search Panel */}
      <div className="panel style1" style={{ boxShadow: 'none', display: showModifyPanel ? 'block' : 'none' }}>
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
          <ActivityNoResultForm initialFilters={{ 
            ...initialFilters, 
            searchDate: initialFilters.searchDate ? initialFilters.searchDate : null 
          }} />
        </div>
      </div>

      {/* Filter Panel */}
      <div className="panel style1 arrow-right" style={{ display: showFilters ? 'block' : 'none' }}>
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
                  {/* Price range filter content */}
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
                  {/* Duration filter content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};