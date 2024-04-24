$(document).ready(function() {
  // 設定當點擊列表1時切換激活狀態並執行動畫
  $("#products>article").on("click", function() {
    $("#products>article").removeClass("active");
    $(this).addClass("active");
    animate();
  });
  //設定當點擊列表2時切換激活狀態並執行動畫
  $("#products2>article").on("click", function() {
    $("#products2>article").removeClass("active2");
    $(this).addClass("active2");
    animate2();
  });
  // 返回當前激活文章的索引
  function getActiveArticle() { 
    var x = 0;
    $("#products>article").each(function(index) {
      if($("#products>article").eq(index).hasClass("active")) {
        x = index;
        return false;
      }
    });
    return x;
  }
  function getActiveArticle2() { 
    var y = 0;
    $("#products2>article").each(function(index) {
      if($("#products2>article").eq(index).hasClass("active2")) {
        y = index;
        return false;
      }
    });
    return y;
  }


  // 向前滑動
  $("#gofwd").click(gofwd);
  function gofwd() {
    var activeIndex = getActiveArticle();
    var maxArticles = $("#products>article").length - 1;
    if(activeIndex >= maxArticles) {
      activeIndex = -1;
    }
    $("#products>article").removeClass("active");
    $("#products>article").eq(activeIndex + 1).addClass("active");
    animate();
  }
  $("#gofwd2").click(gofwd2);
  function gofwd2() {
    var activeIndex2 = getActiveArticle2();
    var maxArticles2 = $("#products2>article").length - 1;
    if(activeIndex2 >= maxArticles2) {
      activeIndex2 = -1;
    }
    $("#products2>article").removeClass("active2");
    $("#products2>article").eq(activeIndex2 + 1).addClass("active2");
    animate2();
  }
  // 向後滑動
  $("#gobwd").click(gobwd);
  function gobwd() {
    var activeIndex = getActiveArticle();
    if(activeIndex <= 0) {
      activeIndex = $("#products>article").length;
    }
    $("#products>article").removeClass("active");
    $("#products>article").eq(activeIndex - 1).addClass("active");
    animate();
  }
  $("#gobwd2").click(gobwd2);
  function gobwd2() {
    var activeIndex2 = getActiveArticle2();
    if(activeIndex2 <= 0) {
      activeIndex2 = $("#products2>article").length;
    }
    $("#products2>article").removeClass("active2");
    $("#products2>article").eq(activeIndex2 - 1).addClass("active2");
    animate2();
  }
  // 初始動畫
  animate();
  animate2();


  // 執行滑動動畫
  function animate() {
    var articleIndex = getActiveArticle();
    var totalMargin = 25 * (articleIndex + 1) - 25 * articleIndex;
    var articlePosition = Math.floor($("#products>article").eq(articleIndex).offset().left - $("#products").offset().left) - totalMargin;
    var productsHalfWidth = $("#products").width() / 2;
    var halfWidth = articleIndex == 0 ? 150 : 100;
    var finalPosition = productsHalfWidth - articlePosition - halfWidth;

    $("#products").animate({
      "left": finalPosition
    }, 500, 'easeOutBack');
  

  }
  function animate2() {
    var articleIndex2 = getActiveArticle2();
    var totalMargin2 = 25 * (articleIndex2 + 1) - 25 * articleIndex2;
    var articlePosition2 = Math.floor($("#products2>article").eq(articleIndex2).offset().left - $("#products2").offset().left) - totalMargin2;
    var productsHalfWidth2 = $("#products2").width() / 2;
    var halfWidth2 = articleIndex2 == 0 ? 150 : 100;
    var finalPosition2 = productsHalfWidth2 - articlePosition2 - halfWidth2;
    $("#products2").animate({
      "left": finalPosition2
    }, 500, 'easeOutBack');
  }

  // 調整大小時重新動畫
  $(window).on("resize", function() {
    animate();
    animate2();
  });

  // 自動播放功能
  var autoPlay = setInterval(gofwd, 3500);
  var autoPlay2 = setInterval(gofwd2, 3500);
  $("#slider").on("mouseenter", function() {
    clearInterval(autoPlay);
  });
  $("#slider").on("mouseleave", function() {
    autoPlay = setInterval(gofwd, 3500);
  });

  $("#slider2").on("mouseenter", function() {
    clearInterval(autoPlay2);
  });
  $("#slider2").on("mouseleave", function() {
    autoPlay2 = setInterval(gofwd2, 3500);
  });
});

