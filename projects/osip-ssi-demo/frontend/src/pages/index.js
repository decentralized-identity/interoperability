import React from "react"
import { Link } from "gatsby"
import '../styles/main.scss';
import Navigation from '../components/navigation.js'

const IndexPage = () => (
  <div>
    <Navigation text="OSiP SSI"/>

    <div className="bg green">
      <div className="mainArea grid">
        <p>
          Welcome to the OSiP SSI demo :)
          <br/>
          Start your decentralized identity experience now and visit this links:
        </p>
          <Link className="btn" to="/osipClaim/">OSiP Form</Link>
          <Link className="btn" to="/osipControlCenter/">OSiP ControlCenter</Link>
          <Link className="btn" to="/credentialOffer/">Get OSiP Credential</Link>
          <Link className="btn" to="/verifier/">Verifier</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
