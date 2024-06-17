var nop;var loc;
window.onload = function(){
    nop = parseInt(sessionStorage.getItem("nop"));
    //console.log(nop);
    //console.log(typeof(nop));
    loc="locatie";
    
}
addEventListener("click",function(){
    let p=document.getElementById("player");
    let w=document.getElementById("word");
    if(parseInt(p.innerHTML)>=nop && w.innerHTML!=""){
        p.innerHTML="1";
        window.location.href="timer.html";
    }
    else{
        if(w.innerHTML==""){
            w.innerHTML=loc;
        }
        else{
            w.innerHTML="";
            p.innerHTML=(parseInt(p.innerHTML)+1);
        }
    }
})