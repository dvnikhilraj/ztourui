"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PartnerImage {
  id: number;
  src: string;
}

export function PartnersComponent(): React.JSX.Element {
  const partners: PartnerImage[] = Array.from({ length: 27 }, (_, i) => ({
    id: i + 1,
    src: `/assets/images/ZTO/home/par-${i + 1}.png`,
  })).filter((partner) => partner.id !== 2); // Excluding par-2.png as it's not in the original list

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1400,
    rows: 1,
    adaptiveHeight: true,
    vertical: false,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <section className="Partners">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-uppercase">Partners</h1>
          </div>
        </div>
        <div className="row m-t-30 m-b-30">
          <div className="col-md-12">
            <Slider {...settings}>
              {partners.map((partner) => (
                <div key={partner.id}>
                  <div style={{ margin: "0 10px" }}>
                    <div
                      style={{
                        position: "relative",
                        width: "78px",
                        height: "78px",
                      }}
                    >
                      <Image
                        src={partner.src}
                        alt={`Partner ${partner.id}`}
                        fill
                        unoptimized
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
