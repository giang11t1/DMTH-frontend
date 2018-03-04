var cont_size_1 = 1; //300*400
    //date picker
var Site = (function($, window, undefined) {
    var privateVar = 1;

    function privateMethod1() {}
    return {
        publicVar: 1,
        publicObj: {
            var1: 1,
            var2: 2
        },
        publicMethod1: privateMethod1
    };

})(jQuery, window);

$(document).ready(function() {
    
        // scroll==
    $(function() {
        if ($(".scrollbar").length > 0) {
            $(".scrollbar").mCustomScrollbar();
        }
    });
    //setsize img
    function setSizes(imgClass, prop) {
        var containerW = $(imgClass).width();
        $(imgClass).height(containerW * prop);
    }
    setSizes('.box-buy .link-img', cont_size_1);
    setSizes('.box1 .link-img', cont_size_1);
    setSizes('.box2 .link-img', cont_size_1);
    setSizes('.box3 .link-img', cont_size_1);
    setSizes('.box4 .link-img', cont_size_1);
    setSizes('.box5 .link-img', cont_size_1);
    setSizes('.box6 .link-img', cont_size_1);
    setSizes('.box7 .link-img', cont_size_1);
    $(window).resize(function() {
        setSizes('.box1 .link-img', cont_size_1);
        setSizes('.box2 .link-img', cont_size_1);
        setSizes('.box3 .link-img', cont_size_1);
        setSizes('.box4 .link-img', cont_size_1);
        setSizes('.box5 .link-img', cont_size_1);
        setSizes('.box6 .link-img', cont_size_1);
        setSizes('.box7 .link-img', cont_size_1);
    });
    // active sidebar
    $(".box-check .menu-sidebar li a").click(function(){
        $(".box-check .menu-sidebar li, .box-check .menu-sidebar li a").removeClass("active");
        $(this).parent().addClass("active");
        $(this).addClass("active");
    });

    $(".box-check .menu-sidebar .Sub a").click(function(){
        $(".box-check .menu-sidebar .Sub a").removeClass("active");
        $(this).addClass("active");
    });
    // active tab detail
    $("ul.tab li a").click(function(){
        $("ul.tab li a").removeClass("active");
        $(this).addClass("active");
    });
    //backt-to-top
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('.back-top-btn').fadeIn();
        } else {
            $('.back-top-btn').fadeOut();
        }
    });
    $('.back-top-btn').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
    // zoom main picture =======================
     $("#bzoom").zoom({
        zoom_area_width: 500,
        autoplay_interval :3000,
        small_thumbs : 6,
        autoplay : false,
        not_set_small_thumb: true,
        add_ypos: 60
    });    
    
    // choose gift
    $('input[name=gift]').click(function(){
        $(".list-gift .choosegift").removeClass("active");
        $(this).closest(".choosegift").addClass("active");
    });
    // choose size change border-color -----------------------------------
    $('.total-btn li').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        // only do the following if the clicked link isn't already active
        if (!$(this).closest('li').hasClass('active')) {
            $(this).closest('ul').find('.active').removeClass('active');
            // $(this).css("border","none");
            $(this).closest('li').addClass('active');
            $(".total-btn li a div").css("border", "none");
            $(this).unbind("mouseenter mouseleave");
        }
    });
    
    $('#Gallery li').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        // only do the following if the clicked link isn't already active
        if (!$(this).closest('li').hasClass('active-img')) {
            $(this).closest('ul').find('.active-img').removeClass('active-img');
            $(this).closest('li').addClass('active-img');
            $(this).unbind("mouseenter mouseleave");
        }
    });
     // see more================
    $("#seemore").click(function() {
        $(this).hide();
        $("#collapse").show();
        $(".des .short_description").css({ "max-height": "auto", "overflow": "nomal" });
    });
    $("#collapse").click(function() {
        $(this).hide();
        $("#seemore").show();
        $(".des .short_description").css({ "max-height": "106px", "overflow": "hidden" });
    });
    // reply answer=========================
    $(".commend-detail .Reply").click(function() {
        $(this).closest(".commend-detail").find(".SubReply").slideToggle();
    });

    $(".commend-detail .cancel").click(function() {
        $(this).closest(".commend-detail").find(".SubReply").slideUp();
    });
    // dislike, like======
    $(".commend-detail #like-command1").click(function() {
        $(this).css("display", "none");
        $(".commend-detail #liked-command1").css("display", "block");
    });

    $(".commend-detail #like-command2").click(function() {
        $(this).css("display", "none");
        $(".commend-detail #liked-command2").css("display", "block");
    });
    $(".commend-detail #like-command3").click(function() {
        $(this).css("display", "none");
        $(".commend-detail #liked-command3").css("display", "block");
    });

    $(".commend-detail #liked-command1").click(function() {
        $(this).css("display", "none");
        $(".commend-detail #like-command1").css("display", "block");
    });

    $(".commend-detail #liked-command2").click(function() {
        $(this).css("display", "none");
        $(".commend-detail #like-command2").css("display", "block");
    });
    $(".commend-detail #liked-command3").click(function() {
        $(this).css("display", "none");
        $(".commend-detail #like-command3").css("display", "block");
    });

    // $(function() {
    $(".clock-sale").countdown('2020/10/10').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime('' + '<div><label><span class="number">%H</span><span class="space">:</span></label></div>' + '<div><label><span class="number">%M</span><span class="space">:</span></label></div>' + '<div><label><span class="number">%S</span></label><span class="text">Giây</span></div>'));
    });
   
    //menu
    var swiper = new Swiper('.MenuSlide', {
        nextButton: '.next-pre .swiper-button-next',
        prevButton: '.next-pre .swiper-button-prev',
        slidesPerView: 13,
        centeredSlides: false,
        spaceBetween: 0,
    });

    //date picker
    $(".DatePicker").datepicker();
    // });
    // click one time
    $(".swiper-slide").click(function() { window.location.href = $(this).find('a').attr('href'); });
    // show option when click in breadcrumb
    function callText() {
        $(".breadcrumb .list-cate li a").click(function() {
            var text = $(this).text();
            $(".showName").text(text);
        });
    }
    callText();

    $(".ctv-contact-btn").click(function() {
        $('html,body').animate({ scrollTop: ($('.' + 'section-ctv-contact').offset().top - 80) }, 'slow');
    });
    //treeview
    $('.ul-has-child').addClass('notransition')
    $('.li-has-child > span').on('click', function(e) {
        var children = $(this).parent('li.li-has-child').find(' > ul');
        if (children.is(":visible")) {
            children.slideUp();
        } else {
            children.slideDown();
        }
        e.stopPropagation();
    });
    //setsize img
    function setSizes(imgClass, prop) {
        var containerW = $(imgClass).width();
        $(imgClass).height(containerW * prop);
    }
    setSizes('.col-product .wrap-img', cont_size_1);
    setSizes('.col-product .wrap-img', cont_size_1);
    $(window).resize(function() {
        setSizes('.col-product .wrap-img', cont_size_1);
        setSizes('.col-product .wrap-img', cont_size_1);
    });
});
// choose color detail
$(".list-color li").click(function() {
    $(".list-color li").removeClass("active");
    $(this).addClass("active");
});
// hover in and out
$(".btn-buy")
    .on("mouseenter", function() {
        $(this).children().removeClass("icon-buy");
        $(this).children().addClass("icon-buy1");
    })
    .on("mouseleave", function() {
        $(this).children().removeClass("icon-buy1");
        $(this).children().addClass("icon-buy");
    });

$(".btn-chat")
    .on("mouseenter", function() {
        $(this).children().removeClass("icon-chat");
        $(this).children().addClass("icon-chat1");
    })
    .on("mouseleave", function() {
        $(this).children().removeClass("icon-chat1");
        $(this).children().addClass("icon-chat");
    });
// click button active
$(".item-button button").click(function() {
    $(".item-button button").removeClass("active");
    $(this).addClass("active");
});
// choose cate 1
//show div when click
$(document).on("click", function(e) {
    if ($(e.target).is(".cate1 a")) {
        $(".cate1 .scrollbar").show();
    } else {
        $(".cate1 .scrollbar").hide();
    }
});
$(document).on("click", function(e) {
    if ($(e.target).is(".header-search input")) {
        // $("#show-result").show();
    } else {
        $("#show-result").hide();
    }
});
// resize select option
$('#resizing_select').change(function() {
    $("#width_tmp_option").html($('#resizing_select option:selected').text());
    $(this).width($("#width_tmp_select").width());
});
$('#resizing_select1').change(function() {
    $("#width_tmp_option1").html($('#resizing_select1 option:selected').text());
    $(this).width($("#width_tmp_select1").width());
});
$('#resizing_select2').change(function() {
    $("#width_tmp_option2").html($('#resizing_select2 option:selected').text());
    $(this).width($("#width_tmp_select2").width());
});
//
// show address cart
$("#home").click(function(){
    $(".address_home").slideDown();
    $(".address_supermaket").slideUp();
});
$("#supermarket").click(function(){
    $(".address_home").slideUp();
    $(".address_supermaket").slideDown();
});
$(".color1 span").click(function(){
    $(".color1 span").removeClass("active");
    $(this).addClass("active");
});
$(".color2 span").click(function(){
    $(".color2 span").removeClass("active");
    $(this).addClass("active");
});
// detail------
$(".rate-product .btn-show").click(function(){
    $(this).hide();
    $(".rate-product .btn-cancel").show();
    $(".show_comment").slideDown();
});
$(".rate-product .btn-cancel").click(function(){
    $(this).hide();
    $(".rate-product .btn-show").show();
    $(".show_comment").slideUp();
});
// tracking order==
$(".input-checking button").click(function() {
    $(".input-checking").addClass("active");
    $(".tracking-order").slideDown();
    $(".list-order-table").slideDown();
});

$("table.list-order td a").click(function(){
    $(".list-order").hide();
    $(".view-detail-order").show();
});
// effect order==
$('.add_to_cart').on('click', function() {
    var cart = $('.shopping-cart');
    var imgtodrag = $(this).parent('.box-buy').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '999999'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 15,
                'left': cart.offset().left + 15,
                'width': 75,
                'height': 75
            }, 1000, 'easeInOutExpo');

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function() {
            $(this).detach()
        });
    }
});
// ----
$('.add-to-cart').on('click', function() {
    var cart = $('.shopping-cart');
    var button_cart = $('.add-to-cart');
    var imgtodrag = $('#bzoom li').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
                top: button_cart.offset().top,
                left: button_cart.offset().left
            })
            .css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '999999'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 15,
                'left': cart.offset().left + 15,
                'width': 75,
                'height': 75
            }, 1000, 'easeInOutExpo');

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function() {
            $(this).detach()
        });
    }
});
$('.add-to-cart1').on('click', function() {
    var cart = $('.shopping-cart');
    var button_cart = $('.add-to-cart1');
    var imgtodrag = $('.block-buy .border-img').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
                top: button_cart.offset().top,
                left: button_cart.offset().left
            })
            .css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '999999'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 15,
                'left': cart.offset().left + 15,
                'width': 75,
                'height': 75
            }, 1000, 'easeInOutExpo');

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function() {
            $(this).detach()
        });
    }
});
// click cart
$('.myLink').click(function(event){
    event.stopImmediatePropagation();
});
// support center
$(".list-support li a").click(function(){
    $(".list-support li a").removeClass("active");
    $(this).addClass("active");
});
$(".list-support a.instruction").click(function(){
    $(".Transport, .Policy, .MaintainCenter").hide();
    $(".Instruction").show();
});
$(".list-support a.transport").click(function(){
    $(".Instruction, .Policy, .MaintainCenter").hide();
    $(".Transport").show();
});
$(".list-support a.maintain").click(function(){
    $(".Instruction, .Transport, .MaintainCenter").hide();
    $(".Policy").show();
});
$(".list-support a.maintaincenter").click(function(){
    $(".Instruction, .Transport, .Policy").hide();
    $(".MaintainCenter").show();
});
$(".maintain-center button").click(function(){
    $(".table-center").slideDown();
});
$(".check-phone button").click(function(){
    $(".infor-product ").slideDown();
});

$(".list-support a.instruction").click(function(){
    $(".Supermarket,.Career,.BusinessPurchase, .Contact,.InstallmentPurchase, .InformationApplier").hide();
    $(".IntroduceTH").show();
});
$(".list-support a.supermarkets").click(function(){
    $(".IntroduceTH,.Career,.BusinessPurchase, .Contact,.InstallmentPurchase, .InformationApplier").hide();
    $(".Supermarket").show();
});

$(".list-super a").click(function(){
    $(".top_block_origin").hide();
    $(".top_block_detail").show();
});
//add information applyer
$(".list-support a.career").click(function(){
    $(".IntroduceTH,.Supermarket, .BusinessPurchase, .Contact,.InstallmentPurchase").hide();
    $(".Career").show();
});
$(".list-career .career-item a").click(function(){
    $(".title-general,.GeneralCareer").hide();
    $(".DetailCareer").show();
    $(".title-detail").css("display","inline-block");
});
$(".BtnApply").click(function(){
    $(".Career").slideUp();
    $(".InformationApplier").slideDown();
});
$(".plus-content a").click(function(){
    $(".content1").slideDown();
});

$(".list-support a.order-alittle").click(function(){
    $(".IntroduceTH,.Supermarket,.Career, .BusinessPurchase, .Contact, .InformationApplier").hide();
    $(".InstallmentPurchase").show();
});

$(".list-support a.order-business").click(function(){
    $(".IntroduceTH,.Supermarket,.Career, .InstallmentPurchase, .Contact, .InformationApplier").hide();
    $(".BusinessPurchase").show();
});
$(".list-support a.contact-getidea").click(function(){
    $(".IntroduceTH,.Supermarket,.Career, .InstallmentPurchase, .BusinessPurchase,.InformationApplier").hide();
    $(".Contact").show();
});
// news
$(".list-support a.sales-news").click(function(){
    $(".NewsDetail").hide();
    $(".SaleNews").show();
});

$(".list-news a").click(function(){
    $(".SaleNews").hide();
    $(".NewsDetail").show();
});

// set menu category
var hoverAndClick = function() {
    var valueDataId = $(this).attr("data-id");
    $(".menu-content .sub-content").removeClass("active");
    $(".menu-content .sub-content.sub_" + valueDataId).addClass("active");
    $("header .item  a").css("border-bottom", "0");
    $("header .wrap-slider").css("border-bottom", "0");
    $(this).css("border-bottom", "3px solid #2bc5f8");
};
 Site.publicMethod1();

$("header .item  a").hover(hoverAndClick).click(hoverAndClick).focus(hoverAndClick);
$("#collapseExample > .container").mouseleave(function() {
    $(".menu-content .sub-content").removeClass("active");
    $("header .item  a").css("border-bottom", "0");
});

jQuery(function() {
    $(".scrollbar").mCustomScrollbar();
    $('.all-box-check').mCustomScrollbar();
    var $widthContainer = $(".container").width();

    var $widthNextPre = $(".next-pre").innerWidth();
    var $widthSlider = $widthContainer - $widthNextPre - 30;
    $(".slider").width($widthSlider);

    function myfunction() {
        if (this.itemsAmount > this.visibleItems.length) {
            $('.next').show();
            $('.prev').show();

            $('.next').removeClass('disabled');
            $('.prev').removeClass('disabled');
            if (this.currentItem === 0) {
                $('.prev').addClass('disabled');
            }
            if (this.currentItem === this.maximumItem) {
                $('.next').addClass('disabled');
            }

        } else {
            $('.next').hide();
            $('.prev').hide();
        }

        var $widthContainer = $(".container").width();

        var $widthNextPre = $(".next-pre").innerWidth();
        var $widthSlider = $widthContainer - $widthNextPre - 30;
        $(".slider").width($widthSlider);
    }

    var owl = $("#owl-demo");

    owl.owlCarousel({
        items: 8, //10 items above 1000px browser width
        autoWidth: true,
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        afterAction: myfunction
    });
    var owlone = $("#owl-one-slide");

    owlone.owlCarousel({
        autoPlay: 10000, 
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });
    $(".owl-next").click(function() {
        owlone.trigger('owl.next');
    });
    $(".owl-prev").click(function() {
        owlone.trigger('owl.prev');
    });

    $("#owl-top-promotion").owlCarousel({

        //autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });
    $("#owl-top-good").owlCarousel({

        //autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 5,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 4]

    });
    var owlpriceshock = $("#owl-price-shock");
    owlpriceshock.owlCarousel({
        //autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });
    $(".next-price").click(function() {
        owlpriceshock.trigger('owl.next');
    });
    $(".prev-price").click(function() {
        owlpriceshock.trigger('owl.prev');
    });

    var owlbuy1 = $("#owl-buy1");
    owlbuy1.owlCarousel({
        autoPlay: 3000, 
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 4]

    });
    
    $(".btn1-next").click(function() {
        owlbuy1.trigger('owl.next');
    });
    $(".btn1-prev").click(function() {
        owlbuy1.trigger('owl.prev');
    });

    var owlbuy2 = $("#owl-buy2");
    owlbuy2.owlCarousel({
        autoPlay: 4000, 
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 4]
    });
    
    $(".btn2-next").click(function() {
        owlbuy2.trigger('owl.next');
    });
    $(".btn2-prev").click(function() {
        owlbuy2.trigger('owl.prev');
    });

    var owlbuy3 = $("#owl-buy3");
    owlbuy3.owlCarousel({
        //autoPlay: 4000, 
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1]
    });
    
    $(".btn3-next").click(function() {
        owlbuy3.trigger('owl.next');
    });
    $(".btn3-prev").click(function() {
        owlbuy3.trigger('owl.prev');
    });

    // choose file---
    $(".wrap_btn li:nth-child(1) a")
        .mouseenter(function() {
            $(this).find('i').removeClass("icon-browser");
            $(this).find('i').addClass("icon-browser-hover");
            $(this).css({ "background": "#2bc5f8", "color": "#fff" });
        })
        .mouseleave(function() {
            $(this).find('i').removeClass("icon-browser-hover");
            $(this).find('i').addClass("icon-browser");
            $(this).css({ "background": "#fff", "color": "#464646" });
        });
    $('.wrap_btn input[name="newfile"]').change(function() {
        var fileName = $(this).val();
        $(this).closest(".row").find(".file_name").text(fileName);
    });
    // Custom Navigation Events
    $(".next").click(function() {
        owl.trigger('owl.next');
        $(".next-pre .prev").css("display", "inline-block ");
        var $widthContainer = $(".container").width();

        var $widthNextPre = $(".next-pre").innerWidth();
        var $widthSlider = $widthContainer - $widthNextPre - 30;
        $(".slider").width($widthSlider);

    });
    $(".prev").click(function() {
        owl.trigger('owl.prev');
        $(".next-pre .next").css("display", "inline-block ");
        var $widthContainer = $(".container").width();

        var $widthNextPre = $(".next-pre").innerWidth();
        var $widthSlider = $widthContainer - $widthNextPre - 30;
        $(".slider").width($widthSlider);
    });

    $("header").mouseleave(function() {
        $(".sub-content").removeClass("active");
        $("header .item  a").css("border-bottom", "0");
    });

    $('.positionfixed2 .collapse').collapse();

});
// fixed when scroll===========

(function($) {
    var hoverAndClick = function() {
        var valueDataId = $(this).attr("data-id");
        var length = $(".menu-content .sub-content").length;
        $(".menu-content .sub-content").removeClass("active");
        $(".menu-content .sub-content").eq(valueDataId).addClass("active");
        $("header .item  a").css("border-bottom", "0");
        $(this).css("border-bottom", "3px solid #2bc5f8");
    };
     Site.publicMethod1();
    $("header .item  a").hover(hoverAndClick).click(hoverAndClick).focus(hoverAndClick);
    //Firefox
    var lastScrollTop = 0;

    $(window).on('scroll', function() {
        $("#collapseExample").addClass("collapse");
        $("#collapseExample").removeClass("in");
        // $(".humburger").addClass("collapsed");
        var st = $(this).scrollTop();
        /* console.log($(document).height());
         console.log($(window).height());
         console.log($(window).scrollTop());*/
        if ((st >= 70) && (st <= 1090)) {
            $("#collapseExample").addClass("collapse");
            $("#collapseExample").removeClass("in");
        }
        if ((st >= 990) && (st <= 1090)) {
            $("#first-header").css("display", "none");
            $("#collapse-scroll").css("display", "block");
        }
        if (st < 990) {
            $("#collapse-scroll").css("display", "none");
            $("#first-header").css("display", "block");
        }
        
        // collapse
         if (st > lastScrollTop) {
            if (st > 100) {
                $("header").addClass("positionfixed");
                
            } else {
                $("header").removeClass("positionfixed");
                $("#collapseExample").removeClass("collapse");
            }

            if ((st >= 70) && (st <= 1090)) {
                $("#collapseExample").addClass("collapse");
            }
            if (st > 100) {
                $("header").addClass("positionfixed2");
                $("#collapseExample").addClass("collapse");
            } else {
                $("header").removeClass("positionfixed2");
                $("#collapseExample").addClass("collapse");
            }

        } else {
            if ((st >= 70) && (st <= 1090)) {
                $("#collapseExample").addClass("collapse");
                $("header").removeClass("positionfixed2");
            }
            if (st < 1090) {
                $("#collapseExample").addClass("collapse");
                $("#collapseExample").addClass("in");
            }
        }
        var documentheight = $(document).height() - 83 - $(window).height();
        if (st > documentheight) {
            $(".group-mycheese").css("display", "block");
        } else {
            $(".group-mycheese").css("display", "none");
        }

        // remove margin
        if($("#collapseExample").hasClass("in")) {
            $(".banner").css("margin-top","47px");
        }
        else {
            $(".banner").css("margin-top","0");
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

})(jQuery);



/*var fixmeTop = $('.fixedright').offset().top;
var height  = $(".LeftCart").height()-450;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop && (currentScroll < height)) {
        $('.fixedright').addClass("fixed");
    } else {
        $('.fixedright').removeClass("fixed");
    }
});*/


// tabs show hide
jQuery(document).ready(function() {
    jQuery('.Block-Tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.Block-Tabs ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });    

});
// load images
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(200)
                .height(180);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
// ======== scroll with a=================
(function($, window, undefined) {
    $('ul.tab a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 117
                }, 1000);
                return false;
            }
        }
    });
}(jQuery, window));
