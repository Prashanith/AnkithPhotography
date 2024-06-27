import { motion } from "framer-motion";
import { ANIM_DURATION, ANIM_TYPE } from "../../../config/animConfig";

function Stories() {
  return (
    <div className="w-full my-[30vh] text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: ANIM_DURATION, type: ANIM_TYPE }}
        className="text-xl"
      >
        Catch up my daily here,
        <br />
        COMING SOON... STAY TUNED
      </motion.p>
    </div>
  );
}

export default Stories;
