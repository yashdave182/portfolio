import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get In Touch</h1>
          <p>
            Have a project, question, or just want to say hello? Feel free to
            reach out!
          </p>

          <div className="contact-methods">
            <a href="mailto:yashdave182@gmail.com" className="contact-method">
              <EmailIcon />
              <div>
                <h3>Email</h3>
                <p>yashdave182@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/yash-dave182/"
              target="_blank"
              rel="noreferrer"
              className="contact-method"
            >
              <LinkedInIcon />
              <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/yash-dave182</p>
              </div>
            </a>
            <a
              href="https://github.com/yashdave182"
              target="_blank"
              rel="noreferrer"
              className="contact-method"
            >
              <GitHubIcon />
              <div>
                <h3>GitHub</h3>
                <p>github.com/yashdave182</p>
              </div>
            </a>
          </div>

          <div className="contact-form-section">
            <h2>Send Me a Message</h2>
            <Box
              ref={form}
              component="form"
              noValidate
              autoComplete="off"
              className="contact-form"
            >
              <div className="form-flex">
                <TextField
                  required
                  id="outlined-required"
                  label="Your Name"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  error={nameError}
                  helperText={nameError ? "Please enter your name" : ""}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Email / Phone"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  error={emailError}
                  helperText={
                    emailError ? "Please enter your email or phone number" : ""
                  }
                />
              </div>
              <TextField
                required
                id="outlined-multiline-static"
                label="Message"
                placeholder="Send me any inquiries or questions"
                multiline
                rows={10}
                className="body-form"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                error={messageError}
                helperText={messageError ? "Please enter the message" : ""}
              />
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={sendEmail}
              >
                Send
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
