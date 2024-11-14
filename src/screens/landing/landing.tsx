import Footer from "./footer/footer";
import Navbar from "../../components/navbar/navigationBar";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

function LandingPage() {
  const location = useLocation();

  return (
    <div className={`${location.pathname.includes("home") ? "homeBg" : ""}`}>
      <motion.div
        className={`w-full mx-auto flex flex-col items-center justify-center`}
      >
        <Navbar
          navItems={[
            {
              label: "Home",
              path: "/home",
              children: [],
            },
            {
              label: "Gallery",
              path: "/gallery",
              children: [
                {
                  label: "Pre Wedding",
                  path: "/gallery/preWedding",
                  children: [],
                },
                {
                  label: "Portrait",
                  path: "/gallery/portrait",
                  children: [],
                },
                {
                  label: "Pre Birthday",
                  path: "/gallery/preBirthday",
                  children: [],
                },
              ],
            },
            {
              label: "Contact",
              path: "/contact",
              children: [],
            },
            {
              label: "Stories",
              path: "stories",
              children: [],
            },
            {
              label: "About",
              path: "about",
              children: [],
            },
          ]}
        />
        <div className="pagePadding py-4 md:py-0 lg:py-0 xl:py-0">
          <Outlet />
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default LandingPage;
