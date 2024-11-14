import { useState } from "react";
import { Sidebar } from "./sideBar";
import { motion } from "framer-motion";
import { ANIM_DURATION, ANIM_TYPE, DELAY } from "../../config/animConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export interface NavItem {
  label: string;
  path: string;
  children: NavItem[];
}

interface NavbarProps {
  navItems: NavItem[] | [];
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

      <div className="relative flex-1 flex justify-center lg:justify-between items-center py-5 border-b-primary border-b-2">
        {/* {Brand} */}

        <motion.div
          onClick={() => navigate("/home")}
          className="w-1/4 sm:w-1/4 md:w-2/12 lg:3/12 xl:1/12 cursor-pointer"
          style={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: ANIM_DURATION,
            delay: DELAY,
            type: ANIM_TYPE,
          }}
        >
          <img
            src="/assets/logo.png"
            alt=""
            className={`text-secondary grayscale brightness-0`}
          />
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
        <div className="hidden lg:flex justify-center md:items-center md:flex-row">
          {navItems.map((item) => (
            <NavItemView
              key={item.label}
              label={item.label}
              path={item.path}
              children={item.children}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface INavItemViewProps {
  items: NavItem[];
}

function NavItemsView({ items }: INavItemViewProps) {
  return (
    <div className="flex flex-col justify-start items-start">
      {items.map((item: NavItem) => (
        <NavItemView
          label={item.label}
          path={item.path}
          children={item.children}
        />
      ))}
    </div>
  );
}

function NavItemView({ label, path, children }: NavItem) {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();
  const isHome = location.pathname.includes("/home");
  const isActive = location.pathname.includes(path);
  
  return (
    <motion.div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{ x: +200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: ANIM_DURATION,
        delay: DELAY,
        type: ANIM_TYPE,
      }}
      key={label}
      className={`
        ${isActive ? "underline" : "no-underline"}
        ${isHome ? "text-secondary" : "text-primary"} h-full w-full
        flex justify-start items-center p-5 relative cursor-pointer 
        uppercase anchor`}
      onClick={() =>
        children.length == 0 ? navigate(path) : setIsVisible(true)
      }
    >
      <span
        className={`font-poppins ml-1 flex flex-row justify-center items-center`}
      >
        {label}
        {children.length > 0 && <FaChevronDown className="ml-2 text-xs" />}
      </span>

      {children.length > 0 && isVisible && (
        <div
          className={`absolute top-full left-0 ${
            isHome ? "bg-tertiary shadow-sm shadow-primary" : "bg-secondary shadow-primary/10 shadow-lg"
          } rounded-lg whitespace-nowrap`}
        >
          {/* {JSON.stringify(isHome)} */}
          <NavItemsView items={children} />
        </div>
      )}
    </motion.div>
  );
}

export default Navbar;
