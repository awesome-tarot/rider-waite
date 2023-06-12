// TODOS OS GRUPOS DE CARTAS:
const arcanos_maiores = document.body.querySelector("#arcanos-maiores");
const arcanos_menores_paus = document.body.querySelector("#arcanos-menores-paus");
const arcanos_menores_paus_c  = document.body.querySelector("#arcanos-menores-paus-c");
const arcanos_menores_espadas = document.body.querySelector("#arcanos-menores-espadas");
const arcanos_menores_espadas_c = document.body.querySelector("#arcanos-menores-espadas-c");
const arcanos_menores_copas = document.body.querySelector("#arcanos-menores-copas");
const arcanos_menores_copas_c = document.body.querySelector("#arcanos-menores-copas-c");
const arcanos_menores_ouros = document.body.querySelector("#arcanos-menores-ouros");
const arcanos_menores_ouros_c = document.body.querySelector("#arcanos-menores-ouros-c");

// BOTÃO DE TIRAR CARTA:
const tirarCarta = document.body.querySelector("#tirar-carta");

// BOTÃO DE EMBARALHAR AS CARTAS:
const embaralhar = document.body.querySelector("#embaralhar");

// BOTÃO DE RESETAR A LISTA DE CARTAS_RETIRADAS:
const resetar = document.body.querySelector("#resetar");

// CAMPO ONDE AS CARTAS VÃO:
const mesaCartas = document.body.querySelector(".mesa-das-cartas");

// ARRAY DE TODAS AS CARTAS
var todasCartas = [];
var CARTAS_RETIRADAS = [];
var CARTAS_NA_MESA = 0; // CONTADOR DE QUAL CARTA ESTÁ NA MESA.

tirarCarta.disabled = true;
embaralhar.addEventListener("click", (e) => { // DETECTAR SE O BOTÃO DE EMBARALHAR FOI CLICADO.
    todasCartas = [];
    CARTAS_NA_MESA = 0;
    
    todasCartas = embaralharCartas(arcanos_maiores.checked, arcanos_menores_paus.checked,
            arcanos_menores_paus_c.checked, arcanos_menores_espadas.checked, arcanos_menores_espadas_c.checked,
            arcanos_menores_copas.checked, arcanos_menores_copas_c.checked, arcanos_menores_ouros.checked, arcanos_menores_ouros_c.checked, CARTAS_RETIRADAS);

    tirarCarta.disabled = false;
});

tirarCarta.addEventListener("click", (e) => { // DETECTAR SE O BOTÃO DE TIRAR A CARTA FOI CLICADO.
    if(todasCartas[0] != undefined) {
        CARTAS_NA_MESA+=1;
        colocarCarta(todasCartas[0]);
	CARTAS_RETIRADAS.push(todasCartas[0]);
        todasCartas.shift();
    }
})

resetar.addEventListener("click", (e) => {
    CARTAS_RETIRADAS = []
    todasCartas = [];
    tirarCarta.disabled = true;
    mesaCartas.innerHTML = "";
})

function colocarCarta(carta) {
    mesaCartas.innerHTML += `<div class="border p-3 carta"><p>${CARTAS_NA_MESA}</p><img height="350px" src="cartas/${carta}.jpg" /><div>`;
}

function embaralharCartas(maiores, menores_paus, menores_paus_c,
menores_espadas, menores_espadas_c, menores_copas, menores_copas_c, menores_ouros, menores_ouros_c, cartas_retiradas=[]){
    todasCartas = [...Array(78).keys()];

    if(!maiores){
        for(i=0;i!=22;i++){
            const index = todasCartas.indexOf(i)
            todasCartas.splice(index, 1);
        };
    }
    if(!menores_paus){
        for(i=22;i!=32;i++){
            const index = todasCartas.indexOf(i)
            todasCartas.splice(index, 1);
        };
    }
    if(!menores_paus_c){
        for(i=32;i!=36;i++){
            const index = todasCartas.indexOf(i)
            todasCartas.splice(index, 1);
        };
    }
    if(!menores_ouros){
        for(i=36;i!=46;i++){
            const index = todasCartas.indexOf(i)
            todasCartas.splice(index, 1);
        };
    }
    if(!menores_ouros_c){
        for(i=46;i!=50;i++){
            const index = todasCartas.indexOf(i)
            todasCartas.splice(index, 1);
        };
    }
    if(!menores_copas){
        for(i=50;i!=60;i++){
            const index = todasCartas.indexOf(i)
            todasCartas.splice(index, 1);
        };
    }
    if(!menores_copas_c){
        for(i=60;i!=64;i++){
            const index = todasCartas.indexOf(i)
            todasCartas.splice(index, 1);
        };
    }
    if(!menores_espadas){
        for(i=64;i!=74;i++){
            const index = todasCartas.indexOf(i)
            todasCartas.splice(index, 1);
        };
    }
    if(!menores_espadas_c){
        for(i=74;i!=78;i++){
            const index = todasCartas.indexOf(i)
            todasCartas.splice(index, 1);
        };
    }

    if(CARTAS_RETIRADAS.length){
        todasCartas = todasCartas.filter(function(el) {
            return !CARTAS_RETIRADAS.includes(el);
        });
    }

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
     
            const j = Math.floor(Math.random() * (i + 1));
     
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
     
        return arr;
    }

    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    todasCartas = shuffleArray(todasCartas);
    
    return todasCartas;
}