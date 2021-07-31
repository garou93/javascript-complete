//On initialise une variable let x
let x = 0

//Tant que...
while(x < 10){
    //...exécute ce code
    document.getElementById('p1').innerHTML +=
    'x stocke la valeur ' + x + ' lors du passage n°'
    + (x + 1) + ' dans la boucle<br>';
    
    x++;
}
