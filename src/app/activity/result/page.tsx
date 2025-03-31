"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import {ActivityListItem} from "@components/activity/result/activityListItem";
import { apiPaths } from "@/config/apiPaths";
// import {  } from "next/router";
import { ActivityWaiting } from "@components/activity/activityWaiting";
import { ActivityPageTitle } from "@components/activity/result/activityPageTitle";
import {
  ActivityApiSearchResponse,
  SightSeeing,
} from "@/types/ApiModels/Activity/ActivityApiResponse";
import { ActivityResultFilter } from "@components/activity/result/activityResultFilter";
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
          SightId: 2,
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
            <div className="row" style={{
                display:
                  activityResponse?.SearchResponse?.SightSeeings?.SightSeeing
                    ?.length === 0
                    ? "block"
                    : "none",
              }}>
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
            <div className="row" style={{
                display:
                  activityResponse?.SearchResponse?.SightSeeings?.SightSeeing
                    ?.length === 0
                    ? "none"
                    : "block",
              }}>
              <ActivityPageTitle activityResponse={activityResponse} />
              <ActivityResultFilter
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
              
              {(activityResponse?.SearchResponse?.SightSeeings?.SightSeeing?.length ?? 0) > 0 && (
                <>
                  <div className="container__HTBo">
                    <div className="row__9U33" style={{ alignItems: "normal", justifyContent: "flex-start", flexDirection: "row", flexWrap: "wrap" }}>
                      <div className="col__BXMO" style={{ width: "100%", flex: "0 0 100%", maxWidth: "100%", marginLeft: "0%", right: "auto", left: "auto" }}>
                        <div className="productListContainer__SfTG">
                          <div className="productListProductsAndSortByContainer__kSLc fullGrid__W3ET">
                            <div className="productGridHeaderContainer__RY8b">
                              <div className="productListResultsCounterSection__ms8h">
                                <h2 className="productListCountLabel__OduT" data-automation="ttd-product-list-header-count" data-total-count={activityResponse?.SearchResponse?.SightSeeings?.SightSeeing?.length || 0}>
                                  {activityResponse?.SearchResponse?.SightSeeings?.SightSeeing?.length || 0} results
                                </h2>
                            
                              </div>
                              <div className="productListDisclaimerAndSortBy__aUG9">
                                <div className="productListSortBy__DESF" data-automation="ttd-product-list-header-sort-by-dropdown-wrapper">
                                  <div className="sortByOptionSelect__NTir css-0">
                                    <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span>
                                    <div className="control__nika css-0" data-automation="ttd-product-list-header-sort-by">
                                      <div className="valueContainer__eF5m css-0">
                                        <div className="singleValue__uWCY css-0">Sort by: <b>{sortType === "price" ? "Price" : "Featured"}</b></div>
                                        <input id="react-select-3-input" readOnly tabIndex={0} aria-autocomplete="list" className="css-62g3xt-dummyInput" value="" />
                                      </div>
                                      <div className="css-0">
                                        <div className="dropdownIndicator__gk9R css-0" aria-hidden="true" onClick={() => handleSort(sortType === "price" ? "featured" : "price")}>
                                          <svg width="16" height="16" viewBox="0 0 16 16" className="icon__UJ21">
                                            <path d="M11.72 5.34a.75.75 0 111.06 1.06l-4.25 4.26c-.3.29-.77.29-1.06 0L3.22 6.4a.75.75 0 011.06-1.06L8 9.06l3.72-3.72z"></path>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <input name="sortBy" type="hidden" value={sortType.toUpperCase()} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gridLayout__BQQv" data-automation="ttd-product-list">
                              {activityResponse?.SearchResponse?.SightSeeings?.SightSeeing.map((activity, index) => (
                                <ActivityListItem key={`${activity.SightId}-${index}`} activity={activity} />
                              ))}
                            </div>

                            {(activityResponse?.SearchResponse?.SightSeeings?.SightSeeing ?? []).length > 10 && (
                              <div className="productListPagination__q9yR">
                                <div data-automation="ttd-product-list-pagination" className="paginationContainer__zrpT">
                                  <a aria-label="Page 1 of 1" aria-pressed="true" href="#" className="paginationItem__gtXG selected__edVo">1</a>
                                </div>
                              </div>
                            )}
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
