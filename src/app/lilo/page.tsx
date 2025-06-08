
import { Footer } from "@/ui/components/Footer";
import { ProductDetailPage } from "./ProductDetailPage";
import { Header } from "@/ui/components/Header";

function dog() {
  return (
    <>
      <Header channel="us" />
      <ProductDetailPage />
      <Footer channel="us" />
    </>
  );
}

export default dog;