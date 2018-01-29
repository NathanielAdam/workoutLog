// make sure the document is ready before any code is ran
$(document).ready(function(){
    $('#testAPI').on("click", function() {
        console.log("It is working")
    })
    // define an ajax request so we can call on it at anypoint
    var test = $.ajax({
        type: "GET",
        url:"http:localhost:3000/api/test"
    })
    .done(function(data){
        console.log(data)
    })
    .fail(function(){
        console.log("oh no!")
    })
})