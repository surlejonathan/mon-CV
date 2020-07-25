$(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $('.navbar a, footer a').on('click', function(e){
        
        if (this.hash !== ""){

            e.preventDefault();
            const hash = this.hash;
        
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            })
        }
    });

    $(document).on('click','.navbar-collapse',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });

    

})