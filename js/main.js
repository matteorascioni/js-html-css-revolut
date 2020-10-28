$( document ).ready(function() {
    // Refs 
    // drop menu 
    var dropLinks = $('.with-dropdown > a');
    var dropMenu = $('.with-dropdown > .drop-js')

     // Show / Hide Drop-js menu
     dropLinks.click( function() {
        var actualMenu = $(this).next('.drop-js');

        dropMenu.not(actualMenu).hide();

        actualMenu.toggle();
    }); 
});