(function() {
    let joueur = {
        nom: "joueur",
        symbole : "X",
        score: 0 


    };

    let CPU = {
        nom : "CPU",
        symbole : "O",
        score : 0
    };

    let liste_joueur = [joueur,CPU];
    let end = false;
    let tour = Math.floor(Math.random() * 2);
    let tour_joueur = tour;
    let joueurActuel = tour_joueur;
    //affichage dynaqmique
    choose1=function(elmt){
        joueur.symbole=elmt.textContent;
        CPU.symbole="o"
        elmt.parentNode.parentNode.style.display="none";
        onload();
    }
    choose2=function(elmt){
        joueur.symbole=elmt.textContent;
        CPU.symbole="X";
        elmt.parentNode.parentNode.style.display="none";
        onload();
    }
    // Récupération des cases à clicker
    const items = document.getElementsByClassName('grid-item');

    choiseCase = function(id) {
        if(end==false && liste_joueur[joueurActuel].nom == "joueur" && document.getElementById(id).classList.contains("coché")==false)
        {
            document.getElementById(id).textContent = joueur.symbole;
            document.getElementById(id).classList.add("remplir");
            win(joueur);
            joueurActuel++;
             
        if(joueurActuel % 2 == 0)
        {   
            joueurActuel = 0;
        }
            let count=0;
            for (let i = 0; i< items.length; i++) {
               if(items[i].classList.contains("remplir"))count++;
            }
            if(count==9){

            }else{
                bot();
            }
        }
         
         console.log(liste_joueur[joueurActuel])
    }
      function onload(){console.log(liste_joueur[joueurActuel])
        if(liste_joueur[joueurActuel].nom=="CPU"){
            var count=0;
            for (let i = 0; i< items.length; i++) {
               if(items[i].classList.contains("remplir"))count++;
            }
            if(count==9){

            }else{
                bot();
            }
        }
        }   
    bot = function game() {
        if(end==false && liste_joueur[joueurActuel].nom == "CPU" )
        {
            var bot_choose = Math.floor(Math.random() * 9);
            while(items[bot_choose].classList.contains("rempilr") ){
                bot_choose = Math.floor(Math.random() * 9);
            }    
            items[bot_choose].textContent = CPU.symbole;
            items[bot_choose].classList.add("remplir");
            win(CPU);
            joueurActuel++;
            if(joueurActuel % 2 == 0)
            {
                joueurActuel = 0;
            }
    
        }

    }
    
function win(player){
    let val1 = items[0].textContent==player.symbole && items[1].textContent==player.symbole && items[2].textContent==player.symbole
    let val2 = items[3].textContent==player.symbole && items[4].textContent==player.symbole && items[5].textContent==player.symbole
    let val3 = items[6].textContent==player.symbole && items[7].textContent==player.symbole && items[8].textContent==player.symbole
    let val4 = items[0].textContent==player.symbole && items[3].textContent==player.symbole && items[6].textContent==player.symbole
    let val5 = items[1].textContent==player.symbole && items[4].textContent==player.symbole && items[7].textContent==player.symbole
    let val6 = items[2].textContent==player.symbole && items[5].textContent==player.symbole && items[8].textContent==player.symbole
    let val7 = items[0].textContent==player.symbole && items[4].textContent==player.symbole && items[8].textContent==player.symbole
    let val8 = items[2].textContent==player.symbole && items[4].textContent==player.symbole && items[6].textContent==player.symbole
        if (val1){
            console.log(player.nom+" a gagnée");  
            end=true;
            player.score++;
            items[0].style.color="green"
            items[1].style.color="green"
            items[2].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (val2){
            console.log(player.nom+" a gagnée");  
            end=true;
            player.score++;
            items[3].style.color="green"
            items[4].style.color="green"
            items[5].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (val3){
            console.log(player.nom+" a gagnée");  
            end=true;
            player.score++;
            items[6].style.color="green"
            items[7].style.color="green"
            items[8].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (val4){
            console.log(player.nom+" a gagnée");  
            end=true;
            player.score++;
            items[0].style.color="green"
            items[3].style.color="green"
            items[6].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }   
        else if (val5){
            console.log(player.nom+" a gagnée");  
            end=true;
            player.score++;
            items[1].style.color="green"
            items[4].style.color="green"
            items[7].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (val6){
            console.log(player.nom+" a gagnée");  
            end=true;
            player.score++;
            items[2].style.color="green"
            items[5].style.color="green"
            items[8].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (val7){
            console.log(player.nom+" a gagnée");  
            end=true;
            player.score++;
            items[0].style.color="green"
            items[4].style.color="green"
            items[8].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (val8){
            console.log(player.nom+" a gagnée");  
            end=true;
            player.score++;
            items[2].style.color="green"
            items[4].style.color="green"
            items[6].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        
}
    // Vide le contenu de toute les cases
    rest = function() {
        end = false;
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            items[i].textContent = ''
            items[i].classList.remove("coché");
            items[i].style.color = 'black'
        }
        CPU.score = 0;
        joueur.score = 0;

        tour_joueur++;
        alert(liste_joueur[joueurActuel].nom)
        bot();
        document.querySelector(".you-score").textContent= 0;
        document.querySelector(".cpu-score").textContent = 0;            
    }
})();
