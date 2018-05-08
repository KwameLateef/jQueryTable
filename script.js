"use strict";

$(document).ready(() => {

  let btn = $(".available");
  btn.click(() => {
    $(".hidden").toggle();
  })

  let close = $(".material-icons");
  close.click(() => {
    $(".hidden").toggle();
  })

  let submit = $("#hiddenSubmit");
  submit.click(() => {
    $(".hidden").toggle();
    $ (".available").toggleClass("reserved");
  });
});