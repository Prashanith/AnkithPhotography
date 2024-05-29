import { useState } from "react";
import { Sidebar } from "./sideBar";

export interface NavItem {
  label: string;
}

interface NavbarProps {
  navItems: NavItem[] | [];
  currentIndex: number;
  navigate: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar = ({ navItems, currentIndex, navigate }: NavbarProps) => {
  const [showSideNav, setshowSideNav] = useState<boolean>(false);

  return (
    <div className={`flex flex-row z-[11] w-full items-center py-5 md:py-8 lg:py-8 xl:py-12 pagePadding`}>
      {/* side navigation bar */}
      <Sidebar
        show={showSideNav}
        setShow={setshowSideNav}
        navItems={navItems}
        navigate={navigate}
        currentIndex={currentIndex}
      />

      <div className="flex-1 flex justify-between shadow-md items-center">
        {/* {Brand} */}
        <div>
          <img
            src="/assets/logo.png"
            alt=""
            className="w-2/6 sm:w-1/4 md:w-3/12 lg:5/12 xl:1/12"
          />
        </div>

        <span
          className="material-symbols-outlined align-middle lg:hidden mr-2 "
          onClick={(e) => {
            e.preventDefault();
            setshowSideNav(!showSideNav);
          }}
        >
          menu
        </span>

        {/* Navigation Items */}
        <div className="hidden md:justify-items-center gap-6 lg:flex flex-row ">
          {navItems.map((item: NavItem, index: number) => {
            return (
              <div
                key={item.label}
                className={` h-full w-full
                flex justify-center items-center 
                p-5
                relative
                cursor-pointer 
                uppercase
                anchor
                `}
                onClick={() => navigate(index)}
              >
                {currentIndex == index && (
                  <div className="h-[0.2rem] rounded-full  w-[90%] ml-[0.2rem] bottom-0 absolute  ">
                    {" "}
                  </div>
                )}
                <span className=" font-poppins  ml-1">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
