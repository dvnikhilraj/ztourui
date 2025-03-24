import { useTranslation } from 'react-i18next';
import { ActivityHeaderProps } from '@/types/Activity/activityHeaderProps';


export const ActivityHeader = ({ 
  activity, 
  onGotoElement, 
  activeSection 
}: ActivityHeaderProps) => {
  const { t } = useTranslation();

  return (
    <div data-spy="affix" data-offset-top="197" className="top_modify_room affix-top" id="fixedTop">
      <div className="row" style={{ padding: '12px 0px 5px 10px' }}>
        <div className="col-sm-12 col-xs-12 pop" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '13px', fontWeight: 'bold' }}>
            {activity.displayCountryCityName} &nbsp;&nbsp; |
          </span>
          <span className="customDir">
            <i className="soap-icon-calendar" style={{ fontSize: '18px', verticalAlign: 'baseline' }}></i>
            &nbsp;{activity.fromDate}&nbsp;
            <i className="soap-icon-right" style={{ verticalAlign: 'baseline' }}></i>&nbsp;
            <i className="soap-icon-calendar" style={{ fontSize: '18px', verticalAlign: 'baseline' }}></i>
            &nbsp;{activity.toDate}
          </span>
        </div>
      </div>

      <div className="row hidden-xs">
        <div className="col-sm-12 col-xs-12 pop" style={{ marginBottom: '7px' }} id="RoomMenu">
          <ul>
            <li><a id="galleryid" href="#" onClick={() => onGotoElement('hotelgellery')}>{t('Gallery')}</a> | </li>
            <li><a id="tourlistid" href="#" onClick={() => onGotoElement('TOURLIST')}>{t('Rates')}</a> | </li>
            <li><a id="tourSummaryId" href="#" onClick={() => onGotoElement('tourSummary')}>{t('Summary')}</a> | </li>
            <li><a id="tourNoteId" href="#" onClick={() => onGotoElement('tourNotes')}>{t('Note')}</a> | </li>
            <li><a id="tourDeparturePointId" href="#" onClick={() => onGotoElement('tourDeparturePoint')}>{t('DeparturePoint')}</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};