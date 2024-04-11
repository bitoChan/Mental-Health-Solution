$(document).ready(function() {
  var score = 0; // 游戏得分

  // 加分图片URLs
  var positiveImages = [
      "https://drive.google.com/file/d/1zxaVmtBPAi8eu13Om2VIjFkusgKNswrf/view?usp=drive_link",
      // 添加其他加分图片URL
  ];

  // 不加分图片URLs
  var negativeImages = [
      "https://drive.google.com/file/d/1KzX3egNhswVXClcih6CwGUpbMP127WoV/view?usp=drive_link"
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
      var size = random(100, 150);
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
      for (i = 0; i < 3; i++) { // 同时出现的箱子数量，可修改6来控制
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
  