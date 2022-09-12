import React, { useState } from "react";
import "./Footer.scss";
import MotionWrap from "../../wrapper/MotionWrap";
import AppWrap from "../../wrapper/AppWrap";
import { images } from "../../constants";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { API_URL } from "../../config/config";
import { Formik } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object({
  name: Yup.string().required("Please fill in your name"),
  userEmail: Yup.string()
    .email("Invalid Email Address")
    .required("Please fill in your email"),
  message: Yup.string()
    .max(200, "Feedback should be less than 200 characters")
    .required("Please Send a nice message 😊"),
});
const sentenceVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
const Footer = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const { email, mobile } = images;
  const sendEmail = async (values, { resetForm }) => {
    try {
      const response = await axios.post(`${API_URL}sendemail`, {
        name: values.name,
        userEmail: values.userEmail,
        message: values.message,
      });
      resetForm();
      setSuccessMessage(
        "Your message has been sent, Thank you for your feedback !"
      );
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    }
  };
  return (
    <div className="app__footer">
      <h2 className="head-text">
        Get in touch <span>with me</span>
      </h2>
      <div className="app__footer-contacts">
        <div className="app__footer-contacts_email">
          <img src={email} alt="email icon" />
          <p className="p-text">omar.m.zaid@hotmail.com</p>
        </div>
        <div className="app__footer-contacts_mobile">
          <img src={mobile} alt="mobile icon" />
          <p className="p-text">+7 (912) 655-06-33</p>
        </div>
      </div>
      <Formik
        initialValues={{ name: "", userEmail: "", message: "" }}
        onSubmit={sendEmail}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className="app__footer-form">
            <input
              className="p-text"
              type="text"
              value={formik.values.name}
              placeholder="Your Name"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="p-text" style={{ color: "red", fontSize: "1rem" }}>
                {formik.errors.name}
              </p>
            ) : null}
            <input
              className="p-text"
              type="text"
              value={formik.values.userEmail}
              placeholder="Your Email"
              {...formik.getFieldProps("userEmail")}
            />
            {formik.touched.userEmail && formik.errors.userEmail ? (
              <p className="p-text" style={{ color: "red", fontSize: "1rem" }}>
                {formik.errors.userEmail}
              </p>
            ) : null}
            <textarea
              value={formik.values.message}
              className="p-text"
              placeholder="Your Message"
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className="p-text" style={{ color: "red", fontSize: "1rem" }}>
                {formik.errors.message}
              </p>
            ) : (
              <motion.h3
                className="p-text"
                style={{ color: "green", fontSize: "1rem" }}
                variants={sentenceVariants}
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence exitBeforeEnter>
                  {successMessage?.split("").map((char, idx) => {
                    return (
                      <motion.span
                        key={`char-${idx}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.04, ease: "easeInOut" }}
                        exit={{ opacity: 0 }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </AnimatePresence>
              </motion.h3>
            )}
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="app__footer-btn p-text"
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Send Message
            </motion.button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AppWrap(MotionWrap(Footer), "contact", {
  backgroundColor: "#fff",
});
