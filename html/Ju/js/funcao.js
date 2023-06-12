

function encaminhar() {
    alert('Uma gostosa detectada.\nNome: Juliane Biluca\nCaracteristica: Gostosa\nPermitida a entrada');
    //window.location.replace("Misterioso.html");

}

function digitar(texto, id){

   
    let p = document.getElementById(id)
    console.log(p)
    console.log(p.innerText)
    //p.textContent = texto

    let i = 0
    function escreverLetra(){

        //console.log(texto[i])
        p.textContent += texto[i]
        i++
        if(i<texto.length){
            setTimeout(escreverLetra, 100)
        }

    }

    setTimeout(escreverLetra, 2000)
    

    
}

function visible(id){
    let element = document.getElementById(id)
    element.classList.add("visible")
}

function invisible(id){
    let element = document.getElementById(id)
    element.classList.remove("visible")
    //element.classList.add("invisible")

}

function passTxt(){
    e ="card-misterio"

    invisible(e);
    html = 
    "<p class='paragrafo'>..</p>";

   
    //element.innerHTML = html

    visible(e+1)

    setTimeout(function(){
        text = 'Agora aprecie um pouco essa beldade...'
        digitar(text, "tit")
    },100)

}

function photoPass(){
    e ="card-misterio1"

    let element = document.getElementById(e)
    element.style.display = "none"

    let body = document.getElementById("boby")
    body = document.getElementsByClassName("body-background")[0]
    console.log(body)
    document.addEventListener("DOMContentLoaded", function(){
        body.style.backgroundImage = 'url("imagen/ju1.jpeg")'
    });

}