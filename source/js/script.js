'use strict';

(function () {
  var menu = document.querySelector('.page-header__nav');
  var menuOpenBtn = document.querySelector('.page-header__menu-toggle');
  var menuCloseBtn = menu.querySelector('.nav__close');


  menuOpenBtn.onclick = function () {
    menu.classList.add('page-header__nav--opened');

  };

  menuCloseBtn.onclick = function () {
    menu.classList.remove('page-header__nav--opened');
  };
})();
