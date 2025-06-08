// import { redirect } from "next/navigation";

// export default function EmptyPage() {
// 	redirect("/default-channel");
// }

import React from "react";

import { Category } from "./components/Category";

import {EditorsPickSection} from "./components/EditorsPickSection";
import {RitualSection} from "./components/RitualSection";
import {FeaturedProductsSection} from "./components/FeaturedProductsSection";
import {ReviewsSection} from "./components/ReviewsSection";
import {PromoSection} from "./components/PromoSection";
import {PromiseSection} from "./components/PromiseSection";
import { NewsletterSection } from "./components/NewsletterSection";
import { HeroSection } from "./components/HeroSection";
import { type ProductListItemFragment } from "@/gql/graphql";

// import { Header } from "@/ui/components/Header";
// import { Footer } from "@/ui/components/Footer";


export default function HomePage({ channel }: { channel: string }) {
  return (
    <div>
      {/* <Header channel="default-channel"/> */}
      <HeroSection />
      <Category />
      <EditorsPickSection />
      <RitualSection />
      <FeaturedProductsSection channel={channel} />
      <ReviewsSection />
      <PromoSection />
      <PromiseSection />
      <NewsletterSection /> 
      {/* <Footer channel="default-channel"/> */}
      </div>);
}
