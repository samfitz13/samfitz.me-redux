import Helmet from "react-helmet";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="main">
      <Helmet>
        <title>blog</title>
      </Helmet>
      <h1>
        <Link to="/">home</Link> <Link to="/about">about</Link>
      </h1>
      <h1>this is my blog page</h1>
      <p>I haven't posted anything yet.</p>
    </div>
  );
}
