import Footer from "./footer/footer";
import Navbar from "../../components/navbar/navigationBar";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

function LandingPage() {
  return (
    <motion.div className="w-full md:w-10/12 mx-auto flex flex-col items-center justify-center">
      <Navbar
        navItems={[
          {
            label: "Gallery",
            path: "/gallery",
          },
          {
            label: "Contact",
            path: "/contact",
          },
          {
            label: "Stories",
            path: "stories",
          },
          {
            label: "About",
            path: "about",
          },
        ]}
      />

      <div className="pagePadding py-4 md:py-0 lg:py-0 xl:py-0">
        <Outlet />
      </div>
      <Footer />
    </motion.div>
  );
}

export default LandingPage;
