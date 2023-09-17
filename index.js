let people = [
    {name: 'clement', age: '14', job: 'Developer'},
    {name: 'john', age: '45', job: 'banker'},
    {name: 'bayo', age: '14', job: 'nurse'},
    {name: 'clement', age: '41', job: 'Developer'},
    {name: 'clem', age: '14', job: 'doctor'},
    {name: 'cath', age: '14', job: 'Developer'},
    {name: 'olaide', age: '24', job: 'lawywer'},
    {name: 'babade', age: '34', job: 'welder'},
    {name: 'kehinde', age: '24', job: 'doctor'},

];

const myArr = people
.filter(person => person.name === 'john')
.filter(person => person.job === 'Developer')
console.log(myArr)