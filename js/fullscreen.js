/**
 *  FullScreen toggler
 *  https://github.com/utilmind/fullscreen-toggler/
 *
 *  (c) 07.2020, Oleksii Kuznietsov aka UtilMind.
 *  Free by MIT license.
 *
 *  Usage example:
    ==============

    HTML

        <button class="btn btn-primary toggle-fullscreen" title="Full screen" data-toggle="tooltip">
            <img src="images/expand.svg" alt="Full screen" />
        </button>

    JavaScript

        var $fullScreenTogglers = $(".toggle-fullscreen");
        $fullScreenTogglers.click(function(e) {
            e.preventDefault(); // in case if toggler is an anchor
            toggleFullScreen(function(isFullScreen) {
                $fullScreenTogglers.find("img").attr("src", isFullScreen ? "images/compress.svg" : "images/expand.svg");
            });
        });

    NOTE: This quick example uses jQuery. But the function itself written in vanilla JavaScript, so jQuery doesn't required.
 */

function toggleFullScreen(onToggle) {
    // Doc on the FullScreen feature: https://developers.google.com/web/fundamentals/native-hardware/fullscreen/
    var me = this, // this is window, global
        doc = window.document, // window.document
        docEl = doc.documentElement,
        // find the function (AK 16.02.2020: we really need all these checking, otherwise it will not work at least on Edge)
        requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen,
        cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen,

        isInFullScreen = function() { // returns 1 if in Full Screen mode and 0 otherwise.
            var doc = window.document;
            // AK 16.02.2020: multiple cheks really required!! Otherwise Edge does not works!
            return doc.fullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement ? 1 : 0;
        },

        checkFullScreen = function() {
            // in the end of resize process
            setTimeout(function() {
                var curFullScreen = isInFullScreen();
                if (me._isInFullScr !== curFullScreen) {
                  me._isInFullScr = curFullScreen;
                  onToggle(curFullScreen);
                }
            }, 0);
        },

        isFullScreen;

    // check if it's already in full screen
    if (isInFullScreen())
      cancelFullScreen.call(doc);
    else
      requestFullScreen.call(docEl);

    // in the end of process
    setTimeout(function() {
        if (onToggle) {
          if ("undefined" === typeof me._isInFullScr) { // first time
            checkFullScreen(); // first toggle before hooked resize event!
            addEventListener("resize", function() { // window.addEventListener.
                checkFullScreen();
            });
          }
        }
    }, 0);
}