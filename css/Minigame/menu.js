AFRAME.registerComponent('menu-click', {
  init: function() {
      this.el.addEventListener('click', (evt) => {
          // 執行平移動畫
          this.el.setAttribute('animation', {
              property: 'position',
              to: '-5 0 -1',
              dur: 1500
          });

          // 顯示介紹
          document.querySelector('[intro-click]').components['intro-click'].showIntroduction();
      });
  }
});

AFRAME.registerComponent('intro-click', {
  init: function() {
      this.el.addEventListener('click', (evt) => {
          // 重新加載 Minigame-game.html
          window.location.href = 'Minigame-game.html';
      });
  },
  showIntroduction: function() {
      // 執行平移動畫顯示介紹
      this.el.setAttribute('animation', {
          property: 'position',
          to: '0 0 -1',
          dur: 2000
      });
  }
});