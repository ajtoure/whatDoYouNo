import React from "react";
import { Link } from "react-router-dom";

const LandingPage = ({
  setGameCount,
  setGamePoints,
  setGameOver,
  setTimer,
}) => {
  
  //This function occurs when the Start button is clicked. It resets game values to default so that a fresh game can start. 
  const handleReset = () => {
    setGameCount(1);
    setGamePoints(0);
    setGameOver(false);
    setTimer(0);
    
  };

  return (
    <section className="arcadeContainer">
      <h2>Welcome!</h2>
      <p>
        You may think you no. But, do you really know what you no? Try this homophonous quiz and sea weather you know or knot.
      </p>
      <Link to="/Arcade">
        <button onClick={(e) => handleReset(e)}>Enter Arcade</button>
      </Link>
    </section>
  );
};

export default LandingPage;
