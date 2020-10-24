$(document).ready(function(){

//FIXAR O MENU DE NAVEGAÇÃO NO TOPO DA PÁGINA
$(window).scroll(function(){
    let position = $(this).scrollTop();

    if(position >= 550){
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




})