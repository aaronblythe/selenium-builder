function listenForClicks() {
    document.addEventListener("click", (e) => {
  
      /**
       * Given the name of a beast, get the URL to the corresponding image.
       */
      function launchSelenium() {
        sebuilder.boot();
      }
    }
  )
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
    //document.querySelector("#popup-content").classList.add("hidden");
    //document.querySelector("#error-content").classList.remove("hidden");
    console.error(`Failed to execute selenium content script: ${error.message}`);
  }
  
  /**
   * When the popup loads, inject a content script into the active tab,
   * and add a click handler.
   * If we couldn't inject the script, handle the error.
   */
  browser.tabs.executeScript({file: "/seleniumbuilder3.js"})
  .then(listenForClicks)
  .catch(reportExecuteScriptError);