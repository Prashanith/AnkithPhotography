import { Route, Routes } from "react-router-dom";
import SplashScreen from "../screens/splash/splashScreen";
import LandingPage from "../screens/landing/landing";

function ApplicationRoutes() {
  return (
    <Routes>
      <Route element={<SplashScreen />} path="/" />
      <Route element={<LandingPage />} path="/home"></Route>
    </Routes>
  );
}

export default ApplicationRoutes;
