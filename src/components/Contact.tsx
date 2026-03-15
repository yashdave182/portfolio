import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Alert from "@mui/material/Alert";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [result, setResult] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = async (e: any) => {
    e.preventDefault();

    const isNameEmpty = name === "";
    const isEmailEmpty = email === "";
    const isMessageEmpty = message === "";

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setMessageError(isMessageEmpty);

    if (!isNameEmpty && !isEmailEmpty && !isMessageEmpty) {
      setIsSending(true);
      setResult("");

      const formData = new FormData();
      formData.append("access_key", "eb35dadc-2e7b-439d-b9e3-eac39e01f7f3");
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          setResult("Success! Message sent successfully.");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setResult("Error: " + (data.message || "Failed to send message. Please try again later."));
        }
      } catch (error) {
        setResult("Error: Failed to send message. Please check your internet connection.");
      } finally {
        setIsSending(false);
      }
    }
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
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send"}
              </Button>
              {result && (
                <Alert 
                  severity={result.startsWith("Success") ? "success" : "error"} 
                  sx={{ mt: 2 }}
                >
                  {result}
                </Alert>
              )}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
