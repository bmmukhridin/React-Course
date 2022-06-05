import { useState } from "react";
import "./styles.css";
import Header from "../componets/Header";
import FeedbackList from "../componets/FeedbackList";
import FeedbackData from "../componets/feedbackData";
import FeedbackStats from "../componets/FeedbackStats";
import FeedbackForm from "../componets/Shared/FeedbackForm";
export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you suere to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header text="Feedback UI" />

      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
