//vypiš do konzole jakkékoliv číslo
console.log(10)

//vypiš do konzole své jméno
console.log("Irena")

//vytvoř proměnnou x, ulož do ní jakkékoliv číslo a vypiš ji do konzole
let x = 10
console.log(x)

//změn hodnotu proměnné x na jiné číslo a vypiš ji do konzole
x = 12
console.log(x)

//vytvoř proměnnou jmeno a prijmeni a ulož do ní své jméno, vypiš ji do konzole
let jmeno = "Irena"
let prijmeni = "Smolikova"
console.log(jmeno)
console.log(prijmeni)

//vytvoř proměnnou a a b, ulož do nich jakékoli čísla, sečti je, odečti je, vynásob je, vyděl je a využij operaci modulo a vypiš výsledky do konzole
let a = 10
let b = 54
let c = a + b
let d = a - b
let e = a * b
let f = a / b
let g = a % b
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)

//sečti proměnné jmeno a prijmeni a vypiš je do konzole
console.log(jmeno + prijmeni)

//sečti proměnné jmeno a prijmeni a vypiš je do konzole s mezerou
console.log(jmeno + " " + prijmeni)

//vypište do konzole text Jmenuji se jmeno a prijmeni pomoci vzoru
console.log(`Jmenuji se ${jmeno} ${prijmeni}.`)

//vytvoř mesto a vek, ulož do nich své město a věk
let mesto = "Příbor"
let vek = 20

//vytvoř proměnnou celeJmeno, ulož do ní jméno a příjmení oddělené mezerou a vypiš ji do konzole
let celeJmeno = jmeno + " " + prijmeni

//vypiš do konzole text Jmenuji se celeJmeno, mám vek let a bydlím ve městě mesto
console.log(`Jmenuji se ${celeJmeno}, mám ${vek} let a bydlím ve městě ${mesto}`)

//vytvoř proměnnou vek1 a jeDospely, ulož do ní věk a zjisti zda je jedinec dospěly a vypiš výsledek do konzole
let vek1 = 23
let jeDospely = vek1 >= 18
console.log(jeDospely)

//vytvoř konstantu y a ulož do ní jakékoli číslo a poté se pokus změnit její hodnotu
const y = 12
y = 10
