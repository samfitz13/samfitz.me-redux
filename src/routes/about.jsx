import Helmet from "react-helmet";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="main">
      <Helmet>
        <title>about</title>
      </Helmet>
      <h1>
        <Link to="/">home</Link> <Link to="/blog">blog</Link>
      </h1>
      <h1>this is my about page</h1>
      <p>
        If you made it this far you must have found something interesting, so
        here are the details
      </p>

      <h2>
        Work Experience{" "}
        <a href="https://linkedin.com/in/samfitzofficial" target="_blank">
          or click this to go to my LinkedIn
        </a>
      </h2>
      <h3>retool.com - oct 2021+</h3>
      <p>Associate Sales Engineer</p>
      <ul>
        <li>
          Mostly talking with customers about Retool, debugging,
          troubleshooting, demoing, selling
        </li>
      </ul>

      <h3>salesforce.com - may 2020 - oct 2021</h3>
      <p>Business Development - Team Lead</p>
      <ul>
        <li>Met with clients to discuss digital transformations</li>
        <li>Delivered demos and presentations to fortune 500 businesses </li>
        <li>MVP sept 20022, promoted to team lead after 6 months in role </li>
        <li>140% attainment in 2020, 144% in h1 2021</li>
      </ul>

      <h3>granular.ag - may 2019 - may 2020</h3>
      <p>Sales Development</p>
      <ul>
        <li>173% quota</li>
        <li>feb 2020 all-company mvp</li>
      </ul>
      <h2>Education</h2>
      <h3>Iowa State University</h3>
      <p>B.S. Managerial Economics</p>
    </div>
  );
}
