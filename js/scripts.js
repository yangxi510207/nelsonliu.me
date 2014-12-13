
$(document).ready(function(){/* off-canvas sidebar toggle */

$('[data-toggle=offcanvas]').click(function() {
  	$(this).toggleClass('visible-xs text-center');
    $(this).find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
    $('.row-offcanvas').toggleClass('active');
    $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
    $('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
    $('#btnShow').toggle();
});

$('#about').click(function() {
  $('#about').addClass('about-active');
  $('#skills').removeClass('skills-active');
  $('#projects').removeClass('projects-active');
  $('#resume').removeClass('resume-active');
  $('#connect').removeClass('connect-active');
});

$('#skills').click(function() {
  $('#skills').addClass('skills-active');
  $('#about').removeClass('about-active');
  $('#projects').removeClass('projects-active');
  $('#resume').removeClass('resume-active');
  $('#connect').removeClass('connect-active');
});

$('#projects').click(function() {
  $('#projects').addClass('projects-active');
  $('#skills').removeClass('skills-active');
  $('#about').removeClass('about-active');
  $('#resume').removeClass('resume-active');
  $('#connect').removeClass('connect-active');
});

$('#resume').click(function() {
  $('#resume').addClass('resume-active');
  $('#skills').removeClass('skills-active');
  $('#projects').removeClass('projects-active');
  $('#about').removeClass('about-active');
  $('#connect').removeClass('connect-active');
});

$('#connect').click(function() {
  $('#connect').addClass('connect-active');
  $('#skills').removeClass('skills-active');
  $('#projects').removeClass('projects-active');
  $('#resume').removeClass('resume-active');
  $('#about').removeClass('about-active');
});

});
