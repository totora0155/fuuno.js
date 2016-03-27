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
    var div = document.createElement('div');
    el.parentNode.insertBefore(div, el);
    var parent = document.getElementById('wrapper')
    parent.addEventListener('scroll', function(e) {
      var offset = el.clientHeight - innerHeight;
      offset = offset < 0 && 0;
      if (parent.scrollTop > offset) {
        var test = -300;
        div.style.height = parent.scrollTop - offset + test + 'px';
      } else {
        div.style.height = 0;
      }
    });
  }

  return foono;

}));