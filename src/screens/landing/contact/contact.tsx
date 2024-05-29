import { useFormik } from "formik";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: " ",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="w-full pt-[10vh]">
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
