var livre1 = {
    reference: "oui",
    titre: "La méthaphysique des tubes",
    auteur: "Amélie Nothomb"
}
var livre2 = {
    reference: "oui",
    titre: "L'enfer c'est les autres'",
    auteur: "Jean-Paul Sartre"
}
var livre3 = {
    reference: "non",
    titre: "La bête humaine",
    auteur: "Emile Zola"
}

var livres = [livre1, livre2, livre3];

var showBooks = document.getElementById("showBooks");

showBooks.addEventListener("click", (e) => {
    e.preventDefault();
    var books = document.getElementById("books");
    var html = "";

    for (let i = 0; i < livres.length; i++) {

        html += "<div class=\"livre\"><p>reference livre: " + livres[i].reference + "</p>";
        html += "<p>titre livre: " + livres[i].titre + "</p>";
        html += "<p> auteur:" + livres[i].auteur + "</p></div>";
    }
    // for (let livre in livres){
    //     console.log(livres[1].auteur);
    //     html += "<div><p>reference livre: "+ livre.reference +"</p>";
    //     html += "<p>titre livre: "+ livre.titre + "</p>";
    //     html += "<p> auteur:"+ livre.auteur + "</p></div>";
    //     console.log( livre.auteur);
    // }

    books.innerHTML = html;

});

var list = document.getElementById("listBook");
list.addEventListener("click", (e) => {
    e.preventDefault();
    var liste = document.getElementById("list");
    var str = "";
    str = mkHtml(livres);
    liste.innerHTML = str;
});

var showForm = document.getElementById("showform");
showForm.addEventListener("click", (e) => {
    e.preventDefault();
    var formulaire = document.getElementById("formulaire");
    formulaire.style.display = "block";

});

var formulaire = document.getElementById("formulaire");
formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    var reference = document.getElementById("ref").value;
    var titre = document.getElementById("tit").value;
    var auteur = document.getElementById("aut").value;

    var livre = {
        reference: "",
        titre: "",
        auteur: ""
    }

    livre.reference = reference;
    livre.titre = titre;
    livre.auteur = auteur;

    livres.push(livre);

    var formulaire = document.getElementById("formulaire");
    formulaire.style.display = "none";
})

var blackout = document.getElementById("random");
blackout.addEventListener("click", (e) => {
    var docu = document.getElementsByTagName("body");
    docu[0].innerHTML = "";
    docu[0].style.backgroundImage = "url('troll.jpg')";
});


function mkHtml(livres) {
    let list = "";
    for (let i = 0; i < livres.length; i++) {
        list += "Réference : " + livres[i].reference + " Titre : " + livres[i].titre + " Auteur :" + livres[i].auteur + "<br>";
    }
    return list;
}

