import Stomp from 'stompjs'


export default async function(clientId, verified) {
    var client = Stomp.overTCP('127.0.0.1', 15675);
    console.log("Connecting to broker");
    client.connect('osip', 'osip', function (frame) {
        console.log('connected to Stomp');
        client.send('/topic/verify.' + clientId, {}, verified);
    });
}
