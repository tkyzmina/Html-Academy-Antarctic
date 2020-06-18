'use strict';

(function () {
  var menuBtn = document.querySelector('.page-header__menu-toggle');
  var menu = document.querySelector('.page-header__nav');

  menuBtn.onclick = function () {
    menu.classList.add('page-header__nav--opened');

  };

})();
