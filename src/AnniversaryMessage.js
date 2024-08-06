import React, { useState } from "react";
import styles from "./AnniversaryMessage.module.css";

const texts = [
  "This site is dedicated for you! I want to tell you about the things I love about you the most.",
  "Our lives have been filled with so much over the past two months. It all began with you wishing me luck on my surgery, and now it’s about us being together and spending time with each other.",
  "Thank you for wishing me luck on the surgery, we would've never been together if you weren't there.",
  "Your love and care truly make a difference in my life. I admire your strength and dedication for us, even when you're so far away from me.",
  "I want to be there for you, support you, and show you how much you mean to me. You deserve all the happiness in the world, and I am committed to making sure you feel loved and valued every single day.",
  "I cherish the times you've spent singing in karaoke and to me (especially Umuwi Ka Na Baby), playing Roblox and Mobile Legends, and simply enjoying each other's company. The love you put into creating a spotify playlist means the world to me.",
  "Your art is amazing, but it’s nothing compared to the true masterpiece that is you.",
  "The way you look into the camera whenever you screen the share gives me butterflies like I’ve never experienced before. It’s a feeling that’s completely new to me still, and I just can’t get enough of it.",
  "I love the cute moments we have together, where we just giggle the whole day and night until you fall asleep to my voice, which is the most adorable thing and I want this to keep going on forever.",
  "Your love is something truly special, and it fills my heart with feelings I’ve never known before. The way you care for me and the warmth you bring into my life makes every moment amazing. I’m deeply grateful for the love you offer.",
  "This site is exactly how you want it. Pink. Because I'm here to give you everything you love in the most special ways you could imagine, my love.",
  "I want to put a rose on your pretty lips and kiss you all day.",
  "You're mine, every single day.",
  "Happy 2nd Anniversary, my future wife.",
  // Add more texts as needed
];

const AnniversaryMessage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % texts.length);
  };

  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + texts.length) % texts.length);
  };

  return (
    <div className={`${styles.anniversarymessage}`}>
      <h2>{texts[currentPage]}</h2>
      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          onClick={handlePreviousClick}
        >
          ❥➵
        </button>
        <button className={styles.paginationButton} onClick={handleNextClick}>
          ➳❥
        </button>
      </div>
    </div>
  );
};

export default AnniversaryMessage;
