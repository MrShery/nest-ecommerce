import { lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
const TopCategories = lazy(() => import("./Pages/Home/Sections/TopCategories"));
const BannerSection = lazy(() => import("./Pages/Home/Sections/BannerSection"));
const PopularProducts = lazy(() => import("./Pages/Home/Sections/PopularProducts"));
const ProductOverviewSection = lazy(() => import("./Pages/Home/Sections/ProductOverviewSection"));
const SubscriptionCTASection = lazy(() => import("./Pages/Home/Sections/SubscriptionCTASection"));
const ServicesSection = lazy(() => import("./Pages/Home/Sections/ServicesSection"));
const Footer = lazy(() => import("./Components/Footer"));
const MainSlider = lazy(() => import("./Pages/Home/Sections/MainSlider"));
const WishList = lazy(() => import("./Pages/WishList/WishList"));
const CartPage = lazy(() => import("./Pages/Cart/CartPage"));
const ComparePage = lazy(() => import("./Pages/Compare/ComparePage"));
const ShopPage = lazy(() => import("./Pages/Shop/ShopPage"));

function Home() {
  const products = useSelector((state) => state.allProducts);

  return (
   <Suspense>
     <section className="flex flex-wrap gap-4 justify-center">
      {/* <ComparePage/> */}
      <MainSlider />
      <TopCategories />
      <BannerSection />
      <PopularProducts products={products} />
      <ProductOverviewSection />
      <SubscriptionCTASection
        heading="Stay home & get your daily"
        brHeading="needs from our shop"
        subHeading="Start Your Daily Shopping with Nest Mart"
      bgImg="https://nest.botble.com/themes/nest/imgs/banner/banner-10.png"/>
      <ServicesSection />
    </section>
   </Suspense>
  );
}


export default Home;
