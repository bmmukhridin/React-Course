import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import Rating from "componets/RatingSelect";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

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

  return (
    <Card>
      <form>
        <h2>How would you rate our service with us?</h2>
        <Rating />
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
