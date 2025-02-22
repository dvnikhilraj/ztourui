'use client';

import React from 'react';

interface CharterDestination {
  imageUrl: string;
  title: string;
  link: string;
}

interface FeaturedCharter extends CharterDestination {
  isActive?: boolean;
}

export function PackageCharterComponent(): React.JSX.Element {
  const featuredCharters: FeaturedCharter[] = [
    {
      imageUrl: "https://tcscrm.ztour-travel.ro/images/ZTO/Promo/88-B2C-poze mari homepage z tour (16).jpg",
      title: "Egypt - Hurghada",
      link: "https://charter.ztour-travel.ro/plane-charters/Hurghada-7437-7701",
      isActive: true
    },
    {
      imageUrl: "https://tcscrm.ztour-travel.ro/images/ZTO/Promo/88-B2C-poze mari homepage z tour (15).jpg",
      title: "Dubai",
      link: "https://charter.ztour-travel.ro/plane-charters/Dubai-6732-7701",
      isActive: true
    }
  ];

  const destinations: CharterDestination[] = [
    {
      imageUrl: "https://tcscrm.ztour-travel.ro/images/ZTO/Promo/88-B2C-poze mari homepage z tour (5).jpg",
      title: "Turkey - Antalya",
      link: "https://charter.ztour-travel.ro/plane-charters/Antalya-6730-7701"
    },
    {
      imageUrl: "https://tcscrm.ztour-travel.ro/images/ZTO/Promo/88-B2C-poze mari homepage z tour (6).jpg",
      title: "Cyprus",
      link: "https://charter.ztour-travel.ro/plane-charters/Larnaca-6736-7701"
    },
    {
      imageUrl: "https://tcscrm.ztour-travel.ro/images/ZTO/Promo/88-B2C-poze mari homepage z tour (11).jpg",
      title: "Egipt - Sharm El Sheikh",
      link: "https://charter.ztour-travel.ro/plane-charters/Sharm+El+Sheikh-6743-7701"
    },
    {
      imageUrl: "https://tcscrm.ztour-travel.ro/images/ZTO/Promo/88-B2C-poze mari homepage z tour (14).jpg",
      title: "Madeira",
      link: "https://charter.ztour-travel.ro/plane-charters/Madeira-6113-7701"
    },
    {
      imageUrl: "https://tcscrm.ztour-travel.ro/images/ZTO/Promo/88-B2C-poze mari homepage z tour (7).jpg",
      title: "Greece - Crete",
      link: "https://charter.ztour-travel.ro/plane-charters/Creta+-+Heraklion-6723-7701"
    },
    {
      imageUrl: "https://tcscrm.ztour-travel.ro/images/ZTO/Promo/88-B2C-poze mari homepage z tour (8).jpg",
      title: "Greece - Rhodes",
      link: "https://charter.ztour-travel.ro/plane-charters/Rhodos-6094-7701"
    },
    {
      imageUrl: "https://tcscrm.ztour-travel.ro/images/ZTO/Promo/88-B2C-poze mari homepage z tour (17).jpg",
      title: "Tunis",
      link: "https://charter.ztour-travel.ro/plane-charters/Monastir-7097-7701"
    },
    {
      imageUrl: "https://tcscrm.ztour-travel.ro/images/ZTO/Promo/59-B2C-pmi2.jpg",
      title: "Spain - Mallorca",
      link: "https://charter.ztour-travel.ro/plane-charters/Mallorca-6756-7701"
    }
  ];

  const SuitcaseIcon = () => (
    <svg className="svg-inline--fa fa-suitcase fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="suitcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="currentColor" d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z" />
    </svg>
  );

  return (
    <section className="Offer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-uppercase">PACKAGE CHARTER</h1>
          </div>
        </div>

        <div className="row m-t-10 m-b-10">
          {featuredCharters.map((charter, index) => (
            <div key={index} className="col-md-6 col-sm-6 form-group">
              <div className="thumbnail">
                <div id={`DemoCarousel${index}`} className="carousel slide">
                  <div className="carousel-inner">
                    <div className={`item ${charter.isActive ? 'active' : ''}`}>
                      <img src={charter.imageUrl} alt="image" className="img-responsive w-100-percent" />
                      <div className="icons_services">
                        <SuitcaseIcon />
                      </div>
                      <div className="carousel-caption">
                        <h3 className="ProximaNova-Extrabld">{charter.title}</h3>
                        <p>&nbsp;</p>
                      </div>
                      <div className="exlore_now_button">
                        <a href={charter.link} target="_blank">
                          <button className="exlore_now btn-default text-uppercase ProximaNova-Extrabld">
                            explore
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          {destinations.map((destination, index) => (
            <div key={index} className="col-sm-6 col-md-3 m-b-30">
              <div className="packages-places">
                <div className="thumbnail-image bg-higlight p-b-10">
                  <img 
                    src={destination.imageUrl} 
                    alt="Generic placeholder thumbnail" 
                    className="img-responsive w-100-percent" 
                  />
                  <div className="icons_services">
                    <SuitcaseIcon />
                  </div>
                  <div className="holiday_place">
                    <a href={destination.link} target="_blank">
                      <h4 className="text-center m-0">
                        <small>{destination.title}</small>
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}