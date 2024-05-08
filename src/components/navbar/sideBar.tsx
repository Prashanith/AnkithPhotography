import { NavItem } from "./navigationBar";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  navItems: NavItem[] | [];
  navigate: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
}

export const Sidebar = ({
  show,
  setShow,
  navItems,
  navigate,
  currentIndex,
}: SidebarProps) => {
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
          transition={{ duration: 0.2 }}
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
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
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
                  {navItems.map((item: NavItem, index: number) => {
                    console.log(location.pathname);

                    return (
                      <div
                        className={`h-12 p-3  cursor-pointer flex justify-between items-center 
                          text-black
                          hover:bg-secondary rounded-[12px] ${
                            index == currentIndex && "bg-secondary"
                          } `}
                        key={item.label}
                        onClick={() => {
                          navigate(index);
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
