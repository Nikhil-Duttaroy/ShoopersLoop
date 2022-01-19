import React, { useState } from "react";
import { firestore } from "../../firebase/firebase.utils";

import FormInput from "./../../components/FormInput/FormInput.components";
import CustomButton from './../../components/CustomButton/CustomButton.components';
import { Helmet } from "react-helmet-async";


const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert("Please Try Signing In Before Sending a Message");

        });

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const formStyle = {
    maxWidth:"750px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
 
    margin: "0 auto",
  };
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta
          name='description'
          content='Checkout your items from cart, Shoopers Loop.'
        />
        <link rel='canonical' href='/checkout' />
      </Helmet>

      <div style={formStyle}>
        <form onSubmit={handleSubmit}>
          <h1>Contact Us ☎</h1>
          <FormInput
            name='name'
            type='text'
            label='Name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
            required
          />
          <FormInput
            name='email'
            type='email'
            value={email}
            label='Email'
            required
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            name='message'
            type='text'
            value={message}
            handleChange={(e) => setMessage(e.target.value)}
            label='Message'
            required
          ></FormInput>

          <CustomButton type='submit' loader>
            Submit
          </CustomButton>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
