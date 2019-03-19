/*
  Повторить задание с оповещаниями (application/DecoratorExample), с
  использованием нескольких уровней абстракций, а именно паттерны:
  Decorator, Observer, Fabric

  Задача: Написать динамичную систему оповещений, которая будет отправлять
  сообщения все подписаным на неё "Мессенджерам".
  Картинки мессенджеров есть в папке public/images

  Класс оповещения должен иметь декоратор на каждый мессенджер.

  При создании обьекта класса Application нужно передавать обьект
  в котором будут находится те "Мессенджеры" который в результате будут
  подписаны на этот блок приложения.

  Отправка сообщения по "мессенджерам" должна происходить при помощи
  паттерна Observer.

  При отправке сообщения нужно создавать обьект соответствующего класса,
  для каждого типа оповещания.

  let header = new Application('slack', 'viber', 'telegramm');
  let feedback = new Application('skype', 'messanger', 'mail', telegram);

  btn.addEventListener('click', () => header.sendMessage(msg) );

  Архитектура:
  Application( messanges ) ->
    notfier = new Notifier
    renderInterface(){...}
  Notifier ->
    constructor() ->
      Fabric-> Фабрикой перебираете все типы месенджеров которые
      подписаны на эту Application;
    send() -> Отправляет сообщение всем подписчикам

*/

import Decorator from './decorator';


const ObserverDecorator = () => {
    class Application {
        constructor(message) {
            this.notifierTargets = [
                {name: 'sms', image: 'images/sms.svg', type: 'mts'},
                {name: 'mail', image: 'images/gmail.svg'},
                {name: 'telegram', image: 'images/telegram.svg'},
                {name: 'viber', image: 'images/viber.svg'},
                {name: 'slack', image: 'images/slack.svg'},
            ];
            this.message = message;
            this.notifier = new Decorator(this.notifierTargets);
            this.createInterface = this.createInterface.bind(this);
        }

        createInterface() {
            const root = document.getElementById('root');
            const AppNode = document.createElement('section');
            AppNode.className = 'notifer_app';
            AppNode.innerHTML =
                ` <div class="notifer_app--container">
        <header>
          <input class="notifier__messanger" type="text"/>
          <button class="notifier__send">Send Message</button>
        </header>
        <div class="notifier__container">
        ${this.notifierTargets.map(item =>
                    `<div class="notifier__item" data-slug="${item.name}">
              <header class="notifier__header">
                <img width="25" src="${item.image}"/>
                <span>${item.name}</span>
              </header>
              <div class="notifier__messages"></div>
            </div>
            `).join('')}
        </div>
      </div>
    `;
            const btn = AppNode.querySelector('.notifier__send');
            const input = AppNode.querySelector('.notifier__messanger');
            const mess = AppNode.querySelector('.notifier__messages');
            btn.addEventListener('click', () => {
                let value = input.value;
                this.notifier.sendMessage(value, AppNode);
            })
            root.appendChild(AppNode);
        }
    }

    const application = new Application();
    application.createInterface();
}
export default ObserverDecorator;
