import React from 'react';
import '../styles/materialize.css';
import '../styles/main.scss';
import { credentialOffer } from "../qrCodes/credentialOffer"
import { QR } from './osipClaim'
import Navigation from '../components/navigation.js'

function App() {
  return (
    <div>
      <Navigation text="Get your OSiP Credential"/>

      <div className="bg green">
        <div className="mainArea grid">
          <div className="info-text">
            <h1>
              Receive your claim, <br/> verified by OSiP
            </h1>
            <p>
              1. Scan the following QR code with the digital identity app of your choice.
            </p>
            <p>
              2. Receive your credential.
            </p>
            <QR token={credentialOffer}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
