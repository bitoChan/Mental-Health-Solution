
$(document).ready(function() {
    var score = 0; // Game score

    // Positive (score-increasing) image URLs
    var positiveImages = [
        "https://example.com/image1.png",
        "https://example.com/image2.png"
    ];

    // Negative (non-score-increasing) image URLs
    var negativeImages = [
        "https://example.com/image3.png",
        "https://example.com/image4.png"
    ];

    // Adjust the minimum and maximum size based on the screen width
    var minSize, maxSize;
    var screenWidth = $(window).width(); // Gets the width of the screen
    if (screenWidth >= 2048) { // For larger screens like 12.9-inch iPad Pro
        minSize = 300;
        maxSize = 350;
    } else if (screenWidth >= 1668 && screenWidth < 2048) { // For medium screens like 11-inch iPad Pro
        minSize = 280;
        maxSize = 330;
    } else if (screenWidth >= 1536 && screenWidth < 1668) { // For smaller screens like iPad Air 2
        minSize = 250;
        maxSize = 300;
    } else { // For even smaller screens
        minSize = 220;
        maxSize = 270;
    }

    function random(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    function dropBox() {
        var length = random(100, $(".game").width() - 100);
        var velocity = random(9000, 10000);
        var size = random(minSize, maxSize); // Use dynamic sizing
        var thisBox = $("<div/>", {
            class: "box",
            style: "width:" + size + "px; height:" + size + "px; left:" + length + "px; transition: transform " + velocity + "ms linear;"
        });

        // Randomly select a positive or negative image
        if (Math.round(Math.random())) {
            var positiveIndex = random(0, positiveImages.length - 1);
            thisBox.css({
                background: "url('" + positiveImages[positiveIndex] + "')",
                "background-size": "contain"
            }).data("scoreChange", 1); // Mark as score-increasing
        } else {
            var negativeIndex = random(0, negativeImages.length - 1);
            thisBox.css({
                background: "url('" + negativeImages[negativeIndex] + "')",
                "background-size": "contain"
            }).data("scoreChange", 0); // Mark as not score-increasing
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
        score += $(this).data("scoreChange"); // Update score based on the box's mark
        $(".score").html(score);
        $(this).remove();
    });

    var runGame = setInterval(function() {
        for (var i = 0; i < 4; i++) { // Simultaneous number of boxes, can modify to control
            dropBox();
        }
    }, 7000); // Interval of game loop, can adjust to modify interval

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
                alert("Game over. Your final score: " + score);
                clearInterval(runGame);
            }
        }
        tick();
    }

    countdown();
});
