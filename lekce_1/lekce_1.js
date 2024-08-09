/*
Spustit pomocí příkazového řádku a příkazu node
*/
console.log("Hello world!")

/*
dynamický typovaný jazyk - nemusíme definovat typ proměnné
string - textové řetězce
number - čísla(celá, desetinná)
bigint - velká celá čísla
boolean - true/false
object - objekt
null - hodnota null, když proměnná nemá hodnotu
undefined - hodnota undefined, když proměnná nemá hodnotu
*/

// deklarace proměnné pomocí let
let a //nemusíme rovnou definovat hodnotu
a = 5
console.log(a) //vypíše hodnotu proměnné

// deklarace proměnné pomocí const
const b = 10 //musíme rovnou definovat hodnotu, nemůžeme ji měnit
console.log(b)

//string
let text = "Hello world!" //vždy v uvozovkách
console.log(text)

//operace s proměnnými
let c = a + b //sčítání
console.log(c)

let d = b - a //odečítání
console.log(d)

let e = a * b //násobení
console.log(e)

let f = b / a //dělení
console.log(f)

let g = b % a //modulo - zbytek po dělení
console.log(g)

//operace s řetězci
let jmeno = "Irena"
let prijmeni = "Smolíková"
let vek = 25
let mesto = "Příbor"

let celeJmeno = jmeno + " " + prijmeni //spojení řetězců
let celeJmeno1 = `${jmeno} ${prijmeni}` //spojení řetězců pomocí šablony
console.log(celeJmeno)
console.log(celeJmeno1)

let info = `Jmenuji se ${celeJmeno}, je mi ${vek} let a bydlím ve městě ${mesto}.` //spojení řetězců pomocí šablony
console.log(info)