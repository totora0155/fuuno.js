export default function foono(els) {
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
