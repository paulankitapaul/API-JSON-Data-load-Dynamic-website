const person ={
    name:'Jamil',
    homeTown:'Barishal',
    isRich:false,
    money:34000,
    friends:['Ankita','Riya','Shusmita']
}
console.log(person,typeof person);
const stringifyJSON = JSON.stringify(person)
console.log(stringifyJSON, typeof stringifyJSON);
const parseJSON = JSON.parse(stringifyJSON,typeof stringifyJSON)
console.log(parseJSON,typeof parseJSON);