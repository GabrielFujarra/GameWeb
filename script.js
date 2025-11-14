var contador = 0

function resP1 () {
    var elementoP1 = document.getElementsByName ('p1')
    let reposta1 = ""
    
    for (let i = 0 ; i<elementoP1.length ; i++){
        if(elementoP1[i].checked){
            reposta1 = elementoP1[i].value
        }
    }

    if(reposta1 === 'Brasil'){
        document.getElementById('result').innerHTML = "Voce acertou"
        contador+=1
    }else{
        document.getElementById('result').innerHTML = "Voce errou"
    }

    for (let i = 0; i < elementoP1.length; i++) {
        elementoP1[i].disabled = true;
    }
}

function resP2 () {
    var elementoP2 = document.getElementsByName('p2')
    let resposta2 = ""

    for(let i = 0 ; i<elementoP2.length ; i++){
        if(elementoP2[i].checked){
            resposta2 = elementoP2[i].value
        }
    }

    if (resposta2 === '2002') {
        document.getElementById('result2').innerHTML = "Você acertou"
        contador+=1
    }else{
        document.getElementById('result2').innerHTML = "Você errou"
    }

    for (let i = 0; i < elementoP2.length; i++) {
        elementoP2[i].disabled = true;
    }
}

function resP3 () {
    var elementoP3 = document.getElementsByName('p3')
    let resposta3 = ""

    for(let i = 0 ; i<elementoP3.length ; i++) {
        if(elementoP3[i].checked) {
            resposta3 = elementoP3[i].value
        }
    }

    if (resposta3 === 'França') {
        document.getElementById('result3').innerHTML = "Você acertou"
        contador+=1
    }else{
        document.getElementById('result3').innerHTML = "Você errou"
    }

    for (let i = 0; i < elementoP3.length; i++) {
        elementoP3[i].disabled = true;
    }
}

function resP4 () {
    var elementoP4 = document.getElementsByName('p4')
    let resposta4 = ""

    for(let i = 0 ; i<elementoP4.length ; i++) {
        if(elementoP4[i].checked) {
            resposta4 = elementoP4[i].value
        }
    }

    if (resposta4 === 'Mbappé') {
        document.getElementById('result4').innerHTML = "Você acertou"
        contador+=1
    }else{
        document.getElementById('result4').innerHTML = "Você errou"
    }

    for (let i = 0; i < elementoP4.length; i++) {
        elementoP4[i].disabled = true;
    }
}

function pontuacao () {
    document.getElementById('pont').innerHTML = contador
}