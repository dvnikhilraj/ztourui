"use client";
import { useState, FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface FormState {
  startDate: Date | null;
  endDate: Date | null;
  services: {
    hotel: boolean;
    flight: boolean;
    visa: boolean;
    transfer: boolean;
    car: boolean;
    package: boolean;
  };
  hotelCity: string;
  flightDetails: {
    fromCity: string;
    toCity: string;
  };
  visaDetails: {
    fromCountry: string;
    toCountry: string;
    visaCount: string;
    visaDuration: string;
  };
  transferDetails: {
    fromCity: string;
    toCity: string;
  };
  carDetails: {
    city: string;
    type: string;
    withDriver: boolean;
  };
  packageDetails: string;
  additionalRemarks: string;
  foundUsThrough: string;
  otherSource: string;
  personalDetails: {
    name: string;
    phone: string;
    email: string;
  };
}

export function EnquiryFormComponent() {
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    startDate: null,
    endDate: null,
    services: {
      hotel: false,
      flight: false,
      visa: false,
      transfer: false,
      car: false,
      package: false
    },
    hotelCity: '',
    flightDetails: {
      fromCity: '',
      toCity: ''
    },
    visaDetails: {
      fromCountry: '',
      toCountry: '',
      visaCount: '',
      visaDuration: ''
    },
    transferDetails: {
      fromCity: '',
      toCity: ''
    },
    carDetails: {
      city: '',
      type: '',
      withDriver: false
    },
    packageDetails: '',
    additionalRemarks: '',
    foundUsThrough: '',
    otherSource: '',
    personalDetails: {
      name: '',
      phone: '',
      email: ''
    }
  });

  const handleServiceToggle = (service: keyof typeof formData.services) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service]
      }
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
  };

  const handleReset = () => {
    setFormData({
      startDate: null,
      endDate: null,
      services: {
        hotel: false,
        flight: false,
        visa: false,
        transfer: false,
        car: false,
        package: false
      },
      hotelCity: '',
      flightDetails: {
        fromCity: '',
        toCity: ''
      },
      visaDetails: {
        fromCountry: '',
        toCountry: '',
        visaCount: '',
        visaDuration: ''
      },
      transferDetails: {
        fromCity: '',
        toCity: ''
      },
      carDetails: {
        city: '',
        type: '',
        withDriver: false
      },
      packageDetails: '',
      additionalRemarks: '',
      foundUsThrough: '',
      otherSource: '',
      personalDetails: {
        name: '',
        phone: '',
        email: ''
      }
    });
  };

  return (
    <div className="travelo-box">
      <div className="get-help">Solicita o oferta personalizata</div>
      <div>
        {showError && (
          <div id="dvFail" className="padding_con20 pd-top10 text-justify">
            <div className="row">
              <div className="col-md-12">
                <br />
                <p>Stimate Pasager,</p>
                <p style={{textAlign: 'justify'}}>
                  Ne pare rau pentru problemele intampinate! Va rugam sa incercati din nou peste cateva minute. 
                  Pentru informatii suplimentare, nu ezitati sa ne contactati telefonic <strong>@+40 364 643000</strong>
                </p>
                <p>Multumim ca ne-ati contactat S.C Z TOUR SRL!</p>
                <br />
                <p>S.C Z TOUR SRL Echipa de Suport.</p>
                <br />
              </div>
            </div>
          </div>
        )}

        <div className="panel-group" id="dvRequestForm" role="tablist" aria-multiselectable="true">
          <div className="heading-inner">
            <h4 className="margin-bottom-0">Va putem personaliza vacanta. Selectati de mai jos serviciile dorite</h4>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading before-panel" role="tab" id="headingOne">
              <div id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
                <div className="panel-body">
                  <div className="flight-div">
                    <div className="wizard" id="flight-wizard">
                   
                      <div className="setup-content" id="step-1">
                        <div className="input-daterange row" data-date-format="MM d, D">
                          <div className="col-sm-3 hidden-xs">&nbsp;</div>
                          <div className="col-sm-9">
                            <div className="row">
                              <div className="col-sm-6 col-xs-12">
                                <div className="form-group form-group-lg form-group-icon-left form-group-filled">
                                  <i className="fas fa-calendar-alt input-icon"></i>
                                  <label>Data Inceput Calatorie</label>
                                  <DatePicker
                                    selected={formData.startDate}
                                    onChange={(date: Date | null) => setFormData(prev => ({ ...prev, startDate: date }))}
                                    className="form-control"
                                    placeholderText="Data de început"
                                    id="from"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6 col-xs-12">
                                <div className="form-group form-group-lg form-group-icon-left form-group-filled">
                                  <i className="fas fa-calendar-alt input-icon"></i>
                                  <label>Data Sfarsit Calatorie</label>
                                  <DatePicker
                                    selected={formData.endDate}
                                    onChange={(date: Date | null) => setFormData(prev => ({ ...prev, endDate: date }))}
                                    className="form-control"
                                    placeholderText="Data de încheiere"
                                    id="to"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                   
                      <div className="setup-content" id="step-2">
                        {/* Hotel Service */}
                        <div className="hotel" id="hotel">
                          <div className="row">
                            <div className="col-xs-12 col-sm-3 form-group">
                              <div className="customtagline">
                                <span>Hotel</span>
                                <span className="padding-enquiry-r-0">
                                  <input
                                    type="checkbox"
                                    name="serviceType"
                                    className="EnquiryServices"
                                    checked={formData.services.hotel}
                                    onChange={() => handleServiceToggle('hotel')}
                                    id="sHotel"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-9">
                              <div className="form-group form-group-lg form-group-icon-left">
                                <label>Oras</label>
                                <input
                                  className="form-control reset-form-padding"
                                  placeholder="Oras"
                                  disabled={!formData.services.hotel}
                                  value={formData.hotelCity}
                                  onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    hotelCity: e.target.value
                                  }))}
                                  type="text"
                                  maxLength={100}
                                  id="hotelcity"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Flight Service */}
                        <div className="flight" id="flight">
                          <div className="row">
                            <div className="col-xs-12 col-sm-3 form-group">
                              <div className="customtagline">
                                <span>Rezervare avion</span>
                                <span className="padding-enquiry-r-0">
                                  <input
                                    type="checkbox"
                                    name="serviceType"
                                    className="EnquiryServices"
                                    checked={formData.services.flight}
                                    onChange={() => handleServiceToggle('flight')}
                                    id="sflight"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-9 col-xs-12">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group form-group-lg form-group-icon-left">
                                    <label>Plecare</label>
                                    <input
                                      className="form-control reset-form-padding"
                                      placeholder="Plecare"
                                      disabled={!formData.services.flight}
                                      value={formData.flightDetails.fromCity}
                                      onChange={(e) => setFormData(prev => ({
                                        ...prev,
                                        flightDetails: {
                                          ...prev.flightDetails,
                                          fromCity: e.target.value
                                        }
                                      }))}
                                      type="text"
                                      maxLength={100}
                                      id="flightfromcity"
                                    />
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group form-group-lg form-group-icon-left">
                                    <label>Sosire</label>
                                    <input
                                      className="form-control reset-form-padding"
                                      placeholder="Sosire"
                                      disabled={!formData.services.flight}
                                      value={formData.flightDetails.toCity}
                                      onChange={(e) => setFormData(prev => ({
                                        ...prev,
                                        flightDetails: {
                                          ...prev.flightDetails,
                                          toCity: e.target.value
                                        }
                                      }))}
                                      type="text"
                                      maxLength={100}
                                      id="flighttocity"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Visa Service */}
                        <div className="visa" id="visa">
                          <div className="row">
                            <div className="col-xs-12 col-sm-3 form-group">
                              <div className="customtagline">
                                <span>Viza</span>
                                <span className="padding-enquiry-r-0">
                                  <input
                                    type="checkbox"
                                    name="serviceType"
                                    className="EnquiryServices"
                                    checked={formData.services.visa}
                                    onChange={() => handleServiceToggle('visa')}
                                    id="svisa"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-9 col-xs-12">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group form-group-lg form-group-icon-left">
                                    <label>Tara de origine</label>
                                    <input
                                      className="form-control reset-form-padding"
                                      placeholder="Numele tarii"
                                      disabled={!formData.services.visa}
                                      value={formData.visaDetails.fromCountry}
                                      onChange={(e) => setFormData(prev => ({
                                        ...prev,
                                        visaDetails: {
                                          ...prev.visaDetails,
                                          fromCountry: e.target.value
                                        }
                                      }))}
                                      type="text"
                                      maxLength={100}
                                      id="visa_from_country"
                                    />
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group form-group-lg form-group-icon-left">
                                    <label>Tara pe care o vizitati</label>
                                    <input
                                      className="form-control reset-form-padding"
                                      placeholder="Numele tarii"
                                      disabled={!formData.services.visa}
                                      value={formData.visaDetails.toCountry}
                                      onChange={(e) => setFormData(prev => ({
                                        ...prev,
                                        visaDetails: {
                                          ...prev.visaDetails,
                                          toCountry: e.target.value
                                        }
                                      }))}
                                      type="text"
                                      maxLength={100}
                                      id="visa_To_country"
                                    />
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group form-group-lg form-group-icon-left">
                                    <label>Necesitatea vizei</label>
                                    <input
                                      className="form-control reset-form-padding"
                                      placeholder="Necesitatea vizei"
                                      disabled={!formData.services.visa}
                                      value={formData.visaDetails.visaCount}
                                      onChange={(e) => setFormData(prev => ({
                                        ...prev,
                                        visaDetails: {
                                          ...prev.visaDetails,
                                          visaCount: e.target.value
                                        }
                                      }))}
                                      type="text"
                                      maxLength={3}
                                      id="visa_Count"
                                    />
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group form-group-lg form-group-icon-left">
                                    <label>Perioada de valabilitate a vizei</label>
                                    <input
                                      className="form-control reset-form-padding"
                                      placeholder="Perioada de valabilitate a vizei"
                                      disabled={!formData.services.visa}
                                      value={formData.visaDetails.visaDuration}
                                      onChange={(e) => setFormData(prev => ({
                                        ...prev,
                                        visaDetails: {
                                          ...prev.visaDetails,
                                          visaDuration: e.target.value
                                        }
                                      }))}
                                      type="text"
                                      maxLength={3}
                                      id="visa_Duration"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Transfer Service */}
                        <div className="transfers" id="transfers">
                          <div className="row">
                            <div className="col-xs-12 col-sm-3 form-group">
                              <div className="customtagline">
                                <span>Transfer</span>
                                <span className="padding-enquiry-r-0">
                                  <input
                                    type="checkbox"
                                    name="serviceType"
                                    className="EnquiryServices"
                                    checked={formData.services.transfer}
                                    onChange={() => handleServiceToggle('transfer')}
                                    id="sTransfers"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-9 col-xs-12">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group form-group-lg form-group-icon-left">
                                    <label>Preluare din</label>
                                    <input
                                      className="form-control reset-form-padding"
                                      placeholder="Preluare din"
                                      disabled={!formData.services.transfer}
                                      value={formData.transferDetails.fromCity}
                                      onChange={(e) => setFormData(prev => ({
                                        ...prev,
                                        transferDetails: {
                                          ...prev.transferDetails,
                                          fromCity: e.target.value
                                        }
                                      }))}
                                      type="text"
                                      maxLength={100}
                                      id="transferfromcity"
                                    />
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group form-group-lg form-group-icon-left">
                                    <label>Sosire la</label>
                                    <input
                                      className="form-control reset-form-padding"
                                      placeholder="Sosire la"
                                      disabled={!formData.services.transfer}
                                      value={formData.transferDetails.toCity}
                                      onChange={(e) => setFormData(prev => ({
                                        ...prev,
                                        transferDetails: {
                                          ...prev.transferDetails,
                                          toCity: e.target.value
                                        }
                                      }))}
                                      type="text"
                                      maxLength={100}
                                      id="transfertocity"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Car Service */}
                        <div className="car" id="car">
                          <div className="row">
                            <div className="col-xs-12 col-sm-3 form-group">
                              <div className="customtagline">
                                <span>Inchiriere masina</span>
                                <span className="padding-enquiry-r-0">
                                  <input
                                    type="checkbox"
                                    name="serviceType"
                                    className="EnquiryServices"
                                    checked={formData.services.car}
                                    onChange={() => handleServiceToggle('car')}
                                    id="sCar"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-9">
                              <div className="form-group form-group-lg form-group-icon-left">
                                <label>Oras</label>
                                <input
                                  className="form-control reset-form-padding"
                                  placeholder="Oras"
                                  disabled={!formData.services.car}
                                  value={formData.carDetails.city}
                                  onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    carDetails: {
                                      ...prev.carDetails,
                                      city: e.target.value
                                    }
                                  }))}
                                  type="text"
                                  maxLength={100}
                                  id="carcity"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xs-12 col-sm-3">
                              <div className="customtagline hidden-sm hidden-xs"><span></span></div>
                            </div>
                            <div className="col-sm-9 col-xs-12">
                              <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                  <div className="form-group form-group-lg form-group-icon-left">
                                    <label>Tip</label>
                                    <div className="row">
                                      <div className="col-xs-6 col-sm-6">
                                        <div className="radio radio-mm">
                                          <label className="padding-l-0">
                                            <input
                                              type="radio"
                                              className="radioBtnClass"
                                              name="cartype"
                                              disabled={!formData.services.car}
                                              checked={formData.carDetails.type === 'BUS'}
                                              onChange={() => setFormData(prev => ({
                                                ...prev,
                                                carDetails: {
                                                  ...prev.carDetails,
                                                  type: 'BUS'
                                                }
                                              }))}
                                              id="cartypeBus"
                                              value="BUS"
                                            />
                                            autocar
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-xs-6 col-sm-6">
                                        <div className="radio radio-mm">
                                          <label>
                                            <input
                                              type="radio"
                                              className="radioBtnClass"
                                              name="cartype"
                                              disabled={!formData.services.car}
                                              checked={formData.carDetails.type === 'Mini Van'}
                                              onChange={() => setFormData(prev => ({
                                                ...prev,
                                                carDetails: {
                                                  ...prev.carDetails,
                                                  type: 'Mini Van'
                                                }
                                              }))}
                                              id="cartypevan"
                                              value="Mini Van"
                                            />
                                            minibus
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                  <div className="form-group form-group-lg form-group-icon-left">
                                    <label>condusa de sofer</label>
                                    <div className="row">
                                      <div className="col-xs-6 col-sm-6">
                                        <div className="radio radio-mm">
                                          <label>
                                            <input
                                              type="radio"
                                              className="radioBtnClass carChuffred"
                                              name="carChuffred"
                                              disabled={!formData.services.car}
                                              checked={!formData.carDetails.withDriver}
                                              onChange={() => setFormData(prev => ({
                                                ...prev,
                                                carDetails: {
                                                  ...prev.carDetails,
                                                  withDriver: false
                                                }
                                              }))}
                                              id="Chuffredno"
                                              value="No"
                                            />
                                            Nu
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-xs-6 col-sm-6">
                                        <div className="radio radio-mm">
                                          <label>
                                            <input
                                              type="radio"
                                              className="radioBtnClass carChuffred"
                                              name="carChuffred"
                                              disabled={!formData.services.car}
                                              checked={formData.carDetails.withDriver}
                                              onChange={() => setFormData(prev => ({
                                                ...prev,
                                                carDetails: {
                                                  ...prev.carDetails,
                                                  withDriver: true
                                                }
                                              }))}
                                              id="Chuffredyes"
                                              value="Yes"
                                            />
                                            da
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Package Service */}
                        <div className="Package" id="Package">
                          <div className="row">
                            <div className="col-xs-12 col-sm-3 form-group">
                              <div className="customtagline">
                                <span>Pachet de calatorie</span>
                                <span className="padding-enquiry-r-0">
                                  <input
                                    type="checkbox"
                                    name="serviceType"
                                    className="EnquiryServices"
                                    checked={formData.services.package}
                                    onChange={() => handleServiceToggle('package')}
                                    id="sPackage"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-9">
                              <div className="form-group form-group-lg form-group-icon-left">
                                <textarea
                                  className="form-control reset-form-padding"
                                  rows={5}
                                  style={{ height: '55px' }}
                                  maxLength={500}
                                  placeholder="Va rugam sa ne spuneti cerintele dvs despre pachetul de calatorie cautat"
                                  disabled={!formData.services.package}
                                  value={formData.packageDetails}
                                  onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    packageDetails: e.target.value
                                  }))}
                                  id="PackageRQ"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                     
                      </div>

                  
                      <div className="row responsive-row">
                        <div className="col-xs-6">
                          <button type="button" className="full-width" onClick={handleReset} id="enquiryreset">
                            Reset
                          </button>
                        </div>
                        <div className="col-xs-6">
                          <button type="submit" className="full-width" id="enquirysubmit">
                            INREGISTREAZA CERERE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}