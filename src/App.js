// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./NavBar";
import BirthdayMessage from "./BirthdayMessage";
import { useSpring, animated } from "react-spring";
import "./App.css";

function App() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const bounce = useSpring({
    from: { marginTop: -1000 },
    to: { marginTop: 0 },
    config: { tension: 170, friction: 12 },
  });

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/birthday-message" element={<BirthdayMessage />} />
          <Route
            path="/"
            element={
              <header className="App-header">
                <animated.h1 style={fadeIn}>Happy Birthday Adira!</animated.h1>
                <animated.div style={bounce}>
                  <span
                    role="img"
                    aria-label="confetti"
                    style={{ fontSize: "2em" }}
                  >
                    🎉
                  </span>
                </animated.div>
              </header>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
