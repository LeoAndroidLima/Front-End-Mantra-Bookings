$(document).ready(function(){

//CARROSEL DE IMAGENS DO CERTIFICADO
$('.fotos-certificado').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 700,
    infinite: true,
    speed: 1000,
    arrows: false,
    fade: true,
    cssEase: 'linear'
});

//Magnific POPUP PARA QUANDO CLICLAR NA IMAGEM
$('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',

    gallery: {
        enabled: true
    }
});


//Magnific-02 POPUP PARA QUANDO CLICLAR NA IMAGEM
$('.parent-container-2').magnificPopup({
    delegate: 'a',
    type: 'image',

    gallery: {
        enabled: true
    }
});

//Magnific-03 POPUP PARA QUANDO CLICLAR NA IMAGEM
$('.parent-container-3').magnificPopup({
    delegate: 'a',
    type: 'image',

    gallery: {
        enabled: true
    }
});


//CARROSEL DE IMAGENS Projetos
$('.carrosel').slick({
    centerMode: true,
    mobileFist: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

//CARROSEL-2 DE IMAGENS Projetos
$('.carrosel-2').slick({
    centerMode: true,
    mobileFist: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});


//CARROSEL-3 DE IMAGENS Projetos
$('.carrosel-3').slick({
    centerMode: true,
    mobileFist: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

//CARROSEL-3 DE IMAGENS Projetos
$('.carrosel-4').slick({
    centerMode: true,
    mobileFist: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

//FIXAR O MENU DE NAVEGAÇÃO NO TOPO DA PÁGINA
$(window).scroll(function(){
    let position = $(this).scrollTop();

    if(position >= 818){
        $('.navbar').addClass('navbar-background');
        $('.navbar').addClass('fixed-top');
    }else{
        $('.navbar').removeClass('navbar-background');
        $('.navbar').removeClass('fixed-top');
    }

});


//BOTÃO VOLTAR AO TOPO
$(window).scroll(function(){
    let position = $(this).scrollTop();

    if(position >= 818){
        $('#voltar-topo').addClass('scrollTop');
    }else{
        $('#voltar-topo').removeClass('scrollTop');
    }
});




//SUAVIZAÇÃO O SCROLL PARA NAVEGAÇÃO
$('.nav-item a, header-links, .btn-adiante, #voltar-topo, .navbar-brand').click(function(link){
    link.preventDefault();
    let target = $(this).attr('href');

    $('html, body').stop().animate({
        scrollTop: $(target).offset().top -25
    }, 1000);
});


})