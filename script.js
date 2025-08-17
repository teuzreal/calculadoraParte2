var expressao = "";
var display = document.getElementById("display");

function mostrar(e) {
    if (expressao == 0) {
        expressao = e.target.innerText;
    } else {
        expressao = expressao + e.target.innerText;
    }
    atualizaDisplay();    
}

function limpar(e) {
    expressao = "0";
    atualizaDisplay();
}

function atualizaDisplay(){
    display.innerText = expressao;
}

function calcular(e){
    res = eval(expressao)
    expressao = res
    atualizaDisplay()
}
