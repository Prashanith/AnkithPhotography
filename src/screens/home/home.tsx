import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="z-0 min-h-[80vh] flex justify-center items-start flex-col">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-left text-gray-900 text-5xl "
      >
        Onto to a new world
      </motion.p>
      <br />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-left text-gray-900 text-6xl"
      >
        Experience the Magic
      </motion.p>
      <button
        className="bg-secondary uppercase px-4 py-2 mt-10  text-base rounded-md; text-white"
        onClick={() => navigate("/gallery")}
      >
        KNOW MORE
      </button>
    </div>
  );
}

export default Home;
