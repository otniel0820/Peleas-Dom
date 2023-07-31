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

const navNames = document.querySelector('nav');
navNames.style = 'display:flex; justify-content:space-around; background-color:#778899; color:white'

const heroe = document.querySelector('h3');
const demonio = document.querySelector('h3').nextElementSibling;
const main = document.querySelector('main');
const sectionEstadisticas = main.children[1];
sectionEstadisticas.style.display= 'flex'
sectionEstadisticas.style.justifyContent= 'space-around'
sectionEstadisticas.style.border= '3px solid black'






const articleEstadisticasH = sectionEstadisticas.children[0];

articleEstadisticasH.style.width = '50%';
articleEstadisticasH.style.borderRight = '3px solid black' 
const divEstadisticasH = articleEstadisticasH.children
divEstadisticasH[0].id = 'estadisticasH';
const articleEstadisticasD = sectionEstadisticas.children[1];
articleEstadisticasD.style.width = '50%'
const divEstadisticasD = articleEstadisticasD.children;
divEstadisticasD[0].id = 'estadisticasD';


let heroeAl = ['Otniel', 'Oscar', 'Morales', 'Santiago', 'Javier'];

let demonioAl = ["Ángel", "Marcos", "Pedro", "Daniel", "Millard"];

function nombreAleatoreo(array) {
    let heroeDemonioAle = array[Math.floor(Math.random() * array.length)];
    return heroeDemonioAle;
};
heroe.innerHTML = `Heroe: ${nombreAleatoreo(heroeAl)}`;
demonio.innerHTML = `Rey demonio: ${nombreAleatoreo(demonioAl)}`;



const heroeAtributes = [
    { key: 'Name: ', value: nombreAleatoreo(heroeAl) },
    { key: 'HP: ', value: 50 },
    { key: 'Str: ', value: 20 },
    { key: 'Def: ', value: 5 }
];
const demonioAtributes = [
    { key: 'Name: ', value: nombreAleatoreo(demonioAl) },
    { key: 'HP: ', value: 50 },
    { key: 'Str: ', value: 10 },
    { key: 'Def: ', value: 5 }
];

function addEstadisticas(array, divId) {
   
    const targetDiv = document.getElementById(divId);
    
    array.forEach(element => {
        const containerEstadisticas = document.createElement('div');
        const h4Estadisticas = document.createElement('h4');
        h4Estadisticas.textContent = element.key;
        const spanEstadisticas = document.createElement('span');
        spanEstadisticas.textContent = element.value;
        h4Estadisticas.style.paddingRight = '30em'

        targetDiv.appendChild(containerEstadisticas);
        containerEstadisticas.appendChild(h4Estadisticas);
        containerEstadisticas.appendChild(spanEstadisticas);
        targetDiv.style.display ='flex'
        targetDiv.style.flexDirection ='column'
        targetDiv.style.justifyContent ='center'
        
        containerEstadisticas.style.display ='flex'
        containerEstadisticas.style.alignItems ='center'
        containerEstadisticas.style.justifyContent ='center'
        
        
    });
    
}



addEstadisticas(heroeAtributes, 'estadisticasH');
addEstadisticas(demonioAtributes, 'estadisticasD');








