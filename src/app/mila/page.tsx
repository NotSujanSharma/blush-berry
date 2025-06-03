
import { Footer } from "@/ui/components/Footer";
import {ProductsPage} from "./ProductsPage";
import { Header } from "@/ui/components/Header";

function dog() {
    return (
      <>
        <Header channel="default-channel" />
        <ProductsPage />
        <Footer channel="default-channel" />
      </>
    );
  }
  
  export default dog;