import { useRef } from "react";
import Home from "../components/home";
import Aboutus from "../components/aboutus";
import Order from "../components/order";
import FAQ from "../components/FAQ";
import Footer from "../components/footer";

function LandingPage() {
  const faqRef = useRef<HTMLDivElement>(null);
  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Home />
      <Aboutus onFaqClick={scrollToFaq} mode="scrol" />
      <Order />
      <div ref={faqRef}>
        <FAQ />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
