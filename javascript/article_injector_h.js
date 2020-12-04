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
}

function chargeArticle(article) {

    //affichage du produit en dynamic dans la page article
    $("main").load("/pages/homme/produits/article.html", function() {

        //carousel image

        for (let i = 0; i < article.images.length; i++) {
            let image_produit = $('<div class="carousel-item image_produit"></div>')
            $('.carousel-inner').prepend(image_produit);

            image_produit.prepend('<a href="' + article.images[i] + '"><img src="' + article.images[i] + '" alt="' + article.titre + '"/></a>');


        }
        $('.carousel-inner div:nth-of-type(1)').addClass('active');
        $('.carousel-inner div:nth-of-type(1)').attr('data-interval', '20000');

        //titre ref et prix
        $('.produit_description h3').html(article.titre);
        $('.produit_description>p').html(article.ref);
        $('.produit_description h4').html(article.prix);

        //selectionner taille
        for (let i = 0; i < article.taille.length; i++) {
            let label = $('<label>');
            $('#form_produit #tailles_produit').append(label);
            label.append('<input type="radio" name="taille" value="' + i + '" >');
            label.append('<img src="' + article.taille[i] + '"alt="icon_taille"/>');
        }
        //Description et entretien
        $('.description').append('<p>' + article.description + '</p>');
        $('.entretien').append('<p>' + article.entretien + '</p>');
        $('.titre_detail p').css('display', 'none');
        $(document).on('click', '.titre_detail.description', function() {
            $('.description p').slideToggle(600);
            if ($('.description span').text() == '+ ')
                $('.description span').text('- ');
            else
                $('.description span').text('+ ');

        });
        $(document).on('click', '.titre_detail.entretien', function() {
            $('.entretien p').slideToggle(600);
            if ($('.entretien span').text() == '+ ')
                $('.entretien span').text('- ');
            else
                $('.entretien span').text('+ ');
        });

    });
}