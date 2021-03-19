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

    $('.filters__more .f-step__types-input').click(function(){
      $('.filters__drop-content').slideToggle()
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

 
    $('.anchor').click(function(e){
        e.preventDefault
        $('.paper-list__link').removeClass('is--active')
        $(this).addClass('is--active')
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - $('.header').innerHeight()}, 1000);
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
})

if($('.wrapper').hasClass('search-page')){
  ymaps.ready(function () {
    var myMap = new ymaps.Map('imap', {
            center: [55.751574, 37.573856],
            zoom: 12,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
  
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'assets/images/svg/sprite.svg#imap-icon',
            // Размеры метки.
            iconImageSize: [100, 100],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-50, -50]
        })
  
    myMap.geoObjects
        .add(myPlacemark)
  });
}

if($('.wrapper').hasClass('card-page')){
  ymaps.ready(function () {
    var myMapC = new ymaps.Map('cmap', {
            center: [55.751574, 37.573856],
            zoom: 12,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
  
        myPlacemarkC = new ymaps.Placemark(myMapC.getCenter(), {
            hintContent: 'Собственный значок метки'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'assets/images/svg/sprite.svg#cmap-icon',
            // Размеры метки.
            iconImageSize: [150, 150],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-75, -150]
        })
  
    myMapC.geoObjects
        .add(myPlacemarkC)
  });
}