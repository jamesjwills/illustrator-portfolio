document.addEventListener("DOMContentLoaded", function() {
    adjustArtBoxSizes();
});

window.addEventListener("resize", function() {
    adjustArtBoxSizes();
});

function adjustArtBoxSizes() {
    var artBoxes = document.querySelectorAll(".art-box");

    artBoxes.forEach(function(artBox) {
        var image = artBox.querySelector("img");
        var aspectRatio = image.width / image.height;

        // Adjust the height based on the aspect ratio
        artBox.style.height = artBox.offsetWidth / aspectRatio + "px";
    });
}