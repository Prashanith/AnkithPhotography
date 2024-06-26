import { useState } from "react";
import Footer from "./footer/footer";
import Navbar from "../../components/navbar/navigationBar";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(3);
  return (
    <motion.div className="px-4 sm:px-0 w-full md:w-10/12 mx-auto flex flex-col items-center justify-center">
      <Navbar
        navItems={[
          {
            label: "Gallery",
          },
          {
            label: "Contact",
          },
          {
            label: "Stories",
          },
          {
            label: "About",
          },
        ]}
        navigate={setCurrentIndex}
        currentIndex={currentIndex}
      />

      <div className="pagePadding">
        <Outlet />
      </div>
      <Footer />
    </motion.div>
  );
}

export default LandingPage;
