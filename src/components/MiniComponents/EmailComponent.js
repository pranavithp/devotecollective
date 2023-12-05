import React, { useState, useEffect } from "react";

/**
 * declare email 'form' functional component
 * the useState hook initalizes the state variable of 'emailMessage' with an empty string, the setEmailMessage will handle modifying the state
 * the function handleEmailMessageChange to handle the change event of the email message value
 *   const sendEmailMessage is an event fired when the button is clicked, and the email message will be filled in the body of the email, the window will open the defult email client and populate with the avaible i
 */
function EmailForm() {
  const [emailMessage, setEmailMessage] = useState("");

  const handleEmailMessageChange = (event) => {
    setEmailMessage(event.target.value);
  };
  const sendEmailMessage = (event) => {

    const mailtoLink = `mailto:devoted2media@gmail.com?subject=Subject%20Here&body=${encodeURIComponent(emailMessage)}`;

    window.location.href = mailtoLink;
  };



 

  return (
    <div className="emailBox"style={styles.container}>

      <textarea
        id="emailMessage"
        name="emailMessage"
        value={emailMessage}
        onChange={handleEmailMessageChange}
        placeholder="Send us a quick message"
        rows={1}
        style={styles.textBox}
      />
      <button type="button" onClick={sendEmailMessage} style={styles.button}>
        Send 
      </button>
    </div>
  );
}
const styles = {
    button: {
      borderRadius: "0px",
      width:"50%",
      border: "1.5px solid #55200C",
      height:"2.35rem",
      borderLeft: "none",
    },

    container:{
        display:"flex",
        alignItems:"center"
    },
    textBox:{
        backgroundColor:"transparent",
        border: "1.5px solid #55200C",

        width:"80%",
        height:"2rem",
        color:"#55200C",

      

    }
  };
export default EmailForm;
