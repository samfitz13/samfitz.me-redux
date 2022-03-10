import { Link } from 'react-router-dom';
import './App.css';

/*
color scheme i like - pulled from schemecolor.com/orange-and-teal.php
Willpower Orange: #FD5901
Tennessee Orange: #F78104
Yellow Orange: #faab36
Light Sea Green: #faab36
Teal: #008083
Bangladesh Green: #005F60

There will be no purple. purple is forbidden.

*/

const App = () => {

  return (
    <div className='main'>
      <h1 id='main-heading'>sam fitzgerald</h1>
      <p>I live in New York City, I work at <a target='_blank' href="https://retool.com">Retool</a></p>
      <p>email: <a href='mailto:sam@samfitz.me'>sam@samfitz.me</a></p>
      <p>I can be found <a href='https://twitter.com/therealsamfitz' target='_blank'>@therealsamfitz</a> on most platforms, I'm <a href="https://github.com/samfitz13" target='_blank'>samfitz13</a> on github, and I also sometimes tweet about work at <a href='https://twitter.com/retoolsam' target='_blank'>@retoolsam</a></p>
      <h2><Link to='/about'>about me</Link></h2>
      <ul>
        <li>iowa state university class of 2019 - b.s. in managerial economics</li>
        <li>granular.ag sales 2019-mid 2020</li>
        <li>salesforce.com sales mid 2020-late 2021</li>
        <li>retool.com sales eng 2021+</li>
      </ul>
      <h2><Link to='blog'>blog posts</Link></h2>
    </div>
  );
};

export default App;
