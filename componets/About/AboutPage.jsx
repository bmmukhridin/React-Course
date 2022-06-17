import Card from "../Shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this page</h1>
        <p>This is Raect app to leave feedback for a product or service</p>
        <p> Version 1.0.0</p>
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
