/*1
const jmeno = "Michal"
//       012345
const jmenoPole = ["M", "i", "c", "h", "a", "l"]
//            0    1    2    3    4    5

console.log(jmenoPole[2])
console.log(jmenoPole[5])

console.log(jmeno[2])
console.log(jmeno[5])


const teploty = [10, 11, 12, 15, 20.2, 25, 31.3, 20, 15, 5, -10]

console.log(teploty[3])

const mesta = [
    ["Praha", 1000000], // 0
    //  0         1
    ["Brno", 300000], // 1
    //  0        1
    ["Ostrava", 100000] // 2
    //  0        1
]

console.log(mesta[1][1])
console.log(mesta[2][0])

const knihy = [
    {nazev: "Kniha 1", cena: 100, jazyk: "CZ"},
    {nazev: "Kniha 2", cena: 200, jazyk: "CZ"},
    {nazev: "Kniha 3", cena: 300, jazyk: "CZ"}
]

const kniha = ["Kniha 1", 200, "CZ", 16000, true, true]

console.log(knihy[2].nazev)
*/

/*2
const teploty = [10, 11, 12, 15, 20.2, 25, 31.3, 20, 15, 5, -10]

console.log(teploty.length)
console.log(teploty.reverse()) // obraceni pole

teploty.push(100) // prida prvek na konec pole
console.log(teploty)

teploty.pop() // smaze posledni prvek v poli
console.log(teploty)

teploty.unshift(200) // prida prvek na zacatek pole
console.log(teploty)

teploty.shift() // smaze prvni prvek v poli
console.log(teploty)

teploty.sort((a, b) => a - b) // seradi pole
console.log(teploty)

const jmena = ["Michal", "Jana", "Martina"]

console.log(jmena.join(",")) // spoji hodnoty a vytvori jeden retezec

const jmena2 = ["Michal", "Jana", "Martina"]

const vsechnaJmena = jmena.concat(jmena2) // spoji dve pole dohromady

console.log(vsechnaJmena)

console.log(vsechnaJmena.indexOf("Michal")) // najde a vrati prvni index hledane hodnoty



const knihy = [
    {nazev: "Kniha 1", cena: 100, jazyk: "CZ"},
    {nazev: "Kniha 2", cena: 200, jazyk: "CZ"},
    {nazev: "Kniha 3", cena: 300, jazyk: "CZ"},
    {nazev: "Kniha 4", cena: 400, jazyk: "CZ"},
    {nazev: "Kniha 5", cena: 500, jazyk: "CZ"},
    {nazev: "Kniha 6", cena: 600, jazyk: "CZ"},
    {nazev: "Kniha 7", cena: 700, jazyk: "CZ"},
    {nazev: "Kniha 8", cena: 800, jazyk: "CZ"},
    {nazev: "Kniha 9", cena: 900, jazyk: "CZ"},
    {nazev: "Kniha 10", cena: 1000, jazyk: "CZ"},
    {nazev: "Kniha 11", cena: 1100, jazyk: "CZ"},
    {nazev: "Kniha 12", cena: 1200, jazyk: "CZ"},
    {nazev: "Kniha 13", cena: 1300, jazyk: "CZ"},
    {nazev: "Kniha 14", cena: 1400, jazyk: "CZ"},
    {nazev: "Kniha 15", cena: 1500, jazyk: "CZ"},
    {nazev: "Kniha 16", cena: 1600, jazyk: "CZ"},
    {nazev: "Kniha 17", cena: 1700, jazyk: "CZ"},
    {nazev: "Kniha 18", cena: 1800, jazyk: "CZ"},
    {nazev: "Kniha 19", cena: 1900, jazyk: "CZ"},
    {nazev: "Kniha 20", cena: 2000, jazyk: "CZ"},
    {nazev: "Kniha 21", cena: 2100, jazyk: "CZ"},
    {nazev: "Kniha 22", cena: 2200, jazyk: "CZ"},
    {nazev: "Kniha 23", cena: 2300, jazyk: "CZ"},
    {nazev: "Kniha 24", cena: 2400, jazyk: "CZ"},
    {nazev: "Kniha 25", cena: 2500, jazyk: "CZ"},
    {nazev: "Kniha 26", cena: 2600, jazyk: "CZ"},
    {nazev: "Kniha 27", cena: 2700, jazyk: "CZ"},
    {nazev: "Kniha 28", cena: 2800, jazyk: "CZ"},
    {nazev: "Kniha 29", cena: 2900, jazyk: "CZ"},
    {nazev: "Kniha 30", cena: 3000, jazyk: "CZ"}
]

knihy.forEach(item => {
    document.body.innerHTML += `
    <h2>${item.nazev}</h2>
    <p>Cena: ${item.cena}, Jazyk: ${item.jazyk}</p>
    `
})


const ceskaJmena = [
    "Jan", "Petr", "Jakub", "Tomáš", "Michal",
    "Martin", "David", "Jiří", "Lukáš", "Vojtěch",
    "Filip", "Marek", "Ondřej", "Daniel", "Adam",
    "Josef", "Viktor", "Štěpán", "Karel", "Jaroslav",
    "Radek", "Matěj", "Roman", "Miloš", "Jindřich",
    "Vladimír", "Aleš", "Stanislav", "Zdeněk", "Dominik",
    "Patrik", "Antonín", "Richard", "Radim", "Eduard",
    "Tomášek", "Alexandr", "Bohuslav", "Oldřich", "Lubomír",
    "František", "Rudolf", "Dalibor", "Erik", "Vlastimil",
    "Marian", "Sebastian", "Václav", "Tadeáš", "Bohumil"
]

const emails = ceskaJmena.map(item => `${item}@czechitas.cz`)

console.log(emails)

*/



const selectSmiley = (event) => {
    event.target.classList.add('btn-smiley--selected');
};

const btns = document.querySelectorAll(".btn-smiley")

btns.forEach(btn => { btn.addEventListener("click", selectSmiley) })

// Jeste kratsi varianta - document.querySelectorAll(".btn-smiley").forEach(btn => { btn.addEventListener("click", selectSmiley) })





3.
const napoje = [
    { nazev: 'Pivo', cena: 12, skladem: true },
    { nazev: 'Rum', cena: 120, skladem: false },
    { nazev: 'Víno', cena: 85, skladem: true },
    { nazev: 'Whisky', cena: 450, skladem: true },
    { nazev: 'Vodka', cena: 280, skladem: false },
    { nazev: 'Becherovka', cena: 210, skladem: true },
    { nazev: 'Kofola', cena: 40, skladem: true },
    { nazev: 'Voda', cena: 15, skladem: false },
]

// ["Pivo", "Rum", "Vino"]

const pojmenovaniNapoju = napoje.map(polozka => polozka.nazev)
const pojmenovaniNapoju2 = napoje.map(function(polozka) { // { nazev: 'Pivo', cena: 12, skladem: true }
    // if(polozka.skladem) {
    //     return polozka.nazev
    // } else {
    //     return "Neni skladem"
    // }

    return polozka.skladem ? polozka.nazev : "Neni skladem"
})

console.log(pojmenovaniNapoju)
