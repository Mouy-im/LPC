function chargeArticle(article) {

    //affichage du produit en dynamic dans la page article
    $("main").load("/pages/homme/produits/article.html", function() {

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




        //carousel suggestion
        //lg
        $('.suggestion_car_3_1').html(polo1.affichage2() + jean1.affichage2() + pull2.affichage2());
        $('.suggestion_car_3_2').html(chaussures1.affichage2() + chemise1.affichage2() + manteau1.affichage2());

        //md
        $('.suggestion_car_2_1').html(polo1.affichage2() + jean1.affichage2());
        $('.suggestion_car_2_2').html(pull2.affichage2() + chaussures1.affichage2());
        $('.suggestion_car_2_3').html(chemise1.affichage2() + manteau1.affichage2());

        //sm
        $('.suggestion_car_1_1').html(polo1.affichage2());
        $('.suggestion_car_1_2').html(jean1.affichage2());
        $('.suggestion_car_1_3').html(pull2.affichage2());
        $('.suggestion_car_1_4').html(chaussures1.affichage2());
        $('.suggestion_car_1_5').html(chemise1.affichage2());
        $('.suggestion_car_1_6').html(manteau1.affichage2());
    });


}