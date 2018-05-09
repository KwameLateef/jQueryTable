"use strict";

$(document).ready(() => {

  $("button").on("click", function() {
    $(".hidden").fadeIn("slow");
    console.log(event.target)
  })

  $(".material-icons").on("click", function() {
    $(".hidden").fadeOut("slow");
  })
 
  $("#hiddenSubmit").on("click", (event) => {
    usersName = $("#name-id").val();
    $("#name-id").val("");
    container.attr("name", usersName);
    container.addClass("reserved");

    $(".hidden").fadeOut("slow");
    
    $ (".available").addClass("reserved");
  })
});
