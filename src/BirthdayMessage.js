// Create a new component, e.g., BirthdayMessage.js
import React from "react";
import styles from "./BirthdayMessage.module.css";

const BirthdayMessage = () => {
  return (
    <div className={`${styles.birthdaymessage} ${styles.backgroundimage}`}>
      <h2>
        If there's anyone or anything in this world that could make me live a life this
        amazing, it would be you. I've never felt such cuteness from the one
        that I truly love. I hope this year will be way better for you and I
        hope you finish your uni without any issues my baby. Happy
        birthday!!!!🎉🎉🎉
      </h2>
    </div>
  );
};

export default BirthdayMessage;
