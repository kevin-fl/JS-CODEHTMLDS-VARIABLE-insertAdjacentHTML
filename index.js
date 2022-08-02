// Mettre code HTML dans une variable
//utiliser cette variable .insertAdjacentHTML

//-> insertAdjacentHTML() rend la fonction plus rapide et directe que innerHTML .

//syntaxe
//Element.insertAdjacentHTML(position,text);

// position 
/*
'beforebegin': avant l element lui meme .
'afterbegin' : juste a l interieur de l element , avant son premier enfant .
'beforeend'  : juste a l interieur de le lement , apres son premier enfant .
'afterend'   : apres element lui-meme
*/
/*
visualisation des noms de position 

<!--beforebegin -->
<p>
<!-- afterbegin -->
foo 
<!-- beforeend -->
</p>
<!-- afterend --> 
*/

/*
exemple 

// <div id="one">one</div>
let d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id ="two'>two</div>');')

//ici la nouvelle structure est :
// <div id= "one">one</div><div id="two">two</div>
*/





// Mettre code HTML dans une variable
//utiliser cette variable .insertAdjacentHTML
//et mettre tout ca dans une fonction pr afficher plusieurs ligne

const todoList = [
    {
      item: "je suis une todo liste , tache a faire",
      done: false,  
    },
];

const ajouterLaListe = (todo) => {            //-> on ajoute une fonction pour pouvoir appeler facilemnt la logique
    
const liste = document.querySelector("li");
console.log(liste);

const text = `<li class= "item">
<strong> ${todo} </strong></li>`;


liste.insertAdjacentHTML("afterend",text);

};

ajouterLaListe("faire mon agenda");                        
ajouterLaListe("faire mes rdv");
ajouterLaListe("faire mon web exo");


//console.log(todoList);
//exemple


