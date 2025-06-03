// import { redirect } from "next/navigation";

// export default function EmptyPage() {
// 	redirect("/default-channel");
// }

import React from "react";

import { Category } from "./Category";

import {EditorsPickSection} from "./EditorsPickSection";
import {RitualSection} from "./RitualSection";
import {FeaturedProductsSection} from "./FeaturedProductsSection";
import {ReviewsSection} from "./ReviewsSection";
import {PromoSection} from "./PromoSection";
import {PromiseSection} from "./PromiseSection";
import { NewsletterSection } from "./NewsletterSection";
import { HeroSection } from "./HeroSection";
import { Header } from "@/ui/components/Header";
import { Footer } from "@/ui/components/Footer";


export default function Page() {
  return (
    <div>
      <Header channel="default-channel"/>
      <HeroSection />
      <Category />
      <EditorsPickSection />
      <RitualSection />
      <FeaturedProductsSection />
      <ReviewsSection />
      <PromoSection />
      <PromiseSection />
      <NewsletterSection /> 
      <Footer channel="default-channel"/>
      </div>);
}
