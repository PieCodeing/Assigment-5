
const btn = document.getElementById("Bigger!");
const fcyrdo = document.getElementById("FancifyShmancy");
const bbrdo = document.getElementById("BoringBetty");
const moo = document.getElementById("Moo");
function hello(){
    alert("Hello, world!");
    document.getElementById("big").style.fontSize ="24pt";
}

function onchange(){
    alert("FancifyShmancy")
}
function FancifyShmancy(){
    alert("FancifyShmancy")
    document.getElementById("big").style.fontWeight ="bold";
    document.getElementById("big").style.color = "blue"
    document.getElementById("big").style.textDecoration = "underline"
    //alternate witch radio button is checked
    document.getElementById("BoringBetty").checked = false;
}

function BoringBetty(){
    document.getElementById("big").style.fontWeight ="normal";
    document.getElementById("big").style.color = "black"
    document.getElementById("big").style.textDecoration = "none"
    //alternate witch radio button is checkeds
    document.getElementById("FancifyShmancy").checked = false;
}

function Moo(){
    
    var str = document.getElementById("big").value;
    str = str.toUpperCase();
    var parts = str.split(".");
    str = parts.join("-Moo.");
    document.getElementById("big").value = str;
    //alert(str);
}

btn.addEventListener("click",hello);
fcyrdo.addEventListener("onchange",onchange);
fcyrdo.addEventListener("click",FancifyShmancy);
bbrdo.addEventListener("click", BoringBetty);

