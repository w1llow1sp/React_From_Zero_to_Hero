/**
 * 1. Создайте новый объект myCar для описания автомобиля.
 *      Добавьте несколько свойств, включая make и model
 *      (не ограничивайтесь только ими), и значения, характерные
 *      для любого или вашего автомобиля. Смело используйте
 *      логические значения, строки или числа.
 * 2.Создайте переменную color, которая может содержать значение
 *      типа string. Эта переменная теперь может использоваться
 *      для ссылки на имя свойства объекта myCar.
 *      Затем включите переменную в квадратные скобки,
 *      чтобы присвоить новое значение цвета для myCar.
 * 3. Возьмите ту же переменную и назначьте ей новое свойство
 *      типа string, например forSale. Снова используйте скобки,
 *      чтобы присвоить значение свойству forSale, указывающее,
 *      выставлен ли автомобиль на продажу.
 * 4.Выведите make и model на экран.
 * 5.Выведите значение forSale на экран.
 */

// 1
let myCar = {}
myCar.make = 2015
myCar.model = '120i'
myCar.type = 'automatic'
myCar.isWork = true
// 2
myCar.color = 'white'
myCar['color'] ='red'
// 3
myCar['forSale'] =false
// 4
console.log('car make:',myCar.make, 'car model:',myCar.model)
// 5
console.log('car forSale:',myCar.forSale)