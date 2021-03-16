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
})

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