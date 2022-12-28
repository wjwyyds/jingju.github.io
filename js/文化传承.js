$(".value").hide();
$(".protect").hide();
$(".protect-show").hide();
$(".value-show").hide();

$(".title").click(function () {
  $(this).hide();
  $(".value").slideDown().show();
  $(".protect").slideDown().show();
  // $(".value").animate({ left: "445px", top: "140px", opacity: 1 }, 1000);
  // $(".protect").animate({ right: "285px", top: "140px", opacity: 1 }, 1000);
});
$(".value").click(function () {
  $(".value-show").slideDown().show(400);
  $(".shoWclose").slideDown().show(400);
  $(document.body).css({ "backdrop-filter": "blur(5px)" }, 200);
  $(".value").hide();
  $(".protect").hide();
});
$(".protect").click(function () {
  $(".protect-show").slideDown().show(400);
  $(".shoWclose").slideDown().show(400);
  $(document.body).css({ "backdrop-filter": "blur(5px)" }, 200);
  $(".value").hide();
  $(".protect").hide();
});
//close
$(".shoWclose").click(function () {
  $(this).hide();
  $(".protect-show").hide();
  $(".value-show").hide();
  $(".value").slideDown(400);
  $(".protect").slideDown(400);
  $(document.body).css({ "backdrop-filter": "blur(0px)" }, 200);
});
