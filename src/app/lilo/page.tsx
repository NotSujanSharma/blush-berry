
import { Footer } from "@/ui/components/Footer";
import {ProductDetailPage} from "./ProductDetailPage";
import { Header } from "@/ui/components/Header";

function dog() {
    return (
      <>
        <Header channel="default-channel" />
        <ProductDetailPage />
        <Footer channel="default-channel" />
      </>
    );
  }
  
  export default dog;