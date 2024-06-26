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

      <div className="pagePadding">
        <Outlet />
      </div>
      <Footer />
    </motion.div>
  );
}

export default LandingPage;
