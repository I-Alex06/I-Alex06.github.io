
var nop;
function start(){
    nop=document.getElementById("numb").value;
    //console.log(nop);
    sessionStorage.setItem("nop",nop);
    window.location.href="game.html";
}
