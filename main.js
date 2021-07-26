// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
var numBombe = [];
function casuali() {
    bomba = 16;
    
    
     while(numBombe.length < 16) {
           num = Math.round(Math.random()*100 + 1);
           if(numBombe.includes(num) == false)
          numBombe.push(num);
     }
     console.log(numBombe);
     
  }
casuali()
//   I numeri non possono essere duplicati.


// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var numUtente = [];
while (numUtente.length < 100 - 16) {
    var sceltaUtente = parseInt(prompt("iserisci un numero"));
    if (numUtente.includes(sceltaUtente) == false) {
        numUtente.push(sceltaUtente); 
    }  
    // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

       
}
console.log(numUtente);
var punteggio = numUtente.length;
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
switch (operazione) {
   case 1:
   if (numUtente == sceltautente) {
    break;
   }
    default:
      console.log(punteggio);
}




