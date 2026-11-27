

// "use strict";

// console.log("Sikeres összekötés ✅");

// // const Surname = "Dávid"

// // console.log(Surname);

// // let eves3 = "davidka"

// // console.log(eves3);

// // let korabbimunka = "asztalos"

// // let jelenlegimunka ="programozó"

// // console.log(korabbimunka , jelenlegimunka);

// // console.log(typeof 23)
// // console.log(typeof 3.5)
// // console.log(typeof "3.5")
// // console.log(typeof talabér)

// // let firstName;
// // console.group(typeof firstName);

// // const fruitArray = ["alma", "banán", "cseresznye", "dinnye", "eper"];

// // console.log(fruitArray[2]);


// // const egyedinevek = new Set(["talabér","teofil", "dávid"]);
// // console.log(egyedinevek);

// // const now = 2026;
// // const eletkordavid = now - 2009;
// // const eletkortalaber = now - 2009;

// // console.log(eletkordavid, eletkortalaber);

// // console.log(eletkordavid * eletkortalaber / 10, 2** 3);

// // const familyName = "Bellai"
// // const lastname = "Dávid"

// // console.log(familyName + ' ' + lastname);

// // let x = 10;

// // x += 10;
// // x *= 4;

// // x++;    

// // console.log(x);

// // // összehasonlító operatorok


// // console.log(eletkordavid > eletkortalaber);


// // const keresztnev = "Balázs";
// // const  foglalkozasszeretne = "Kezdő programozó";

// // const foglalkozasmarad = "Kezdő Kábeldugdosó";

// // const szuletesiev = 2009;
// // const jelenlegiev = 2026;

// // const balazs = keresztnev + "vagyok," + (jelenlegiev - szuletesiev) + "éves vagyok, és" + foglalkozasszeretne + "szeretnék lenni, de jelenleg" + foglalkozasmarad + "vagyok.";

// // console.log(balazs);

// // const balazsuj = `${keresztnev} vagyok, ${jelenlegiev - szuletesiev} éves vagyok, és ${foglalkozasszeretne} szeretnék lenni, de jelenleg ${foglalkozasmarad} vagyok.`;

// // console.log(balazsuj);

// // // console.log("Talabér vagyok \n\ haladó programozó")

// // // const kor = 19

// // // const elegidos = kor >= 18;

// // // if (elegidos) {
// // //     console.log("Beléphetsz a klubba ✅");
// // // } else {
// // //     console.log("Sajnálom, még nem léphetsz be ❌");
// // // }

// // const szuletesiEv = 2002
// // let szazad;

// // if (szuletesiEv <= 2000) {
// //     szazad = 20
// //     console.log(`${szazad}. században születtél`)
// // } else {
// //     szazad = 21
// //     console.log(`${szazad}. században születtél`)
// // }

// // console.log(szazad);

// // const bekertev = "1991"

// // console.log(bekertev+18);

// // const szuletesi_ev = Number(bekertev);

// // console.log(szuletesi_ev + 18);

// // console.log(Number("Talaber"));
// // console.log(typeof szuletesi_ev)


// // console.log("Én " + 23 + " éves vagyok");

// // console.log("23" - "10" -3)

// // console.log("talabér" - "olivér")

// // console.log("23" * "2")

// // console.log("24" / "2")

// // console.log(Boolean(undefined))
// // console.log(Boolean({}))
// // console.log(Boolean(Number("Talabér")))


// // const kor = 18;

// // if (kor === 18) 
// //     console.log("most lettél nagykorú!")


// // console.log(18 === 18);
// // console.log(18 == 18);
// // console.log(18 === "18");
// // console.log(18 == "18");

// // const kedvenc = Number(prompt("Mi a kedvenc számod?"));

// // console.log(kedvenc, typeof kedvenc);

// // if (kedvenc === 23) {
// //     console.log("A 23 egy nagyszerű szám!");

// // } else if (kedvenc === 7) {
// //     console.log("A 7 is egy nagyszerű szám!");

// // } else if (kedvenc === 27) {
// //     console.log("A 27 legjobb szám!");

// // } else {
// //     console.log("Más számot választottál.");
// // }

// // if (kedvenc !== 27) {
    
// //     console.log("nem értem miert nem 27-et valaszottad.");
// // }

// const age = 16;

// const a = age >= 20 ;
// const b = age <= 30;

// console.log(a);
// console.log(b);

// // // // // // // // // // // // // logikai operatorok

// console.log(!a)
// console.log(a && b)
// console.log(a || b)
// console.log(!a && b) 
// console.log(a && !b) 

// const hasDriversLicense = true;
// const hasGoodEyesight = true;
// const isTired = false;
// const canDrive = hasDriversLicense && hasGoodEyesigh && isTired; ;
 
// if (canDrive) {
//     console.log("Vezethetsz!");
// } else {
//     console.log("Nem vezethetsz!");
// }


// const day = "hétfő"


// switch (day) {

//     case "hétfő":
//         console.log("Kezdődik a hét dupla tjvel")
//         break;
//     case "kedd":
//         console.log("Dupla adatbázis")
//         break;
//     case "szerda":
//         console.log("fizika elso ora")
//         break;
//     case "csütörtök":
//         console.log("Dupla magyar")
//         break;
//     case "péntek":
//         console.log("Kis szombat")
//         break;
//     case "szombat":
//         console.log("Ma szombat van")
//         break;
//     case "vasárnap":
//         console.log("Ma vasárnap van")
//         break;
//     default:
//         console.log("Érvénytelen nap")
// }

// const age = 23;

// age >= 18 ? console.log("Nagykorú vagy") : console.log("Kiskorú vagy");

// const drink = age >= 18 ? "Sört ihatsz" : "kólát ihatsz";

// console.log(drink);

// let driverslicense = false;
// const passtest = true;

// if (passtest) {
//     driverslicense = true;
// }

// if (driverslicense) {
//     console.log("Vezethetek ✅");
// }


// const private = 23;

// function logger() {
//     console.log("A nevem talabér");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Gyümölcslé ${apples} darab almából és ${oranges} darab narancsából`;
//     return juice;
// }

// fruitProcessor(5,0);
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);


// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// function calcAge1(birthYear) {
//     const age = 2026 - birthYear;
//     return age;
    
// }
// const age1 = calcAge1(2009);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2026 - birthYear;
// }

// const age2 = calcAge2(2009);
// console.log(age2);


// Nyílfüggvények

// const calcAge3 = birthYear => 2026 - birthYear;

// const age3 = calcAge3(2009);
// console.log(age3);


// const yearsUntilRetirement = (birthYear) => {
//         const age = 2026 - birthYear;
//         const retirement = 65 - age;
//         return `${retirement} `;
//     }

// console.log(yearsUntilRetirement(2009,'Talabér'));

// const yearsUntilRetirement = (birthYear, firstName) => {
//         const age = 2026 - birthYear;
//         const retirement = 65 - age;
//         return `${firstName} ${retirement} év múlva mehet nyugdíjba`;
//     }

//  console.log(yearsUntilRetirement(2009,'Talabér'));

// function fruitCalculator (fruit) {
//  return fruit * 4;    
// }

// function fruitProcessor (apples, oranges) {
//     const applePieces = fruitCalculator(apples);
//     const orangePieces = fruitCalculator(oranges);
//     const juice = `Gyümölcslé ${applePieces} alma db-ból és ${orangePieces} narancs db-ból készült.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcage = function (birthYear) {
//     return 2026 - birthYear;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2026 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} ${retirement} év múlva mehet nyugdíjba`;

//     if (retirement > 0) {
//         return `${firstName} ${retirement} év múlva mehet nyugdíjba`;
//     } else {
//         console.log( `${firstName} már elérte a nyugdíjkorhatárt!`);
//         return -1;
//     }
// }
// console.log(yearsUntilRetirement(1243, 'Talabér'));


///////// Tömbök //////////////

// const friends = ["Talabér", "Olivér", "Dávid", "Levente","Teofil","Tanárúr"];
// console.log(friends);

// console.log(friends [3] );

// console.log(friends.length);


// console.log(friends[friends.length - 1 ]);

// friends [2] = "Mate";
// console.log(friends);

// const firstName = "Levente";
// const levente = [firstName, "Császár" , 2009, "programozó", friends];

// console.log(levente);
// console.log(levente[levente.length-1].length);

// const CalcAge = function (birthYear) {
//     return 2026 - birthYear;
// }

// const years = [1987, 1967, 2009, 2020, 2011,2027];

// console.log(CalcAge(years[years.length - 1]))


const friends = ["Levente","Mate","Tanárúr"];
// const newlength = friends.push("Dávid");

// friends.push("Olivér");
// console.log(friends);
// console.log(newlength);

// // friends.unshift("Szebasztian");

// const unshiftedLength = friends.unshift("Szebasztian");

// console.log(unshiftedLength);

// const popped = friends.pop();
// console.log(popped);

const shifted = friends.shift();

console.log(shifted);