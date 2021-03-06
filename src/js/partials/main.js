$(document).ready(function(){
    $('.burger').click(function(){
        $(this).toggleClass('is--active')
        $('body').toggleClass('is--unscrolble')
        $('.header-menu').toggleClass('is--active')
    })

    $('.f-step__types-input').click(function(){
        $(this).siblings('.f-step__types-content').slideToggle(200)
    })

    $('.f-step__types-item').click(function(){
        var parent = $(this).parents('.f-step__types-content')
        var fStepTypesItemValue = $(this).text()
        parent.children('.f-step__types-item').removeClass('is--active')
        $(this).addClass('is--active')
        parent.siblings('.f-step__types-input').html(fStepTypesItemValue)
        parent.slideUp(200)
    })

    $('.f-step__search-input').click(function(){
        if(!$(this).hasClass('is--active')){
            $(this).addClass('is--active')
            $('.f-step__search-content').slideDown(200)
        } else{
            $(this).removeClass('is--active')
        }
    })

    $('.f-step__search-item').click(function(e){
        var fStepTypesItemValue = $(this).text()
        $('.f-step__search-content').slideUp(200) 
        $('.f-step__search-input').val(fStepTypesItemValue)
    })

    $('.actual-slider').slick({
        infinite: false,
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4 ,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    })

    $('.resort__slider').slick({
      infinite: false,
      arrows: true,
      dots: false,
      slidesToShow: 1,
      variableWidth: true,
  })

    $('.actual-card__slider').slick({
        infinite: false,
        arrows: false,
        dots: true
    })

    $('.actual-card__favorite').click(function(){
        $(this).toggleClass('is--active')
    })

    $('.filters--type-dropdown .f-step__types-input').click(function(){
    	let drop = $(this).siblings('.filters__drop-content');
			$('.filters__drop-content').not(drop).css('z-index', 2).slideUp();
			$('.f-step__types-content').slideUp();
			drop.css('z-index', 3).slideToggle();
    })

    $('.imap__content-btn').click(function(){
      $('.imap__content').toggleClass('is--active')
    });

    $('.imap__content-filter').click(function(e){
      e.preventDefault;
      $(this).toggleClass('is--active')
    })

    $('.card-content__slider-main').slick({
      infinite:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.card-content__slider-sub'
    })

    $('.card-content__slider-sub').slick({
      infinite:false,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.card-content__slider-main',
      arrows: false,
      focusOnSelect: true
    })

    const items = $('.card-content__slider-main__item').length
    const alItems = $('.card-content__slider-dote__last')
    alItems.html(items)

    $('.card-content__slider-main').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      const currentItems = $('.card-content__slider-dote__first')
      currentItems.html(nextSlide + 1)
    });

    $('.next-btn').click(function(e){
      e.preventDefault()
      $(this).hide()
      $(this).siblings('.card-content__characteristics-desc-hide').show()
    })

 
    $('.paper-list__link').click(function(e){
        e.preventDefault
        $('.paper-list__link').removeClass('is--active')
        $(this).addClass('is--active')
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - $('.header').innerHeight()}, 1000);
        return false;
    });

    $('.scroll-top-btn').click(function(e){
      e.preventDefault
      $('html, body').animate({scrollTop: $('.wrapper').offset().top}, 1000);
      return false;
  });



  $(window).scroll(function(){
      if($('.wrapper').hasClass('paper-page')){
        let pos1 = $('._introduction').offset().top - 2*$('.header').innerHeight()
        let pos2 = $('._passport').offset().top - 2*$('.header').innerHeight()
        let pos3 = $('._info').offset().top - 2*$('.header').innerHeight()
        let pos4 = $('._description').offset().top - 2*$('.header').innerHeight()
        if (pos1 <= $(window).scrollTop()){
          $('.paper-list__link').removeClass('is--active')
          $('.paper-list__link[href="._introduction"]').addClass('is--active')
        }
        if (pos2 <= $(window).scrollTop()){
          $('.paper-list__link').removeClass('is--active')
          $('.paper-list__link[href="._passport"]').addClass('is--active')
        }
        if (pos3 <= $(window).scrollTop()){
          $('.paper-list__link').removeClass('is--active')
          $('.paper-list__link[href="._info"]').addClass('is--active')
        }
        if (pos4 <= $(window).scrollTop()){
          $('.paper-list__link').removeClass('is--active')
          $('.paper-list__link[href="._description"]').addClass('is--active')
        }
      }
  })

  $('.papers-menu__link--more').click(function(e){
    e.preventDefault
    $(this).toggleClass('is--down')
    $('.papers-menu__item.is--disabled').slideToggle(200)
  })
})

if($('.wrapper').hasClass('search-page')){
  ymaps.ready(function () {
    var myMap = new ymaps.Map('imap', {
            center: [37.978620, -0.683537],
            zoom: 12,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
  
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '?????????????????????? ???????????? ??????????'
        }, {
            // ??????????.
            // ???????????????????? ?????????????? ???????????? ?????? ????????????.
            iconLayout: 'default#image',
            // ???????? ?????????????????????? ???????????? ??????????.
            iconImageHref: 'assets/images/svg/sprite.svg#imap-icon',
            // ?????????????? ??????????.
            iconImageSize: [100, 100],
            // ???????????????? ???????????? ???????????????? ???????? ???????????? ????????????????????????
            // ???? "??????????" (?????????? ????????????????).
            iconImageOffset: [-50, -50]
        })
  
    myMap.geoObjects
        .add(myPlacemark)
  });
}

if($('.wrapper').hasClass('card-page')){
  ymaps.ready(function () {
    var myMapC = new ymaps.Map('cmap', {
            center: [37.978620, -0.683537],
            zoom: 12,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
  
        myPlacemarkC = new ymaps.Placemark(myMapC.getCenter(), {
            hintContent: '?????????????????????? ???????????? ??????????'
        }, {
            // ??????????.
            // ???????????????????? ?????????????? ???????????? ?????? ????????????.
            iconLayout: 'default#image',
            // ???????? ?????????????????????? ???????????? ??????????.
            iconImageHref: 'assets/images/svg/sprite.svg#cmap-icon',
            // ?????????????? ??????????.
            iconImageSize: [150, 150],
            // ???????????????? ???????????? ???????????????? ???????? ???????????? ????????????????????????
            // ???? "??????????" (?????????? ????????????????).
            iconImageOffset: [-75, -150]
        })
  
    myMapC.geoObjects
        .add(myPlacemarkC)
  });
}

if($('.wrapper').hasClass('contacts-page')){
  ymaps.ready(function () {
    var myMapCo = new ymaps.Map('contacts__map', {
            center: [37.978620, -0.683537],
            zoom: 12,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        })
      myMapCo.geoObjects.add(new ymaps.Placemark([37.978620, -0.683537], {
    }, {
        preset: 'islands#icon',
        iconColor: '#D81F1B'
    }))
  });
}

