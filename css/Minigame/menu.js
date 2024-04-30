AFRAME.registerComponent('menu-click', {
    init: function() {
        this.el.addEventListener('click', (evt) => {
            // 执行平移动画
            this.el.setAttribute('animation', {
                property: 'position',
                to: '-5 0 -1',
                dur: 1500
            });

            // 显示介绍
            document.querySelector('[intro-click]').components['intro-click'].showIntroduction();
        });
    }
});
AFRAME.registerComponent('intro-click', {
    init: function() {
        this.el.addEventListener('click', (evt) => {
            // 执行平移动画
            this.el.setAttribute('animation', {
                property: 'position',
                to: '-5 0 -1',
                dur: 1500
            });

            // 在动画完成后隐藏，同时触发 rule-click 的动画
            setTimeout(() => {
                this.el.setAttribute('visible', 'false');
                document.querySelector('[gameplay-click]').components['gameplay-click'].showgameplay();
            }, 1600);
        });
    },

    showIntroduction: function() {
        // 设置动画移动到 '0 0 -1'
        this.el.setAttribute('animation', {
            property: 'position',
            to: '0 0 -1',
            dur: 1500
        });
    }
});

AFRAME.registerComponent('gameplay-click', {
    init: function() {
        this.el.addEventListener('click', (evt) => {
            // 执行平移动画
            this.el.setAttribute('animation', {
                property: 'position',
                to: '-5 0 -1',
                dur: 1600
            });

            // 在动画完成后隐藏，同时触发 rule-click 的动画
            setTimeout(() => {
                this.el.setAttribute('visible', 'false');
                document.querySelector('[rule-click]').components['rule-click'].showRule();
            }, 1500);
        });
    },

    showgameplay: function() {
        // 设置动画移动到 '0 0 -1'
        this.el.setAttribute('animation', {
            property: 'position',
            to: '0 0 -1',
            dur: 750
        });
    }
});

AFRAME.registerComponent('rule-click', {
    init: function() {
        this.el.addEventListener('click', (evt) => {
            // 执行跳转
            window.location.href = 'Minigame-game.html';
        });
    },
    showRule: function() {
        this.el.setAttribute('animation', {
            property: 'position',
            to: '0 0 -1',
            dur: 750
        });
    }
});
