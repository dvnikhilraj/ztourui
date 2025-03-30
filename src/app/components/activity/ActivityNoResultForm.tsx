'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface ActivityFormData {
  destination: string;
  fromDate: Date | null;
  toDate: Date | null;
  adultCount: number;
  childCount: number;
  childAges: number[];
  lang: string;
}

interface ActivityNoResultFormProps {
  initialFilters: {
    city: string;
    country: string;
    searchDate: string | null;
    guest: string[];
    otherParam: string[];
    lang: string;
  };
}

export function ActivityNoResultForm({ initialFilters }: ActivityNoResultFormProps) {
  const { t } = useTranslation();
  const router = useRouter();
console.log(initialFilters);
  const [formData, setFormData] = useState<ActivityFormData>({
    destination: initialFilters.city || '',
    fromDate: null,
    toDate:null,
    adultCount: parseInt(initialFilters.guest[0], 10) || 1,
    childCount: parseInt(initialFilters.guest[1], 10) || 0,
    childAges: [],
    lang: initialFilters.lang || 'ro',
  });

  const [showPaxPanel, setShowPaxPanel] = useState(false);
  const [error, setError] = useState({ depError: false, depMsg: '' });

  useEffect(() => {
    
    setFormData((prev) => ({
      ...prev,
      childAges: Array(formData.childCount).fill(2),
    }));
  }, [formData.childCount]);

  const handleDestinationChange = (value: string) => {
    setFormData((prev) => ({ ...prev, destination: value }));
    setError({ depError: false, depMsg: '' });
  };

  const handleDateChange = (date: Date | null, field: 'fromDate' | 'toDate') => {
    setFormData((prev) => ({ ...prev, [field]: date }));
  };

  const handleCountChange = (type: 'adult' | 'child', value: number) => {
    if (type === 'adult' && (value >= 1 && value <= 4)) {
      setFormData((prev) => ({ ...prev, adultCount: value }));
    } else if (type === 'child' && (value >= 0 && value <= 3)) {
      setFormData((prev) => ({
        ...prev,
        childCount: value,
        childAges: value < prev.childAges.length
          ? prev.childAges.slice(0, value)
          : [...prev.childAges, ...Array(value - prev.childAges.length).fill(2)],
      }));
    }
  };

  const handleChildAgeChange = (index: number, age: number) => {
    if (age >= 2 && age <= 12) {
      setFormData((prev) => ({
        ...prev,
        childAges: prev.childAges.map((a, i) => (i === index ? age : a)),
      }));
    }
  };

  const handleSubmit = () => {
    if (!formData.destination) {
      setError({ depError: true, depMsg: t('activities.form.errors.destination') });
      return;
    }

    const searchParams = new URLSearchParams({
      destination: formData.destination,
      fromDate: formData.fromDate?.toISOString() || '',
      toDate: formData.toDate?.toISOString() || '',
      adults: formData.adultCount.toString(),
      children: formData.childCount.toString(),
      childAges: formData.childAges.join(','),
      lang: formData.lang,
    });

    router.push(`/activity/result?${searchParams.toString()}`);
  };

  return (
    
      <div className="panel-content" style={{ padding: '15px 21px 10px' }}>
        <div className="row">
          <div className="col-sm-4 col-md-3 col-xs-12 form-group">
            <label>{t('activities.form.destination')}</label>
            <input
              type="text"
              style={{ paddingLeft: '34px' }}
              className="input-text full-width search_icon"
              placeholder={t('activities.form.destinationPlaceholder')}
              value={formData.destination}
              onChange={(e) => handleDestinationChange(e.target.value)}
            />
            {error.depError && <div className="alertMsg">{error.depMsg}</div>}
            <span className="txticon-activityNR">
              <i className={`fa ${formData.destination ? 'fa-building yellow-color' : 'fa-map-marker-alt'}`} />
            </span>
          </div>

          <div className="col-sm-4 col-md-2 col-xs-6 form-group">
            <label>{t('activities.form.fromDate')}</label>
            <div className="datepicker-wrap">
              <DatePicker
                selected={formData.fromDate}
                onChange={(date) => handleDateChange(date, 'fromDate')}
                className="input-text full-width datetextbox"
                placeholderText={t('activities.form.checkInDate')}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              />
            </div>
          </div>

          <div className="col-sm-4 col-md-2 col-xs-6 form-group">
            <label>{t('activities.form.toDate')}</label>
            <div className="datepicker-wrap">
              <DatePicker
                selected={formData.toDate}
                onChange={(date) => handleDateChange(date, 'toDate')}
                className="input-text full-width datetextbox"
                placeholderText={t('activities.form.checkOutDate')}
                dateFormat="dd/MM/yyyy"
                minDate={formData.fromDate || new Date()}
              />
            </div>
          </div>

          <div className="col-sm-4 col-md-3 col-xs-12">
            <label>{t('activities.form.adultsChildren')}</label>
            <div className="drop-alter relative form-group">
              <a
                href="javascript:void(0)"
                className="paxpanellink"
                onClick={() => setShowPaxPanel(!showPaxPanel)}
              >
                <span>{formData.adultCount} {t('activities.form.adults')}</span>,{' '}
                <span>{formData.childCount} {t('activities.form.children')}</span>
                <div className="new-down-right">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </a>

              {showPaxPanel && (
                <div className="pax-count-hotel paxpanel activitypaxpannel">
                  
                </div>
              )}
            </div>
          </div>

          <div className="col-sm-4 col-md-2 col-xs-12">
            <label className="hidden-xs">&nbsp;</label>
            <div className="form-group">
              <button
                className="full-width icon-check animated bounce"
                onClick={handleSubmit}
              >
                {t('activities.form.searchNow')}
              </button>
            </div>
          </div>
        </div>
      </div>
   
  );
}