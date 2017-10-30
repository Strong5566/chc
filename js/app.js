var main = function(){
	$('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });
	
	$('.reserch').click(function(){
		$('.paper').show();
		$('.announce').hide();
		$('.jumbotron').hide();
	});

    $('.article').click(function(){
        $('.article').removeClass('current');
        $('.description').hide();

        $(this).addClass('current');
        $(this).children('.description').show();
        
    });
};

$(document).ready(main);