const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

const database = {};

wss.on('connection', ws => {
    ws.on('message', message => {
        const lowerMessage = message.toLowerCase();

        if (database[lowerMessage]) {
            ws.send(database[lowerMessage]);
        } else if (lowerMessage.includes('1+1')) {
            ws.send("1+1 é igual a 2.");
            database['1+1'] = "1+1 é igual a 2.";
        } else {
            ws.send("Desculpe, não sei a resposta. Você pode me ensinar?");
        }
    });
});
