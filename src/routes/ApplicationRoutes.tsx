import { Route, Routes } from "react-router-dom";
import SplashScreen from "../screens/splash/splashScreen";
import LandingPage from "../screens/landing/landing";
import Gallery from "../screens/landing/gallery/gallery";
import Contact from "../screens/landing/contact/contact";
import Stories from "../screens/landing/stories/stories";
import About from "../screens/landing/about/about";
import Home from "../screens/home/home";

function ApplicationRoutes() {
  return (
    <Routes>
      <Route element={<SplashScreen />} path="/" />
      <Route element={<LandingPage />}>
        <Route element={<Home />} path="/home"></Route>
        <Route element={<Gallery />} path="/gallery"></Route>
        <Route element={<Contact />} path="/contact"></Route>
        <Route element={<Stories />} path="/stories"></Route>
        <Route element={<About />} path="/about"></Route>
      </Route>
    </Routes>
  );
}

export default ApplicationRoutes;
