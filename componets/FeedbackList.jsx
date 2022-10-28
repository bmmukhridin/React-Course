import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import feedbackContext from "../componets/context/FeedbackContext";
//import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
/////////////////////
///////////////////
function FeedbackList() {
  const { feedback } = useContext(feedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>NO feedbacks</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
}
export default FeedbackList;
