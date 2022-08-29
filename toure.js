 
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
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/; 

//controle de saisi du formulaire
 let tableau =[
  { PRENOM:Prenom, NOM:Nom, TELEPHONE:Telephone, EMAIL:Email

 }];
 console.table(tableau);
 if(Nom.length === 0){
  alert("veuillez saisir votre Prenom");
 }
 else if(Prenom.length ===0){
  alert("veillez saisir Nom");
 }
 else if(Telephone.length ===0){
  alert("veuillez saisir votre telephone");
 }
 else if(Email.length===0) {
  alert("veuillez saisir votre email")
 }
 else if(!regexEmail.test(Email)){
  alert("Veuillez saisir un email correct")
 }
 else{
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

}


