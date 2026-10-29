const message = "Hello";

// versi TS
const message2: string = "Hello";

// ==================== STRING BUILT-IN METHODS ====================

const name: string = "BudiB World";
const name2: string = "Ucok";

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.replace("B", "P"));
console.log(name.replaceAll("B", "P"));
console.log(name.concat(name2));



const welcome: string = "Welcome";
const name3: string = "Jack";

console.log(welcome + ", " + name3); 'Welcome, Jack'

console.log(`${welcome}, ${name3}`);  'Welcome, Jack'

// ==================== NUMBER BUILT-IN METHODS ====================

const angka: string = "4000";

console.log(Number(angka));  4000
console.log(parseInt(angka));  4000

// ===================== STRING CONVERSION =====================

const angka2: number = 3000;

console.log(angka2); 3000

console.log(angka2.toString()); '3000'

// ===================== BOOLEAN CONVERSION =====================

console.log(Boolean(300));  true
console.log(Boolean(-100));  true
console.log(Boolean(""));  false
console.log(Boolean("Budi"));  true

//===================== DATE -====================

const now = new Date();

console.log(now);  // current date and time
console.log(now.getFullYear());  2026
console.log(now.getMonth() + 1);  10
console.log(now.getDate()); 10
console.log(now.getDate()); 27
console.log(now.getMinutes());  16

// ==================== BASIC OPRATORS ====================

console.log(1 + 1);  2
console.log(5 - 2);  3
console.log(3 * 4);  12
console.log(10 / 2);  5
console.log(10 % 3);  1

// ==================== MODIFY IN PLACE ====================

let n: number = 4;

n = n + 2;

n += 2;

console.log(n); 

// n = n + 4;

// ==================== INCREMENT AND DECREMENT ====================

let counter: number = 1;

counter++;
console.log(counter);

counter--;
console.log(counter); 

// ==================== COMPARISON OPRATORS ====================

// console.log(2 == "2");  true
// console.log(2 === "2");  false

console.log(2 < 5);
console.log(5 < 5);
console.log(5 > 5);
console.log(10 >= 10);
console.log(1 <= 10);

// ==================== MATH =====================

console.log(Math.ceil(4.2)); // membulatkan angka ke atas

console.log(Math.floor(4.7)); // membulatkan angka ke bawah

console.log(Math.round(4.3)); // membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4.7)); // membulatkan angka ke bilangan bulat terdekat

console.log(Math.max(4, 150, 4000, 21, 37, 900));
console.log(Math.min(4, 150, 4000, 21, 37, 900));

console.log(Math.abs(-100)); // menghilangkan tanda negatif

console.log(Math.random()); // menghasilkan angka acak antara 0 dan 1

console.log(Math.floor(Math.random() * 100) + 1); // angka random 1 - 100

const min: number = 12;
const max: number = 30;

// Math.floor(Math.random() * (max - min + 1) + min)
console.log(Math.floor(Math.random() * (max - min + 1) + min));