/*

  Задание:
    1. Используя функциональный декоратор, написать декоратор который будет показывать
       аргументы и результат выполнения функции.

    2. Написать декоратор для класса, который будет преобразовывать аргументы в число,
       если они переданы строкой, и выводить ошибку если переданая переменная не
       может быть преобразована в число
*/

const Work1 = () => {

    function argsNumber({target, key, descriptor}) {
        const originFn = descriptor.value;
        descriptor.value = function (...args) {
            [...args].map(arg => Number(arg));
            let value = originFn(...args);
            if (isNaN(value)) {
                console.error('argumenti ne mogyt bit preobrazovani')
            } else {
                return value
            }
            ;
        }
    }

    function argsValue({target, key, descriptor}) {
        const originFn = descriptor.value;
        descriptor.value = function (...args) {
            [...args].forEach(arg => console.log('arg', arg));
            let value = originFn(...args);
            return value;
        }
    }

    class CoolMath {
        @argsValue
        addNumbers(a, b) {
            return a + b;
        }

        @argsNumber
        multiplyNumbers(a, b) {
            return a * b
        }

        @argsNumber
        minusNumbers(a, b) {
            return a - b
        }
    }
    let Calcul = new CoolMath();
    let x = Calcul.addNumbers(2, 3)
    let y = Calcul.multiplyNumbers("rrr", "5")
    let z = Calcul.minusNumbers('kkk', 2)
    console.log('x', x)
    console.log('y', y)
    console.log('x', z)

};

export default Work1;
