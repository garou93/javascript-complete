//On déclare et initialise nos variables sur la même ligne
let a = 10, b = 10, c = 20, d = 20;

/*On incrémente / décrémente et affecte le résultat dans un paragraphe.
 *Attention : le premier "+" est un opérateur de concaténation */
document.getElementById('p1').innerHTML = 'a stocke la valeur ' + a++;
document.getElementById('p2').innerHTML = 'b stocke la valeur ' + ++b;
document.getElementById('p3').innerHTML = 'c stocke la valeur ' + c--;
document.getElementById('p4').innerHTML = 'd stocke la valeur ' + --d;

//On affiche ensuite à nouveau le contenu de nos variables 
document.getElementById('p5').innerHTML =
'a = ' + a + ', b = ' + b + ', c = ' + c + ', d = ' + d;
