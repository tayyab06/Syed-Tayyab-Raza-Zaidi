function Timer() {
    let counter = 0;
  
    function tick(limit) {
      setInterval(function() {
        counter++;
        console.log(counter);
        if (counter > limit) {
          clearInterval();
        }
      }, 1000);
    }
  
    function start(limit) {
      tick(limit);
    }
  
    return {
      start: start
    };
  }
  
  const timer = Timer();
  timer.start(5); // will log the counter every second until it reaches 6
  