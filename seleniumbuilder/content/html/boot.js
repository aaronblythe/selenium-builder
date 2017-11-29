window.boot = function(sebuilder) {
    window.stayAlive = true;
    window.sebuilder = sebuilder;
    window.bridge = sebuilder;
    var bridge = sebuilder;
    
    // Load the loader script!
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    // Force no caching. This means the user always gets an up to date recorder.
    script.setAttribute('src', "loader.js?" + Math.random());
    // Above line may not work due to security reasons, so let's try a different
    // way too.
    document.getElementsByTagName('head')[0].appendChild(script);
  };
  
  // If we haven't been told by sebuilder.boot to stay open, we are probably an orphaned window left
  // over from the previous session, so we close. 
  window.assumeDeadBy = setTimeout(function() {
    if (!window.stayAlive) {
      window.close();
    }
  }, 500);