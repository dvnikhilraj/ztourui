import { useTranslation } from 'react-i18next';
import { FareDetailsProps } from '@/types/Activity/Passenger/passengerDetail';

export const ActivityFareDetails = ({ fareDetails }: FareDetailsProps) => {
  const { t } = useTranslation();

  return (
    <div className="detailed-logo booking-details">
      <div className="box clearfix">
        <div className="row">
          <div className="col-xs-12">
            <h4 className="box-title">{fareDetails.activityName}</h4>
          </div>
        </div>
        <div className="details">
          <div className="row">
            <div className="col-xs-12 col-md-12 col-sm-12">
              <div className="other-details">
                <dl>
                  <dt className="feature">{t('ActivityDate')}:</dt>
                  <dd className="value">{fareDetails.activityDate}</dd>

                  <dt className="feature">{t('NumberofPersons')}:</dt>
                  <dd className="value">
                    {fareDetails.adultCount} {t('Adults')}
                    {fareDetails.childCount > 0 && (
                      <>, {fareDetails.childCount} {t('Children')}`</>
                    )}
                  </dd>

                  <dt className="feature total-price">{t('TotalAmount')}:</dt>
                  <dd className="value total-price-value">
                    {fareDetails.currency} {fareDetails.totalAmount.toFixed(2)}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};