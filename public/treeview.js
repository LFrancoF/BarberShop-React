//Codigo para activar los treeviews
$(document).ready(function(){
  $('.nav-item ').click(function(){

    if($(this).hasClass('menu-open')){
      $(this).removeClass("menu-open");
      $(this).children().removeClass("active");
    }else{
      $(this).addClass("menu-open");
      $(this).children().addClass("active");
    }
    $('.nav-item').children().removeClass('active').not(this);
    $(this).children().addClass("active");

  });
}); 