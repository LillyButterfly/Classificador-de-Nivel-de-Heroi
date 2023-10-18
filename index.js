function classificacao(){

let nome = document.getElementById("nome").value;
//window.prompt("Digite o nome do Heroi:")
let xp = document.getElementById("xp").value;
//window.parseInt(prompt("Digite os pontos do heroi para saber a classificação:"))

let nivel;

if(xp <= 1000){
    nivel = "Ferro";

}else if(xp >= 1001 && xp <= 2000){
    nivel = "Bronze";

}else if(xp >= 2001 && xp <= 5000){
    nivel = "Prata";

}else if(xp >= 5001 && xp <= 6000){
    nivel = "Diamante";

}else if(xp >= 6001 && xp <= 7000){
  nivel = "Ouro";

}else if(xp >= 7001 && xp <= 8000){
    nivel = "Platina";

}else if(xp >= 8001 && xp <= 9000){
    nivel = "Ascente";

}else if(xp >= 9001 && xp <= 10000){
    nivel = "Imortal";

}else if(xp >= 10001){
    nivel = "Radiante"

}else {
    document.write("Digite um valor válido")
}
    document.getElementById("result").textContent = `O Herói ${nome} está no nível ${nivel}`
    //document.write(`O Herói (na) ${nome} está no nível ${nivel}`)
}

function limparInput(){
    document.getElementById("nome").value = " ";

    document.getElementById("xp").value = " ";
}
