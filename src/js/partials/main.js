$(document).ready(function(){
    $('.burger').click(function(){
        $(this).toggleClass('is--active')
        $('body').toggleClass('is--unscrolble')
        $('.header-menu').toggleClass('is--active')
    })

    $('.f-step__types-input').click(function(){
        $('.f-step__types-content').slideToggle(200)
    })

    $('.f-step__types-item').click(function(){
        var fStepTypesItemValue = $(this).text()
        $('.f-step__types-item').removeClass('is--active')
        $(this).addClass('is--active')
        $('.f-step__types-input').html(fStepTypesItemValue)
        $('.f-step__types-content').slideUp(200)
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
})