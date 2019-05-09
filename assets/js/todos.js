// Check off specific todos by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
})

//click on x to delete
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabs todo text
        var todoText = $(this).val();
        $(this).val("");
        //create new li with grabbed text
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
})