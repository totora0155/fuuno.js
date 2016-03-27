export default function foono(els) {
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
  // var parent = getScrollElement(el);
  // var height = el.clientHeight;
  //
  // parent.addEventListener('scroll', function (e) {
  //   var scrollTop = parent.scrollY || parent.scrollTop;
  //   var clientHeight = parent.scrollY ? innerHeight : parent.clientHeight;
  //   requestAnimationFrame(function() {
  //     if (scrollTop > (height - clientHeight)) {
  //       el.style.position = 'absolute';
  //       el.style.top = scrollTop - (height - clientHeight) + 'px';
  //     } else {
  //       el.style.top = 0;
  //     }
  //   });
  // });
// }

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
