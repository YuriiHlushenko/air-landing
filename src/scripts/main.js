'use strict';

window.onload = function() {
  document.getElementById('form').addEventListener(
    'submit', stopDefAction, false);

  function slider() {
    const images = document.querySelectorAll(
      '.slider .slider-line div');
    const sliderLine = document.querySelector(
      '.slider .slider-line');
    let count = 0;
    let width;

    function init() {
      width = document.querySelector('.slider').offsetWidth;
      sliderLine.style.width = width * images.length + 'px';

      images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
      });

      sliderLine.style.transform = 'none';
    }

    init();
    window.addEventListener('resize', init);

    document.querySelector('.slider__button--next').addEventListener(
      'click', function() {
        count++;

        if (count >= images.length) {
          count = 0;
        }
        rollSlider();
      });

    document.querySelector('.slider__button--prev').addEventListener(
      'click', function() {
        count--;

        if (count < 0) {
          count = images.length - 1;
        }
        rollSlider();
      });

    function rollSlider() {
      sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
  }

  slider();

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('page__body--with-menu');
    } else {
      document.body.classList.remove('page__body--with-menu');
    }
  });
};

function stopDefAction(evt) {
  evt.preventDefault();
  document.form.reset();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
