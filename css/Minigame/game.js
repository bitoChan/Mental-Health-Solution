
$(document).ready(function() {
  var score = 0; // 游戏得分
    
  // 加分（中傷人）图片,圖片來源皆來自いらすとや插圖屋，并且插圖並沒有做出任何的修改，
  var positiveImages = [
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E5%81%9A%E4%B8%8D%E5%A5%BD.png?raw=true",
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E5%81%9A%E9%8C%AF.png?raw=true",
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E5%8F%AA%E7%9F%A5%E9%81%93%E5%93%AD.png?raw=true",
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E5%A4%AA%E6%95%8F%E6%84%9F%E4%BA%86.png?raw=true",
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E5%B0%8F%E4%BA%8B%E9%83%BD%E5%81%9A%E4%B8%8D%E5%A5%BD.png?raw=true",
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E6%8B%96%E5%BE%8C%E8%85%BF.png?raw=true",
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E8%80%83%E7%9A%84%E5%B7%AE.png?raw=true",
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E8%80%83%E8%A9%A6%E7%B0%A1%E5%96%AE.png?raw=true",

  ];
  // 不加分图片URLs
  var negativeImages = [
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E4%B8%80%E8%B5%B7%E9%9D%A2%E5%B0%8D.png?raw=true",
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E4%B8%8D%E8%A6%81%E7%81%B0%E5%BF%83.png?raw=true",
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E5%A4%B1%E6%95%97%E4%B8%8D%E6%98%AF%E7%B5%82%E9%BB%9E.png?raw=true",
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E6%88%90%E5%8A%9F%E8%B7%AF%E4%B8%8A.png?raw=true",
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E6%94%AF%E6%8C%81%E4%BD%A0.png?raw=true",
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E6%BD%9B%E5%8A%9B%E7%84%A1%E9%99%90.png?raw=true",
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E9%99%AA%E8%91%97%E4%BD%A0.png?raw=true",
      "https://github.com/bitoChan/Mental-Health-Solution/blob/main/css/Minigame/icon/%E9%9B%A8%E5%BE%8C%E6%9C%89%E5%BD%A9%E8%99%B9.png?raw=true",

    ];

  // 不同尺寸寬度設備 適應 不同的圖片大小
  var minSize, maxSize;
  var screenWidth = $(window).width(); // Gets the width of the screen
  if (screenWidth >= 2048) { // For larger screens like 12.9-inch iPad Pro
      minSize = 410;
      maxSize = 380;
  } else if (screenWidth >= 1668 && screenWidth < 2048) { // For medium screens like 11-inch iPad Pro
      minSize = 370;
      maxSize = 340;
  } else if (screenWidth >= 1536 && screenWidth < 1668) { // For smaller screens like iPad Air 2
      minSize = 330;
      maxSize = 300;
  } else { // For even smaller screens
      minSize = 290;
      maxSize = 260;
  }
  // 生成随机数的
  function random(min, max) {
      return Math.round(Math.random() * (max - min) + min);
  }
  // 控制箱子降落的
  function dropBox() {
    var length = random(100, $(".game").width() - 330); // 控制箱子不要超出游戏区域
    var velocity = random(13500, 14000); // 速度
    var size = random(minSize, maxSize); // 动态尺寸

    var thisBox = $("<div/>", {
        class: "box",
        style: "width:" + size + "px; height:" + size + "px; left:" + length + "px; transition: transform " + velocity + "ms linear;"
    });

    // 随机选择正面或负面图片
    if (Math.round(Math.random())) {
        var positiveIndex = random(0, positiveImages.length - 1);
        thisBox.css({
            background: "url('" + positiveImages[positiveIndex] + "')",
            "background-size": "contain"
        }).data("scoreChange", 1);
    } else {
        var negativeIndex = random(0, negativeImages.length - 1);
        thisBox.css({
            background: "url('" + negativeImages[negativeIndex] + "')",
            "background-size": "contain"
        }).data("scoreChange", 0);
    }

    $(".game").append(thisBox);
    setTimeout(function() {
        thisBox.addClass("move");
    }, random(0, 5000));

    thisBox.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
        $(this).remove();
    });
}


function isOverlap(newBox) {
    var overlap = false;
    $(".box").each(function() {
        var existingBox = $(this);
        if (Math.abs(existingBox.position().left - newBox.position().left) < newBox.width()) {
            overlap = true;
            return false; // 跳出迴圈
        }
    });
    return overlap;
}

  $(document).on("click", ".box", function() {
      score += $(this).data("scoreChange"); // 根据箱子的标记来增加分数
      $(".score").html(score);
      $(this).remove();
  });
  //循環進行掉落游戲之前，0秒播放一次
  for (var i = 0; i < 3; i++) { // Simultaneous number of boxes, can modify to control
    dropBox();
}
  
  var runGame = setInterval(function() {
      for (var i = 0; i < 3; i++) { // Simultaneous number of boxes, can modify to control
          dropBox();
      }
  }, 9000); // Interval of game loop, can adjust to modify interval

  // Countdown timer setup, can modify 90 seconds to set different game duration
  function countdown() {
      var seconds = 90; // Countdown seconds, can modify as needed
      function tick() {
          var counter = document.getElementById("counter");
          seconds--;
          counter.innerHTML = (seconds < 10 ? "0" : "") + String(seconds) + "S";
          if (seconds > 0) {
              setTimeout(tick, 1000);
          } else {
              alert("你成功掌握了語言的溫度,一句説話帶來的溫度和力量,有時可以幫助同學度過難關.");
              clearInterval(runGame);
          }
      }
      tick();
  }

  countdown();
});
