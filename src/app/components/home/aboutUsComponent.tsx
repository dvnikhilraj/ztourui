'use client';

import React from 'react';
import Image from 'next/image';

interface AboutUsItem {
  className: string;
  title: string;
  description: string;
}

export function AboutUsComponent(): React.JSX.Element {
  const whyUsItems: AboutUsItem[] = [
    {
      className: "antistres",
      title: "MEDICAMENTUL ANTISTRES GARANTAT",
      description: "Orice destinatie alegeti cu Z Tour vacanta dumneavoastra va fi in top."
    },
    {
      className: "protectia",
      title: "PROTECTIA TURISTULUI",
      description: "Preocuparea noastra principala este sa avem grija de dumneavoastra pana reveniti acasa."
    },
    {
      className: "planificare",
      title: "PLANIFICAREA VACANTEI SI CONSILIEREA ONESTA",
      description: "Analizam impreuna deschis optiunile intrucat vacanta aleasa sa fie perfecta."
    },
    {
      className: "tarife",
      title: "TARIFE COMPETITIVE",
      description: "Suntem agentie de turism organizatoare, avem preturi competitive pe piata si suntem dispusi sa concuram cu orice oferta concreta."
    }
  ];

  return (
    <section className="exotic_destination m-b-30 p-b-20">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-uppercase p-t-20">
              Why Choose <strong className="ProximaNova-Extrabld">Z TOUR ?</strong>
            </h1>
          </div>
        </div>

        <div className="row m-t-0">
          {whyUsItems.map((item, index) => (
            <div key={index} className="col-lg-3 col-sm-6 col-md-6">
              <div className={`why-us-item ${item.className} hover-up`}>
                <h4>
                  <span>{item.title}</span>
                </h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hidden Images Section */}
        <div className="row m-t-30" style={{ display: 'none' }}>
          <div className="col-sm-offset-2 col-sm-8">
            <div className="row">
              <div className="col-sm-4">
                <Image 
                  src="/assets/images/ZTO/home/impressco.jpg"
                  alt="guestbook"
                  className="img-responsive w-100-percent"
                  width={400}
                  height={300}
                />
              </div>
              <div className="col-sm-4">
                <Image 
                  src="/assets/images/ZTO/home/reducer.jpg"
                  alt="guestbook"
                  className="img-responsive w-100-percent"
                  width={400}
                  height={300}
                />
              </div>
              <div className="col-sm-4">
                <Image 
                  src="/assets/images/ZTO/home/card.jpg"
                  alt="reduceri"
                  className="img-responsive w-100-percent"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Image Section */}
        <div className="row m-t-30">
          <div className="col-sm-8 col-sm-offset-2">
            <Image 
              src="/assets/images/ZTO/home/plata-online.jpg"
              alt="plata online"
              className="img-responsive w-100-percent height_168"
              width={800}
              height={168}
            />
          </div>
        </div>
      </div>
    </section>
  );
}