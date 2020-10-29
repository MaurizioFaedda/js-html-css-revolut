$(document).ready(function() {


    $('.title-menu').click(function() {

        var indice_title = $(this).index();
        var new_drop = $('.my-dropdown').eq(indice_title);

        // con hide quando apro un nuovo dropdown quello corrente si chiude, ma non si chiude se riclicco nel suo title
        $('.my-dropdown').hide();
        // senza hide si chiude se faccio click nel suo title ma non se faccio click in un altro
        new_drop.slideToggle();

        // con add e remove se clicco sullo stesso title non si chiude
        // new_drop.addClass('active');
        // $('.my-dropdown').removeClass('active');
    })


});
