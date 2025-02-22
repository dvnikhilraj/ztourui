'use client';

import React, { useState } from 'react';

interface ActivityFormState {
  destination: string;
  fromDate: string;
  showPaxPanel: boolean;
}

export function ActivityFormComponent(): React.JSX.Element {
  const [formData, setFormData] = useState<ActivityFormState>({
    destination: '',
    fromDate: '',
    showPaxPanel: false
  });

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, destination: e.target.value });
  };

  const handleDateChange = (value: string) => {
    setFormData({ ...formData, fromDate: value });
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log('Search with:', formData);
  };

  return (
    <div className="row">
      {/* Destination Input */}
      <div className="col-sm-4 col-md-3 col-xs-12">
        <label className="searchbox-text">Your Destination</label>
        <div className="form-group relative">
          <input
            type="text"
            className="input-text full-width search_icon"
            placeholder="Enter a City or Location"
            value={formData.destination}
            onChange={handleDestinationChange}
          />
          {!formData.destination && (
            <span className="txticon-activity">
              <svg className="svg-inline--fa fa-map-marker-alt fa-w-12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
              </svg>
            </span>
          )}
        </div>
      </div>

      {/* Date Input */}
      <div className="col-sm-4 col-md-2 col-xs-6">
        <label className="searchbox-text">From Date</label>
        <div className="form-group relative">
          <div className="datepicker-wrap">
            <input
              type="date"
              className="input-text full-width"
              value={formData.fromDate}
              onChange={(e) => handleDateChange(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="col-sm-4 col-md-2 col-xs-12">
        <label className="searchbox-text hidden-xs">&nbsp;</label>
        <div className="form-group">
          <button
            className="full-width btn btn-default search-btn"
            onClick={handleSearch}
          >
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
}