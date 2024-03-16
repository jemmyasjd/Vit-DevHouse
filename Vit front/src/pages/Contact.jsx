import { useState } from "react";
import styles from "./Contact.module.css";
import {useNavigate} from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
  const [rectangleInputValue, setRectangleInputValue] = useState("");
  const [rectangleInput1Value, setRectangleInput1Value] = useState("");
  const [rectangleInput2Value, setRectangleInput2Value] = useState("");
  const [rectangleInput3Value, setRectangleInput3Value] = useState("");
  return (
    <div className={styles.desktop5}>
      <div className={styles.contactUs}>Contact Us</div>
      <button onClick={()=> navigate('/')}  className={styles.exploreButton}>
        <div className={styles.textContainer}>
          <div className={styles.exploreText}>{`Go Back `}</div>
        </div>
      </button>
      <div className={styles.featuresMainHeadingWrapper}>
        <b className={styles.featuresMainHeading}>
          Any questions or remarks? Just write us a message.
        </b>
      </div>
      <div className={styles.image10} />
    
      <b className={styles.featuresMainHeading1}>
        ABCD Apartements,Gandhinagar
      </b>
      <b className={styles.featuresMainHeading2}>demoforyou@gmail.com</b>
      <b className={styles.featuresMainHeading3}>+919999899999</b>
      <b className={styles.ourVision}>Contact Information</b>
  
      <img className={styles.image13Icon} alt="" src="/phone.png" />
      <img className={styles.image14Icon} alt="" src="/mail.png" />
      <img className={styles.image15Icon} alt="" src="/location.png" />
      <img className={styles.image16Icon} alt="" src="/logoinsta.png" />
      <img className={styles.image17Icon} alt="" src="/tele.png" />
      <img className={styles.image18Icon} alt="" src="/link.png" />
      <img className={styles.image19Icon} alt="" src="/git.png" />
      <b className={styles.firstName}>First Name</b>
      <input
        className={styles.desktop5Item}
        placeholder="First Name"
        type="text"
        value={rectangleInputValue}
        onChange={(event) => setRectangleInputValue(event.target.value)}
      />
      <b className={styles.phoneNumber}>Phone Number</b>
      <input
        className={styles.desktop5Inner}
        placeholder="Enter Number"
        type="number"
        value={rectangleInput1Value}
        onChange={(event) => setRectangleInput1Value(event.target.value)}
      />
      <b className={styles.email}>Email</b>
      <b className={styles.message}>Message</b>
      <input
        className={styles.rectangleInput}
        placeholder="Enter Email"
        type="email"
        value={rectangleInput2Value}
        onChange={(event) => setRectangleInput2Value(event.target.value)}
      />
      <textarea
        className={styles.rectangleTextarea}
        placeholder="Type the query you have!"
      />
      <b className={styles.lastName}>Last Name</b>
      <input
        className={styles.desktop5Child1}
        placeholder="Last Name"
        type="text"
        value={rectangleInput3Value}
        onChange={(event) => setRectangleInput3Value(event.target.value)}
      />
      <button onClick={alert("Message Send successfully")} className={styles.rectangleButton} />
      <b className={styles.rectangleButton}>Send Message</b>
    </div>
  );
};

export default Contact;