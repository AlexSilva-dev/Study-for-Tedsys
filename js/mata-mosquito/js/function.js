

function tamanhoTela(){
    let screenHeight = window.innerHeight
    let screenWidth = window.innerWidth
    console.log(screenHeight, screenWidth)
}

function gerarMosquito(){

    var screenHeight = window.innerHeight
    var screenWidth = window.innerWidth
    let areaMosquito = Math.random() * 100
    let mosquito = document.createElement("img")
    let randomW = Math.random() * (screenWidth - areaMosquito)
    let randomH = Math.random() * (screenHeight - areaMosquito -10)
    mosquito.style.left = randomW + 'px'
    mosquito.style.top = randomH + 'px'
    mosquito.width = areaMosquito
    mosquito.style.position = 'absolute'
    console.log(screenHeight)

    mosquito.src = 'image/mosca.png'
    

    document.body.appendChild(mosquito) 
}