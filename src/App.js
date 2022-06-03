import { useState, useEffect } from "react";
import "./styles.css";
import Header from "../componets/Header";
import FeedbackList from "../componets/FeedbackList";
import FeedbackData from "../componets/feedbackData";
import FeedbackStats from "../componets/FeedbackStats";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you suere to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  useEffect(() => {
    console.log(feedback);
  });
  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
