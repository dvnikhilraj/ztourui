import { HomeBannerCarousel } from "./components/home/homeBannerCarousel";
import { HomeSearchComponent } from "./components/home/homeSearchComponent";
import { ExoticHolidaysComponent } from "./components/home/exoticHolidaysComponent";
import { PackageCharterComponent } from "./components/home/packageCharterComponent";
import { AboutUsComponent } from "./components/home/aboutUsComponent";
import { PartnersComponent } from "./components/home/partnersComponent";
// import { redirect } from 'next/navigation';
// import { paths } from '../paths';

export default function Home() {
  return (
    <>
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
    </>
  );
}
