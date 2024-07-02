document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var img = document.getElementById('loadingImage');
        img.src = "/afbeeldingen/loading-screen-done.png";
        img.style.width = "80px"; // Vervang 'new-image.gif' door het pad naar je nieuwe afbeelding
    }, 5000); // 3000 milliseconden = 3 seconden
});