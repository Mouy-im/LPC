function chargeArticle(article) {

    //affichage du produit en dynamic dans la page article
    $("main").load("/pages/femme/produits/article.html", function() {


        //breadcrumb
        $('#pap_access').html(article.variete);
        if (article.variete == 'prêt-à-porter') {
            $('#pap_access').html('Prêt-à-porter');
            $('#pap_access').attr('href', '/pages/femme/femme_produits.html?#pap');
        } else {
            $('#pap_access').html('Accessoires');
            $('#pap_access').attr('href', '/pages/femme/femme_produits.html?#accessoires');
        }

        $('#categorie').html(article.categorie);
        switch (article.categorie) {
            case 'jean-pantalon':
                $('#categorie').html('Jeans-pantalons');
                $('#categorie').attr('href', '/pages/femme/femme_produits.html?#jean_pantalon');
                break;
            case 'manteau-veste':
                $('#categorie').html('Manteaux-Vestes');
                $('#categorie').attr('href', '/pages/femme/femme_produits.html?#manteau_veste');
                break;
            case 'pull-gilet':
                $('#categorie').html('Pulls-gilets');
                $('#categorie').attr('href', '/pages/femme/femme_produits.html?#pull_gilet');
                break;
            case 'robes':
                $('#categorie').html('Robes');
                $('#categorie').attr('href', '/pages/femme/femme_produits.html?#robe');
                break;
            case 'chemisier-blouse':
                $('#categorie').html('Chemisiers-Blouses');
                $('#categorie').attr('href', '/pages/femme/femme_produits.html?#chemisier_blouse');
                break;
            case 't-shirt-débardeur':
                $('#categorie').html('T-shirts-Débardeurs');
                $('#categorie').attr('href', '/pages/femme/femme_produits.html?#top_debardeur');
                break;
            case 'jupe':
                $('#categorie').html('Jupes');
                $('#categorie').attr('href', '/pages/femme/femme_produits.html?#jupe');
                break;
            case 'chaussures':
                $('#categorie').html('Chaussures');
                $('#categorie').attr('href', '/pages/femme/femme_produits.html?#chaussures');
                break;
            case 'lunettes':
                $('#categorie').html('Lunettes');
                $('#categorie').attr('href', '/pages/femme/femme_produits.html?#lunettes');
                break;
            case 'sac':
                $('#categorie').html('Sacs');
                $('#categorie').attr('href', '/pages/femme/femme_produits.html?#sac');
                break;

            default:
                $('#categorie').html(article.categorie);
        }

        const word = article.titre.split(' ');
        $('#current').html(word[0]);

        //carousel image
        for (let i = 0; i < article.images.length; i++) {
            let image_produit = $('<div class="carousel-item image_produit"></div>')
            $('.img_descr_produit .carousel-inner').prepend(image_produit);
            image_produit.prepend('<a href="' + article.images[i] + '"><img src="' + article.images[i] + '" alt="' + article.titre + '"/></a>');
        }
        $('.img_descr_produit .carousel-inner div:nth-of-type(1)').addClass('active');
        $('.img_descr_produit .carousel-inner div:nth-of-type(1)').attr('data-interval', '20000');

        //titre ref et prix
        $('.produit_description h3').html(article.titre);
        $('.produit_description>p').html(article.ref);
        $('.produit_description h4').html(article.prix);

        //selectionner taille
        for (let i = 0; i < article.taille.length; i++) {
            let label = $('<label>');
            $('#form_produit #tailles_produit').append(label);
            label.append('<input type="radio" name="taille" value="' + i + '">');
            label.append('<img src="' + article.taille[i] + '" alt="icon_taille"/>');
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

        //carousel suggestion
        //lg
        $('.suggestion_car_3_1').html(veste1.affichage2() + pantalon1.affichage2() + pull2.affichage2());
        $('.suggestion_car_3_2').html(chaussures1.affichage2() + blouse2.affichage2() + robe1.affichage2());

        //md
        $('.suggestion_car_2_1').html(veste1.affichage2() + pantalon1.affichage2());
        $('.suggestion_car_2_2').html(pull2.affichage2() + chaussures1.affichage2());
        $('.suggestion_car_2_3').html(blouse2.affichage2() + robe1.affichage2());

        //sm
        $('.suggestion_car_1_1').html(veste1.affichage2());
        $('.suggestion_car_1_2').html(pantalon1.affichage2());
        $('.suggestion_car_1_3').html(pull2.affichage2());
        $('.suggestion_car_1_4').html(chaussures1.affichage2());
        $('.suggestion_car_1_5').html(blouse2.affichage2());
        $('.suggestion_car_1_6').html(robe1.affichage2());





    });
}