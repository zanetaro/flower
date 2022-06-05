$(function () {

  $('.header__nav').on('click', function () {
    $('nav').slideToggle();
    $(this).toggleClass('active');
  });

  $('.out').on('click', function () {
    $('nav').fadeOut();

    if ($('.header__nav').hasClass('active')) {
      $('.header__nav').removeClass('active');
    };
  });

  $('.header__logo a').on('click', function () {
    const display = $('nav').css('display')

    if (display === "block") {
      $('nav').fadeOut();
    };

    if ($('.header__nav').hasClass('active')) {
      $('.header__nav').removeClass('active');
    };
  });

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    mv_scale(scroll);
  });

  $(window).on('load resize', function () {
    let scroll = $(window).scrollTop();
    mv_scale(scroll);
  });

  function mv_scale(scroll) {
    if (window.innerWidth > 900) {
      $('.main-v img').css({ 'width': 100 / 3 + scroll / 10 + '%' })
    } else {
      $('.main-v img').css({ 'width': 100 - scroll / 10 + '%' })
    }
  };

  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();


    $('.fadeIn').each(function () {
      const targetPosition = $(this).offset().top;

      if (window.innerWidth > 900) {
        if (scroll > targetPosition - windowHeight + 150) {
          $(this).attr('id', 'show');
        } else {
          $(this).removeAttr('id', 'show');
        };
      } else {
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).attr('id', 'show');
        } else {
          $(this).removeAttr('id', 'show');
        };
      };
    });


    $('.header').each(function () {
      const targetPosition = $('.info .title').offset().top;
      if (scroll > targetPosition - windowHeight + 50) {
        $(this).fadeIn();
      } else {
        $(this).fadeOut();
      };
    });

    $('.side-bar').each(function () {
      const targetGalleryP = $('.gallery .title').offset().top;
      const targetAccessP = $('.access .title').offset().top;

      if (scroll > targetGalleryP - windowHeight &&
        scroll < targetAccessP - windowHeight) {
        $(this).addClass('side-bar-show');
      } else {
        $(this).removeClass('side-bar-show');
      };
    });

    $('.bg').each(function () {
      const targetPosition = $('.contact .title').offset().top;
      const targetAccessP = $('.access').offset().top;

      if (scroll > targetAccessP - windowHeight + 600 &&
        scroll < targetPosition - windowHeight) {
        $(this).fadeIn('slow');
      } else {
        $(this).fadeOut();
      };
    });

  });

  $('a[href^="#"]').click(function () {
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = -320;
    // スクロールの速度（ミリ秒）
    var speed = 400;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href = $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });

});