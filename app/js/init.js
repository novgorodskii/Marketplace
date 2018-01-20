$(function () {

  // Open dropdown nav 
  // let nav = $('[data-open-dropdown]');
  let nav = $('.dropdown-container');
    nav.on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });

  // Switch grid cards (all-items)
  $('#grid-thumbs05').on('click', function() {
    $('.change-icon').removeClass('active');
    $('#grid-thumbs05').addClass('active');
    $('.card.medium-card').removeClass('row-card');
  });
  $('#grid-list05').on('click', function() {
    $('.change-icon').removeClass('active');
    $('#grid-list05').addClass('active');
    $('.card.medium-card').addClass('row-card');  
  });

  // Switch grid cards (all-items)
  $('#grid-thumbs04').on('click', function() {
    $('.change-icon').removeClass('active');
    $('#grid-thumbs04').addClass('active');
    $('.card.medium-card').removeClass('row-card');
  });
  $('#grid-list04').on('click', function() {
    $('.change-icon').removeClass('active');
    $('#grid-list04').addClass('active');
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

// init slick nav
$('.menu-nav').slicknav({
  appendTo: ".header .top-header .container .top-bar",
  label:""
});