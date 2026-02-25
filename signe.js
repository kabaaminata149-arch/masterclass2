

if(window.location.pathname.includes("signe.html")){

    let nom = localStorage.getItem("nom");
    let signe = localStorage.getItem("signe");
    let image = localStorage.getItem("image");
    let description = localStorage.getItem("description");

    document.getElementById("message").textContent =
    "Bonjour " + nom + ", ton signe est " + signe;

    document.getElementById("imageSigne").src = image;

    document.getElementById("description").textContent = description;
}
function retourAccueil(){
    window.location.href = "index.html";
}
