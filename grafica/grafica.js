function creaCampo(celle) {
    for (let i = 0; i <= celle; i++) {
        const element = array[i];
        let celle =`<div data-cella ="${i}" class="cella">
        </div>`;

        let templateCella = document.createElement("DIV");
        templateCella.classList.add("quadrato"); 
        templateCella.innerHTML = cella;
        document.getElementById("cella").appendChild(templateCella);
    }
}

document.getElementById("campo").addEventListener("click",
function e() {
    console.log(e);
    
})

creaCampo(100);