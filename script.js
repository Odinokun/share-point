$('.info-main__item span').on('click', function () {
  $('.info-main__item span').removeClass('active');
  $(this).addClass('active');
});

$('.info-main__item span').on('click', function () {
  var dataVal = $(this).parents('.info-main__item').data('item');
  $('.aside').fadeOut();
  $('#aside-' + dataVal).fadeIn();
  $('#popup-layer').fadeIn();
});

$('.aside__close').on('click', function () {
  $('.info-main__item span').removeClass('active');
  $('.aside, #popup-layer').fadeOut();
});

