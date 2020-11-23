(function ($) {
  var container;
  // 颜色
  var colors = ['#207de0', '#42baec', '#e3e197', '#6cde47', '#ecc733'];
  //创建许愿便笺
  var createItem = function (name, content) {
    var color = colors[parseInt (Math.random () * 5)];
    $ ('<div class="item"><p>' + name + '：</p><p>' + content + '</p><a href="#">关闭</a></div>').css ({'background': color}).appendTo (container).drag ();
  };
  // 拖拽方法
  $.fn.drag = function () {
    var $this = $ (this);
    var parent = $this.parent ();
    var pw = parent.width ();
    var ph = parent.height ();
    var thisWidth = $this.width () + parseInt ($this.css ('padding-left'), 10) + parseInt ($this.css ('padding-right'), 10);
    var thisHeight = $this.height () + parseInt ($this.css ('padding-top'), 10) + parseInt ($this.css ('padding-bottom'), 10);
    var x, y, positionX, positionY;
    var isDown = false;
    var randY = parseInt (Math.random () * (ph - thisHeight), 10);
    var randX = parseInt (Math.random () * (pw - thisWidth), 10);
    parent.css ({
      "position": "relative",
      "overflow": "hidden"
    });
    $this.css ({
      "cursor": "move",
      "position": "absolute"
    }).css ({
      top: randY,
      left: randX
    }).mousedown (function (e) {
      parent.children ().css ({
        "zIndex": "0"
      });
      $this.css ({
        "zIndex": "1"
      });
      isDown = true;
      x = e.pageX;
      y = e.pageY;
      positionX = $this.position ().left;
      positionY = $this.position ().top;
      return false;
    });
    $ (document).mouseup (function (e) {
      isDown = false;
    }).mousemove (function (e) {
      var xPage = e.pageX;
      var moveX = positionX + xPage - x;
      var yPage = e.pageY;
      var moveY = positionY + yPage - y;
      if (isDown) {
        $this.css ({
          "left": moveX,
          "top": moveY
        });
      } else {
        return;
      }
      if (moveX < 0) {
        $this.css ({
          "left": "0"
        });
      }
      if (moveX > (pw - thisWidth)) {
        $this.css ({
          "left": pw - thisWidth
        });
      }
      if (moveY < 0) {
        $this.css ({
          "top": "0"
        });
      }
      if (moveY > (ph - thisHeight)) {
        $this.css ({
          "top": ph - thisHeight
        });
      }
    });
  };
  var init = function () {
    container = $ ('#container');
    // 绑定关闭事件
    container.on ('click', 'a', function () {
      $ (this).parent ().remove ();
    });
    container.height ($ (window).height () - 280);
    var list = container.attr ('data-list');
    $.each (JSON.parse(list), function (i, v) {
      createItem (v.name, v.content);
    });
  };
  $ (function () {
    init ();
  });
}) (jQuery);