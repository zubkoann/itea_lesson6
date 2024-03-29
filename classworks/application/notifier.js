class Notifier {
    send(msg, baseNode, block) {
        console.log('CLASS NOTIFIER: mesasge was sended:', msg);
        const target = baseNode.querySelector(`.notifier__item[data-slug="${block}"]`);
        console.log('target', target);
        target.innerHTML += `<div>${msg}</div>`;
    }
}
export class SmsNotifier extends Notifier {

        send(msg, baseNode, block = 'sms') {
        ///....
        // fetch('kyivstar.ua/send?...')
        super.send(msg, baseNode, block);
    }
}

export class ViberNotifier extends Notifier {
    send(msg, baseNode, block = 'viber') {
        //...
        // fetch('viber.com/send?...')
        super.send(msg, baseNode, block);
    }
}
export class GmailNotifier extends Notifier {
    send(msg, baseNode, block = 'mail') {
        // fetch('gmail.com/send?...')
        super.send(msg, baseNode, block);
    }
}

export class TelegramNotifier extends Notifier {
    send(msg, baseNode, block = 'telegram') {
        // fetch('telegram.com/send?...')
        super.send(msg, baseNode, block);
    }
}

export class SlackNotifier extends Notifier {
    send(msg, baseNode, block = 'slack') {
        // fetch('slack.com/send?...')
        super.send(msg, baseNode, block);
    }
}