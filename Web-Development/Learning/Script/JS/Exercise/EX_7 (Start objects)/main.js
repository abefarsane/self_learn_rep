var person = {
    name: 'Giorgio',
    surname: 'frtm'
};

console.log(person['name']);
person['name'] = 'New';
console.log(person['name'])



var people = {
    oneID: person
};


console.log('Nested obj: ' + people.oneID.name);



var someObj = {
    friends: [
        {name: 'Malfoy'},
        {name: 'Crabbe'},
        {name: 'Goyle'}
    ],
    color: 'baby blue',
    isEvil: true
};


console.log(someObj.friends[0].name);
