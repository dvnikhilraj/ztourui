import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PassengerDetail } from '@/types/Activity/Passenger/passengerDetail';

export const ActivityPaxDetail = () => {
  const { t } = useTranslation();
  const [passengers, setPassengers] = useState<PassengerDetail[]>([]);

  const handlePassengerChange = (index: number, field: keyof PassengerDetail, value: string) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index] = { ...updatedPassengers[index], [field]: value };
    setPassengers(updatedPassengers);
  };

  return (
    <div className="booking-section travelo-box">
      <h2 className="section-title">{t('PassengerDetails')}</h2>
      {passengers.map((passenger, index) => (
        <div key={index} className="form-group">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <label>{t('Title')}</label>
              <div className="selector">
                <select
                  value={passenger.title}
                  onChange={(e) => handlePassengerChange(index, 'title', e.target.value)}
                  className="full-width"
                >
                  <option value="">{t('SelectTitle')}</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <label>{t('FirstName')}</label>
              <input
                type="text"
                value={passenger.firstName}
                onChange={(e) => handlePassengerChange(index, 'firstName', e.target.value)}
                className="input-text full-width"
                placeholder={t('FirstName')}
              />
            </div>
            <div className="col-sm-6 col-md-5">
              <label>{t('LastName')}</label>
              <input
                type="text"
                value={passenger.lastName}
                onChange={(e) => handlePassengerChange(index, 'lastName', e.target.value)}
                className="input-text full-width"
                placeholder={t('LastName')}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <label>{t('Age')}</label>
              <input
                type="number"
                value={passenger.age}
                onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                className="input-text full-width"
                placeholder={t('Age')}
              />
            </div>
            <div className="col-sm-6 col-md-4">
              <label>{t('PassengerType')}</label>
              <div className="selector">
                <select
                  value={passenger.type}
                  onChange={(e) => handlePassengerChange(index, 'type', e.target.value)}
                  className="full-width"
                >
                  <option value="adult">{t('Adult')}</option>
                  <option value="child">{t('Child')}</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};