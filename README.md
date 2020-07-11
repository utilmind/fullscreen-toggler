# fullscreen-toggler
JavaScript function which toggle the full screen and monitors current full screen state triggering callback on change of fullscreen state.

<h3>Usage example</h3>

HTML

<button class="btn btn-primary toggle-fullscreen" title="Full screen" data-toggle="tooltip"><img src="images/expand.svg" alt="Full screen"></button>

JavaScript

    var $fullScreTogglerd = $(".toggle-fullscreen");
    $fullScreTogglerd.click(function(e) {
        e.preventDefault(); // in case if toggler is an anchor
        toggleFullScreen(function(isFullScreen) {
            $fullScreTogglers.find("img").attr("src", isFullScreen ? "images/compress.svg" : "images/expand.svg");
        });
    });

NOTE: This quick example uses jQuery. But the function itself written in vanilla JavaScript, so jQuery doesn't required.
