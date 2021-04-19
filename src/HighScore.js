import { useEffect, useState } from "react";
import firebase from "./firebase";

const HighScore = () => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (res) => {
      const data = res.val();
      const newState = [];

      for (let key in data) {
        newState.push({
          key: key,
          ...data[key],
          // comments: [],
        });
      }

      setHighScores(newState);
    });
  }, []);
  return (
    <section className="leaderBoard">
      <h2>
        <span>L</span><span>e</span><span>a</span><span>d</span><span>e</span><span>r</span><span>B</span><span>o</span><span>a</span><span>r</span><span>d</span></h2>

      <ul>
        <li>
            <h4>Ranking</h4>
            <h4>Name</h4>
            <h4>Score</h4>
            <h4>Time</h4>
        </li>
        {highScores.map((highscore, index) => {
          const { name, score, time } = highscore;
          const ranking = index + 1;
          return (
            <li key={index}>
              <span>{ranking}</span>
              <span>{name}</span>
              <span>{score}</span>
              <span>{time}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HighScore;
