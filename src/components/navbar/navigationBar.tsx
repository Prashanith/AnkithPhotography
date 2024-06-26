import { useState } from "react";
import { Sidebar } from "./sideBar";
import { motion } from "framer-motion";
import { ANIM_DURATION, ANIM_TYPE, DELAY } from "../../config/animConfig";
import { useLocation, useNavigate } from "react-router-dom";

export interface NavItem {
  label: string;
  path: string;
}

interface NavbarProps {
  navItems: NavItem[] | [];
  currentIndex: number;
  navigate: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar = ({ navItems }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showSideNav, setshowSideNav] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-row z-[11] w-full items-center mb-2 md:mb-4 lg:mb-6 xl:mb-8 mt-1 md:mt-2 lg:mt-3 xl:mt-4 pagePadding`}
    >
      {/* side navigation bar */}
      <Sidebar
        show={showSideNav}
        setShow={setshowSideNav}
        navItems={navItems}
      />

      <div className="relative flex-1 flex justify-center lg:justify-between shadow-md items-center py-5 border-b-secondary border-b-2">
        {/* {Brand} */}

        <motion.div
          className="w-2/6 sm:w-1/4 md:w-2/12 lg:3/12 xl:1/12"
          style={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: ANIM_DURATION,
            delay: DELAY,
            type: ANIM_TYPE,
          }}
        >
          <img src="/assets/logo.png" alt="" />
        </motion.div>

        <motion.div
          className="absolute lg:relative right-0 top-1/3 p-0 m-0 lg:hidden"
          style={{ x: +200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: ANIM_DURATION,
            delay: DELAY,
            type: ANIM_TYPE,
          }}
        >
          <span
            className="material-symbols-outlined align-middle lg:hidden"
            onClick={(e) => {
              e.preventDefault();
              setshowSideNav(!showSideNav);
            }}
          >
            menu
          </span>
        </motion.div>

        {/* Navigation Items */}
        <div className="hidden md:justify-items-center gap-6 lg:flex flex-row ">
          {navItems.map((item: NavItem) => {
            const isActive = location.pathname.includes(item.path);
            return (
              <motion.div
                style={{ x: +200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: ANIM_DURATION,
                  delay: DELAY,
                  type: ANIM_TYPE,
                }}
                key={item.label}
                className={` h-full w-full
                flex justify-center items-center 
                p-5
                relative
                cursor-pointer 
                uppercase
                anchor
                `}
                onClick={() => navigate(item.path)}
              >
                {isActive && (
                  <div className="h-[0.2rem] rounded-full  w-[90%] ml-[0.2rem] bottom-0 absolute  ">
                    {" "}
                  </div>
                )}
                <span className=" font-poppins  ml-1">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
