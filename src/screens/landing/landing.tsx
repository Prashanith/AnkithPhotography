import  { useState } from "react";
import Gallery from "./gallery/gallery";
import Contact from "./contact/contact";
import Stories from "./stories/stories";
import About from "./about/about";
import Footer from "./footer/footer";

function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="px-4 sm:px-0 w-full md:w-10/12 mx-auto flex flex-col  items-center">
      <div className="flex flex-row justify-between items-center pt-10">
        <img
          src="/assets/logo.png"
          alt=""
          className="w-3/5 sm:w-2/5 md:w-2/12 xl:1/12"
        />
        <ul className="flex uppercase space-x-10">
          <li onClick={() => setCurrentIndex(0)} className="anchor">Gallery</li>
          <li onClick={() => setCurrentIndex(1)} className="anchor">Contact</li>
          <li onClick={() => setCurrentIndex(2)} className="anchor">Stories</li>
          <li onClick={() => setCurrentIndex(3)} className="anchor">About</li>
        </ul>
      </div>

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
      <Footer/>
    </div>
  );
}

export default LandingPage;
