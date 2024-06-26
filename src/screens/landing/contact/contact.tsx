import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { db } from "../../../config/firebaseConfig";

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
    onSubmit: async (values) => {
      await submitData({
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
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            value={formik.values.message}
            onChange={formik.handleChange}
          ></textarea>
        </form>
        <button className="submitButton mt-10" type="submit">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Contact;
