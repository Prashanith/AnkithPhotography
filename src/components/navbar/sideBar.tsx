import { useLocation, useNavigate } from "react-router-dom";
import { ANIM_DURATION, ANIM_TYPE, DELAY } from "../../config/animConfig";
import { NavItem } from "./navigationBar";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  navItems: NavItem[] | [];
}

export const Sidebar = ({ show, setShow, navItems }: SidebarProps) => {
  const location = useLocation();
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
                type: ANIM_TYPE,
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
                    className="w-2/6 sm:w-3/5 md:w-3/12 xl:1/12"
                  />{" "}
                  <span
                    className="material-symbols-outlined align-middle md:hidden mr-2 "
                    onClick={() => setShow(!show)}
                  >
                    menu_open
                  </span>
                </div>

                <div className="py-6">
                  {navItems.map((item: NavItem) => {
                    const isActive = location.pathname.includes(item.path);
                    return (
                      <div
                        className={`h-12 p-3  cursor-pointer flex justify-between items-center 
                          text-black
                          hover:bg-secondary rounded-[12px] ${
                            isActive ? "bg-secondary" : ""
                          } `}
                        key={item.label}
                        onClick={() => {
                          navigate(item.path);
                          setShow(false);
                        }}
                      >
                        <span className="text-white text-xl font-medium ml-1">
                          {item.label}
                        </span>
                      </div>
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
