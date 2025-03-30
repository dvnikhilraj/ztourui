import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { ActivityGalleryProps } from '@/types/Activity/activityGalleryProps';

export const ActivityGallery = ({ images, noGallery }: ActivityGalleryProps) => {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div id="hotelgellery" className="image-box" style={{ marginTop: '10px' }}>
      <div className="flexslider">
        <div className="flex-viewport">
          <ul className="slides">
            {images.map((image, index) => (
              <li key={index} className={index === activeImage ? 'active' : ''}>
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={800}
                  height={600}
                  layout="responsive"
                />
              </li>
            ))}
          </ul>
        </div>
        {!noGallery && images.length > 1 && (
          <div className="flex-nav">
            <button 
              onClick={() => setActiveImage(prev => prev > 0 ? prev - 1 : images.length - 1)}
              className="flex-prev"
            >
              {t('Previous')}
            </button>
            <button 
              onClick={() => setActiveImage(prev => prev < images.length - 1 ? prev + 1 : 0)}
              className="flex-next"
            >
              {t('Next')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};