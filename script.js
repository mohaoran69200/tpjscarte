console.log("connect");

// creation des variables
let form = document.getElementById("form");


// ecouter l'evenement boutton
form.addEventListener("submit", function (e) {
      e.preventDefault();
let msg = document.getElementById("message").value;
let size = document.getElementById("police").value;
let fondColor = document.getElementById("couleur_fond").value;
let textColor = document.getElementById("couleur_texte").value;
let url = document.getElementById("url_image").value;
let apercu = document.getElementById("apercu");

    apercu.innerHTML = `
    
    <div id="apercu_global" style="background-color:${fondColor};">
        <img src="${url}" alt="" style="width:100%;height:auto;">
        <h2 style="font-size:${size}; color:${textColor};">${msg}</h2>
    </div>
    `
  

});










