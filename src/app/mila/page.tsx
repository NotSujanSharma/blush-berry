
import { Footer } from "@/ui/components/Footer";
import { ProductsPage } from "./ProductsPage";
import { Header } from "@/ui/components/Header";

function dog() {
  return (
    <>
      <Header channel="us" />
      <ProductsPage />
      <Footer channel="us" />
    </>
  );
}

export default dog;