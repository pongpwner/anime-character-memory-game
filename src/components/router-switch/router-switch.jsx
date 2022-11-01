import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../home-page/home-page";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
