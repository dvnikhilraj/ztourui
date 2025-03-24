import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityRatesProps } from '@/types/Activity/activityRatesProps';

export const ActivityRates = ({ tours, currency, onPolicyClick }: ActivityRatesProps) => {
  const { t } = useTranslation();
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  return (
    <div id="TOURLIST" className="travelo-box">
      <h4>{t('AvailableTours')}</h4>
      <div className="table-container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>{t('TourName')}</th>
              <th>{t('Availability')}</th>
              <th>{t('Price')}</th>
              <th>{t('Action')}</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour, index) => (
              <tr key={index}>
                <td>{tour.name}</td>
                <td>{tour.availability}</td>
                <td>
                  {currency} {tour.grossPrice.toFixed(2)}
                </td>
                <td>
                  <button
                    className="btn-small"
                    onClick={() => setSelectedTour(tour.name)}
                  >
                    {t('Select')}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="policy-link">
        <a href="#" onClick={onPolicyClick}>
          {t('ViewCancellationPolicy')}
        </a>
      </div>
    </div>
  );
};