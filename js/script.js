//inizializzo l'array
let prodotti = ['pollo', 'pasta', 'riso', 'pomodori', 'pesce', 'uova', 'gallette', 'olio', 'insalata'];

//recupero l'elemento che deve contenere la mia lista
const lista = document.getElementById('lista');

//aggiungo una variabile con assegnazione di default 0
let i = 0;

//ciclo l'arrey 
while (i < prodotti.length) {

    //creo un nuovo list item
    const li = document.createElement('li');
    //dentro la list item aggiungo [i] della array prodotti
    li.innerText = prodotti[i];

    //metto infine il list item dentro la lista spesa
    lista.append(li);

    i++
    console.log(prodotti[i])
}