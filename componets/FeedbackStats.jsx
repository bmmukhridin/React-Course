import feedbackContext from "../componets/context/FeedbackContext";
import { useContext } from "react";
///////////////
///////////////
function FeedbackStats() {
  const { feedback } = useContext(feedbackContext);
  //Calculate Averege
  let calc =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  calc = calc.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length}</h4>
      <h4>Averege Rating: {isNaN(calc) ? 0 : calc}</h4>
    </div>
  );
}
export default FeedbackStats;
