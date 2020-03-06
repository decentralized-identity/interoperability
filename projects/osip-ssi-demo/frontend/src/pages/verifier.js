import React, {useState, useEffect} from 'react';
import QRCode from 'qrcode.react';
import '../styles/fa.css';
import requestOsipDefault from '../qrCodes/requestOsip';
import base64url from 'base64url';
import { TextEncoder, TextDecoder } from 'text-encoding';
import Navigation from '../components/navigation.js'

var Stomp = require('@stomp/stompjs');

function App() {
  const [access, setAccess] = useState({
    type: '',
    text:'Verification failed'
  });

  const [requestOsip] = useState(requestOsipDefault);

  useEffect(() => {
      if (!window['TextEncoder']) {
        window['TextEncoder'] = TextEncoder;
      }
      if (!window['TextDecoder']) {
        window['TextDecoder'] = TextDecoder;
      }

      var client = Stomp.Stomp.client(process.env.STOMP_URL);

      client.connect("osip", "osip", function() {
          // called back after the client is connected and authenticated to the STOMP server
          console.log("Connected to stomp");
          client.subscribe("/topic/verify." + requestOsip.clientId, function(message){
              if(message.body === "true") {
                setAccess({
                  type: 'granted',
                  text:'Access granted'
                })
              } else {
                setAccess({
                  type: 'denied',
                  text:'Access denied'
                })
              }
          });
      });
  }, []);

  const backToQR = () => {
    setAccess({ type: '', text:''});
  }

  return (
    <div>

      <Navigation text="Verify your Credentials"/>

      <div className="bg yellow">
        <div className="mainArea qr">
          <h1>Entrance Verification</h1>
          <p>Please scan the QR code shown here with your ID wallet app.</p>
            { access.type === '' ? <QR token={requestOsip}/> : <Access type={access.type} text={access.text} onBackToQR={backToQR}/>}
        </div>
      </div>
    </div>
  );
}

function QR(props) {
  const { token, header = {typ: 'JWT', alg: 'ES256K'}} = props
  const toSign = [
    base64url.encode(JSON.stringify(header)),
    base64url.encode(JSON.stringify(token)),
  ].join('.')

  return (
    <div className='qr white-box'>
      <QRCode size={256} value={toSign} />
    </div>
  )
}

function Access(props) {
  const back = (e) => {
    e.preventDefault();
    props.onBackToQR()
  }

  const symbol = () => {
    const symbols = {
      granted: "fa-check",
      denied: "fa-ban"
    }
    return symbols[props.type]
  }

  return (
    <div>
      <div className='white-box'>
        <i className={`fas big ${symbol()} ${props.type}`}></i>
        <h3>{props.text}</h3>
      </div>
      <br/>
      <button className="btn show-again" onClick={back}> SHOW QR-CODE AGAIN</button>
    </div>
    )
  }

export default App;
