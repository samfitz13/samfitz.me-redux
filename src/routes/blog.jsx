import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="main">
      <h1>
        <Link to="/">home</Link> <Link to="/about">about</Link>
      </h1>
      <h1>this is my blog page</h1>
      <p>I haven't posted anything yet<Link to='/halloween'>.</Link></p>
    </div>
  );
}
