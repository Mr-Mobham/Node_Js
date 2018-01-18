$(document).ready(function(){

  var $carousel_1 = $('header .Slider .main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: true,
    wrapAround: false,
    //  autoPlay:true,
    draggable:true,
    rightToLeft: false,
    freeScroll: false

  });

  var $carousel_2 = $('.home .forum .main-carousel_right , .forum-Class-- .Right_Width .main-carousel_right').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: true,
    wrapAround: false,
    //  autoPlay:true,
    draggable:true,
    rightToLeft: false,
    freeScroll: false,
    adaptiveHeight: true
  });

  $("#social").on("click" , function(){
    $(".social_network").toggle();
  })
  $("#print").on("click" , function(){
      window.print();
  })


  $(".notification .items .item .icon_close_danger").on("click" , function(event){
    event.preventDefault();
    let  elem   = $(".notification .items .item");
    let  sum    = 0;
    let index   = elem.index();

    $(this).parents(".item").hide();

  });


  function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('#img_uploaded').attr('src', e.target.result);
              $('#img_uploaded').css({
                'display' : 'block',
              })
          }
          reader.readAsDataURL(input.files[0]);
      }
  }
  $("#img_input").change(function(){
      readURL(this);
  });

  $("#list-post_send.Last--subject .list-post_send ul li").on("click" , function(event){
    event.preventDefault();
      $(".list-post_send ul li").removeClass("selected");
      $(this).addClass("selected");
      let index = $(this).index();
      $(".Last--subject.last-content .items").removeClass("display_block");
      $(".last-content .items").eq(index++).addClass("display_block");
      $(".last-content .items").eq(0).css({
        'display': 'none',
      });
  });

})
