$(document).ready(function() {
	$('.carousel').carousel({
  interval: 60000
	})


 /**************** boton hacia arriba ********************/
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 1000);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 300 ){
            $('.ir-arriba').slideDown('slow');
        } else {
            $('.ir-arriba').slideUp('slow');
        }
    });

    /*hacia abajo*/
    $('.ir-abajo').click(function(){
        $('body, html').animate({
            scrollTop: '1000px'
        }, 1000);
    });
    /**************** enlaces ********************/
     $('header a[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ 
    	scrollTop: destino.offset().top 
    }, 800);
    return false;
  });
});

