function scrollTopAnimated() {
  $("html, body").animate({ scrollTop: "0" });
  $('.navbar-collapse').collapse('hide');
  $(".navbar-brand").removeClass("active");
};


function scroll_to_anchor(anchor_id){
  var tag = $("#"+anchor_id);
  $('html,body').animate({scrollTop: tag.offset().top},'slow');
  $('.navbar-collapse').collapse('hide');
  $(".navbar-brand").removeClass("active");
};

function add_active_tag(class_id){
  var tag = $("."+class_id);
  $(tag).addClass("active");
};