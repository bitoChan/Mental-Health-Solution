$(document).ready(function() {
    var score = 0; // 游戏得分
  
    // 生成随机数的函数，可修改min和max值以改变生成的随机数范围
    function random(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
  
    // 控制箱子降落时的速度和大小，可修改以下参数以调整速度和大小的范围
    function dropBox() {
      var length = random(100, $(".game").width() - 100); // 箱子初始位置，可调整100至其他值以改变范围
      var velocity = random(5000, 7000); // 降落速度
      var size = random(100, 150); // 箱子大小
      var thisBox = $("<div/>", {
        class: "box",
        style: "width:" + size + "px; height:" + size + "px; left:" + length + "px; transition: transform " + velocity + "ms linear;"
      });
  
      // 根据随机数设置背景图片，可替换URL以改变图片
      thisBox.data("test", Math.round(Math.random()));
      if (thisBox.data("test")) {
        thisBox.css({
          background: "url('http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/128/Frankenstein-icon.png')",
          "background-size": "contain"
        });
      } else {
        thisBox.css({
          background: "url('http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/128/Scream-icon.png')",
          "background-size": "contain"
        });
      }
  
      $(".game").append(thisBox);
  
      // 设置箱子开始移动前的延迟时间，可修改0和5000以调整延迟时间
      setTimeout(function () {
        thisBox.addClass("move");
      }, random(0, 5000));
  
      thisBox.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (event) {
        $(this).remove();
      });
    }
  
    // 控制屏幕上同时出现的箱子数量，可修改6以控制数量
    $(document).on("click", ".box", function () {
      if ($(this).data("test")) {
        score += 1;
      }
      $(".score").html(score);
      $(this).remove();
    });
  
    var runGame = setInterval(function () {
      for (i = 0; i < 3; i++) { // 同时出现的箱子数量，可修改6来控制
        dropBox();
      }
    }, 2000); // 游戏循环的间隔时间，可修改5000来调整间隔
  
    // 倒计时时间设置，可修改90秒以设置不同的游戏时长
    function countdown() {
      var seconds = 90; // 倒计时秒数，可根据需要修改
      function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = (seconds < 10 ? "0" : "") + String(seconds) + "S";
        if (seconds > 0) {
          setTimeout(tick, 1000);
        } else {
          alert("Game over");
          clearInterval(runGame);
        }
      }
      tick();
    }
  
    countdown();
  });
  