export default function foono(els) {
  if (getComputedStyle(document.body).overflow !== 'hidden') {
    document.body.style.overflow = 'hidden';
  }

  var body = document.querySelector('[data-fuuno-body]');
  if (body) {
    body.style.width = innerWidth + 'px';
    body.style.height = innerHeight + 'px';
    body.style.overflow = 'auto';
  } else {
    var msg = 'Add [data-fuuno-body] to a <element> instead of the <body>';
    console.warning(msg);
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
