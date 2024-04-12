$(document).ready(function() {
  var score = 0; // 游戏得分

  // 加分图片URLs,圖片來源皆來自いらすとや插圖屋，并且插圖並沒有做出任何的修改
  var positiveImages = [
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E4%B8%80%E9%BD%8A%E9%9D%A2%E5%B0%8D.png?raw=true",
      ,
      // 添加其他加分图片URL
  ];

  // 不加分图片URLs
  var negativeImages = [
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E5%8A%A0%E6%B2%B9%E5%8A%AA%E5%8A%9B.png?raw=true",
      // 添加其他不加分图片URL
  ];

  // 生成随机数的函数
  function random(min, max) {
      return Math.round(Math.random() * (max - min) + min);
  }

  // 控制箱子降落的函数
  function dropBox() {
      var length = random(100, $(".game").width() - 100);
      var velocity = random(9000, 10000);
      var size = random(350, 400);
      var thisBox = $("<div/>", {
          class: "box",
          style: "width:" + size + "px; height:" + size + "px; left:" + length + "px; transition: transform " + velocity + "ms linear;"
      });

      // 随机选择加分或不加分的图片
      if (Math.round(Math.random())) {
          var positiveIndex = random(0, positiveImages.length - 1);
          thisBox.css({
              background: "url('" + positiveImages[positiveIndex] + "')",
              "background-size": "contain"
          }).data("scoreChange", 1); // 标记为加分
      } else {
          var negativeIndex = random(0, negativeImages.length - 1);
          thisBox.css({
              background: "url('" + negativeImages[negativeIndex] + "')",
              "background-size": "contain"
          }).data("scoreChange", 0); // 标记为不加分
      }

      $(".game").append(thisBox);

      setTimeout(function() {
          thisBox.addClass("move");
      }, random(0, 5000));

      thisBox.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
          $(this).remove();
      });
  }

  $(document).on("click", ".box", function() {
      score += $(this).data("scoreChange"); // 根据箱子的标记来增加分数
      $(".score").html(score);
      $(this).remove();
  });
  
    var runGame = setInterval(function () {
      for (i = 0; i < 4; i++) { // 同时出现的箱子数量，可修改6来控制
        dropBox();
      }
    }, 5000); // 游戏循环的间隔时间，可修改5000来调整间隔
  
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
  