const people = ['Rafa', 'Diego', 'Dani', 'Rog']
const upperCasePeopleThatStartsWithD = people
.filter(person => person.startsWith('D'))
.map(dperson => dperson.toUpperCase())