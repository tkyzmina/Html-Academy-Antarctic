'use strict';

(function () {
  var menu = document.querySelector('.page-header__nav');
  var menuOpenBtn = document.querySelector('.page-header__menu-toggle');
  var menuCloseBtn = menu.querySelector('.nav__close');
  var noJs = document.querySelector('.page-header--no-js');
  var nameField = document.querySelector('input[name = "user-name"]');
  var onlyLetters = /^[A-Za-zА-Яа-я]*$/;

  if (noJs) {
    noJs.classList.remove('page-header--no-js');
    menu.classList.remove('page-header__nav--opened');

    menuOpenBtn.onclick = function () {
      menu.classList.add('page-header__nav--opened');
    };

    menuCloseBtn.onclick = function () {
      menu.classList.remove('page-header__nav--opened');
    };
  }

  nameField.oninput = function () {
    var validationMessage;
    var name = document.querySelector('input[name = "user-name"]').value;
    if (!onlyLetters.test(name)) {
      validationMessage = 'недопустимые символы! допустимы только буквы';
    }
    if (validationMessage) {
      nameField.setCustomValidity(validationMessage);
      nameField.style.border = '2px solid red';
    } else {
      nameField.setCustomValidity('');
      nameField.style.border = '';
    }
  };
})();
