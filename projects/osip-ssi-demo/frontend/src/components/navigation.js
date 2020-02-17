import React from 'react';
import { Link } from "gatsby"

function Navigation(props) {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="left hide-on-med-and-down">
          <li><Link to="/osipClaim/">OSiP Form</Link></li>
          <li><Link to="/osipControlCenter/">OSiP ControlCenter</Link></li>
          <li><Link to="/credentialOffer/">Get OSiP Credential</Link></li>
          <li><Link to="/verifier/">Verifier</Link></li>
          <li><Link to="/video/">Demo Video </Link></li>
        </ul>
        <a href="/osipControlCenter" className="brand-logo right">{props.text}</a>
      </div>
    </nav>
  );
}

export default Navigation;
