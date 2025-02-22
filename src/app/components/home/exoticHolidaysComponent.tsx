'use client';

import React from 'react';

interface HolidayDestination {
  imageUrl: string;
  title: string;
  link: string;
}

interface FeaturedHoliday extends HolidayDestination {
  isActive?: boolean;
}

export function ExoticHolidaysComponent(): React.JSX.Element {
  const featuredHolidays: FeaturedHoliday[] = [
    {
      imageUrl: "/assets/images/ZTO/Promo/88-B2C-cuba.png",
      title: "Best of Cuba",
      link: "https://www.ztour-travel.ro/Package/PackageResult?CountryCode=CU&DepartureCity=CLU27619&RegionCode=HAV&TransferOption=Plane&IsTour=true&CountryName=Cuba&RegionName=Havana&DepartureCityName=Cluj-Napoca&Duration=11&DateOfTravel=2025-03-13&IsSingleDestination=false&IsMultipleDestination=true&RoomCount=1&Adultcount=2&childcount=0&infantcount=0&AdultCountPerRoom=1$2&InfantCountPerRoom=1$0&ChildCountPerRoom=&OtherParam=EUR&ck=&lang=ro",
      isActive: true
    },
    {
      imageUrl: "/assets/images/ZTO/Promo/88-B2C-hkt.png",
      title: "Thailanda Phuket",
      link: "https://www.ztour-travel.ro/Package/PackageResult?CountryCode=TH&DepartureCity=BUH&RegionCode=HKT&TransferOption=Plane&IsTour=false&CountryName=Thailand&RegionName=Phuket&DepartureCityName=Bucharest&Duration=8&DateOfTravel=2025-11-12&IsSingleDestination=true&IsMultipleDestination=false&RoomCount=1&Adultcount=2&childcount=0&infantcount=0&AdultCountPerRoom=1$2&InfantCountPerRoom=1$0&ChildCountPerRoom=&OtherParam=EUR&ck=&lang=ro",
      isActive: true
    }
  ];

  const destinations: HolidayDestination[] = [
    {
      imageUrl: "/assets/images/ZTO/Promo/88-B2C-mle.png",
      title: "Maldive",
      link: "https://www.ztour-travel.ro/Package/PackageResult?CountryCode=MV&DepartureCity=CLU27619&RegionCode=MLE&TransferOption=Plane&IsTour=false&CountryName=Maldives&RegionName=Male&DepartureCityName=Cluj-Napoca&Duration=8&DateOfTravel=2025-03-01&IsSingleDestination=true&IsMultipleDestination=false&RoomCount=1&Adultcount=2&childcount=0&infantcount=0&AdultCountPerRoom=1$2&InfantCountPerRoom=1$0&ChildCountPerRoom=&OtherParam=EUR&ck=&lang=ro"
    },
    {
      imageUrl: "/assets/images/ZTO/Promo/88-B2C-mru.png",
      title: "Mauritius",
      link: "https://www.ztour-travel.ro/Package/PackageResult?CountryCode=MU&DepartureCity=CLU27619&RegionCode=MRU&TransferOption=Plane&IsTour=false&CountryName=Mauritius&RegionName=Mauritius&DepartureCityName=Cluj-Napoca&Duration=9&DateOfTravel=2025-04-20&IsSingleDestination=true&IsMultipleDestination=false&RoomCount=1&Adultcount=2&childcount=0&infantcount=0&AdultCountPerRoom=1$2&InfantCountPerRoom=1$0&ChildCountPerRoom=&OtherParam=EUR&ck=&lang=ro"
    },
    {
      imageUrl: "/assets/images/ZTO/Promo/88-B2C-sez.png",
      title: "Seychelles",
      link: "https://www.ztour-travel.ro/Package/PackageResult?CountryCode=SC&DepartureCity=CLU27619&RegionCode=PRI&TransferOption=Plane&IsTour=true&CountryName=Seychelles&RegionName=Praslin%20Island&DepartureCityName=Cluj-Napoca&Duration=10&DateOfTravel=2025-10-26&IsSingleDestination=false&IsMultipleDestination=true&RoomCount=1&Adultcount=2&childcount=0&infantcount=0&AdultCountPerRoom=1$2&InfantCountPerRoom=1$0&ChildCountPerRoom=&OtherParam=EUR&ck=&lang=ro"
    },
    {
      imageUrl: "/assets/images/ZTO/Promo/88-B2C-kenya.png",
      title: "Kenya Sejur si Safari",
      link: "https://www.ztour-travel.ro/Package/PackageResult?CountryCode=KE&DepartureCity=CLU27619&RegionCode=MJ61&TransferOption=Plane&IsTour=true&CountryName=Kenya&RegionName=Masai%20Mara%20National%20Reserve&DepartureCityName=Cluj-Napoca&Duration=11&DateOfTravel=2025-06-16&IsSingleDestination=false&IsMultipleDestination=true&RoomCount=1&Adultcount=2&childcount=0&infantcount=0&AdultCountPerRoom=1$2&InfantCountPerRoom=1$0&ChildCountPerRoom=&OtherParam=EUR&ck=&lang=ro"
    }
  ];

  return (
    <section className="Offer m-t-20">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-uppercase">EXOTIC HOLIDAYS</h1>
          </div>
        </div>

        <div className="row m-t-10 m-b-10">
          {featuredHolidays.map((holiday, index) => (
            <div key={index} className="col-md-6 col-sm-6 form-group">
              <div className="thumbnail">
                <div id={`DemoCarousel${index}`} className="carousel slide">
                  <div className="carousel-inner">
                    <div className={`item ${holiday.isActive ? 'active' : ''}`}>
                      <img src={holiday.imageUrl} alt="image" className="img-responsive w-100-percent" />
                      <div className="carousel-caption">
                        <h3 className="ProximaNova-Extrabld">{holiday.title}</h3>
                        <p>&nbsp;</p>
                      </div>
                      <div className="exlore_now_button">
                        <a href={holiday.link} target="_blank">
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

        <div className="row">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="col-sm-6 col-md-3 m-b-30">
              <div className="packages-places"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}