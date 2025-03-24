"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchCompanySettings } from "@store/reducers/companySettingsSlice";
import { HomeBannerCarousel } from "./components/home/homeBannerCarousel";
import { HomeSearchComponent } from "./components/home/homeSearchComponent";
import { ExoticHolidaysComponent } from "./components/home/exoticHolidaysComponent";
import { PackageCharterComponent } from "./components/home/packageCharterComponent";
import { AboutUsComponent } from "./components/home/aboutUsComponent";
import { PartnersComponent } from "./components/home/partnersComponent";

export default function Home() {
  const dispatch = useAppDispatch();
  const {
    data: companySettings,
    loading,
    error,
  } = useAppSelector((state) => state.companySettings);

  useEffect(() => {
    if (!companySettings) {
      dispatch(fetchCompanySettings());
    }
  }, [dispatch, companySettings]);

  if (loading) {
    return <div>Loading company settings...</div>;
  }

  if (error) {
    return <div>Error loading company settings: {error}</div>;
  }

  return (
    <div id="main">
      <HomeBannerCarousel />
      <HomeSearchComponent />
      <div id="content" style={{ minHeight: "338px" }}>
        <ExoticHolidaysComponent />
        <PackageCharterComponent />
        <AboutUsComponent />
        <PartnersComponent />
      </div>
    </div>
  );
}
