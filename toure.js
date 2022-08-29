 
function Oumy(){
  var blocA =document.getElementsByClassName("bloc");
    
   for(let i= 0; i<4; i++)
   {
blocA[i].classList.toggle("nouveauCouleur");

   }

}

//Récupération des valeurs du formulaire
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
 
 
 




