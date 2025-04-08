// Combate.js
let playerHP = 100; // HP del jugador       
let enemyHP = 100; // HP del enemigo
let playerAttack = 0; // Ataque del jugador
let enemyAttack = 0; // Ataque del enemigo
let playerSpeed = 0; // Velocidad del jugador
let enemySpeed = 0; // Velocidad del enemigo
let playerPokemon = null; // Pokemon del jugador






function Combate() {
    // Obtener los datos del jugador y el enemigo
    playerPokemon = document.getElementById("playerPokemon").value;
    enemyPokemon = document.getElementById("enemyPokemon").value;

    // Obtener los datos del pokemon del jugador
    let playerPokemonData = getPokemonData(playerPokemon);
    playerHP = playerPokemonData.hp;
    playerAttack = playerPokemonData.attack;
}
const pokemones = [
    { nombre: "Pikachu", ataque: 55, defensa: 40, velocidad: 90, imagen: "../assets/img/pikachu.png" },
    { nombre: "Charmander", ataque: 60, defensa: 45, velocidad: 65, imagen: "../assets/img/charmander.png" },
    { nombre: "Clefable", ataque: 70, defensa: 73, velocidad: 60, imagen: "../assets/img/clefable.png" },
    { nombre: "Cubone", ataque: 50, defensa: 95, velocidad: 35, imagen: "../assets/img/cubone.png" }
];

function updateHPBars() {
  document.getElementById('player-hp').style.width = playerHP + '%';
  document.getElementById('enemy-hp').style.width = enemyHP + '%';
}

function attack() {
  const damage = Math.floor(Math.random() * 20) + 5; // 5 a 25 de daño
  enemyHP -= damage;
  if (enemyHP < 0) enemyHP = 0;
  enemyTurn();
  updateHPBars();
}

function heal() {
  const healAmount = Math.floor(Math.random() * 15) + 5;
  playerHP += healAmount;
  if (playerHP > 100) playerHP = 100;
  enemyTurn();
  updateHPBars();
}

function enemyTurn() {
  const damage = Math.floor(Math.random() * 15) + 5;
  playerHP -= damage;
  if (playerHP < 0) playerHP = 0;
}
