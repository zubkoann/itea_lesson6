/*
  Задание: используя паттерн декоратор, модифицировать класс Human из примера basicUsage.

  0.  Создать новый конструктор, который будет принимать в себя человека как аргумент,
      и будем добавлять ему массив обьектов coolers (охладители), а него внести обьекты
      например мороженное, вода, сок и т.д в виде: {name: 'icecream', temperatureCoolRate: -5}

  1.  Расширить обработку функции ChangeTemperature в прототипе human таким образом,
      что если темпаретура становится выше 30 градусов то мы берем обьект из массива coolers
      и "охлаждаем" человека на ту температуру которая там указана.

      Обработку старого события если температура уходит вниз поставить с условием, что температура ниже нуля.
      Если температура превышает 50 градусов, выводить сообщение error -> "{Human.name} зажарился на солнце :("

  2.  Бонус: добавить в наш прототип нашего нового класса метод .addCooler(), который
      будет добавлять "охладитель" в наш обьект. Сделать валидацию что бы через этот метод
      нельзя было прокинуть обьект в котором отсутствует поля name и temperatureCoolRate.
      Выводить сообщение с ошибкой про это.

*/

const BeachParty = () => {
    class Human {
        constructor(name) {
            this.name = name;
            this.currentTemperature = 0;
            this.minTemperature = -20;
            this.temperatureToCool = 30;
            this.dethTemperature = 50;
            this.coolers = [
                {name: 'icecream', temperatureCoolRate: -20},
                {name: 'water', temperatureCoolRate: -5},
                {name: 'djuce', temperatureCoolRate: -10},
                {name: 'mohito', temperatureCoolRate: -15},
                ];
            console.log( this);
        }
        changeTemperature(changeValue){
            this.currentTemperature += changeValue;
            console.log(this.currentTemperature)
            if( this.currentTemperature < this.minTemperature ){
                console.error(`Temperature is to low: ${this.currentTemperature}. ${this.name} died :(`);
            } else {
                if( this.currentTemperature > this.temperatureToCool && this.currentTemperature <  this.dethTemperature ) {
                    let text=':';
                    this.coolers.map(function (el, index){
                        text+=index+'-'+el.name +',';
                    })
                    let ask = prompt(`Становиться жарко, какой охадитель выберите ${text} `)
                    this.currentTemperature += this.coolers[ask].temperatureCoolRate;
                    console.log(this.currentTemperature)
                } else if(this.currentTemperature >=  this.dethTemperature){
                    console.error(`${this.name} зажарился на солнце :("`);
                }
            }
        }
       addCooler(obj){
            if(obj.hasOwnProperty('name') && obj.hasOwnProperty('temperatureCoolRate')){
                this.coolers.push(obj);
                console.log(this.coolers);
            } else console.error(`В данном обьекте нет ключа name или  temperatureCoolRate`);
       }
    }
    let Debra = new Human('Debra');
    Debra.changeTemperature(-5);
    Debra.changeTemperature(10);
    Debra.changeTemperature(20);
    Debra.changeTemperature(10);
    let obg = {name: 'swim', temperatureCoolRate: -7}
    let obg2 = {names: 'swim', temperatureCoolRates: -7}
    Debra.addCooler(obg);
    Debra.addCooler(obg2);
}

export default BeachParty;
