# fullscreen-toggler
JavaScript function which toggle the full screen and monitors current full screen state triggering callback on change of fullscreen state.

<h3>Usage example</h3>

HTML

<pre>
&lt;button class="btn btn-primary toggle-fullscreen" title="Full screen" data-toggle="tooltip"&gt;
    &lt;img src="images/expand.svg" alt="Full screen" /&gt;
&lt;/button&gt;
</pre>


JavaScript

    var $fullScreenTogglers = $(".toggle-fullscreen");
    $fullScreenTogglers.click(function(e) {
        e.preventDefault(); // in case if toggler is an anchor
        toggleFullScreen(function(isFullScreen) {
            $fullScreenTogglers.find("img").attr("src", isFullScreen ? "images/compress.svg" : "images/expand.svg");
        });
    });

NOTE: This quick example uses jQuery. But the function itself written in vanilla JavaScript, so jQuery doesn't required.
