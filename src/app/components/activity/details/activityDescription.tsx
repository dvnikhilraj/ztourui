import { useTranslation } from 'react-i18next';
import { ActivityDescriptionProps } from '@/types/Activity/activityDescriptionProps';

export const ActivityDescription = ({ type, text, id }: ActivityDescriptionProps) => {
  const { t } = useTranslation();

  return (
    <div id={id} className="travelo-box">
      <h4>{t(type)}</h4>
      <div className="description" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};