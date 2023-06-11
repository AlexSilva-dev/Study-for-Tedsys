

function encaminhar() {
    alert('Uma gostosa detectada.\nNome: Juliane Biluca\nCaracteristica: Gostosa\nPermitida a entrada');
    //window.location.replace("Misterioso.html");

}

function digitar(){

    texto = "Feliz dia dos namorados para a mulher mais importante da minha vida, mas vc n é só minha namorada, você é minha amiga, minha companheira, a mulher que quero morrer ao lado "
   
    let p = document.getElementsByClassName("paragrafo")[0]
    console.log(p)
    console.log(p.innerText)
    //p.textContent = texto

    let i = 0
    function escreverLetra(){

        console.log(texto[i])
        p.textContent += texto[i]
        i++
        if(i<texto.length){
            setTimeout(escreverLetra, 100)
        }

    }

    setTimeout(escreverLetra, 2000)
    

    
}

digitar();
