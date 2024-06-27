import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { db } from "../../../config/firebaseConfig";
import { motion } from "framer-motion";
import { ANIM_DURATION, ANIM_TYPE } from "../../../config/animConfig";

interface IContactProps {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  async function submitData(data: IContactProps) {
    try {
      const docRef = await addDoc(collection(db, "contact"), {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      console.log(docRef.id);
      alert("We received your request, we will contact you in a while");
    } catch (error) {
      alert("Unknown Error Occured. Please try again after sometime");
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: " ",
    },
    onSubmit: (values) => {
      void submitData({
        name: values.name,
        email: values.email,
        message: values.message,
      });
    },
  });
  return (
    <div className="w-full pt-[5vh]">
      <div className="flex flex-col justify-start items-start">
        <h2 className="uppercase text-xl lg:text-3xl mb-10">Contact Us</h2>
        <form
          className="flex flex-col justify-start items-start space-y-2"
          onSubmit={formik.handleSubmit}
        >
          <motion.label
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: ANIM_DURATION, type: ANIM_TYPE }}
            htmlFor="name"
          >
            Your Name
          </motion.label>
          <motion.input
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: ANIM_DURATION, type: ANIM_TYPE }}
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <motion.label
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: ANIM_DURATION, type: ANIM_TYPE }}
            htmlFor="email"
          >
            Your Email
          </motion.label>
          <motion.input
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: ANIM_DURATION, type: ANIM_TYPE }}
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <motion.label
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: ANIM_DURATION, type: ANIM_TYPE }}
            htmlFor="message"
          >
            Your Message
          </motion.label>
          <motion.textarea
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: ANIM_DURATION, type: ANIM_TYPE }}
            name="message"
            id="message"
            value={formik.values.message}
            onChange={formik.handleChange}
          ></motion.textarea>
        </form>
        <motion.button
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIM_DURATION, type: ANIM_TYPE }}
          className="submitButton mt-10"
          type="submit"
          onClick={() => void formik.submitForm()}
        >
          SUBMIT
        </motion.button>
      </div>
    </div>
  );
}

export default Contact;
