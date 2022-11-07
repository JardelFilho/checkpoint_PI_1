const tempoPipoca = 10;
const tempoMacarrao = 8;
const tempoFeijao = 12;
const tempoCarne = 15;
const tempoBrigadeiro = 8;


function pipoca (time){

    if (time >= (tempoPipoca * 3)) {
        return `Kabumm`;
    } else if (time < tempoPipoca) {
        return `Tempo insuficiente`;
    } else if ((tempoPipoca * 2) >= time < (tempoPipoca *3)){
        return `A pipoca queimou`;
    }  else {
        return `Prato pronto, bom apetite`;
    }

}
function macarrao (time){

    if (time >= (tempoMacarrao * 3)) {
        return `Kabumm`;
    } else if (time < tempoMacarrao) {
        return `Tempo insuficiente`;
    } else if ((tempoMacarrao * 2) >= time < (tempoMacarrao *3)){
        return `o macarrao queimou`;
    }  else {
        return `Prato pronto, bom apetite`;
    }

}
function Carne (time){

    if (time >= (tempoCarne * 3)) {
        return `Kabumm`;
    } else if (time < tempoCarne) {
        return `Tempo insuficiente`;
    } else if ((tempoCarne * 2) >= time < (tempoCarne *3)){
        return `A carne queimou`;
    }  else {
        return `Prato pronto, bom apetite`;
    }

}
function feijao (time){

    if (time >= (tempoFeijao * 3)) {
        return `Kabumm`;
    } else if (time < tempoFeijao) {
        return `Tempo insuficiente`;
    } else if ((tempoFeijao * 2) >= time < (tempoFeijao *3)){
        return `o feijao queimou`;
    }  else {
        return `Prato pronto, bom apetite`;
    }

}
function brigadeiro (time){

    if (time >= (tempoBrigadeiro * 3)) {
        return `Kabumm`;
    } else if (time < tempoBrigadeiro) {
        return `Tempo insuficiente`;
    } else if ((tempoBrigadeiro * 2) >= time < (tempoBrigadeiro *3)){
        return `o brigadeiro queimou`;
    }  else {
        return `Prato pronto, bom apetite`;
    }

}
