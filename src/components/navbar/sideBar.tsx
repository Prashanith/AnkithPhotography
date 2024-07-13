import { useNavigate } from "react-router-dom";
import { ANIM_DURATION, ANIM_TYPE, DELAY } from "../../config/animConfig";
import { NavItem } from "./navigationBar";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface SidebarProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  navItems: NavItem[] | [];
}

export const Sidebar = ({ show, setShow, navItems }: SidebarProps) => {
  const navigate = useNavigate();

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    exit: { opacity: 0 },
  };
  const sidebar = {
    visible: { x: "0" },
    hidden: { x: "-100vw" },
    exit: { x: "-100vw" },
  };

  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          key={"kdbkjd.kdj"}
          variants={variants}
          animate="visible"
          transition={{
            duration: ANIM_DURATION,
            type: ANIM_TYPE,
            delay: DELAY,
          }}
          exit="exit"
          initial="hidden"
        >
          <div
            onClick={() => {
              setShow(false);
            }}
            className="fixed top-0 left-0  w-full h-screen bottom-0  z-20 "
          >
            <motion.div
              key={"dhjbuk"}
              variants={sidebar}
              animate="visible"
              exit="exit"
              transition={{
                type: "tween",
                duration: ANIM_DURATION,
                ease: "easeOut",
                delay: DELAY,
              }}
              initial="hidden"
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="w-80 h-screen bg-primary p-6 border-r-[1px] border-secondary"
              >
                <div
                  id="ARMA-Logo"
                  className="flex font-rock  text-arma-title justify-between text-lg md:text-2xl font-bold pl-2 cursor-pointer"
                >
                  <img
                    src="/assets/logo.png"
                    alt=""
                    onClick={() => navigate("/home")}
                    className="cursor-pointer w-2/6 sm:w-3/5 md:w-3/12 xl:1/12"
                  />{" "}
                  <span
                    className="material-symbols-outlined align-middle md:hidden mr-2 "
                    onClick={() => setShow(!show)}
                  >
                    menu_open
                  </span>
                </div>

                <div className="py-6 text-base">
                  {navItems.map((item: NavItem) => {
                    return (
                      <NavItemView
                        key={item.label}
                        label={item.label}
                        path={item.path}
                        children={item.children}
                        callback={() => setShow(false)}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface INavItemViewProps {
  items: NavItem[];
}

function NavItemsView({ items, callback }: INavItemViewProps & INavCallback) {
  return (
    <div className="flex flex-col justify-start items-start">
      {items.map((item: NavItem) => (
        <NavItemView
          key={item.label}
          label={item.label}
          path={item.path}
          children={item.children}
          callback={callback}
        />
      ))}
    </div>
  );
}

interface INavCallback {
  callback: () => void;
}

function NavItemView({
  label,
  path,
  children,
  callback,
}: NavItem & INavCallback) {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();
  const isActive = location.pathname.includes(path);

  useEffect(() => {
    if (children.length > 0) {
      children.forEach((e) => {
        if (location.pathname.includes(e.path)) {
          setIsVisible(true);
        }
      });
    }
  }, [children]);

  return (
    <motion.div
      style={{ x: +200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: ANIM_DURATION,
        delay: 0.2,
        type: ANIM_TYPE,
      }}
      className="w-full"
      key={label}
    >
      <div
        className={`min-h-12 p-3 cursor-pointer flex justify-between items-center text-white 
        rounded-[12px] ${
          isActive && children.length == 0 ? "underline underline-offset-8" : ""
        }`}
        onClick={() => {
          if (children.length == 0) {
            navigate(path);
            callback();
          } else {
            setIsVisible((prev) => !prev);
          }
        }}
      >
        <p className="flex flex-row justify-between items-center">
          <span>{label}</span>
          {children.length > 0 && <FaChevronDown className="ml-4 text-xs" />}
        </p>
      </div>

      {children.length > 0 && isVisible && (
        <div className="ml-6 rounded-lg w-full">
          <NavItemsView items={children} callback={callback} />
        </div>
      )}
    </motion.div>
  );
}
