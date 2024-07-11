import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PehnavaPage from "./pages/PehnavaPage";
import LocalSellerspashmina from "./pages/LocalSellerspashmina";
import LocationPagerajasthan from "./pages/LocationPagerajasthan";
import LocationPagesrinagar from "./pages/LocationPagesrinagar";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/pehnava-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/local-sellerspashmina":
        title = "";
        metaDescription = "";
        break;
      case "/location-pagerajasthan":
        title = "";
        metaDescription = "";
        break;
      case "/location-pagesrinagar":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pehnava-page-1" element={<PehnavaPage />} />
      <Route path="/local-sellerspashmina" element={<LocalSellerspashmina />} />
      <Route
        path="/location-pagerajasthan"
        element={<LocationPagerajasthan />}
      />
      <Route path="/location-pagesrinagar" element={<LocationPagesrinagar />} />
    </Routes>
  );
}
export default App;
