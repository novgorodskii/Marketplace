$(function () {

  // Open dropdown nav 
  // let nav = $('[data-open-dropdown]');
  let nav = $('.dropdown-container');
  nav.on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });

  // Switch grid cards (all-items)
  $('#grid-thumbs').on('click', function() {
    $('.change-icon').removeClass('active');
    $('#grid-thumbs').addClass('active');
    $('.card.medium-card').removeClass('row-card');
  });
  $('#grid-list').on('click', function() {
    $('.change-icon').removeClass('active');
    $('#grid-list').addClass('active');
    $('.card.medium-card').addClass('row-card');  
  });

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