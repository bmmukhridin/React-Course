// import { useState } from "react";
import "./styles.css";
import Header from "../componets/Header";
import FeedbackList from "../componets/FeedbackList";
// import FeedbackData from "../componets/feedbackData";
import FeedbackStats from "../componets/FeedbackStats";
import FeedbackForm from "../componets/Shared/FeedbackForm";
import AboutPage from "../componets/About/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutLink from "../componets/AboutLink";
import {
  FeedbackProvider,
  addFeedback
} from "../componets/context/FeedbackContext";

/////
export default function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feedback UI" />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}
