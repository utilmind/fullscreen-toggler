# fullscreen-toggler
JavaScript function which toggle the full screen and monitors current full screen state triggering callback on change of fullscreen state.

Usage example:

    var $fullScreToggler = $(".toggle-fullscreen");
    $fullScreToggler.click(function(e) {
        e.preventDefault(); // in case if toggler is an anchor
        toggleFullScreen(function(isFullScreen) {
            $fullScreToggler.find("img").attr("src", isFullScreen ? "images/compress.svg" : "images/expand.svg");
        });
    });

NOTE: This quick example uses jQuery. But the function itself written in vanilla JavaScript, so jQuery doesn't required.
