$(".card-blue-hover-effect").mouseenter(function(){
    $(this).addClass("card-blue-hover animate wow fadeIn");
});
$(".card-blue-hover-effect").mouseleave(function(){
    $(this).removeClass("card-blue-hover");
});

var swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '3',
    autoplay: 
    {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop:true
  });

  

  

  $(".edit-popup").click(function(){
  $("#pop-up-container").css({"display" : "flex"});
  $("#pop-up-container").css({"backdrop-filter" : "blur(5px)"});
  $("#pop-up-container").addClass("wow animated fadeIn");
  $(".pop-up-edit").addClass("wow animated fadeInRight");
});

$(".popup-edit-close").click(function(){
  $("#pop-up-container").css({"display" : "none"});
});


  








  