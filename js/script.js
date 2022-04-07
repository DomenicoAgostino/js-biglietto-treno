console.log("ciao");


/*

1)Chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

2) Calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

3)L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)

 */


// Dati utente

const chilometri = parseInt(prompt ("Quanti km devi fare?")); 
console.log(chilometri);



const anni = parseInt(prompt("Quanti anni hai?"));

console.log(anni);


// Calcolo prezzo per km

const prezzoKm = 0.21;

let prezzo = chilometri * prezzoKm

console.log(prezzo);


// Apllichiamo Sconto 


if (anni < 18) {
  prezzo = prezzo - (prezzo * 20 / 100);
} else if (anni > 65) {
  prezzo = prezzo - (prezzo * 40 / 100);

}

console.log(prezzo);

// Mettere prezzo finale


  text ='Il prezzo del biglietto è di € ' +prezzo.toFixed(2) +' Ti auguriamo Buon Viaggio!';


  console.log(text);

  document.getElementById("testo-biglietto").innerHTML = text




