//1 push 

const characters = ["Ninja Ken", "Baby Ben", "Guru Domba"];

console.log(characters);

characters.push(birdie) // mempush birdie ke const character 

// Print array characters

console.log(characters);

//2 for each 
const characters = ["Ninja Ken", "Baby Ben", "Guru Domba", "Birdie"];

characters.forEach((character) => {
    console.log(character)
});

// 3 find 
// buat angka 
const numbers = [1, 3, 5, 7, 9];

const foundNumber = numbers.find((number) => { // fungsi call back function 
    return number % 3 === 0; // cari yang kelipatan 3 nanti ketemu yang 
});     //pertama karna fungsi nya find

// Print foundNumber
console.log(foundNumber);

// buat object 
const characters = [
  {id: 1, name: "Ninja Ken", age: 6},
  {id: 2, name: "Baby Ben", age: 2},
  {id: 3, name: "Guru Domba", age: 100},
  {id: 4, name: "Birdie", age: 21}
];

const foundCharacter = characters.find((character) => {
    return character.id === 3; // menemukan obeject dengan id 3 dari const character 
});

console.log(foundCharacter); // Print foundCharacter

// 4 filter adalah method yang mengembalikan seluruh nilai tetapi sesuai denga syarat nilai yang kita buat 


const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter((number) => { // call back fungtion for filter 
    return number % 2 === 0;  // menentukan supaya filter tersebut mengambil nilai genap 
});

console.log(evenNumbers); // print


const characters = [
  {id: 1, name:"Ninja Ken", age: 14},
  {id: 2, name:"Baby Ben", age: 5},
  {id: 3, name:"Guru Domba", age: 100}
];

const underTwenty = characters.filter((character) => { // callback fungtion filter 
    return character.age < 20; // mengambil nilai age yg dibawah 20
});
console.log(underTwenty);

// 5 map 
const numbers = [1, 2, 3, 4];

//array 
const doubledNumbers = numbers.map((number)=>{ // callback function 
    return number *2; // semua nilai number akan dikali kan dengan dua karena ini map
});
console.log(doubledNumbers);


const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Dennis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

const fullNames = names.map((name)=>{
    return name.firstName+""+name.lastName; // semua nilai di atas akan digabungkan karena 
    //ini map yang akan menggunaka fungsi nya di nilai yang kita buat 
});
console.log(fullNames);

