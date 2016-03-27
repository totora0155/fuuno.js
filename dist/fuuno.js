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
    if (getComputedStyle(document.body).overflow !== 'hidden') {
      document.body.style.overflow = 'hidden';
    }

    var arr = Array.prototype.slice.call(els);
    for (var i = 0, len = arr.length; i < len; i++) {
      fix(arr[i]);
    }
  }

  function fix(el) {
    var parent = el.parentElement.parentElement;
    var cushion = document.createElement('div');
    var offsetHeight = calcOffsetHeight(el, parent.clientHeight);
    var maxScrollHeight = parent.scrollHeight - offsetHeight;

    el.parentNode.insertBefore(cushion, el);

    parent.addEventListener('scroll', function(e) {
      if (parent.scrollTop > offsetHeight) {
        if (parent.scrollTop > maxScrollHeight) {
          cushion.style.height =  maxScrollHeight + 'px';
        } else {
          cushion.style.height = parent.scrollTop - offsetHeight + 'px';
        }
      } else {
        cushion.style.height = 0;
      }
    });
  }

  function calcOffsetHeight(el, parentHeight) {
    var offsetHeight = null;
    if (el.scrollHeight > parentHeight) {
      offsetHeight = el.scrollHeight - parentHeight;
    } else {
      offsetHeight = 0;
    }
    return offsetHeight;
  }

  return foono;

}));