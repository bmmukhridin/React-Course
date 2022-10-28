import { createContext, useState } from "react";
import FeedbackData from "../feedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you suere to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false
  });

  const updateFeedback = (item) => {
    setEditFeedback({
      item,
      edit: true
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        updateFeedback,
        editFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
