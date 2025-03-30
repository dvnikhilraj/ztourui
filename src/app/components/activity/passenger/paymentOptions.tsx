import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

interface PaymentOptionsProps {
  isRefundable: boolean;
}

export const PaymentOptions = ({ isRefundable }: PaymentOptionsProps) => {
  const { t } = useTranslation();
  const [selectedPayment, setSelectedPayment] = useState<string>('');

  if (!isRefundable) return null;

  return (
    <div className="row pd-bottom10">
      <div className="col-lg-12">
        <div className="payment-options">
          <div className="radio-wrapper">
            <div className="radio radio-inline">
              <input
                type="radio"
                id="paymentMethodCard"
                name="paymentMethod"
                value="card"
                checked={selectedPayment === 'card'}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="custom-radio"
              />
              <label htmlFor="paymentMethodCard" className="custom-radio-label">
                <i className="far fa-credit-card"></i>
                <span>{t('CreditCard')}</span>
              </label>
            </div>

            <div className="radio radio-inline">
              <input
                type="radio"
                id="paymentMethodBank"
                name="paymentMethod"
                value="bank"
                checked={selectedPayment === 'bank'}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="custom-radio"
              />
              <label htmlFor="paymentMethodBank" className="custom-radio-label">
                <i className="fas fa-university"></i>
                <span>{t('BankTransfer')}</span>
              </label>
            </div>
          </div>
          
       
          {selectedPayment === 'card' && (
            <div className="payment-info card-info" id="creditCardInfo">
              <div className="row">
                <div className="col-md-12">
                  <p className="text-justify">
                    {t('CreditCardPaymentInfo')}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {selectedPayment === 'bank' && (
            <div className="payment-info bank-info" id="bankTransferInfo">
              <div className="row">
                <div className="col-md-12">
                  <p className="text-justify">
                    {t('BankTransferInfo')}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};