$(".banner").hide();
$(".rw1").hide();
$(".rw2").hide();
$(".rw3").hide();
$(".rw4").hide();
$(".rw1").fadeIn(1000);
$(".rw1").fadeOut(1000, () => {
  $(".rw3").fadeIn(1000);
  $(".rw3").fadeOut(1000, () => {
    $(".rw2").fadeIn(1000);
    $(".rw2").fadeOut(1000, () => {
      $(".rw4").fadeIn(1000);
      $(".rw4").fadeOut(1000, () => {
        $(".cover_r").animate({ width: 0 }, 1500);
        $(".cover_l").animate({ width: 0 }, 1500, () => {
          $(".banner").slideDown(500);
        });
      });
    });
  });
});

