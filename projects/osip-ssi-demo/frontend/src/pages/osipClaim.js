import React, { useState} from 'react';
import '../styles/materialize.css';
import '../styles/main.scss';
import axios from '../axios';
import QRCode from 'qrcode.react';
import { credentialRequest } from '../qrCodes/requestEid';
import base64url from 'base64url';
import Navigation from '../components/navigation.js'

function App() {
  const [form, setForm] = useState({
    "firstname": "",
    "lastname": "",
    "id": "",
  });

  const [submitted, setSubmitted] = useState(false);

  const sendForm = (e) => {
    e.preventDefault();
    const postData = async () => {
      await axios.post(`/osip/postForm`, form);
      setSubmitted(true)
    };
    postData();
  }

  const handleChange = (e) => {
    e.persist()
    setForm(form => ({...form, [e.target.id]: e.target.value}))
  }

  const another = (e) => {
    setSubmitted(false)
  }

  const stepQR = (
    <div>
      <p>
        2. The form was submitted, please scan the following QR code with the digital identity app of your choice to send us your e-id:
      </p>
      <QR token={credentialRequest}/>
      <br/>
      <div>
        <button className="waves-effect waves-light btn btn-large grey lighten-1" onClick={another}>Submit another Form</button>
      </div>
    </div>
  )

  let stepForm = (
    <div>
      <p>
        1. Enter your data and submit the form.
      </p>
      <form>
          <input id="firstname" type="text" value={form.firstname} onChange={handleChange} className="validate" required/>
          <label htmlFor="firstname">FIRST NAME</label>
          <input id="lastname" type="text" value={form.lastname} onChange={handleChange} className="validate" required />
          <label htmlFor="lastname">LAST NAME</label>
          <input id="id" type="text" value={form.id} onChange={handleChange} className="validate" required/>
          <label htmlFor="id">DOCUMENT ID</label>
          <br/>
          <button className="waves-effect waves-light btn btn-large submit" onClick={sendForm}>Submit</button>
      </form>
    </div>
  )

  return (
    <div>
      <Navigation text="Request your OSiP Claim"/>

      <div className="bg green">

        <div className="mainArea grid">
          <div className="info-text">
            <h1>
              Create your claim, verified by OSiP
            </h1>
            { submitted ? stepQR : stepForm }
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Returns component which renders the provided JWT as a QR code
 * @param props.token - JWT token in JSON form, composed of header and payload
 * @returns React component rendering the base64 encoded JWT as a QR code
 */

export const QR = (props) => {
  const { token, header = {typ: 'JWT', alg: 'ES256K'}} = props
  const toSign = [
    base64url.encode(JSON.stringify(header)),
    base64url.encode(JSON.stringify(token)),
  ].join('.')

  return (
    <div>
      <QRCode size={256} value={toSign} />
      <br/>
      <a href={`ssi://consent/${toSign}`} className="waves-effect waves-light btn btn-large">Open in Wallet</a>
    </div>
  )
}

export default App;
