import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import * as dotenv from "dotenv";
// dotenv.config();

const YOUR_SERVICE_ID = "service_flzwp8n";
const YOUR_TEMPLATE_ID = "template_l5frmub";
const YOUR_PUBLIC_KEY = "dEriyd1zzF2EssiKC";
const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(result.text);
        },
        (error) => {
          console.log(error.text);
          alert("email not sent");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default App;
