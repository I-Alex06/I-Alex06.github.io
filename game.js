
// import data from './locatii.json' with {type: 'json' };
// console.log(data);
let data=[
    "CATEDRALA",
    "KARTING",
    "SPITAL",
    "TERASA",
    "NAVA SPATIALA",
    "PARC DE AVENTURA",
    "PARCARE",
    "TEATRU",
    "SALON DE INFRUMUSETARE",
    "SUBMARIN",
    "PLANETARIU",
    "HOTEL",
    "SERA",
    "GRADINA ZOOLOGICA",
    "CABINET STOMATOLOGIC",
    "METROU",
    "PATINOAR",
    "CIMITIR",
    "PLAJA",
    "DEPOZIT",
    "TARG",
    "GRADINA BOTANICA",
    "NAVA DE CROAZIERA",
    "CABINET DE OFTALMOLOGIE",
    "CENTRU COMERCIAL",
    "SUPERMARKET",
    "MALL",
    "STATIE DE TRAMVAI",
    "RESTAURANT",
    "GARA DE TREN",
    "BALON CU AER CALD",
    "AEROPORT",
    "SALON DE COAFURA",
    "BIBLIOTECA",
    "PENSIUNE",
    "VULCANIZARE",
    "CINEMA",
    "FABRICA",
    "BIROU",
    "VAPOR DE CROAZIERA",
    "CENTRU DE ESCALADA",
    "CAMIN STUDENTESC",
    "OBSERVATOR",
    "UNIVERSITATE",
    "SECTIE DE POLITIE",
    "TELECABINA",
    "SANTIER DE CONSTRUCTII",
    "PIATA",
    "PAINTBALL",
    "SCOALA",
    "FERMA",
    "BAR",
    "TEREN DE TENIS",
    "GARA DE AUTOBUZ",
    "SALON DE TATUAJE",
    "CURTEA DE JUDECATA",
    "MUZEU",
    "CASTEL MEDIEVAL",
    "SALA DE FITNESS",
    "CABINET VETERINAR",
    "PARC",
    "PORT",
    "FARMACIE",
    "GARA",
    "PARC DE TRAMBULINE",
    "LABORATOR DE CHIMIE",
    "STADION",
    "CABINET MEDICAL",
    "CLUB",
    "LICEU",
    "ATELIER AUTO",
    "MAGAZIN",
    "TAXI",
    "SPA",
    "AQUARIUM",
    "SALA DE SPECTACOLE",
    "REFUGIU ALPIN",
    "SALA DE SPORT",
    "GARAJ",
    "BANCA",
    "RULOTA",
    "GRADINA",
    "CIRC",
    "GRADINITA",
    "PADURE",
    "CAZINOU",
    "TRIBUNAL",
    "PARC DE DISTRACTII",
    "GALERIE DE ARTA",
    "TEMPLU",
    "TOALETA",
    "AMBASADA",
    "BISERICA",
    "CABINET GINECOLOGIC",
    "CAFENEA",
    "CLADIRE DE BIROURI",
    "PISCINA",
    "LIBRARIE",
    "PARC DE SKATEBOARD",
    "PESTERA",
    "INSULA TROPICALA"
    ]
    
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
var notReady=false;
addEventListener("click",function(e){
    let sw=window.innerWidth;
    let sh=window.innerHeight;
    let cx=e.clientX;
    let cy=e.clientY;
    if(cy<sh/10 ||cy>sh/10*9 || cx<sw/8 ||cx>sw/8*7||notReady){return;}
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
    notReady=true;
    this.setTimeout(function(){notReady=false;},1000)
})
