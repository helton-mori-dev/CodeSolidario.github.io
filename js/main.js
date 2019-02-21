var btnHamburger = document.getElementById("btnmenu");
var back_layer = document.querySelector('#back-layer');

function mostrar() {
    btnHamburger.classList.toggle("show");
    back_layer.classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function (){

	// Função que faz o menu responsivo aparecer ao clicar no botão e sumir ao clicar fora.
	back_layer.addEventListener ('click', function(){

	  if (btnHamburger.classList.contains('show')) {
	  	btnHamburger.classList.remove('show');
	  	back_layer.classList.remove("show");
	  }
	});

	btnHamburger.addEventListener('click', function() {
		this.classList.remove('show');
		back_layer.classList.remove("show");
	});

 	// Função para fazer a rolagem scroll 
	$('.scrollPage, .back-to-top').click(function (e) {
	 e.preventDefault();   
	$('html, body').animate({
	  scrollTop: ($.attr(this, 'href') != '#') ? $($.attr(this, 'href')).offset().top : 0
	}, 500);
	});
	$(window).on('scroll', function () {
	    if ($(window).scrollTop() > 100)
	        $('#btn-scroll-top').addClass('show');
	    else
	        $('#btn-scroll-top').removeClass('show');
	});
});