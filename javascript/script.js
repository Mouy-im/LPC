$(document).ready(function() {

    //INDEX Carousel populaire
    //lg
    $('.populaire_car_3_1').html(manteau1.affichage2() + bottes1.affichage2() + jupe1.affichage2());
    $('.populaire_car_3_2').html(debardeur1.affichage2() + jean2.affichage2() + blouse2.affichage2());

    //md
    $('.populaire_car_2_1').html(manteau1.affichage2() + bottes1.affichage2());
    $('.populaire_car_2_2').html(jupe1.affichage2() + debardeur1.affichage2());
    $('.populaire_car_2_3').html(jean2.affichage2() + blouse2.affichage2());

    //sm
    $('.populaire_car_1_1').html(manteau1.affichage2());
    $('.populaire_car_1_2').html(bottes1.affichage2());
    $('.populaire_car_1_3').html(jupe1.affichage2());
    $('.populaire_car_1_4').html(debardeur1.affichage2());
    $('.populaire_car_1_5').html(jean2.affichage2());
    $('.populaire_car_1_6').html(blouse2.affichage2());
});