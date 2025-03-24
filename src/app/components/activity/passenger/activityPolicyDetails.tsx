import { useTranslation } from 'react-i18next';
import { ActivityPolicyDetailsProps } from '@/types/Activity/Passenger/passengerDetail';

export const ActivityPolicyDetails = ({ 
  policy, 
  cancellationPolicy, 
  grossCurrency, 
  grossROE 
}: ActivityPolicyDetailsProps) => {
  const { t } = useTranslation();

  return (
    <div className="booking-section travelo-box">
      <h3 className="cart-service-heading-container">{t('CancellationPolicy')}</h3>
      
      {/* Free Cancellation Section */}
      {cancellationPolicy.Policy.length > 0 && (() => {
        const mindate = new Date(cancellationPolicy.Policy[0].DateFrom);
        const today = new Date();
        
        if (mindate > today) {
          const displayDate = new Date(mindate);
          displayDate.setDate(displayDate.getDate() - 1);
          
          return (
            <div className="cancellation-policy-alt">
              <h5 className="heading mt-0" data-toggle="collapse" style={{ display: 'inline' }}>
                <span className="refund-font-16">
                  {t('Free')} {t('Cancellation')} {t('till')} {displayDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
                </span>
              </h5>
            </div>
          );
        } else if (mindate <= today) {
          return (
            <div className="cancellation-policy-alt">
              <h5 className="heading mt-0" data-toggle="collapse" style={{ display: 'inline' }}>
                <span className="refund-font-16">{t('ThisTariff')}</span>
              </h5>
            </div>
          );
        }
      })()}

      {/* Policy Items */}
      {cancellationPolicy.Policy.map((item, index) => (
        <div key={index} className="text-justify">
          <i className="fa fa-hand-o-right"></i>&nbsp;
          {t('Ifyoucancelbookingbetween')} <b>{new Date(item.DateFrom).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</b>{' '}
          {t('to')} <b>{new Date(item.DateTo).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</b>{' '}
          {t('thenCancellationChargeswillbe')} <b>{grossCurrency} {(item.Gross_Price * grossROE).toFixed(2)}</b>
        </div>
      ))}

      {/* Notes Section */}
      <div>
        <p className="text-justify">{t('_Note')} {t('notes')}</p>
      </div>
    </div>
  );
};