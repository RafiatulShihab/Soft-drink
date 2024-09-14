

$(document).on('ready', function(){

    $('.slider-activee').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
            },
            {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            },
        ]
    });


    // Accordion ===================
    $(".accordion-content").css("display", "none");

    $(".accordion-title").click(function () {
        $(".accordion-title").not(this).removeClass("open");
        $(".accordion-title").not(this).next().slideUp(300);
        $(this).toggleClass("open");
        $(this).next().slideToggle(300);
    });

    window.addEventListener("scroll", function(){
        var header = document.querySelector("header"); 
        header.classList.toggle("sticky", window.scrollY > 0); 
    }); 


    $(".tp-menu-toggle").on("click", function () {
		$(".tp-sidebar-menu").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".close-sidebar").on("click", function () {
		$(".tp-sidebar-menu").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".tp-sidebar-menu").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});

    $('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

    //////////////////////////////////////////////////
    // product form function ======================
    // form-check ==========
    $(".f1-check").on("click", function () {
		$(".f1-checkd").addClass("black-active");
		$(".f2-checkd").removeClass("black-active");
	});
    $(".f2-check").on("click", function () {
		$(".f2-checkd").addClass("black-active");
		$(".f1-checkd").removeClass("black-active");
	});

    
    // Quentity Select ==========
    $(".qntity1").on("click", function () {
		$(".qntity1").addClass("active-quentity");
		$(".qntity2").removeClass("active-quentity");
		$(".qntity3").removeClass("active-quentity");
		$(".qntity4").removeClass("active-quentity");
		$(".qntity5").removeClass("active-quentity");
	});

    $(".qntity2").on("click", function () {
		$(".qntity1").removeClass("active-quentity");
		$(".qntity2").addClass("active-quentity");
		$(".qntity3").removeClass("active-quentity");
		$(".qntity4").removeClass("active-quentity");
		$(".qntity5").removeClass("active-quentity");
	});

    $(".qntity3").on("click", function () {
		$(".qntity1").removeClass("active-quentity");
		$(".qntity2").removeClass("active-quentity");
		$(".qntity3").addClass("active-quentity");
		$(".qntity4").removeClass("active-quentity");
		$(".qntity5").removeClass("active-quentity");
	});

    $(".qntity4").on("click", function () {
		$(".qntity1").removeClass("active-quentity");
		$(".qntity2").removeClass("active-quentity");
		$(".qntity3").removeClass("active-quentity");
		$(".qntity4").addClass("active-quentity");
		$(".qntity5").removeClass("active-quentity");
	});

    $(".qntity5").on("click", function () {
		$(".qntity1").removeClass("active-quentity");
		$(".qntity2").removeClass("active-quentity");
		$(".qntity3").removeClass("active-quentity");
		$(".qntity4").removeClass("active-quentity");
		$(".qntity5").addClass("active-quentity");
	});



    // Product-Select ==============
    $(".p-item1").on("click", function () {
		$(".p-item-1").addClass("p-item-active");
		$(".p-item-2").removeClass("p-item-active");
		$(".p-item-3").removeClass("p-item-active");
		$(".p-item-4").removeClass("p-item-active");
		$(".p-item-5").removeClass("p-item-active");
	});

    $(".p-item2").on("click", function () {
		$(".p-item-1").removeClass("p-item-active");
		$(".p-item-2").addClass("p-item-active");
		$(".p-item-3").removeClass("p-item-active");
		$(".p-item-4").removeClass("p-item-active");
		$(".p-item-5").removeClass("p-item-active");
	});

    $(".p-item3").on("click", function () {
		$(".p-item-1").removeClass("p-item-active");
		$(".p-item-2").removeClass("p-item-active");
		$(".p-item-3").addClass("p-item-active");
		$(".p-item-4").removeClass("p-item-active");
		$(".p-item-5").removeClass("p-item-active");
	});

    $(".p-item4").on("click", function () {
		$(".p-item-1").removeClass("p-item-active");
		$(".p-item-2").removeClass("p-item-active");
		$(".p-item-3").removeClass("p-item-active");
		$(".p-item-4").addClass("p-item-active");
		$(".p-item-5").removeClass("p-item-active");
	});

    $(".p-item5").on("click", function () {
		$(".p-item-1").removeClass("p-item-active");
		$(".p-item-2").removeClass("p-item-active");
		$(".p-item-3").removeClass("p-item-active");
		$(".p-item-4").removeClass("p-item-active");
		$(".p-item-5").addClass("p-item-active");
	});


});

