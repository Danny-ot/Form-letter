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
   
})