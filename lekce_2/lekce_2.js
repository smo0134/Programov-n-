//podmínka if
let age = 10
if (age < 18) {
    console.log("Jsi dítě")
}

if (age >= 18) {
    console.log("Jsi dospělý")
}

//podmínka if a else
if (age < 18) {
    console.log("Jsi dítě")
}
else {
    console.log("Jsi dospělý")
}

let jmeno = "Petr"
if (jmeno === "Petr") {
    console.log("Ahoj Petře")
}
else {
    console.log("Ahoj neznámý")
}

//podmínka if, else if a else
let body = 80
if (body < 50) {
    console.log("Neprošel jsi")
}
else if (body < 80) {
    console.log("Prošel jsi")
}
else {
    console.log("Prošel jsi s vyznamenáním")
}

//logické operátory
// && - a
// true = true && true
// false = true && false
// false = false && true
// false = false && false

let cislo1 = 10
let cislo2 = -10
if (cislo1 > 0 && cislo2 > 0) {
    console.log("Obě čísla jsou kladná")
}
else {
    console.log("Alespoň jedno číslo není kladné")
}

// || - nebo
// true = true || true
// true = true || false
// true = false || true
// false = false || false

if (cislo1 > 0 || cislo2 > 0) {
    console.log("Alespoň jedno číslo je kladné")
}
else {
    console.log("Žádné číslo není kladné")
}

// globalni a lokalni scope
let promenna1 = 10 //globalni promenna
if (promenna1 > 0) {
    let promenna2 = 20 //lokalni promenna
    console.log(promenna2)
}

//console.log(promenna2) //promenna2 je lokalni promenna a nelze ji použít mimo blok, ve kterém byla vytvořena

//variable shadowing
let promenna3 = 30
if (promenna3 > 0) {
    let promenna3 = 40
    console.log(promenna3) //40
}
console.log(promenna3) //30