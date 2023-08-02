// let habilidades = {
//     health: 3,
//     boost: 2,
//     leech: 50,
//     fireBall: 24,
//     ironBody: 8
// }





// let compañeros = ['Otniel', 'Oscar', 'Morales', 'Santiago', 'Javier'];

// let profesores = ["Ángel", "Marcos", "Pedro", "Daniel", "Millard"];

// console.log('-----Parte 2-----');

// function nombreAleatoreo(array) {
//     let compAleatoreos = array[Math.floor(Math.random() * array.length)];
//     let nombre = compAleatoreos;
//     return nombre;
// }

// console.log(nombreAleatoreo(compañeros));

// let personaje = {}
// let enemigo = {}


// function createCharacter() {
//     let nombrePersonaje = nombreAleatoreo(compañeros);
//     let hp = prompt('Introduce el valor de hp que deseas darle a tu personaje:',100)
//     let str = prompt('Introduce la fuerza que le quieres dar a tu personaje:',30)
//     let def = prompt('Introduce el valor de defensa que quieres darle a tu personaje',20)

//     personaje = {
//         namePersonaje: nombrePersonaje,
//         hp: parseInt(hp),
//         str: parseInt(str),
//         def: parseInt(def)
//     }
//     return personaje
// }

// createCharacter();

// let vidaEnemigoMax = 0;

// function createEnemigo() {
//     let nombreEnemigo = nombreAleatoreo(profesores);
//     let hp = prompt('Introduce el valor de hp que deseas darle a tu enemigo:',100)
//     let str = prompt('Introduce la fuerza que le quieres dar a tu enemigo:',20)
//     let def = prompt('Introduce el valor de defensa que quieres darle a tu enemigo',20)
//     vidaEnemigoMax = hp;
//     enemigo = {
//         nameEnemigo: nombreEnemigo,
//         hp: parseInt(hp),
//         str: parseInt(str),
//         def: parseInt(def)
//     }
//     return enemigo
// }

// createEnemigo();

// let segundaFase = 0;
// let derrotado = false // Variable para controlar si se ha mostrado el alert de derrota
// function ataqueEmigo(personaje, enemigo) {

//     let result = personaje.def - enemigo.str
//     personaje.hp += result
//     console.log(personaje, enemigo);
//     if (personaje.hp > 0) {
//         ataquePersonaje(personaje, enemigo)
//     }
//     else {
//         if (segundaFase === 0) {
//             console.log('Game Over');
//         }
//         else {
//             if (derrotado === false) {// Verificar si el alert de derrota aún no se ha mostrado
//                 derrotado = true;//Actualiza la variable a true para que en la proxima llamad de la funcion de ataque no se vuelva a mostrar este alert
//                 alert('Te han derrotado pero aun puedes usar una ultima habilidad')
//             }
//             console.log(personaje, enemigo);
//             let selectHab = prompt('Selecciona la habilidad que desea de la siguientes disponibles: leech, fireBall, ironBody.',"leech")

//             if (habilidades.hasOwnProperty(selectHab)) {
//                 let porcentaje = habilidades[selectHab]
//                 let reducirVida = enemigo.hp * (porcentaje / 100)
//                 enemigo.hp -= reducirVida
//                 personaje.hp += reducirVida
//             }
//             else {
//                 alert('La habilidad introducida no existe')
//             }
//             if (personaje.hp <= 0) {
//                 console.log('Haz usado tu habilidad pero aun asi has muerto GAME OVER');
//             }
//             if (personaje.hp > 0) {
//                 ataquePersonaje(personaje, enemigo)
//             }
//         }
//     }
// }

// ataqueEmigo(personaje, enemigo);
// function ataquePersonaje(personaje, enemigo) {

//     let result = enemigo.def - personaje.str
//     enemigo.hp += result
//     console.log(personaje, enemigo);
//     if (enemigo.hp > 0) {
//         ataqueEmigo(personaje, enemigo);
//     }
//     else if (segundaFase == 0) {
//         segundaFase = 1;
//         for (let i = 0; i < vidaEnemigoMax * 2; i++) {
//             enemigo.hp++
//             console.log(enemigo.hp);
//         }
//         enemigo.str *= 1.75

//         alert('El enemigo a entrado a la segunda fase y a recargado su vida y su ataque ¡Cuidado!. Tienes la opcion de elejir si quieres obtener el triple de Vida o un Boost de fuerza y defensa')

//         let selectUp = prompt('Escriba (health) si  desea subir su vida por 3, o escriba (boost) si desea que se le incremente algun skills ',"health")

//         if (selectUp === 'health') {
//             personaje.hp *= habilidades[selectUp]
//         }
//         else if (selectUp === 'boost') {
//             personaje.str *= habilidades[selectUp]
//             personaje.def *= habilidades[selectUp]
//         }
//         else {
//             alert('La palabra introducida no es correcta por favor introduzca la habilidad que quiere de manera correcta')
//         }

//         ataqueEmigo(personaje, enemigo)

//     }
//     else {
//         alert('Haz derrotado a las fuerzas del mal')
//     }
// }
const body = document.querySelector('body');
body.style = `display:flex; flex-direction:column;align-items:center;min-width:1000px;background-color:black`
const navNames = document.querySelector('nav');
navNames.style = 'display:flex; justify-content:space-around; background-color:#778899; color:white';

const heroe = document.querySelector('h3');
const demonio = document.querySelector('h3').nextElementSibling;
let heroeAl = ['Otniel', 'Oscar', 'Morales', 'Santiago', 'Javier'];

let demonioAl = ["Ángel", "Marcos", "Pedro", "Daniel", "Millard"];

function nombreAleatoreo(array) {
    let heroeDemonioAle = array[Math.floor(Math.random() * array.length)];
    return heroeDemonioAle;
};
heroe.innerHTML = `Heroe: ${nombreAleatoreo(heroeAl)}`;
demonio.innerHTML = `Rey demonio: ${nombreAleatoreo(demonioAl)}`;

const secEst = document.getElementById('SectionEstadisticas');
secEst.style = 'display:flex; justify-content:space-around; align-items: center;padding-top: 0.1em; gap: 0.1em';
const articleEst = document.getElementsByClassName('container');
articleEst[0].style = 'background-color:#deb887; border:1px solid black;display:flex; flex-direction:column; align-items:center;padding: 1em'
articleEst[1].style = 'background-color:#deb887; border:1px solid black;display:flex; flex-direction:column; align-items:center;padding: 1em'






const estadisticasHeroes = [
    { name: 'Name:', valueName: heroe.textContent },
    { hp: 'HP:', valueHp: 50 },
    { str: 'Str:', valueStr: 20 },
    { def: 'Def:', valueDef: 5 }
];

const estadisticasDemonios = [
    { name: 'Name:', valueName: demonio.textContent },
    { hp: 'HP:', valueHp: 50 },
    { str: 'Str:', valueStr: 10 },
    { def: 'Def:', valueDef: 5 }
];

const barHp = document.getElementsByClassName('barHp');
barHp[0].style = `background-color: green; width:${estadisticasHeroes[1].valueHp * 10 / 50}em; height: 0.5em; border:1px solid black`;
barHp[1].style = `background-color: green; width: ${estadisticasDemonios[1].valueHp * 10 / 50}em; height: 0.5em; border:1px solid black`;


function atributes(array, numero) {
    const divEstadisticas = document.createElement('div');
    divEstadisticas.style = 'display:flex; justfy-content: center; align-items:center; flex-direction:column';
    for (let i = 0; i < array.length; i++) {

        const divX = document.createElement('div');
        divX.style = 'display: flex; justify-content: start; align-items:center; width: 100%; gap: 10em';
        let estadisticas = Object.values(array[i]);
        const h3Estadistica = document.createElement('h3');
        const pEstadistica = document.createElement('p');
        if (i === 1) {
            if (array === estadisticasHeroes) {
                pEstadistica.id = 'hpPHeroe'

            }
            else if (array === estadisticasDemonios) {
                pEstadistica.id = 'hpPdemonio'

            }
        }
        h3Estadistica.innerHTML = estadisticas[0];
        h3Estadistica.style = `border-bottom: solid 1px #06202b;width:3em;`;
        pEstadistica.innerHTML = estadisticas[1];
        pEstadistica.style = `border-radius:1px;background-color:	#ffe4c4;width:10em;text-align:start;margin-top:2px`
        divX.appendChild(h3Estadistica);
        divX.appendChild(pEstadistica);
        divEstadisticas.appendChild(divX);

    };
    articleEst[numero].appendChild(divEstadisticas);
};

atributes(estadisticasHeroes, 0);
atributes(estadisticasDemonios, 1);

const globalDaño = document.getElementById('globalDaño');
const containerDaño = document.getElementsByClassName('containerDaño');
const textDañoHeroe = document.getElementById('textDañoHeroe');
const textDañoDemonio = document.getElementById('textDañoDemonio');
const containerBtnAtack = document.getElementById('containerBtnAtack');
const containerBtnHeroe = document.getElementById('containerBtnHeroe');
const btnAtackH = document.getElementById('btnAtackHeroe');
const selectHab = document.getElementById('selectHabilidaes');
const btnAtackD = document.getElementById('btnAtackDemonio');

globalDaño.style = 'display:flex; gap: 0.1em; padding-top: 0.1em'
containerDaño[0].style = 'width:50%; border: 1px solid black; height: 10em; background-color: #dcdcdc; padding-left:0.9em';
containerDaño[1].style = 'width:50%; border: 1px solid black; background-color: #dcdcdc; padding-left:0.9em';
containerBtnAtack.style = 'display:flex; justify-content: space-around; align-items:center; padding-top: 3em'
containerBtnHeroe.style = 'display:flex; gap:1em'
selectHab.style = 'height:2em; background-color:#ffe4e1'



let derrotado = false;
let vidaEnemigoMax = 0;
let segundaFase = 0

function ataqueDemonio(heroeEst, demonioEst) {
    let dañoDemonio = demonioEst[2].valueStr - heroeEst[3].valueDef
    let restaVidaHeroe = heroeEst[1].valueHp -= dañoDemonio;
    barHp[0].style.width = `${restaVidaHeroe * 10 / 50}em`;

    document.getElementById('hpPHeroe').textContent -= dañoDemonio;
    if (heroeEst[1].valueHp > 1) {
        
        textDañoDemonio.innerText += `${demonio.textContent} hecho ${dañoDemonio} de daño.\n`;
    }
    // if (segundaFase == 0) {
    //     segundaFase = 1;
    //     for (let i = 0; i < vidaEnemigoMax*2; i++) {
    //         demonioEst[1].valueHp ++
            
    //     }
    // }

};

function ataqueHeroe(heroeEst, demonioEst) {
    let dañoHeroe = heroeEst[2].valueStr - demonioEst[3].valueDef

    let restaVidaDemonio = demonioEst[1].valueHp -= dañoHeroe;
    barHp[1].style.width = `${restaVidaDemonio * 10 / 50}em`;

    document.getElementById('hpPdemonio').textContent -= dañoHeroe;

    if (demonioEst[1].valueHp > 1) {
        textDañoHeroe.innerText += `${heroe.textContent} ha hecho ${dañoHeroe} de daño.\n`;
    }
};
btnAtackH.disabled = true

btnAtackD.addEventListener('click', () => {
    ataqueDemonio(estadisticasHeroes, estadisticasDemonios);
    btnAtackD.disabled = true
    btnAtackH.disabled = false
});
btnAtackH.addEventListener('click', () => {
    ataqueHeroe(estadisticasHeroes, estadisticasDemonios);
    btnAtackH.disabled = true;
    btnAtackD.disabled = false;
});
















