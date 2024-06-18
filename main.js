
window.onload = function(){
    var nop2=sessionStorage.getItem("nop");
    //console.log(nop2);
    if(nop2!=null){
        document.getElementById("numb").value=nop2;
    }
};
var nop;
function start(){
    nop=document.getElementById("numb").value;
    //console.log(nop);
    sessionStorage.setItem("nop",nop);
    window.location.href="game.html";
}
