#12-Apr-2024
Minigame的Ipad需要調整/甚至是兩個模式
Minigame的圖片需要做更改
然後Q1 Camera需要Static一下

#16-Apr-2024
維修sciprt的錯誤和位置，放在head會導致：場景<a-scene>組<a-entity>無法被中找到


<!DOCTYPE html>
<html lang="en">

<head>
  <title>關心身邊的同學和朋友 Medsim-Healthcare-Education</title>
      <!--Icons-->
      <link rel="shortcut icon" href="css/index/Medsimlogo.png" type="image/X-icon">
      <link rel="stylesheet" href="css/index/index.css">
  <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
  <script src=".\aframe-extras-master\dist\aframe-extras.min.js"></script>
  <script src=".\aframe-extras-master\src\components\sound.js"></script>
  <meta property="og:title" content="Orderly Hopeful Eagle" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charset="utf-8" />
  <meta property="twitter:card" content="summary_large_image" />
  <!--預加載模型-->
  <!--link rel="preload" href="https://raw.githubusercontent.com/bitoChan/Mental-Health-Solution/main/3D-Model/Classroom/Classroom.gltf" as="fetch" crossorigin="anonymous"-->
  <!--link rel="preload" href="https://raw.githubusercontent.com/bitoChan/Mental-Health-Solution/main/3D-Model/Student/Student.gltf" as="fetch" crossorigin="anonymous"-->
  
  <style data-tag="reset-style-sheet">
    /* 這是一個重置樣式表，用於消除不同瀏覽器之間的默認樣式差異 */
  </style>
  <style data-tag="default-style-sheet">
    /* 這是默認樣式表，用於設置網頁的基本樣式 */
  </style>

  <link rel="stylesheet" href="https://unpkg.com/animate.css@4.1.1/animate.css" />
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
    data-tag="font" />
  <link rel="stylesheet" href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css" />
</head>

<body>
  <!-- A-Frame場景 -->
  <a-scene id="scene" style="display: block;">
    <a-camera>
      <a-entity position="0 0 -1.5" text="align: center;
                width: 6;
                wrapCount: 100;
                color: black;
                value: Click or tap to Start " hide-on-play="#videoFireworks">
      </a-entity>
    </a-camera>
  </a-scene>

  <!-- 音頻元素 -->
  <audio id="audio" style="display: none;" loop>
    <source src="Sound/Menubgm.mp3" type="audio/mp3">
  </audio>

  <div id="content" >
    <div class="container">
      <div class="header">
          <h1>WebVR 關注身邊同學</h1>
      </div>
      <div class="content">
          <img src="css/index/Menulogo.gif" alt="Tandem Bike" class="central-image">
          <div class="text-and-button">
              <h2></h2>
              <button class="animated-button" onclick="navigateToMentalHealth()">進入</button>
          </div>
      </div>
  </div>
  </div>

  <script>
    // 獲取元素
    var scene = document.getElementById('scene');
    var audio = document.getElementById('audio');
    var content = document.getElementById('content');
    var audioElement = document.getElementById("audio");
    audioElement.volume = 0.5; // 設置音量為50%
    // 為場景添加點擊事件
    scene.addEventListener('click', function () {
      // 隱藏場景
      scene.style.display = 'none';

      // 播放音樂
      audio.style.display = 'block';
      audio.play();

      // 顯示內容
      content.style.display = 'block';
    });

    // 播放音樂函數
    function playAudio() {
      // 隱藏場景
      scene.style.display = 'none';

      // 播放音樂
      audio.style.display = 'block';
      audio.play();
      
      // 顯示內容
      content.style.display = 'block';
    }
      // 前往 Q1.html
      function navigateToMentalHealth() {
        window.location.href = "Q1.html";
      }
  </script>
</body>

</html>