/**************************************
* TITLE: pick me
* AUTHOR: Kiren Kaur
* CREATE DATE: 3/28/18
* PURPOSE: learn about jquery
* LAST MODIFIED ON: 3/28/18
**************************************/


$(document).ready(function() {

    //when the window is resized
    $(window).resize( resizeWindow );

    //when a key is pressed
    $(document).keydown( keyPressed );

    //mouse is moved to the upper right hand corner
    $(document).mousemove( mouseMove );



    function resizeWindow() {
      $('#windowSize').html("The window has been resized");
    }

    function keyPressed() {
      $('#pressed').html("YOU PRESSED A BUTTON! WHY!");
    }

    function mouseMove() {
      $('#mouse').html("Yay! You listened to me, you are great!");
    }

}());
