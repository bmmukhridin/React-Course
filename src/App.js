import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./styles.css";
import Header from "../componets/Header";
import FeedbackList from "../componets/FeedbackList";
import FeedbackData from "../componets/feedbackData";
import FeedbackStats from "../componets/FeedbackStats";
import FeedbackForm from "../componets/Shared/FeedbackForm";
import AboutPage from "../componets/About/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/////
export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    //console.log(newFeedback);
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you suere to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header text="Feedback UI" />

      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}
