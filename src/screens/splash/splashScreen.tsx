import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const router = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      router("/home");
    }, 1500);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src="/assets/logo.png"
        alt=""
        className="w-3/5 sm:w-2/5 md:w-2/5 xl:1/4"
      />
    </div>
  );
}

export default SplashScreen;
