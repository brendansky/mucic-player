

var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "Assets/audio/sample-audio.mp3");

$("#music-controls").on("click", ".theme-button", function () {
    audioElement.play();
    console.log("volume?")
}).on("click", ".pause-button", function () {
    audioElement.pause();
});


$(document).keydown(function (keypressed) {


    if (keypressed.key === "q") {

        audioElement.play();
        $(".q").addClass("pushed");
        console.log("playing");

    };

});

$(document).keyup(function (keypressed) {


    if (keypressed.key === "q") {

        audioElement.pause();
        $(".q").removeClass("pushed");
        console.log("stopped");

    };


});
