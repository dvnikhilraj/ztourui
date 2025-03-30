"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { apiPaths } from "@/config/apiPaths";
// import {  } from "next/router";
import { ActivityWaiting } from "@components/activity/activityWaiting";
import {
  ActivityApiSearchResponse,
  SightSeeing,
} from "@/types/ApiModels/Activity/ActivityApiResponse";
import { ActivityFilter } from "@components/activity/activityFilter";
import { Activity } from "@/types/Activity/activity";
import { ActivityNoResultForm } from "@/app/components/activity/ActivityNoResultForm";
import { useAppSelector } from "@/store";
import type { ActivitySearchRequest } from "@/types/activity.types";
const MOCK_RESPONSE: ActivityApiSearchResponse = {
  SearchResponse: {
    Master: {
      CityCode: "CLU27619",
      CountryCode: "RO",
      FromDate: "04/20/2025",
      ToDate: "04/21/2025",
      Nationality: "RO",
      ResponseMode: "json",
      Mode: "system",
      AdditionalMarkup: "",
      CityName: "Cluj-Napoca",
      CountryName: "Romania",
      LanguageCode: "ro",
      LangCode: "ro",
    },
    Authentication: {
      AuthenticationKey: "52D10A87-FC39-4D84-96D8-54A6203CB415",
      Channel: "B2C",
      OnBehalfBooking: "false",
      SubAgent: {
        Id: "0",
        UserId: "0",
        BranchId: "0",
        SaBranchId: "0",
      },
      CompanyId: "ZTO",
      ServiceType: "SightSeeing",
    },
    SightSeeings: {
      SightSeeing: [
        {
          SightId: 1,
          Code: "1",
          Name: "Day Trip To Turda Salt Mine, Rimetea Village & Col",
          DisplayName: "",
          CityCode: "CLU27619",
          CityName: "Cluj-Napoca",
          Desc: "",
          Duration: "0 Days 8 Hour",
          DurationHours: "",
          Image:
            "http://tcsnego.ztour-travel.ro/AdminSightSeeing/Images/Gallary/ZTO/SightImage/caption_03_20_25_892.jpg",
          Type: "Sightseeing",
          Category: "",
          MinP: "75.00",
          Token: "",
          Provider: "683",
          CID: "NEGO",
          TrackingId: "0324202517570733",
          Tours: {
            Tour: [
              {
                IsAPI: false,
                Id: "1",
                Code: "1",
                Name: "Day Trip To Turda Salt Mine, Rimetea Village & Col",
                DisplayName:
                  "Day Trip To Turda Salt Mine, Rimetea Village & Col",
                TypeCode: "Escorted",
                Duration: "0 Days 8 Hour",
                DurationHours: "0 Days 8 Hour",
                Avl: "Y",
                ROE: "1",
                SuppPrice: "75.0000",
                SuppCurrency: "EUR",
                CompNet: "75.00",
                CompGross: "75.00",
                EPDNet: "75.00",
                EPDGross: "75.00",
                AGNet: "75.00",
                AGGross: "75.00",
                SANet: "75.00",
                SAGross: "75.00",
                GrossPrice: "75.00",
                ProcessToken: "e68d6020-4d15-4192-8152-d02d81906f2c",
                DateList: {
                  Date: [
                    {
                      Text: "04/20/2025",
                    },
                  ],
                },
                CID: "NEGO",
                LoyaltyPoints: "0",
              },
            ],
          },
          LoyaltyPoints: "0",
        },
        {
          SightId: 1,
          Code: "1",
          Name: "Day Trip To Turda Salt Mine, Rimetea Village & Col",
          DisplayName: "",
          CityCode: "CLU27619",
          CityName: "Cluj-Napoca",
          Desc: "",
          Duration: "0 Days 8 Hour",
          DurationHours: "",
          Image:
            "http://tcsnego.ztour-travel.ro/AdminSightSeeing/Images/Gallary/ZTO/SightImage/caption_03_20_25_892.jpg",
          Type: "Sightseeing",
          Category: "",
          MinP: "75.00",
          Token: "",
          Provider: "683",
          CID: "NEGO",
          TrackingId: "0324202517570733",
          Tours: {
            Tour: [
              {
                IsAPI: false,
                Id: "1",
                Code: "1",
                Name: "Day Trip To Turda Salt Mine, Rimetea Village & Col",
                DisplayName:
                  "Day Trip To Turda Salt Mine, Rimetea Village & Col",
                TypeCode: "Escorted",
                Duration: "0 Days 8 Hour",
                DurationHours: "0 Days 8 Hour",
                Avl: "Y",
                ROE: "1",
                SuppPrice: "75.0000",
                SuppCurrency: "EUR",
                CompNet: "75.00",
                CompGross: "75.00",
                EPDNet: "75.00",
                EPDGross: "75.00",
                AGNet: "75.00",
                AGGross: "75.00",
                SANet: "75.00",
                SAGross: "75.00",
                GrossPrice: "75.00",
                ProcessToken: "e68d6020-4d15-4192-8152-d02d81906f2c",
                DateList: {
                  Date: [
                    {
                      Text: "04/20/2025",
                    },
                  ],
                },
                CID: "NEGO",
                LoyaltyPoints: "0",
              },
            ],
          },
          LoyaltyPoints: "0",
        },
      ],
      Currency: "EUR",
      Total: 1,
      TrackingId: "0324202517570733",
    },
  },
};

export default function ActivityResultPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [activityResponse, setActivityResponse] =
    useState<ActivityApiSearchResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState("price");
  const [sortReverse, setSortReverse] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const { data: companySettings } = useAppSelector(
    (state) => state.companySettings
  );

  const searchParams = useSearchParams();
  console.log(searchParams);
  const city = searchParams.get("city") || "";
  const country = searchParams.get("country") || "";
  const searchDate = searchParams.get("searchdate");
  const guest = searchParams.get("guest")?.split("$") || ["1", "0"];
  const otherParam = searchParams.get("otherparam")?.split("$") || [];
  const lang = searchParams.get("lang") || "ro";
  console.log("city");
  console.log(city);
  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      try {

        const searchRequest = {
          Master: {
            CityCode: "CLU27619",
            CountryCode: "RO",
            FromDate: "04/20/2025",
            ToDate: "04/21/2025",
            Nationality: "RO",
            ResponseMode: "json",
            Mode: "system",
            AdditionalMarkup: "",
            CityName: "Cluj-Napoca",
            CountryName: "Romania",
            LanguageCode: "ro",
            LangCode: "ro",
          },
          Authentication: {
            AuthenticationKey: "52D10A87-FC39-4D84-96D8-54A6203CB415",
            Channel: "B2C",
            OnBehalfBooking: "false",
            SubAgent: {
              Id: "0",
              UserId: "0",
              BranchId: "0",
              SaBranchId: "0",
            },
            CompanyId: companySettings?.CompanyId || "ZTO",
            ServiceType: "SightSeeing",
          },
        };
        setActivityResponse(MOCK_RESPONSE);
        // const response = await fetch(
        //   `${apiPaths.basePath}${apiPaths.activities.search}`,
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       searchRequest: JSON.stringify(searchRequest),
        //     }),
        //   }
        // );

        // const data: ActivityApiSearchResponse = await response.json();
        // setActivityResponse(data);
        setActivityResponse(MOCK_RESPONSE);
      } catch (error) {
        console.error("Error fetching activities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [searchParams, companySettings]);

  const handleSort = (type: string): void => {
    setSortType(type);
    setSortReverse(!sortReverse);
  };

  const handleClearFilters = () => {
    // TODO: Implement clear filters logic
  };

  if (loading) {
    return <ActivityWaiting />;
  }

  return (
    <div className="activity-main-wrapper">
      <section id="content" style={{ minHeight: "353px" }}>
        <div className="container">
          <div id="main-1">
         
            <div
              className="search-box-wrapper"
              id="modifyNR"
              style={{
                display:
                  activityResponse?.SearchResponse?.SightSeeings?.SightSeeing
                    ?.length === 0
                    ? "block"
                    : "none",
              }}
            >
              <div className="container">
                <ActivityNoResultForm
                  initialFilters={{
                    city,
                    country,
                    searchDate,
                    guest,
                    otherParam,
                    lang,
                  }}
                />
              </div>
            </div>

            <div className="row">
            
              <div
                className="col-sm-4 col-md-3 hidden-sm"
                style={{
                  display:
                    activityResponse?.SearchResponse?.SightSeeings?.SightSeeing
                      ?.length === 0
                      ? "none"
                      : "block",
                }}
              >
                <div className="toggle-container filters-container hidden-xs">
                  <ActivityFilter
                    activities={activityResponse}
                    onFilterChange={(filters) => {
                   
                    }}
                    initialFilters={{
                      city,
                      country,
                      searchDate,
                      guest,
                      otherParam,
                      lang,
                    }}
                  />
                </div>
              </div>
              {(activityResponse?.SearchResponse?.SightSeeings?.SightSeeing
                ?.length ?? 0) > 0 && (
                  <>
                    <div className="col-sm-12 col-md-9">
                      <div className="sort-by-section clearfix search-details fixresulttop">
                        <ul className="search-criteria sort-bar clearfix block-sm">
                          <li>
                            <label className="search-city">
                              {activityResponse?.SearchResponse?.Master?.CityName}
                            </label>
                            <div>
                              <span className="customDir">
                                <i
                                  className="soap-icon-calendar"
                                  style={{
                                    fontSize: "18px",
                                    verticalAlign: "baseline",
                                  }}
                                ></i>
                                <span style={{ verticalAlign: "inherit" }}>
                                  <span
                                    style={{
                                      verticalAlign: "inherit",
                                      fontWeight: "600",
                                    }}
                                  >
                                    &nbsp;

                                    {
                                      activityResponse?.SearchResponse?.Master?.FromDate &&
                                      new Date(activityResponse.SearchResponse.Master.FromDate).toLocaleDateString("en-US", {
                                        weekday: "short",
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                      })
                                    }
                                    &nbsp;
                                  </span>
                                </span>
                                &nbsp;
                                <i
                                  className="soap-icon-right"
                                  style={{ verticalAlign: "baseline" }}
                                ></i>
                                &nbsp;
                                <i
                                  className="soap-icon-calendar"
                                  style={{
                                    fontSize: "18px",
                                    verticalAlign: "baseline",
                                  }}
                                ></i>
                                &nbsp;
                                <span style={{ verticalAlign: "inherit" }}>
                                  <span
                                    style={{
                                      verticalAlign: "inherit",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {
                                      activityResponse?.SearchResponse?.Master?.ToDate &&
                                      new Date(activityResponse.SearchResponse.Master.ToDate).toLocaleDateString("en-US", {
                                        weekday: "short",
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                      })
                                    }
                                  </span>
                                </span>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="sort-by-section clearfix activity-sort">
                        <div className="row">
                          <div className="col-sm-10 hidden-sm hidden-xs border-rdashed min-height-50">
                            <div className="hidden-xs">
                              <h4 className="sort-by-title block-sm">
                                {t("Sort results by")}
                              </h4>
                              <ul className="sort-bar clearfix block-sm">
                                <li id="minPp" className="sort-by-price">
                                  <a
                                    href="#"
                                    className="sort-by-container"
                                    onClick={() => handleSort("price")}
                                  >
                                    <span>
                                      {t("Price")}
                                      <i
                                        className={`fas fa-long-arrow-alt-${sortType === "price" && sortReverse
                                          ? "down"
                                          : "up"
                                          }`}
                                        style={{
                                          visibility:
                                            sortType === "price"
                                              ? "visible"
                                              : "hidden",
                                        }}
                                      ></i>
                                    </span>
                                  </a>
                                </li>
                                <li className="clearer visible-sms"></li>
                                <li id="durationn" className="sort-by-rating">
                                  <a
                                    href="#"
                                    className="sort-by-container"
                                    onClick={() => handleSort("duration")}
                                  >
                                    <span>
                                      {t("Duration")}
                                      <i
                                        className={`fas fa-long-arrow-alt-${sortType === "duration" && sortReverse
                                          ? "down"
                                          : "up"
                                          }`}
                                        style={{
                                          visibility:
                                            sortType === "duration"
                                              ? "visible"
                                              : "hidden",
                                        }}
                                      ></i>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <h5 className="sort-by-title-total block-sm-total margin-top-0">
                              {
                                activityResponse?.SearchResponse.SightSeeings
                                  .Total
                              }{" "}
                              {(activityResponse?.SearchResponse?.SightSeeings
                                ?.Total ?? 0) > 1
                                ? t("activities.label.activities")
                                : t("activities.label.activity")}
                            </h5>
                          </div>
                        </div>
                      </div>

                      <div
                        className="listing-style3 activity"
                        style={{ marginTop: "10px" }}
                        id="dvResult"
                      >
                        {activityResponse?.SearchResponse.SightSeeings.SightSeeing.map(
                          (activity : SightSeeing) => (
                            <article
                              key={activity.SightId}
                              className="resultBox box"
                            >
                              <div className="row new-design-flex clearfix">
                                <figure className="col-xs-4 col-sm-3 col-md-3">
                                  <a title="" className="hover-effect">
                                    <img
                                      className="img-responsive"
                                      src={
                                        activity.Image ||
                                        "/Images/ZTO/not_avil.jpg"
                                      }
                                      alt={activity.Name}
                                      onError={(e) =>
                                      (e.currentTarget.src =
                                        "/Images/TI/not_avil.jpg")
                                      }
                                    />
                                  </a>
                                </figure>
                                <div className="col-xs-8 col-sm-7 col-md-7 select_hotel">
                                  <div className="activity-name-details">
                                    <h3>
                                      {activity.Name} <br />
                                      <small className="ng-scope">
                                        <span className="capitalize ng-binding">
                                          {t("Duration")}: {activity.Duration}
                                        </span>
                                      </small>
                                    </h3>
                                    <p className="hidden-xs">
                                      {activity.Desc}...
                                    </p>
                                  </div>
                                  <div className="amenities hidden-xs infor-circle">
                                    <a href="#" className="border-round" style={{ marginRight: '2px' }}>
                                      <i className="far fa-money-bill-alt"></i>
                                    </a>
                                    <a href="#" className="border-round" style={{ marginRight: '2px' }}>
                                      <i className="fas fa-info"></i>
                                    </a>
                                    <a href="#" className="border-round" style={{ marginRight: '2px' }}>
                                      <i className="far fa-image"></i>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-2 col-sm-2 hidden-xs">
                                  <div className="total-activity-price_result">
                                    <div className="total-activity-price price-wrapper-new">
                                      <span className="price">
                                        <small>
                                          {
                                            activityResponse.SearchResponse
                                              .SightSeeings.Currency
                                          }
                                        </small>{" "}
                                        {activity.MinP}
                                      </span>
                                    </div>
                                    <div className="activity-select">
                                      <button
                                        className="full-width button btn-small icon-check"
                                        onClick={() => {
                                          const activityDetails = {
                                              id: activity.SightId.toString(),
                                              name: activity.Name,
                                              city: activity.CityName,
                                              duration: activity.Duration,
                                              price: activity.MinP,
                                              currency: activityResponse?.SearchResponse?.SightSeeings?.Currency,
                                              image: activity.Image,
                                              fromDate: activityResponse?.SearchResponse?.Master?.FromDate || "",
                                          };
                                          
                                        
                                          router.push(
                                              `/activity/details?${new URLSearchParams(
                                                  activityDetails
                                              ).toString()}`
                                          );
                                        }}
                                      >
                                        {t("Select")}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="visible-xs earnpoint-price-res visible-xs">
                                <div className="col-xs-12">
                                  <div className="row">
                                    <div className="col-xs-6">{t("Price")}</div>
                                    <div className="price-responsive text-right col-xs-6">
                                      <small>
                                        {
                                          activityResponse.SearchResponse
                                            .SightSeeings.Currency
                                        }
                                      </small>{" "}
                                      {activity.MinP}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </article>
                          )
                        )}
                      </div>
                    </div>
                  </>
                )}

              {/*No search Results Section */}
              {activityResponse?.SearchResponse?.SightSeeings?.SightSeeing
                ?.length === 0 && (
                  <>
                    <div className="col-md-12">
                      <div
                        id="noResult"
                        className="text-center nofilterresult margin-top-10 clearfix"
                        style={{
                          background: "#fff",
                          padding: "30px",
                          textAlign: "left",
                        }}
                      >
                        <div className="row">
                          <div
                            className="col-lg-2 col-md-2 col-sm-3 hidden-xs text-center"
                            style={{ borderRight: "1px solid #eaeaea" }}
                          >
                            <i className="fas fa-link fa-7x"></i>
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-9">
                            <h2>{t("activities.noResults.title")}</h2>
                            <div style={{ color: "#9e9e9e", fontSize: "16px" }}>
                              <b className="blink_me">
                                {t("activities.noResults.subtitle")}
                              </b>
                            </div>
                            <div className="txt" style={{ color: "#9e9e9e" }}>
                              {t("activities.noResults.message")}
                            </div>
                            <div
                              className="txt"
                              style={{ color: "#9e9e9e", fontSize: "11px" }}
                            >
                              {t("activities.noResults.suggestion")}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
