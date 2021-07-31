let x = 15;

//Utilisation de l'opérateur ternaire
document.getElementById('p1').innerHTML =
x >= 10 ? 'x supérieur à 10' : 'x stric. inférieur à 10';

//Equivalent avec une structure if ... else
if(x >= 10){
    document.getElementById('p2').innerHTML = 'x supérieur à 10';
}else{
    document.getElementById('p2').innerHTML = 'x stric. inférieur à 10';
}
