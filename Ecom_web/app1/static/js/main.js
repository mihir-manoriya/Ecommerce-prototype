$(function() {
    
    "use strict";
    
    /*=============================================
    =                Prealoder                  =
    =============================================*/
    
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });
    
    /*=====  End of Prealoder  ======*/

    
    /*=============================================
    =                   Sticky                   =
    =============================================*/
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 850) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar-area .menu-items").fadeIn(0);
            $(".navbar-inner .menu-items").fadeOut(0);
        } else{
            $(".navbar-area").addClass("sticky");
            $(".navbar-area .menu-items").fadeOut(0);
            $(".navbar-inner .menu-items").fadeOut(0);
        }
    });

    /*=====  End of Sticky  ======*/   
    
    
    /*=============================================
    =            Bootstrap dropdown               =
    =============================================*/

    // Add slideDown animation to Bootstrap dropdown when expanding.

    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
  
    $('.cart-dropdown').hover(function() {
        $('.dropdown-menu', this).stop(true, true).slideDown(500);
        $(this).addClass('open');
    }, function() {
        $('.dropdown-menu', this).stop(true, true).slideUp(500);
        $(this).removeClass('open');
    });

    /*=====  End of Bootstrap dropdown ======*/
    

    /*=============================================
    =               Select Picker                 =
    =============================================*/

    $('.selectpicker').selectpicker({

    });

    /*=====  End of Select Picker ======*/
    

    /*=============================================
    =              Navbar Category                =
    =============================================*/

    $('.navbar-category .category-title, .navbar-mobile-category .category-title').on('click', function(event) {
        $('.navbar-category .menu-items, .navbar-mobile-category .menu-items').slideToggle(500);
    });
    
    $('.menu-expand').each(function(){
        var $ul = $(this),
            $lis = $ul.find('.menu-item:gt(9)'),
            isExpanded = $ul.hasClass('expanded'); 
        $lis[isExpanded ? 'show' : 'hide']();

        if($lis.length > 0){
            $ul
                .append($('<li class="expand">' + (isExpanded ? '<a href="javascript:;"><span><i class="ion-android-remove"></i>Close Categories</span></a>' : '<a href="javascript:;"><span><i class="ion-android-add"></i>More Categories</span></a>') + '</li>')
                .on('click', function(event){
                    var isExpanded = $ul.hasClass('expanded');
                    event.preventDefault();
                    $(this).html(isExpanded ? '<a href="javascript:;"><span><i class="ion-android-add"></i>More Categories</span></a>' : '<a href="javascript:;"><span><i class="ion-android-remove"></i>Close Categories</span></a>');
                    $ul.toggleClass('expanded');
                    $lis.toggle(300);
                }));
        }
    });

    $( ".mega-sub-menu" ).parent( "li" ).css( "position", "static" );
    

    /*=====  End of Navbar Category ======*/


    /*=============================================
    =                Mobile Menu                  =
    =============================================*/

    $('.navbar-mobile-open').on('click', function(){
        $('.navbar-mobile-menu').addClass('open')
        $('.overlay').addClass('open')
    });
    
    $('.close-navbar-mobile').on('click', function(){
        $('.navbar-mobile-menu').removeClass('open')
        $('.overlay').removeClass('open')
    });
    
    $('.overlay').on('click', function(){
        $('.navbar-mobile-menu').removeClass('open')
        $('.overlay').removeClass('open')
    });
        
    
    /*Variables*/
    var $offCanvasNav = $('.navbar-mobile-wrapper, .navbar-mobile-category'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.navbar-mega-sub-menu, .sub-menu, .mega-sub-menu, .mega-item ');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active-expand');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active-expand');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.closest('li').siblings('li').removeClass('active-expand');
                $this.siblings('ul').slideDown();
            }
        }
    });
    
    $( ".mega-sub-menu, .sub-menu, .navbar-mega-sub-menu, .mega-item" ).parent( "li" ).addClass( "menu-item-has-children" );

    /*=====  End of Navbar Category ======*/


    /*=============================================
    =                 Slick Slider                =
    =============================================*/
    
    function mainSlider() {
            
        var BasicSlider = $('.slider-active');
            
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
            
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
            
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            pauseOnHover: false,
            dots: true,
            fade: true,
			arrows: false,
            prevArrow:'<span class="prev"><i class="fal fa-chevron-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-chevron-right"></i></span>',
            responsive: [
                { breakpoint: 767, settings: {} }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    /*=====  End of Slick Slider  ======*/
    

    /*=============================================
    =                 Countdown                   =
    =============================================*/

    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
          $this.html(event.strftime('<div class="countdown-items"><div class="countdown-col"><div class="single-countdown-item item-bg"><span class="count">%D</span><span class="value">Days</span></div></div><div class="countdown-col"><div class="single-countdown-item"><span class="count">%H</span><span class="value">Days</span></div></div><div class="countdown-col"><div class="single-countdown-item"><span class="count">%M</span><span class="value">Days</span></div></div><div class="countdown-col"><div class="single-countdown-item"><span class="count">%S</span><span class="value">Days</span></div></div></div>'));
        });
    });

    /*=====  End of Slick Slider  ======*/
    

    /*=============================================
    =             Special Products                =
    =============================================*/

    $('.special-products').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="ion-ios-arrow-thin-left"></i></span>',
        nextArrow: '<span class="next"><i class="ion-ios-arrow-thin-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,        
    });

    /*=====  End of Slick Slider  ======*/


    /*=============================================
    =             Special Products                =
    =============================================*/

    $('.special-products-2').slick({
      dots: false,
      infinite: true,
      arrows: true,
      prevArrow:'<span class="prev"><i class="ion-ios-arrow-thin-left"></i></span>',
      nextArrow: '<span class="next"><i class="ion-ios-arrow-thin-right"></i></span>',
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,      
      responsive: [            
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        }
    ]  
  });

  /*=====  End of Slick Slider  ======*/
    

    /*=============================================
    =              Product Active                 =
    =============================================*/

    $('.product-active').slick({
        dots: false,
        infinite: false,
        arrows: true,
        prevArrow:'<span class="prev"><i class="ion-ios-arrow-thin-left"></i></span>',
        nextArrow: '<span class="next"><i class="ion-ios-arrow-thin-right"></i></span>',
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [            
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                  arrows: false,
              }
            }
        ]
    });

    $('.product-active-2').slick({
        dots: false,
        infinite: false,
        arrows: true,
        prevArrow:'<span class="prev"><i class="ion-ios-arrow-thin-left"></i></span>',
        nextArrow: '<span class="next"><i class="ion-ios-arrow-thin-right"></i></span>',
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [            
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                  arrows: false,
              }
            }
        ]
    });

    $('.product-active-3').slick({
      dots: false,
      infinite: false,
      arrows: true,
      prevArrow:'<span class="prev"><i class="ion-ios-arrow-thin-left"></i></span>',
      nextArrow: '<span class="next"><i class="ion-ios-arrow-thin-right"></i></span>',
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [            
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
                arrows: false,
            }
          }
      ]
  });

    /*=====  End of Slick Slider  ======*/
    

    /*=============================================
    =               Brand Active                  =
    =============================================*/

    $('.brand-active').slick({
        dots: false,
        infinite: true,
        arrows: false,
        prevArrow:'<span class="prev"><i class="ion-ios-arrow-thin-left"></i></span>',
        nextArrow: '<span class="next"><i class="ion-ios-arrow-thin-right"></i></span>',
        autoplay: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [            
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 6,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                  arrows: false,
              }
            }
        ]
    });


    $('.brand-active-2').slick({
        dots: false,
        infinite: true,
        arrows: false,
        prevArrow:'<span class="prev"><i class="ion-ios-arrow-thin-left"></i></span>',
        nextArrow: '<span class="next"><i class="ion-ios-arrow-thin-right"></i></span>',
        autoplay: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [            
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                  arrows: false,
              }
            }
        ]
    });

    /*=====  End of Slick Slider  ======*/
    

    /*=============================================
    =              Product Gallery                =
    =============================================*/
    
    $('.product-arrivals-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        dots: false,
        asNavFor: '.product-thumb',
        speed: 800,
        swipe: false,
    });
    
    $('.product-thumb').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-arrivals-items',
        dots: false,
        focusOnSelect: true,
        infinite: false,
        vertical: true,
        speed: 800,
        arrows: true,
        prevArrow:'<span class="prev"><i class="ion-ios-arrow-thin-left"></i></span>',
        nextArrow: '<span class="next"><i class="ion-ios-arrow-thin-right"></i></span>',
    });

    /*=====  End of Slick Slider  ======*/
    

    /*=============================================
    =           Product Quick View                =
    =============================================*/
    
    $('.quick-view-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.quick-view-thumb',
        speed: 400,
    });
    
    $('.quick-view-thumb').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.quick-view-image',
        dots: false,
        focusOnSelect: true,
        speed: 400,
        arrows: true,
        prevArrow:'<span class="prev"><i class="ion-ios-arrow-thin-left"></i></span>',
        nextArrow: '<span class="next"><i class="ion-ios-arrow-thin-right"></i></span>',
    });

    /*=====  End of Product Quick View  ======*/

    /*=============================================
    =            Shop Single View                 =
    =============================================*/
    
    $('.view-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.shop-thumb',
        speed: 400,
    });
    
    $('.shop-thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.view-image',
        dots: false,
        focusOnSelect: true,
        speed: 400,
        arrows: true,
        prevArrow:'<span class="prev"><i class="ion-ios-arrow-thin-left"></i></span>',
        nextArrow: '<span class="next"><i class="ion-ios-arrow-thin-right"></i></span>',
    });

    /*=====  End of Product Quick View  ======*/  

    /*=============================================
    =           Mini Product Active               =
    =============================================*/

    $('.mini-product-active').slick({
      dots: false,
      infinite: true,
      arrows: true,
      prevArrow:'<span class="prev"><i class="ion-ios-arrow-thin-left"></i></span>',
      nextArrow: '<span class="next"><i class="ion-ios-arrow-thin-right"></i></span>',
      autoplay: false,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
    });


    $('.mini-product-active-2').slick({
      dots: false,
      infinite: true,
      arrows: false,
      prevArrow:'<span class="prev"><i class="ion-ios-arrow-thin-left"></i></span>',
      nextArrow: '<span class="next"><i class="ion-ios-arrow-thin-right"></i></span>',
      autoplay: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

  /*=====  End of Slick Slider  ======*/

    /*=============================================
    =             Blog Post Active                =
    =============================================*/

    $('.blog-active').slick({
      dots: false,
      infinite: true,
      arrows: true,
      prevArrow:'<span class="prev"><i class="ion-ios-arrow-thin-left"></i></span>',
      nextArrow: '<span class="next"><i class="ion-ios-arrow-thin-right"></i></span>',
      autoplay: false,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

  /*=====  End of Slick Slider  ======*/

    /*=============================================
    =             Gallery Active                  =
    =============================================*/

    $('.gallery-active').slick({
      dots: false,
      infinite: true,
      arrows: true,
      prevArrow:'<span class="prev"><i class="ion-ios-arrow-thin-left"></i></span>',
      nextArrow: '<span class="next"><i class="ion-ios-arrow-thin-right"></i></span>',
      autoplay: false,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    /*=====  End of Slick Slider  ======*/
    

    /*=============================================
    =            product quantity                 =
    =============================================*/

    $('.add').on('click', function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').on('click', function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });

    /*=====  End of product quantity  ======*/
    

    /*=============================================
    =              Magnific Popup                 =
    =============================================*/

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        }
      });

    $('a.btn-gallery').on('click', function(event) {
      event.preventDefault();
      
      var gallery = $(this).attr('href');
      
      $(gallery).magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {
          enabled: true
        }
      }).magnificPopup('open');
    });

    /*=====  End of Magnific Popup ======*/


    /*=============================================
    =           Product Color Active               =
    =============================================*/

    $('.product-color li span').each(function() {
        var get_color = $(this).attr('data-color');
        $(this).css("background-color", get_color);
    });
      
    $('.product-color li').on("click", function() {
        $(this).siblings(this).removeClass('active').end().addClass('active');
    });
      
    /*=====  End of Product Size Active ======*/

    /*=============================================
    =         Product Rating Active               =
    =============================================*/

    $('.rating-star a').each(function() {
      var get_color = $(this).attr('data-color');
      $(this).css("background-color", get_color);
    });
      
    $('.rating-star a').on("click", function() {
      $(this).siblings(this).removeClass('active').end().addClass('active');
    });
      
    /*=====  End of Product Size Active ======*/


    /*=============================================
    =                Price Range                  =
    =============================================*/
    
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 3900,
        values: [ 0, 3900 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );

    /*=====  End of Price Range ======*/


    /*=============================================
    =           Product Color Active               =
    =============================================*/

    $('.sidebar-color-items li .sidebar-checkbox label span').each(function() {
      var get_color = $(this).attr('data-color');
      $(this).css("background-color", get_color);
      });
      
    $('.sidebar-color-items li').on("click", function() {
      $(this).siblings(this).removeClass('active').end().addClass('active');
      });
      
    /*=====  End of Product Size Active ======*/


    /*=============================================
    =                 Select 2                     =
    =============================================*/

    $(".select2").select2({
        tags: true
    });    

    /*=====  End of select2  ======*/

     /*=============================================
    =        Checkout Account Form Toggle         =
    =============================================*/
    
    $('#account').on('click', function () {
      if ($('#account:checked').length > 0) {
        $('.checkout-account').slideDown();
      } else {
        $('.checkout-account').slideUp();
      }
    });
      
    /*=====  End of Shipping Form Toggle  ======*/


    /*=============================================
    =       Checkout Shipping Form Toggle         =
    =============================================*/
    
    $('#shipping').on('click', function () {
      if ($('#shipping:checked').length > 0) {
        $('.checkout-shipping').slideDown();
      } else {
        $('.checkout-shipping').slideUp();
      }
    });
    
    /*=====  End of Shipping Form Toggle  ======*/


    /*=============================================
    =         Payment  Method Select              =
    =============================================*/

    var checked = $('.payment-radio input:checked')
    if (checked) {
        $(checked).siblings('.payment-details').slideDown(500);
    };
    $('.payment-radio input').on('change', function() {
        $('.payment-details').slideUp(500);
        $(this).siblings('.payment-details').slideToggle(500);
    });

    /*=====  End of Payment  Method Select ======*/
       
    
    /*=============================================
    =                Back to top                  =
    =============================================*/

    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    /*=====  End of Back to top ======*/    
    
    
});