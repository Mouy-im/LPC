$(function() {
    $(".header_dynamic").load("/header.html", function() {
        //apparition de la barre de recherche
        $(document).on('click', '.icon_loupe', function() {
            $('.div_search').toggle('slow');
        });

        $(document).on('click', '.user', function() {
            $('.user_ul').toggle('slow');
        });


        $(document).on('click', '.nav-item', function() {

            $(this).children().slideToggle('slow');
        });

    });

    $(".footer_dynamic").load("/footer.html", function() {
        //index liens du footer toggle

        $(document).on('click', '.untiers>h2', function() {
            $(this).siblings().slideToggle('slow');
        });

        $(document).on('click', '.fa-print', function() {
            window.print();
        });

        const retour = document.querySelector('#basdepage .retour-haut');
        window.onscroll = function() {

            //header -lg-
            if (window.innerWidth > 992 && document.documentElement.scrollTop > 80) {
                retour.classList.add('retour_scroll');
                document.querySelector('#offre').classList.add('scroll_hide');
                document.querySelector('div.navbar').style.boxShadow = '0px 10px 10px -10px grey';
                document.querySelector('.logo_menusearch').classList.add('scroll_hide');
                document.querySelector('.menu_principal').style.borderTop = 'none';
                document.querySelector('.menu_principal').style.borderBottom = 'none';
                document.querySelector('.menu_principal').style.boxShadow = '0px 10px 10px -10px grey';
                document.querySelector('.logo_on_scroll').style.display = 'block';
                if (document.querySelector('.menu_gauche')) {
                    document.querySelector('.menu_gauche').style.top = "20px";
                }
                if (document.querySelector('.nav-aside')) {
                    document.querySelector('.nav-aside').style.top = "720px";
                }
            } else {
                retour.classList.remove('retour_scroll');
                document.querySelector('#offre').classList.remove('scroll_hide');

                document.querySelector('div.navbar').style.boxShadow = 'none';
                document.querySelector('.logo_menusearch').classList.remove('scroll_hide');
                document.querySelector('.menu_principal').style.borderTop = '1px solid grey';
                document.querySelector('.menu_principal').style.borderBottom = '1px solid grey';
                document.querySelector('.menu_principal').style.boxShadow = 'none';
                document.querySelector('.logo_on_scroll').style.display = 'none';
                if (document.querySelector('.menu_gauche')) {
                    document.querySelector('.menu_gauche').style.top = "170px";
                }
                if (document.querySelector('.nav-aside')) {
                    document.querySelector('.nav-aside').style.top = "870px";
                }
            }

            //header -md-
            if ((window.innerWidth <= 991 && window.innerWidth > 768) && document.documentElement.scrollTop > 80) {
                retour.classList.add('retour_scroll');
                document.querySelector('#offre').classList.add('scroll_hide');
                document.querySelector('div.navbar').style.boxShadow = '0px 10px 10px -10px grey';
                document.querySelector('.menu_principal').style.borderTop = 'none';
                document.querySelector('.menu_principal').style.borderBottom = 'none';

            } else {
                document.querySelector('div.navbar').style.boxShadow = 'none';

            }

            //header -sm- -xs-
            if (window.innerWidth <= 768 && document.documentElement.scrollTop > 0) {
                retour.classList.add('retour_scroll');
                document.querySelector('#offre').classList.add('scroll_hide');
                document.querySelector('div.navbar').style.boxShadow = '0px 10px 10px -10px grey';
                document.querySelector('.menu_principal').style.borderTop = 'none';
                document.querySelector('.menu_principal').style.borderBottom = 'none';
            } else if (window.innerWidth <= 768 && document.documentElement.scrollTop == 0) {
                retour.classList.remove('retour_scroll');
                document.querySelector('#offre').classList.remove('scroll_hide');

            }

        }
    });
    //aside
    if ('.nav-aside') {
        $(document).on('click', '.nav-aside', function() {
            $('.menu_gauche').toggle("slide", { direction: "left" }, 1000);
            if ($('.nav-aside').attr('class') == 'fa fa-chevron-circle-left fa-2x nav-aside') {
                $('.nav-aside').attr('class', 'fa fa-chevron-circle-right fa-2x nav-aside');
                $('.nav-aside').attr('title', 'Voir la barre de navigation gauche');
            } else {
                $('.nav-aside').attr('class', 'fa fa-chevron-circle-left fa-2x nav-aside');
                $('.nav-aside').attr('title', 'Cacher la barre de navigation gauche');
            }

        });


    }
})