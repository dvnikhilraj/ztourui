"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { ActivityWaiting } from "@components/activity/activityWaiting";
import { ActivityFilter } from "@components/activity/activityFilter";
import { Activity } from "@/types/Activity/activity";
import { ActivityNoResultForm } from "@/app/components/activity/ActivityNoResultForm";
import { useAppSelector } from "@/store";
import type { ActivitySearchRequest } from "@/types/activity.types";

export default function ActivityResultPage() {
  const { t } = useTranslation();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState("price");
  const [sortReverse, setSortReverse] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const { data: companySettings } = useAppSelector(
    (state) => state.companySettings
  );

  const searchParams = useSearchParams();
  const destination = searchParams.get("destination");
  const fromDate = searchParams.get("fromDate");

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      try {
        // Parse URL parameters
        const city = searchParams.get("city") || "";
        const country = searchParams.get("country") || "";
        const searchDate = searchParams.get("searchdate")?.split("$") || [];
        const guest = searchParams.get("guest")?.split("$") || ["1", "0"];
        const otherParam = searchParams.get("otherparam")?.split("$") || [];
        const lang = searchParams.get("lang") || "ro";

        // Create the search request object
        const searchRequest: ActivitySearchRequest = {
          SearchRequest: {
            Master: {
              CityCode: otherParam[3] || "",
              CountryCode: otherParam[2] || "",
              FromDate: searchDate[0] || "",
              ToDate: searchDate[1] || "",
              Nationality: otherParam[2] || "RO",
              ResponseMode: "json",
              Mode: "system",
              CityName: city,
              CountryName: country,
              DisplayCountryCityName: `${city},${country}`,
              LangCode: lang,
              LanguageCode: lang,
            },
            IP: "10.0.50.1",
            UserAgent: "Mozila 5.0/Windows 7",
            Authentication: {
              AuthenticationKey: "52D10A87-FC39-4D84-96D8-54A6203CB415",
              Channel: "B2C",
              OnBehalfBooking: false,
              SubAgent: {
                Id: 0,
                UserId: 0,
                BranchId: 0,
                SaBranchId: 0,
              },
              CompanyId: companySettings?.CompanyId || "ZTO",
              ServiceType: "SightSeeing",
            },
            Filter: {
              Name: "",
              IncludeTours: false,
              OnRequest: false,
              NoOfResults: "12",
              Desc: true,
            },
            Adult: guest[0],
            Child: guest[1] === "0" ? null : guest[1],
          },
        };

        const response = await fetch(
          "https://uat.ztour-travel.ro/Activity/GetActivitySearchResult",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              searchRequest: JSON.stringify(searchRequest),
            }),
          }
        );

        const data = await response.json();
        console.log("Activity Search Response:", data);
        setActivities([]); // Update with actual data mapping
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
              {/* Search Box Wrapper */}
              <div
                className="search-box-wrapper"
                id="modifyNR"
                style={{ display: activities.length === 0 ? "block" : "none" }}
              >
                <ActivityNoResultForm />
              </div>

              <div className="row">
                {/* Filter Sidebar */}
                <div
                  className="col-sm-4 col-md-3 hidden-sm"
                  style={{
                    display: activities.length === 0 ? "none" : "block",
                  }}
                >
                  <div className="toggle-container filters-container hidden-xs">
                    <ActivityFilter
                      activities={activities}
                      onFilterChange={(filters) => {
                        /* handle filters */
                      }}
                    />
                  </div>
                </div>

                {/*No search Results Section */}
                {activities.length === 0 && (
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
