var $form = $('#formulario'),
    $titulo = $('#titulo'),
    $url = $('#url'),
    $button = $('#mostrar-form'),
    $list = $('#contenido'),
    $post = $('.item').first();//class item del article


 
function mostrarFormulario(){
	$form.slideToggle();
	return false;//para q la pagina no se mueva
}                 //por causa de q #mostrar-form tiene un link
 
function agregarPost(){
	var url    = $url.val(),
	    titulo = $titulo.val(),//val jala el valor dentro del input
	    $clone = $post.clone();//clone ..clona el post

	$clone.find('.titulo_item a')
	     .text(titulo)
	     .attr('href', url);

	$clone.hide();
	$list.prepend($clone);
	$clone.fadeIn();
     
	return false;
         
}

//Eventos
 $button.click(mostrarFormulario);
 $form.on('submit', agregarPost);