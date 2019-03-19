import { SmsNotifier, SlackNotifier,  ViberNotifier, GmailNotifier, TelegramNotifier } from './notifier';

class Decorator {
    constructor(clients) {
        let obj = clients.map( client => {
            if( client.name === 'sms' ){
                return new SmsNotifier(client);
            } else if( client.name === 'mail'){
                return new GmailNotifier(client);
            } else if( client.name === 'telegram'){
                return new TelegramNotifier(client);
            } else if( client.name === 'viber'){
                return new ViberNotifier(client);
            } else if( client.name === 'slack'){
                return new SlackNotifier(client);
            }
        })
        this.clients = obj;
        console.log(this.clients )
    }

    sendMessage(msg, baseNode) {
        this.clients.map((item) => {
            item.send(msg, baseNode);
        });
    }


    // addNotifier( notifier ){
    //     this.clients.push( notifier );
    // }
}


export default Decorator;