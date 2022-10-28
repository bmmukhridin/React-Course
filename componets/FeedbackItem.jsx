import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "../componets/Shared/Card";
import { useContext } from "react";
import FeedbackContext from "../componets/context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, updateFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => updateFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
