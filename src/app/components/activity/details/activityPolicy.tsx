import { useTranslation } from 'react-i18next';
import {ActivityPolicyProps} from '@/types/Activity/activityPolicyProps';

export const ActivityPolicy = ({ id, className, style }: ActivityPolicyProps) => {
  const { t } = useTranslation();

  return (
    <div id={id} className={className} style={style}>
      <div className="popup-header">
        <h4>{t('CancellationPolicy')}</h4>
      </div>
      <div className="popup-content">
        <div className="policy-content">
          
        </div>
      </div>
    </div>
  );
};