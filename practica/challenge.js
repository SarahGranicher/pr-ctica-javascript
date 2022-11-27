/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/

const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
},
{
  age: 26,
  examScores: [],
  gender: 'female',
  name: 'isabel'
},
{
  age: 31,
  examScores: [],
  gender: 'female',
  name: 'virginia'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
},
{
  age: 24,
  examScores: [],
  gender: 'female',
  name: 'luisa'
},
{
  age: 28,
  examScores: [],
  gender: 'female',
  name: 'ana'
},
{
  age: 27,
  examScores: [],
  gender: 'female',
  name: 'cecilia'
},
{
  age: 23,
  examScores: [],
  gender: 'male',
  name: 'carlos'
},
{
  age: 29,
  examScores: [],
  gender: 'male',
  name: 'francisco'
},
{
  age: 30,
  examScores: [],
  gender: 'male',
  name: 'Leo'
},
{
  age: 29,
  examScores: [],
  gender: 'male',
  name: 'victor'
},
{
  age: 27,
  examScores: [],
  gender: 'male',
  name: 'juan'
},
{
  age: 25,
  examScores: [],
  gender: 'male',
  name: 'pepe'
}];

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

//Mostrar en formato de tabla todos los alumnos.

console.table(students);

//Mostrar por consola la cantidad de alumnos que hay en clase.

console.log(students.length);

//Mostrar por consola todos los nombres de los alumnos.

console.log(students.name)

//Eliminar el último alumno de la clase.

students.pop()

//Eliminar un alumno aleatoriamente de la clase.

pos = mt_rand(0, (count(students) - 1));
  //stdtremovido = students[pos];

unset(students[pos]);
students2 = array_values(students);


//Mostrar por consola todos los datos de los alumnos que son chicas.

let almChicas = students.filter(students => students.gender === 'female');
console.log(almChicas);

//Mostrar por consola el número de chicos y chicas que hay en la clase.

console.log(almChicas.length);

let almChicos = students.filter(students => students.gender === 'male');
console.log(almChicos.length);

//Mostrar true o false por consola si todos los alumnos de la clase son chicas.

let allFemale = students.every(students.gender === 'female') ? 'true':'false'

//function allFemale(students){
//  return students.every(gender => students.gender === 'female')
//}

//Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.

let alm2025 = students.filter((student) => {
  if(student.age <= 20 && student.age >= 25) {
    return 1;
  }
  return 0;
})

console.log(alm2025);

//Añadir un alumno nuevo con datos random

availableNames = availableFemaleNames.concat(availableMaleNames);
const randName = availableNames[Math.floor(Math.random() * availableNames.length)];

const randGender = availableGenders[Math.floor(Math.random() * availableGenders.length)];

function random(min, max) {
  return Math.floor((Math.random() * (min -max + 1)) + min);
}
let randAge = random(20, 50);

students.splice (1, 0, {
  age: randAge,
  examScores: [],
  gender: randGender,
  name: randName
});

//Mostrar por consola el nombre de la persona más joven de la clase.

const min = Math.min(students.age)
console.log(min)

//Mostrar por consola la edad media de todos los alumnos de la clase.

var sum = 0;
for (students.age of students) {
  sum += students.age;
}
average = sum / students.length;
console.log(average);

//Mostrar por consola la edad media de las chicas de la clase.

for (students.age of almChicas) {
  sum += students.age;
}
average1 = sum / almChicas.length;
console.log(average1);

//Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.

function nota(students) {
  const nota = rendom(0,10);
  students.forEach(students => students.examScores = nota);
}

console.log(students);

//Ordenar el array de alumnos alfabéticamente según su nombre.

students.sort((a, b) => {
  if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
    return 1;
  }
  if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
    return -1;
  }
    return 0;
});

console.log(students);