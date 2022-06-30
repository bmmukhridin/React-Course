import { creatContext, useState } from "react";

const FeedbackContext = creatContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState("");
  return (
    <FeedbackContext.Provider value={{}}>{children}</FeedbackContext.Provider>
  );
};
