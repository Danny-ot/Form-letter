$(document).ready(function(){
    $("#form-one").submit(function(noRefresh){
        noRefresh.preventDefault();
       const name = $("#name").val();
    const address = $("#address").val();
    const date = $("#date").val();
    const title = $("#title").val();

    $(".name"). text(name) ;
    $(".address").text(address);
    $(".date").text(date);
    $(".title").text(title)
    $("#letter").show();
    $(this).hide();
    })
    $("#for-web").click(function(){
        $("#web-intro").hide();
        $("#web-exp").show();
    })
    $("#for-web-hide").click(function(){
        $("#web-exp").hide();
        $("#web-intro").show();
    })
    $("#html-btn-show").click(function(){
        $("#html-intro").hide();
        $("#html-show").show();
    })
    $("#html-btn-hide").click(function(){
        $("#html-show").hide();
        $("#html-intro").show();
    })

   $("#btn-css-click").click(function(){
       $("#css-hide").hide();
       $("#css-show").show();
   })
   $("#btn-css-hide").click(function(){
       $("#css-show").hide();
       $("#css-hide").show();
   })
   $("#btn-js-click").click(function(){
       $("#js-intro").hide();
       $("#js-exp").show();
   })
   $("#btn-js-hide").click(function(){
       $("#js-exp").hide();
       $("#js-intro").show();
   })
   $("#begin-course").click(function(){
       $("body").addClass("bg-light")
       $("#letter").hide();
       $("#flipcard").show();
   })

})