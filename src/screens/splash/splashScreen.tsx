import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ANIM_DURATION, ANIM_TYPE, DELAY } from "../../config/animConfig";

function SplashScreen() {
  const router = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      router("/home");
    }, 1500);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        style={{ x: -200, scaleX: 0.5, opacity: 0 }}
        animate={{ x: 0, scaleX: 1, opacity: 1 }}
        transition={{ type: ANIM_TYPE, duration: ANIM_DURATION, delay: DELAY }}
      >
        <img
          src="/assets/logo.png"
          alt=""
          className="mx-auto w-3/5 sm:w-2/5 md:w-2/5 xl:1/4"
        />
      </motion.div>
    </div>
  );
}

export default SplashScreen;
