/**     Управление массивом         **/
/**
 * Рассмотрите следующий массив:
 *
 * const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
 *
 * {test: 'one', score: 55}, ['one', 'two']];
 *
 * Используя методы pop(), push(), shift() и unshift(), добейтесь следующего результата в консоли:
 *
 * ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
 *
 * Вы можете предпринять следующие шаги или реализовать собственный подход:
 * -- удалите первый и последний элементы массива;
 * -- добавьте значение FIRST в начало массива;
 * -- присвойте значение hello World четвертому элементу;
 * -- присвойте значение MIDDLE элементу с третьим индексом;
 * -- добавьте значение LAST в конечную позицию массива;
 * -- выведите результат на экран.
 */

const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
    {test: 'one', score: 55}, ['one', 'two']];
// 1
theList.pop() // last el
theList.shift() // 1 el
// 2
theList.splice(0,0,'FIRST')
// 3
theList[3] = 'hello World'
// 4
theList[2] = 'MIDDLE'
// 5
theList.push('LAST')
// 6
theList.splice(4,3)
//7
// console.log(theList)

/**     Каталог продукции компании      **/

/**
 * В этом проекте вы реализуете структуру данных для каталога товаров и создадите запросы для извлечения данных.
 *
 *  - Создайте массив для хранения перечня товаров магазина.
 *  - Создайте три элемента, каждый из которых имеет свойства имени, модели,
 *      стоимости и количества.
 * - Добавьте все три объекта в основной массив с помощью соответствующего метода,
 *    а затем выведите получившийся массив на экран.
 * - Получите доступ к значению количества вашего третьего товара и зафиксируйте
 *      его в консоли. Поэкспериментируйте, добавляя новые элементы и получая доступ
 *      к большему числу элементов в вашей структуре данных.
 */

// 1
let catalog = []
// 2
let catalogItem1 = {
    name: 'Phone',
    model: 'IPhone',
    amount: '1300$',
    count: 5,
}
let catalogItem2 = {
    name: 'Phone',
    model: 'Honor',
    amount: '500$',
    count: 20,
}
let catalogItem = {
    name: 'Phone',
    model: 'Xiaomi',
    amount: '800$',
    count: 25,
}
// 3
catalog.push(catalogItem1)
catalog.push(catalogItem2)
catalog.push(catalogItem)
// 4
// console.log(catalog[2].count)

/**      Вопросы для самопроверки        **/

/**
 * 1.Можете ли вы использовать const для изменения значения внутри массива?
 *      // Да, можно
 * 2.Какое свойство массива определяет количество элементов, содержащихся в массиве?
 *  // lenght
 * 3.Какой результат вы увидите в консоли?
 *   const myArr1 = [1,3,5,6,8,9,15];
 *   console.log(myArr1.indexOf(0)); // -1
 *   console.log(myArr1.indexOf(3)); // 1
 *
 * 4.Как заменить второй элемент массива myArr = [1,3,5,6,8,9,15] на значение 4?
 *      myArr[1] = 4
 *      console.log(myArr)
 * 5.Какой результат вы увидите на экране?
 *      const myArr2 = [];
            myArr2[10] = 'test'
            console.log(myArr2); // [ <10 empty items>, 'test' ]
            console.log(myArr2[2]); // undefined

 * 6.Какой результат отобразится в консоли?
 *      const myArr3 = [3,6,8,9,3,55,553,434];
 *          myArr3.sort();
 *          myArr3.length = 0;
 *          console.log(myArr3[0]); // undefined
 */
