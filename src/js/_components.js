//lang
$('.lang__title').click(function(){ 
    $(this).toggleClass('active');
    $($(this).data("target")).stop().slideToggle();
});

