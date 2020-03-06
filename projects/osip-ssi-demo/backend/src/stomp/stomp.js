import Stomp from 'stompjs'


export default async function(clientId, verified) {
    var client = Stomp.overTCP(process.env.STOMP_HOST, process.env.STOMP_PORT);
    console.log("Connecting to broker");
    client.connect('osip', 'osip', function (frame) {
        console.log('connected to Stomp');
        client.send('/topic/verify.' + clientId, {}, verified);
    });
}
