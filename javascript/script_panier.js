$(document).ready(function() {

    //INDEX Carousel plus panier
    //lg
    $('.plus_panier_car_3_1').html(manteau1.affichage2() + bottes1.affichage2() + jupe1.affichage2());
    $('.plus_panier_car_3_2').html(debardeur1.affichage2() + jean2.affichage2() + blouse2.affichage2());

    //md
    $('.plus_panier_car_2_1').html(manteau1.affichage2() + bottes1.affichage2());
    $('.plus_panier_car_2_2').html(jupe1.affichage2() + debardeur1.affichage2());
    $('.plus_panier_car_2_3').html(jean2.affichage2() + blouse2.affichage2());

    //sm
    $('.plus_panier_car_1_1').html(manteau1.affichage2());
    $('.plus_panier_car_1_2').html(bottes1.affichage2());
    $('.plus_panier_car_1_3').html(jupe1.affichage2());
    $('.plus_panier_car_1_4').html(debardeur1.affichage2());
    $('.plus_panier_car_1_5').html(jean2.affichage2());
    $('.plus_panier_car_1_6').html(blouse2.affichage2());
});