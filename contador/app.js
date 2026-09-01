let numero = 0
document.getElementById("numero").onclick = function () {
    if(numero <20 ){
        
        numero++
    }else{
        numero=0
    }
    this.textContent = numero;

};
