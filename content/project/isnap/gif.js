var allImages = {};
var imgDir = "demo/"

$(document).ready(function ()
{
  $("img.gif").each(function () {
    var srcFile = $(this).attr('id');
    if ($(this).hasClass("nopreload") == false)
    {
      /* Preload: */
      allImages[srcFile] = new Image();
      allImages[srcFile].src = imgDir + srcFile + ".gif";
    }
    $(this).attr('src', imgDir + srcFile + "-preview.png");
    $(this).wrap("<div class='gifwrap'></div>");
    $(this).before("<span id='" + srcFile + "_control' class='play glyphicon glyphicon-play' onclick=\"play('" + srcFile + "')\"></span>");
  });

  $("img.shortened").each(function() {
    var srcFile = $(this).attr('id');
    if ($(this).hasClass("nopreload") == false)
    {
      allImages[srcFile] = new Image();
      allImages[srcFile].src = imgDir + srcFile + ".gif";
    }
    $(this).attr('src', imgDir + srcFile + "-preview.png");
    $(this).wrap("<div class='gifwrap'></div>");
    $(this).before("<span id='" + srcFile + "_control' class='play glyphicon glyphicon-play' onclick=\"play('" + srcFile + "')\"></span>");
    
  });
});

function play(id)
{
  var control = $("#" + id + "_control");
  if (control.hasClass("glyphicon-play"))
  {
     // Play GIF:
     if (!(id in allImages))
     {
       // Load now:
       allImages[id] = new Image();
       allImages[id].src = imgDir + id + ".gif";
     }
     $("#" + id).attr('src', allImages[id].src);
     control.removeClass("glyphicon-play");
     control.addClass("glyphicon-fast-backward");
  }
  else
  {
     $("#" + id).attr('src', imgDir + id + "-preview.png");
     control.removeClass("glyphicon-fast-backward");
     control.addClass("glyphicon-play");
  }
}
