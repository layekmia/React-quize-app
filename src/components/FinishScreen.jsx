import { useQuizes } from "../context/QuizeContext";

export default function FinishScreen() {
  const {points, maxPossiblePoints, highscore, dispatch} = useQuizes();
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage === 0) emoji = "🤦‍♂️";
  if (percentage > 0 && percentage < 100) emoji = "🎉";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> your scored is <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>

      <p className="highscore">(Highscore: {highscore} points)</p>

      <button className="btn btn-ui" onClick={() => dispatch({type: 'reset'})}>Restart Quize</button>
    </>
  );
}
