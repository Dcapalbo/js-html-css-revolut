$(document).ready(function () {
  $("#tar").hover(
  function() {
    $(".specific-window-tariffazione").fadeToggle(200);
   }
  );
  $("#conti").hover(
  function() {
    $(".specific-window-conti").fadeToggle(200);
  });
  $("#prod").hover(
  function() {
    $(".specific-window-prodotti").fadeToggle(200);
  });
  $("#window").hover(
  function() {
    $(".specific-window-azienda").fadeToggle(200);
  });
  $("#help").hover(
  function() {
    $(".specific-window-aiuto").fadeToggle(200);
  });
});
