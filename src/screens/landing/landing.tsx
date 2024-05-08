import { useState } from "react";
import Gallery from "./gallery/gallery";
import Contact from "./contact/contact";
import Stories from "./stories/stories";
import About from "./about/about";
import Footer from "./footer/footer";
import Navbar from "../../components/navbar/navigationBar";

function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="px-4 sm:px-0 w-full md:w-10/12 mx-auto flex flex-col items-center justify-center">
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

      <div className="py-10">
        {
          {
            0: <Gallery />,
            1: <Contact />,
            2: <Stories />,
            3: <About />,
          }[currentIndex]
        }
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
