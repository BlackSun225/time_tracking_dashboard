$(document).ready(function(){
  $("h2 + img").on({
    mouseover: function(event){
      event.stopPropagation();
      $(this).attr('src', "images/icon-ellipsis-white.svg");
      $(this).css("width", "22px");
      $(this).parents(".content").css("background","hsl(235, 46%, 20%)");
    },
    mouseout: function(){
      $(this).attr('src', "images/icon-ellipsis.svg");
    }
  });
  $(".content").on({
    mouseover: function(){
      $(this).css("background","hsl(234, 34%, 31%)");
    },
    mouseout: function(){
      $(this).css("background", "hsl(235, 46%, 20%)");
    }
  });
});