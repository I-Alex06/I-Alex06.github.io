
import data from './locatii.json' with {type: 'json' };
console.log(data);
// data=[
//     "aeroport",
//     "toalete",
//     "restaurant",
//     "hotel",
//     "piscina",
//     "plaja",
//     "banca",
//     "magazin"
//     ];

var nop;var loc;var spy;
window.onload = function(){
    nop = parseInt(sessionStorage.getItem("nop"));
    spy = Math.round(Math.random()*nop);
    if(spy==0){
        spy++;
    }
    //console.log(nop);
    //console.log(typeof(nop));
    //arr=JSON.parse();
    
    let i=Math.round(Math.random()*data.length);
    if(i==data.length){i--;}
    loc=data[i].toUpperCase();
    
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
            if(parseInt(p.innerHTML)!=spy){
            w.innerHTML=loc;}
            else{
                w.innerHTML="SPY";
            }
        }
        else{
            w.innerHTML="";
            p.innerHTML=(parseInt(p.innerHTML)+1);
        }
    }
})
