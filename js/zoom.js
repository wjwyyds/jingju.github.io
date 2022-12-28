function zoom(mask, bigimg, smallimg) {
  this.bigimg = bigimg;
  this.smallimg = smallimg;
  this.mask = mask;
}
zoom.prototype = {
  init: function () {
    var that = this;
    this.smallimgClick();
    this.maskClick();
    this.bigimgClick();
  },
  smallimgClick: function () {
    var that = this;
    $("." + that.smallimg).click(function () {
      $("." + that.bigimg).css({
        height: $("." + that.smallimg).height() * 1.2,
        width: $("." + that.smallimg).width() * 1.2,
        
      });
      $("." + that.mask).fadeIn();
      $("." + that.bigimg)
        .attr("src", $(this).attr("src"))
        .fadeIn(600);
    });
  },
  maskClick: function () {
    var that = this;
    $("." + that.mask).click(function () {
      $("." + that.bigimg).fadeOut(1000);
      $("." + that.mask).fadeOut(1000);
    });
  },
  bigimgClick: function(){
      var that=this;
      $("." + that.bigimg).click(function(){
        $("." + that.bigimg).fadeOut(1000);
        $("." + that.mask).fadeOut(1000);
      })
  }
};
