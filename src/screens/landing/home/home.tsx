import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ANIM_DURATION, ANIM_TYPE } from "../../../config/animConfig";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="z-0 min-h-[90vh] flex justify-center items-start md:items-end flex-col text-primary">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: ANIM_DURATION, type: ANIM_TYPE }}
        className="text-left md:text-right text-6xl font-bold"
      >
        Lens & Light
      </motion.p>
      <br />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: ANIM_DURATION, type: ANIM_TYPE }}
        className="text-left md:text-right text-5xl lg:text-6xl cursive-font"
      >
        Discover the art of photography
      </motion.p>
      <button
        className="bg-primary uppercase px-4 py-2 mt-10 rounded-lg text-base rounded-md; text-tertiary"
        onClick={() => navigate("/gallery")}
      >
        KNOW MORE
      </button>
    </div>
  );
}

export default Home;
