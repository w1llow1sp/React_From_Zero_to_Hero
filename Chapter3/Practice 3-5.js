/**
 * 1. Создайте объект с именем people, содержащий пустой массив
 *    под названием friends.
 * 2.Создайте три переменные, каждая из которых содержит объект,
 *   включающий имя, фамилию и значение ID вашего друга.
 * 3.Добавьте трех друзей в массив friend.
 * 4.Выведите результат на экран.
 */

// 1
let people = {}
people.friends = []

// 2
people.friends = [
    {
        name: '',
        firstName: '',
        ID: ''
    },
    {
        name: '',
        firstName: '',
        ID: ''
    },
    {
        name: '',
        firstName: '',
        ID: ''
    },
]
// 3
people.friends[0].name = 'Ostin'
people.friends[0].firstName = 'Martines'
people.friends[0].ID = 25412

people.friends[1].name = 'Marry'
people.friends[1].firstName = 'Black'
people.friends[1].ID = 34212

people.friends[2].name = 'Clare'
people.friends[2].firstName = 'White'
people.friends[2].ID = 85423

//4
console.log(people)