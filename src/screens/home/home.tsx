import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ANIM_DURATION, ANIM_TYPE } from "../../config/animConfig";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="z-0 min-h-[90vh] flex justify-center items-start md:items-end flex-col">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: ANIM_DURATION, type: ANIM_TYPE }}
        className="text-left md:text-right text-gray-900 text-6xl lg:text-7xl"
      >
        Lens & Light:
      </motion.p>
      <br />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: ANIM_DURATION, type: ANIM_TYPE }}
        className="text-left md:text-right text-gray-900 text-5xl lg:text-6xl"
      >
        Discover the art of photography
      </motion.p>
      <button
        className="bg-secondary uppercase px-4 py-2 mt-10 rounded-lg text-base rounded-md; text-white"
        onClick={() => navigate("/gallery")}
      >
        KNOW MORE
      </button>
    </div>
  );
}

export default Home;
