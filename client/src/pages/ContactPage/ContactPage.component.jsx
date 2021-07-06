import React, { useState } from "react";
import { firestore } from "../../firebase/firebase.utils";
import {
  FormInputLabel,
  FormInputField,
  FormTextArea,
  SubmitButton,
} from "./ContactPage.styles";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "")
      alert("All Fields Are Mandatory");
    else {
      firestore
        .collection("messages")
        .add({
          name,
          email,
          message,
        })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert("Please Try Signing In Before Sending a Message");
          setLoader(false);
        });

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const formStyle = {
    height: "100vh",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    /* justify-content: center, */
    margin: "0 auto",
  };
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h1 style={{ marginBottom: "10px", textAlign: "center" }}>
        Contact Us ☎
      </h1>

      <FormInputLabel>Name</FormInputLabel>
      <FormInputField
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <FormInputLabel>Email</FormInputLabel>
      <FormInputField
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <FormInputLabel>Message</FormInputLabel>
      <FormTextArea
        type='text'
        placeholder='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></FormTextArea>

      <SubmitButton
        //   type='submit'
        loader
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </SubmitButton>
    </form>
  );
};

export default ContactPage;
