

for(let i = 0; i < 10; i++){
    //Si i / 2 possède un reste, alors i est impair
    if(i % 2 != 0){
        continue;
    }
    document.getElementById('p1').innerHTML +=
    'i stocke la valeur ' + i + ' lors du passage n°'
    + (i + 1) + ' dans la boucle<br>';
}


