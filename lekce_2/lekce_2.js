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