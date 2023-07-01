$(document).ready(function () {
  $("#mobile-btn1").click(() => {
    $("#mobile-menu").slideUp(800);
  });
  $("#hamburger-button").click(() => {
    $("#mobile-menu").toggle();
  });

  $(".anchor").click(() => {
    $("#mobile-menu").slideUp(800);
  });
});
