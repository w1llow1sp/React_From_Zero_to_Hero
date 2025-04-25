/**
 * Практическое занятие 3.2
 *
 * 1.Создайте массив — список покупок в продуктовом магазине.
 * 2.Добавьте в список Milk, Bread и Apples.
 * 3.Замените Bread на Bananas и Eggs.
 * 4.Удалите последний элемент из массива и выведите его на экран.
 * 5.Отсортируйте список в алфавитном порядке.
 * 6.Найдите и выведите значение индекса Milk.
 * 7.После Bananas добавьте Carrots и Lettuce.
 * 8.Создайте новый список, в котором будет Juice и Pop.
 * 9.Объедините оба списка, добавив новый список дважды в конец первого списка.
 * 10.Получите последнее значение индекса Pop и выведите его на экран.
 * 11.Итоговый результат должен быть таким:
 */

//1
let shoplist = []
//2
shoplist.push('Milk', 'Bread', 'Apples')
//3
shoplist.splice(1, 1, 'Bananas', 'Eggs')
//4
console.log(shoplist.pop())
//5
shoplist.sort((a, b) => a - b)
//6
console.log(shoplist.indexOf('Milk'))
//7
shoplist.splice(shoplist.indexOf('Bananas') + 1, 0, 'Carrots', 'Lettuce')
console.log(shoplist)
//8
let newOrder = ['Juice', 'Pop']
//9
let newArr = shoplist.concat([...newOrder,...newOrder])
console.log('task 9',newArr)
//10
console.log('task 10',newArr.lastIndexOf('Pop'))
//11