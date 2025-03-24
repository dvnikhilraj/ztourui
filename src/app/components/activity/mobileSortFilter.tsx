import { useTranslation } from 'react-i18next';
import { MobileSortFilterProps } from '@/types/Activity/mobileSortFilterProps';
export const MobileSortFilter = ({ onSort, onModify, onFilter }: MobileSortFilterProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="tab-container listing-style3 activitytop">
      <nav className="nav bar">
        <div className="container">
          <div className="navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a className="dropdown-toggle" role="button">
                  <i className="fa fa-sort"></i> {t('Sort')}
                </a>
                <ul className="dropdown-menu">
                  <li className="sort-by-price">
                    <a onClick={() => onSort('price')}>{t('Price')}</a>
                  </li>
                  <li className="sort-by-rating">
                    <a onClick={() => onSort('duration')}>{t('Duration')}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a onClick={onModify}>
                  <i className="far fa-edit"></i> {t('Modify')}
                </a>
              </li>
              <li>
                <a onClick={onFilter}>
                  <i className="fa fa-filter"></i> {t('Filter')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};