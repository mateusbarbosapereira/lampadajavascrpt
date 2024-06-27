function on(){
    document.getElementById("lamp").src="./imagens/on.png";

}
function off(){
    document.getElementById("lamp").src="./imagens/off.png";

}
function piscar(){
    var intervalo =0;
    var contador =0;
    while (contador <10) {
        intervalo += 300;
        setTimeout(" document.getElementById ('lamp').src= './imagens/on.png';",intervalo);
        intervalo += 300;
        setTimeout(" document.getElementById ('lamp').src= './imagens/off.png';",intervalo);
        contador++;
    }
}
