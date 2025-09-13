import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import AboutUsPage from "./pages/about";
import LandingPage from "./pages/landingPage";
import OurServices from "./pages/ourServices";
import ServicesDetails from "./pages/servicesDitales";
import OurProducts from "./pages/ourProducts";
import Details from "./pages/oroginalProducts";
import Contact from "./pages/contactUs";
import FAQPage from "./pages/FAQ";
import PrivacyPopcy from "./pages/privacy";
import Terms from "./pages/terms";
import SalesRefunds from "./pages/sales";
import LegalNotice from "./pages/legal";
import Loading from "./components/loading";
import OfflineScreen from "./components/OfflineScreen";
import useOnlineStatus from "./hooks/useOnlineStatus";



function App() {
  const location = useLocation();
  const [loadingDone, setLoadingDone] = useState(false);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    setLoadingDone(false);
  }, [location.pathname]);

  if (!isOnline) {
    return <OfflineScreen />;
  }

  return (
    <>
      {!loadingDone ? (
        <Loading onFinish={() => setLoadingDone(true)} />
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/ourServices" element={<OurServices />} />
          <Route path="/services/:id" element={<ServicesDetails />} />
          <Route path="/ourProducts" element={<OurProducts />} />
          <Route path="/oroginalProducts/:id" element={<Details />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPopcy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sales" element={<SalesRefunds />} />
          <Route path="/legal" element={<LegalNotice />} />
        </Routes>
      )}
    </>
  );
}

export default App;
