$(document).ready(function(){
    // ready - é disparado depois que o dicumento HTML foi carregado de forma mais rapida sem esperar todo conteúdo ser carregado. Ele é especifico do Jquery
    $(window).scroll(function(){
    // Chama o efeito de rolagem e abaixo indica o momento que essa rolagem precisa ser feita. Nesse caso quando for maior que 20. 
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            // Estou adicionando uma class.

        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});