function creer_sequence(liste, n){
   var liste =[];

   for(i=0;i<n;i++){
      liste[i]= Math.floor(Math.random()*2)
   }
   return liste
}

function jouer_son(element){
   var audio_1 = new Audio('sons/son_1.mp3');
   var audio_2 = new Audio("sons/son_2.mp3");
;
   if(element==0){
      console.log("Jouer son 1");
      audio_1.play()
   }

   else if (element==1){
      console.log ("Jouer son 2")
      audio_2.play()
      }

   else if(element==2){
      console.log("Jouer son 3")
      alert("jaune")
      }

   else{
      console.log("Jouer son 4")
      alert("vert")
      } 
}

function jouer_sequence(liste,n){
   for(i=0;i<n;i++){
      // CORRIGER L'UTILISATION DU DELAIS : LA FONCTON A L INTERIEUR NE SE JOUE QUUNE FOIS ????
      setTimeout(jouer_son(liste[i]),1000);
   }
}

function game_loop(){
   let sequence = [];
   let n = 15;
   sequence = creer_sequence(sequence,n)
   console.log(sequence)
   jouer_sequence(sequence,n)
}

