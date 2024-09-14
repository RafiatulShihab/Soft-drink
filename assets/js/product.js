

$(document).on('ready', function(){

  $('.product-img-slide').slick({
    centerMode: true,
    centerPadding: '130px',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          centerPadding: '110px',
        }
      },
      {
        breakpoint: 1100,
        settings: {
          centerPadding: '100px',
        }
      }, 
      {
        breakpoint: 1000,
        settings: {
          centerPadding: '115px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '0',
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 500,
        settings: {
          centerPadding: '0',
          slidesToShow: 3,
        }
      },
    ]
  });

  // product box show ===================
  $(".slid-prodct1").on("click", function () {
		$(".product-item1").show();
		$(".product-item2").hide();
		$(".product-item3").hide();
		$(".product-item4").hide();
		$(".product-item5").hide();
		$(".slid-prodct1").addClass("slide-item-active");
		$(".slid-prodct2").removeClass("slide-item-active");
		$(".slid-prodct3").removeClass("slide-item-active");
		$(".slid-prodct4").removeClass("slide-item-active");
		$(".slid-prodct5").removeClass("slide-item-active");
	});

  $(".slid-prodct2").on("click", function () {
		$(".product-item1").hide();
		$(".product-item2").show();
		$(".product-item3").hide();
		$(".product-item4").hide();
		$(".product-item5").hide();
		$(".slid-prodct1").removeClass("slide-item-active");
		$(".slid-prodct2").addClass("slide-item-active");
		$(".slid-prodct3").removeClass("slide-item-active");
		$(".slid-prodct4").removeClass("slide-item-active");
		$(".slid-prodct5").removeClass("slide-item-active");
	});

  $(".slid-prodct3").on("click", function () {
		$(".product-item1").hide();
		$(".product-item2").hide();
		$(".product-item3").show();
		$(".product-item4").hide();
		$(".product-item5").hide();
		$(".slid-prodct1").removeClass("slide-item-active");
		$(".slid-prodct2").removeClass("slide-item-active");
		$(".slid-prodct3").addClass("slide-item-active");
		$(".slid-prodct4").removeClass("slide-item-active");
		$(".slid-prodct5").removeClass("slide-item-active");
	});

  $(".slid-prodct4").on("click", function () {
		$(".product-item1").hide();
		$(".product-item2").hide();
		$(".product-item3").hide();
		$(".product-item4").show();
		$(".product-item5").hide();
		$(".slid-prodct1").removeClass("slide-item-active");
		$(".slid-prodct2").removeClass("slide-item-active");
		$(".slid-prodct3").removeClass("slide-item-active");
		$(".slid-prodct4").addClass("slide-item-active");
		$(".slid-prodct5").removeClass("slide-item-active");
	});

  $(".slid-prodct5").on("click", function () {
		$(".product-item1").hide();
		$(".product-item2").hide();
		$(".product-item3").hide();
		$(".product-item4").hide();
		$(".product-item5").show();
		$(".slid-prodct1").removeClass("slide-item-active");
		$(".slid-prodct2").removeClass("slide-item-active");
		$(".slid-prodct3").removeClass("slide-item-active");
		$(".slid-prodct4").removeClass("slide-item-active");
		$(".slid-prodct5").addClass("slide-item-active");
	});


});
