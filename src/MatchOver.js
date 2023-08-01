import BarChart from './BarChart';

function MatchOver({ matchState, rematch, onClose }) {
  function getScoreStatement(scores) {
    return `${scores.green * (100 / matchState.gamesPlayed)} / ${
      scores.draw * (100 / matchState.gamesPlayed)
    } / ${scores.red * (100 / matchState.gamesPlayed)}`;
  }

  return (
    <div>
      <img src=".\gameOverImg.png" alt="alt" />
      <br />
      CURRENT SCORES ARE: {getScoreStatement(matchState.scores)}
      <br />
      <input type="button" value="REMATCH" onClick={rematch}></input>
      <br />
      <input type="button" value="END MATCH" onClick={onClose}></input>
      <br />
      <BarChart matchState={matchState}></BarChart>
    </div>
  );
}

export default MatchOver;
