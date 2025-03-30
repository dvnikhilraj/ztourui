
'use client';
import React from 'react';
import Image from 'next/image';

interface CarouselItem {
  id: number;
  imageSrc: string;
  altText: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 0,
    imageSrc: '/assets/images/ZTO/home/ZTour_Home_Page_Banner_Blue.png',
    altText: 'banner_homepage'
  },
 
];

export function HomeBannerCarousel(): React.JSX.Element {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="home_slider hidden-xs">
      <div 
        id="carousel-example-generic" 
        className="carousel slide padding-top-carousel" 
        data-ride="carousel"
      >
   
        <ol className="carousel-indicators indicators-bottom-margin">
          {carouselItems.map((item, index) => (
            <li
              key={item.id}
              data-target="#carousel-example-generic"
              data-slide-to={index}
              className={activeSlide === index ? 'active' : ''}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </ol>

        {/* Wrapper for slides */}
        <div className="carousel-inner" role="listbox">
          {carouselItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`item ${activeSlide === index ? 'active' : ''}`}
            >
              <Image
                src={item.imageSrc}
                alt={item.altText}
                width={1920}
                height={600}
                priority={index === 0}
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}