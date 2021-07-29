function creaCampo(celle) {
    for (let i = 1; i <= celle; i++) {
       
        let celle =`<div data-cella ="${i}" class="cella">
        </div>`;

        let templateCella = document.createElement("DIV");
        templateCella.classList.add("quadrato"); 
        templateCella.innerHTML = celle;
        document.getElementById("campo").appendChild(templateCella);
    }
}

document.getElementById("campo").addEventListener("click",
function (e) {
    console.log(e.target.dataset.cella);
    console.log(numBombe);
    if (numBombe.includes(parseInt(e.target.dataset.cella))) {
        alert("hai perso");
    }
    
})

creaCampo(100);

