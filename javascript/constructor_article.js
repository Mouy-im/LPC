function Article(variete, categorie, images, titre, ref, prix, taille, description, entretien, url) {
    this.variete = variete;
    this.categorie = categorie;
    this.images = images;
    this.titre = titre;
    this.ref = ref;
    this.prix = prix;
    this.taille = taille;
    this.description = description;
    this.entretien = entretien;
    this.url = url;
    this.affichage = function() {
        let carte_article = '<div class="col-6 col-xl-4">' +
            '<div class="card my-3 border-grey shadow">' +
            '<a class="stretched-link" href="' + this.url + '"><img class="card-img-top" src="' + this.images[0] + '"alt="' + this.titre + this.categorie + 'homme"></a>' +
            '<div class="carte-article card-body">' +
            '<h4 class="card-title">' + this.titre + '</h4>' +
            '<span class="prix">' + this.prix + '</span>' +
            '</div>' +
            '</div>' +
            '</div>';
        return carte_article;
    }
    this.affichage2 = function() {
        let carte2_article = ' <div class="card my-3 border-grey shadow">' +

            '<a class="stretched-link" href="' + this.url + '"><img class="card-img-top" src="' + this.images[0] + '"alt="' + this.titre + this.categorie + 'homme"></a>' +
            '<div class="carte-article card-body">' +
            '<h3 class="card-title">' + this.titre + '</h3>' +
            '<span class="prix">' + this.prix + '</span>' +
            '</div>' +
            '</div>';
        return carte2_article;
    }
}