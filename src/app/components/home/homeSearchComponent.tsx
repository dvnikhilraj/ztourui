"use client";
import React, { useState } from "react";
import { ActivityFormComponent } from "./activityFormComponent";
import Image from "next/image";

export function HomeSearchComponent(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState("activity-tab");

  const handleTabClick = (tabId: string, e: React.MouseEvent) => {
    // Only update state for tabs that aren't external links
    if (!e.currentTarget.getAttribute("target")) {
      e.preventDefault();
      setActiveTab(tabId);
    }
  };

  return (
    <>
      <section className="search-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="search-box-wrapper style2">
                <div className="search-box">
                  <ul className="nav nav-pills search-tabs clearfix">
                    {/* <li className={activeTab === "package-tab" ? "active" : ""}>
                      <a
                        href="#package-tab"
                        data-toggle="tab"
                        onClick={(e) => handleTabClick("package-tab", e)}
                      >
                        <div className="tab-back-transparent"></div>
                        <i className="fa fa-suitcase" aria-hidden="true"></i>
                        <span className="hidden-xs hidden-sm">
                          Dynamic Packages
                        </span>
                      </a>
                    </li>

                    <li>
                      <a href="https://charter.ztour-travel.ro" target="_blank">
                        <div className="tab-back-transparent"></div>
                        <i className="fa fa-suitcase"></i>
                        <span className="hidden-xs hidden-sm">Charter</span>
                      </a>
                    </li>

                    <li className={activeTab === "flights-tab" ? "active" : ""}>
                      <a
                        href="#flights-tab"
                        data-toggle="tab"
                        onClick={(e) => handleTabClick("flights-tab", e)}
                      >
                        <div className="tab-back-transparent"></div>
                        <i className="fa fa-plane-departure"></i>
                        <span className="hidden-xs hidden-sm">Flights</span>
                      </a>
                    </li>

                    <li className={activeTab === "hotels-tab" ? "active" : ""}>
                      <a
                        href="#hotels-tab"
                        data-toggle="tab"
                        onClick={(e) => handleTabClick("hotels-tab", e)}
                      >
                        <div className="tab-back-transparent"></div>
                        <i className="fa fa-hotel"></i>
                        <span className="hidden-xs hidden-sm">Hotels</span>
                      </a>
                    </li> */}

                    <li
                      className={activeTab === "activity-tab" ? "active" : ""}
                    >
                      <a
                        href="#activity-tab"
                        data-toggle="tab"
                        onClick={(e) => handleTabClick("activity-tab", e)}
                      >
                        <div className="tab-back-transparent"></div>
                        <i className="fa fa-umbrella"></i>
                        <span className="hidden-xs hidden-sm">Activities</span>
                      </a>
                    </li>

                    {/* <li>
                      <a
                        href="https://charter.ztour-travel.ro/tours"
                        target="_blank"
                      >
                        <div className="tab-back-transparent"></div>
                        <i className="fa fa-bus"></i>
                        <span className="hidden-xs hidden-sm">Tours</span>
                      </a>
                    </li>

                    <li
                      className={activeTab === "transfer-tab" ? "active" : ""}
                    >
                      <a
                        href="#transfer-tab"
                        data-toggle="tab"
                        onClick={(e) => handleTabClick("transfer-tab", e)}
                      >
                        <div className="tab-back-transparent"></div>
                        <i className="fa fa-taxi"></i>
                        <span className="hidden-xs hidden-sm">Transfers</span>
                      </a>
                    </li>

                    <li
                      className={
                        activeTab === "flighthotel-tab" ? "active" : ""
                      }
                    >
                      <a
                        href="#flighthotel-tab"
                        data-toggle="tab"
                        onClick={(e) => handleTabClick("flighthotel-tab", e)}
                      >
                        <div className="tab-back-transparent"></div>
                        <i className="fa fa-plane-departure"></i>
                        <i className="fa fa-hotel"></i>
                        <span className="hidden-xs hidden-sm text-capitalize">
                          Flights + Hotels
                        </span>
                      </a>
                    </li>

                    <li
                      className={activeTab === "insurance-tab" ? "active" : ""}
                    >
                      <a
                        href="#insurance-tab"
                        data-toggle="pill"
                        onClick={(e) => handleTabClick("insurance-tab", e)}
                      >
                        <div className="tab-back-transparent"></div>
                        <i className="fas fa-shield-alt"></i>
                        <span className="hidden-xs hidden-sm">Insurance</span>
                      </a>
                    </li> */}
                  </ul>
                  <div className="search-tab-content">
                    <ActivityFormComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
