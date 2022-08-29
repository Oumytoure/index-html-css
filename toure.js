 
function Oumy(){
  var blocA =document.getElementsByClassName("bloc");
    
   for(let i= 0; i<4; i++)
   {
blocA[i].classList.toggle("nouveauCouleur");

   }

}
function afficherFormulaire() {
  var Nom = document.getElementById("Nom").value;
  var Prenom = document.getElementById("Prenom").value;
  var Telephone = document.getElementById("Telephone").value;
  var Email = document.getElementById("Email").value;
  var VotreMessage = document.getElementById("commentaire").value;
  var div = document.getElementById('Div1');
div.innerHTML += Prenom;
var div = document.getElementById('Div2');
div.innerHTML += Nom;
var div = document.getElementById('Div3');
div.innerHTML += Telephone;
var div = document.getElementById('Div4');
div.innerHTML += Email;
var div = document.getElementById('Div5');
div.innerHTML += VotreMessage;
}
 
 
 

//Récupération des valeurs du formulaire pour les mettre dans le localStorage
/* function afficherFormulaire(){
  const envoyerFormulaire= document.querySelector("button");
  envoyerFormulaire.addEventListener("clik",(e))={}
  e.preventDefaul
  localStorage.setItem("prenom",document.querySelector("#prenom").value);
  localStorage.setItem("nom",document.querySelector("#nom").value);
  localStorage.setItem("email",document.querySelector("#email").value);
  localStorage.setItem("commentaire",document.querySelector("#commentaire").value);
  const formulaire= {
    prenom:localStorage.getItem("prenom"),
    nom:localStorage.getItem("prenom"),
    email:localStorage.getItem("prenom"),
    commentaire:localStorage.getItem("prenom"),
    
  }
}
console.log(envoyerFormulaire);  */


/*let bntEnvoyerFormulaire = document.querySelector("button");
console.log(bntEnvoyerFormulaire);
bntEnvoyerFormulaire.addEventListener("clik",() >={
// stoker les donnes dans le local storage
localStorage.setItem("prenom".document.querySelector("#prenom").value);
localStorage.setItem("nom",document.querySelector("#nom").value);
localStorage.setItem("email",document.querySelector("#email").value);
localStorage.setItem("commentaire",document.querySelector("#commentaire").value);

console.log(document.querySelector(#nom).value);
});*/
/* const saisie = document.getElementsByClassName('form-control')
const submitBtn = document.getElementById('submit')
let donnee = {}
let infos = []
for(let i = 0; i<saisie.length;i++){
    saisie[i].addEventListener('keyup', ()=> {
        let value = saisie[i].value
        let id = saisie[i].id
        donnee[id] = value
    })
}
submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    for(let i = 0; i<saisie.length;i++){
        let affichErreur = document.getElementById(saisie[i].id+'-erreur');
        if (saisie[i].value === "") {
            affichErreur.innerHTML = "<p>Ce champ est requis</p>"
        } else {
            affichErreur.innerHTML = ""
        }
    }
})
infos.push(donnee)
console.table(infos) */

