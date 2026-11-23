console.log("Sikeres összekötés ✅");
// let kereszt_nev = "Talabér";
// console.log (kereszt_nev);
// kereszt_nev = "Teofil"
// console.log (kereszt_nev);
// let eves3 = "Dávidka";
// console.log(eves3);
// let munka1 = "asztalos";
// let munka2 = "programozó";
// let korabbiMunka= "asztalos";
// let jelenlegiMunka = "programozó";
// console.log(typeof 23);
// console.log(typeof 3.5);
// console.log(typeof "alma");
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof Talaber);
// // let keresztNev;
// console.log(keresztNev);
// const gyumolcsok = ["alma", "banan", "citrom"]
// console.log(gyumolcsok[1])
// const egyediNevek = new Set(["Talabér", "Teofil", "Talabér"])
// console.log(egyediNevek);
// Értékadási operátorok //
// const now = 2026;
// const eletkorDavid = now - 2009;
// const eletkorTalaber = now - 2009;
// console.log(eletkorDavid)
// console.log(eletkorTalaber)
// console.log(eletkorDavid * 2, eletkorTalaber / 10, 2 ** 3)
// const vezetekNev = "Bellai";
// const keresztNev = "Talabér";
// console.log (vezetekNev + keresztNev)
// console.log (vezetekNev + " " + keresztNev)
// let x = 10 + 5;
// // x = x + 10;
// x += 10;
// x *= 4;
// x++;
// x--;
// console.log(x)
// Összehasonlító operátorok //
// console.log(eletkorDavid >= eletkorTalaber)


// const keresztNev = "Balázs"
// const foglalkozasSzeretne = "Kezdő programozó"

// const foglalkozasMarad = "Kezdő kábeldugdosó";

// const szuletesiEv = 2009;
// const ev = 2026;

// const balazs = keresztNev + "vagyok, " + (ev - szuletesiEv) + "éves " + foglalkozasSzeretne + "szeretnék lenni!"

// console.log(balazs)

// const balazsUj = `${keresztNev} vagyok, ${ev - szuletesiEv} éves ${foglalkozasSzeretne} szeretnék lenni!`;

// console.log(balazsUj);
// console.log("Talabér vagyok \n\ haladó programozó!");
// console.log(`Talabér vagyok
//     haladó programozó`);

// const kor = 16;

// const elegidos = kor >= 18;

// if (
//     elegidos
// ) {
//     console.log(`Teofil ihat bort!
//         🍷`)
// } else {
//     const evekhatra = 18 - kor;
//         console.log(`Teofil nem ihat bort! 😕`)
//         console.log(`Van még hátra: ${evekhatra} éve, hogy ihason bort. 🍷 🎊`)
// }

// const szuletesiEv = 2002;
// let szazad;

// if (szuletesiEv <= 2000) {
//     szazad = 20;
//     console.log(`${szazad} században született.`)
// } else {
//     szazad = 21;
//     console.log(`${szazad} században született.`)
// }

// console.log(szazad)

// const kor = 18;

// if (kor == 18)
//     console.log("Most lettál nagykorú!")

// console.log(18 === 18);
// console.log(18 == 18);
// console.log(18 === "18");
// console.log(18 == "18");

// const kedvenc = Number(prompt("Kérem adja meg a kedvenc számod? "))

// console.log (kedvenc, typeof kedvenc);

// if (kedvenc === 23) 
// {
//     console.log("A 23 egy nagyszrű szám!");
// } else if (kedvenc === 7) { 
//     console.log("A 7 is egy nagyszerű szám!");
// } else if (kedvenc === 27) {
//     console.log("A 27 a legjobb szám!");
// } else {
//     console.log("Más számot választottál! ");
// }

// if (kedvenc !== 27) {
//     console.log("Nem értem mért nem 27 et választottál!");
// }

// const age = 16;

// const a = age >= 20;
// const b = age <= 30;

// console.log(a)
// console.log(b)

// // logikai operatorok

// console.log(!a);
// console.log(a && b);
// console.log(a || b);
// console.log(!a && b);
// console.log(a && !b)

const hasdriverlicense = true;
const hasGoodvision = true;
const isTired = true;
const ShouldDrive = hasdriverlicense && hasGoodvision && !isTired;

if (ShouldDrive)
{
    console.log("Te vezethetsz!");
} else {
    console.log("Nem neked kellene vezetned!");
}