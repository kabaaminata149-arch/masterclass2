
document.getElementById("formAstro").addEventListener("submit", function(e){

    e.preventDefault();
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let jour = Number(document.getElementById("jour").value);
    let mois = Number(document.getElementById("mois").value);
    let signe = "";
    let image = "";
    let description = "";

if((mois === 3 && jour >= 21) || (mois === 4 && jour <= 19)){
    signe = "Bélier";
    image = "belier.jpg";
    description = "Vous êtes courageux et dynamique.";
}
else if((mois === 4 && jour >= 20) || (mois === 5 && jour <= 20)){
    signe = "Taureau";
    image = "taureau.jpg";
    description = "Vous êtes patient et loyal.";
}
else if((mois === 5 && jour >= 21) || (mois === 6 && jour <= 20)){
    signe = "Gémeaux";
    image = "gemeaux.jpg";
    description = "Vous êtes intelligent et communicatif.";
}
else if((mois === 6 && jour >= 21) || (mois === 7 && jour <= 22)){
    signe = "Cancer";
    image = "cancer.jpg";
    description = "Vous êtes sensible et protecteur.";
}
else if((mois === 7 && jour >= 23) || (mois === 8 && jour <= 22)){
    signe = "Lion";
    image = "lion.jpg";
    description = "Vous êtes leader et charismatique.";
}
else if((mois === 8 && jour >= 23) || (mois === 9 && jour <= 22)){
    signe = "Vierge";
    image = "vierge.jpg";
    description = "Vous êtes organisé et perfectionniste.";
}
else if((mois === 9 && jour >= 23) || (mois === 10 && jour <= 22)){
    signe = "Balance";
    image = "balance.jpg";
    description = "Vous aimez l’équilibre et la justice.";
}
else if((mois === 10 && jour >= 23) || (mois === 11 && jour <= 21)){
    signe = "Scorpion";
    image = "scorpion.jpg";
    description = "Vous êtes mystérieux et intense.";
}
else if((mois === 11 && jour >= 22) || (mois === 12 && jour <= 21)){
    signe = "Sagittaire";
    image = "sagittaire.jpg";
    description = "Vous êtes optimiste et aventurier.";
}
else if((mois === 12 && jour >= 22) || (mois === 1 && jour <= 19)){
    signe = "Capricorne";
    image = "capricorne.jpg";
    description = "Vous êtes discipliné et ambitieux.";
}
else if((mois === 1 && jour >= 20) || (mois === 2 && jour <= 18)){
    signe = "Verseau";
    image = "verseau.jpg";
    description = "Vous êtes original et indépendant.";
}
else if((mois === 2 && jour >= 19) || (mois === 3 && jour <= 20)){
    signe = "Poissons";
    image = "poissons.jpg";
    description = "Vous êtes intuitif et rêveur.";
}

    localStorage.setItem("nom", nom + " " + prenom);
    localStorage.setItem("signe", signe);
    localStorage.setItem("image", image);
    localStorage.setItem("description", description);
    window.location.href = "signe.html";

});