var groceries=[];
function buy_gr(){
    var g1= document.getElementById("gr1").value;
    var g2= document.getElementById("gr2").value;
    var g3= document.getElementById("gr3").value;
    var g4= document.getElementById("gr4").value;

    groceries.push(g1);

    groceries.push(g2);

    groceries.push(g3);

    groceries.push(g4);

    document.getElementById("displaying").innerHTML=groceries;

    document.getElementById("buying").style.display="none";
    document.getElementById("sorting").style.display="inline-block";







}
function sort_gr(){
    groceries.sort();
    document.getElementById("displaying").innerHTML=groceries;
    
}






















