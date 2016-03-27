/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/fuuno.js
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.fuuno = factory());
}(this, function () { 'use strict';

  function foono(els) {
    var arr = Array.prototype.slice.call(els);
    for (var i = 0, len = arr.length; i < len; i++) {
      fix(arr[i]);
    }
  }

  function fix(el) {
    var parent = getScrollElement(el);
    var height = el.clientHeight;

    parent.addEventListener('scroll', function (e) {
      var scrollTop = parent.scrollY || parent.scrollTop;
      var clientHeight = parent.scrollY ? innerHeight : parent.clientHeight;
      requestAnimationFrame(function() {
        if (scrollTop > (height - clientHeight)) {
          el.style.position = 'absolute';
          el.style.top = scrollTop - (height - clientHeight) + 'px';
        } else {
          el.style.top = 0;
        }
      });
    });
  }

  function getScrollElement(el) {
    var parent = el.parentElement;
    while (parent.tagName !== 'BODY') {
      if (parent.scrollHeight !== parent.clientHeight) {
        break;
      } else {
        if (parent.clientHeight === document.body.clientHeight) {
          parent = window;
          break;
        }
      }
      parent = parent.parentElement;
    }
    return parent;
  }

  return foono;

}));