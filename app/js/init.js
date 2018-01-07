$(function () {

  // init slick slider
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    dots: true
  });

  // init form styler for select
  $('select').styler();

  // open modal
  let openModalBtn = $('.open-login-modal');

  openModalBtn.on('click', function () {
    $('.modal').bPopup();
  });
  
});