import { useState, useContext, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Rating from "componets/RatingSelect";
import FeedbackContext from "../context/FeedbackContext";
//import { func } from "prop-types";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback, editFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (editFeedback.edit === true) {
      setbtnDisabled(false);
      setText(editFeedback.item.text);
      setRating(editFeedback.item.rating);
    }
  }, [editFeedback]);

  const handleTextChange = function (e) {
    if (text === "") {
      setMessage(null);
      setbtnDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 character");
      setbtnDisabled(true);
    } else {
      setMessage(null);
      setbtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      };
      addFeedback(newFeedback);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service with us?</h2>
        <Rating select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          ></input>
          <Button type="submit" isDisabled={btnDisabled}>
            SEND
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
