let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];
let vyherce = document.querySelector('#vyherka');
let seznamJmen = document.querySelector('#seznam');
let vyvolanaJmena = document.querySelector('#vyvolanajmena');


function tahnoutJmeno() {
    // let randWidth = Math.floor(Math.random() * width);
    if (jmena.length === 0) {
        return;
    }

    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random() * jmena.length);
    console.log(vyherniIndex);

    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];
    console.log(vyherniJmeno);

    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);
    console.log(jmena.length);

    // Výherní jméno si uložíme do pole k ostatním výherním
    tazenaJmena.push(vyherniJmeno);
    console.log(tazenaJmena);

    vyherce.innerHTML = vyherniJmeno;

    seznamJmen.innerHTML = tazenaJmena;

    //Vyvolana jmena
    vyvolanaJmena.innerHTML = tazenaJmena;

    for (i = 0; i < tazenaJmena.length; i++) {
        document.querySelector('.pocet').innerText = i + 1;
    }
}

//let vyherka = document.querySelector('#vyherka');
//let seznam = document.querySelector('#seznam');


function restart() {
    let pocet = document.querySelector('.pocet');
    vyherka.innerHTML = "";
    seznamJmen.innerHTML = "Seznam vyvolaných";
    pocet.innerHTML = 0;
    tazenaJmena = [];
}