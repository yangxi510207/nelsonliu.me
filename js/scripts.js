
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

    $("#aboutcontent").fadeIn('slow');
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").css({"display":"none"});
    $("#resumecontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
  });

  $('#skills').click(function() {
    $('#skills').addClass('skills-active');
    $('#about').removeClass('about-active');
    $('#projects').removeClass('projects-active');
    $('#resume').removeClass('resume-active');
    $('#connect').removeClass('connect-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").fadeIn('slow');
    $("#projectscontent").css({"display":"none"});
    $("#resumecontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
  });

  $('#projects').click(function() {
    $('#projects').addClass('projects-active');
    $('#skills').removeClass('skills-active');
    $('#about').removeClass('about-active');
    $('#resume').removeClass('resume-active');
    $('#connect').removeClass('connect-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").fadeIn('slow');
    $("#resumecontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
  });

  // $('#resume').click(function() {
  //   $('#resume').addClass('resume-active');
  //   $('#skills').removeClass('skills-active');
  //   $('#projects').removeClass('projects-active');
  //   $('#about').removeClass('about-active');
  //   $('#connect').removeClass('connect-active');
  //
  // });

  $('#connect').click(function() {
    $('#connect').addClass('connect-active');
    $('#skills').removeClass('skills-active');
    $('#projects').removeClass('projects-active');
    $('#resume').removeClass('resume-active');
    $('#about').removeClass('about-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").css({"display":"none"});
    $("#resumecontent").css({"display":"none"});
    $("#connectcontent").fadeIn('slow');
  });

  $('#about-xs').click(function() {
    $('#about-xs').addClass('about-active');
    $('#skills-xs').removeClass('skills-active');
    $('#projects-xs').removeClass('projects-active');
    $('#resume-xs').removeClass('resume-active');
    $('#connect-xs').removeClass('connect-active');

    $("#aboutcontent").fadeIn('slow');
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").css({"display":"none"});
    $("#resumecontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
  });

  $('#skills-xs').click(function() {
    $('#skills-xs').addClass('skills-active');
    $('#about-xs').removeClass('about-active');
    $('#projects-xs').removeClass('projects-active');
    $('#resume-xs').removeClass('resume-active');
    $('#connect-xs').removeClass('connect-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").fadeIn('slow');
    $("#projectscontent").css({"display":"none"});
    $("#resumecontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
  });

  $('#projects-xs').click(function() {
    $('#projects-xs').addClass('projects-active');
    $('#skills-xs').removeClass('skills-active');
    $('#about-xs').removeClass('about-active');
    $('#resume-xs').removeClass('resume-active');
    $('#connect-xs').removeClass('connect-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").fadeIn('slow');
    $("#resumecontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
  });

  // $('#resume-xs').click(function() {
  //   $('#resume-xs').addClass('resume-active');
  //   $('#skills-xs').removeClass('skills-active');
  //   $('#projects-xs').removeClass('projects-active');
  //   $('#about-xs').removeClass('about-active');
  //   $('#connect-xs').removeClass('connect-active');
  //
  //   $("#aboutcontent").css({"display":"none"});
  //   $("#skillscontent").css({"display":"none"});
  //   $("#projectscontent").css({"display":"none"});
  //   $("#resumecontent").fadeIn('slow');
  //   $("#connectcontent").css({"display":"none"});
  // });

  $('#connect-xs').click(function() {
    $('#connect-xs').addClass('connect-active');
    $('#skills-xs').removeClass('skills-active');
    $('#projects-xs').removeClass('projects-active');
    $('#resume-xs').removeClass('resume-active');
    $('#about-xs').removeClass('about-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").css({"display":"none"});
    $("#resumecontent").css({"display":"none"});
    $("#connectcontent").fadeIn('slow');
  });

  $(".hoverpanel").hover(
    function () {
      $(this).addClass("shadow-z-2");
    },
    function () {
      $(this).removeClass("shadow-z-2");
    }
  );

  cheet('v i n a y p a u l i s c a n c e r o u s', function () {
    window.open('/img/cancer.png','mywindow');
  });

});
