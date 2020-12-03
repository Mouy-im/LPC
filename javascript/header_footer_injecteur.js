$(function() {
    $(".header_dynamic").load("/header.html", function() {
        //apparition de la barre de recherche
        $(document).on('click', '.icon_loupe', function() {
            $('.div_search').toggle('slow');
        });

        /*$(document).on('click', '.nav-item', function() {
            $(this).children().toggle('slow');
        });*/

        $(document).on('click', '.user', function() {
            $('.user_ul').toggle('slow');
        });


        $(document).on('click', '.nav-item', function() {

            $(this).children().slideToggle('slow').addClass('visible');
        });

    });








    //header
    $('header').addClass('sticky-top');


    $(".footer_dynamic").load("/footer.html", function() {
        //index liens du footer toggle

        $(document).on('click', '.untiers>h3', function() {
            $(this).siblings().slideToggle('slow');
        });


        const retour = document.querySelector('#basdepage .retour-haut');
        window.onscroll = function() {
            if (document.documentElement.scrollTop > 150 || (window.innerWidth <= 500 && document.documentElement.scrollTop > 0)) {
                document.querySelector('#offre').classList.add('scroll_hide');
                document.querySelector('.logo_menusearch').classList.add('scroll_hide');
                retour.classList.add('retour_scroll');
                document.querySelector('.menu_principal').style.boxShadow = '0px 10px 10px -10px grey';
                document.querySelector('.logo_on_scroll').style.display = 'block';
                document.querySelector('.menu_principal').style.borderTop = 'none';
                document.querySelector('.menu_principal').style.borderBottom = 'none';
                document.querySelector('div.navbar').style.boxShadow = '0px 10px 10px -10px grey';
                if (document.querySelector('.menu_gauche')) {
                    document.querySelector('.menu_gauche').style.top = "0px";
                }
            } else {
                document.querySelector('#offre').classList.remove('scroll_hide');
                document.querySelector('.logo_menusearch').classList.remove('scroll_hide');
                retour.classList.remove('retour_scroll');
                document.querySelector('.menu_principal').style.boxShadow = 'none';
                document.querySelector('.logo_on_scroll').style.display = 'none';
                document.querySelector('.menu_principal').style.borderTop = '1px solid grey';
                document.querySelector('div.navbar').style.boxShadow = 'none';
                document.querySelector('.menu_principal').style.borderBottom = '1px solid grey';
                if (document.querySelector('.menu_gauche')) {
                    document.querySelector('.menu_gauche').style.top = "150px";
                }
            }
            if (window.innerWidth <= 991 && document.documentElement.scrollTop < 150) {

                document.querySelector('.logo_on_scroll').style.display = 'none';
            } else if (window.innerWidth <= 991 && document.documentElement.scrollTop > 150) {
                document.querySelector('.logo_on_scroll').style.display = 'none';
            }

        }

        $(document).on('click', '.fa-print', function() {
            window.print();
        });

    });
})