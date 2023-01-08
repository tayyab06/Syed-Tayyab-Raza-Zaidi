function Gadget() {
    this.startTime = new Date();
    this.salePrice = 100;
  }
  
  Gadget.prototype.start = function() {
    console.log('Starting gadget');
  };
  
  Gadget.prototype.end = function() {
    console.log('Ending gadget');
  };
  
  function StopWatch() {
    Gadget.call(this);
    this.brand = 'Timex';
    this.type = 'Analog';
  }
  
  StopWatch.prototype = new Gadget();
  
  const stopWatch = new StopWatch();
  console.log(stopWatch.startTime); // logs current date and time
  console.log(stopWatch.salePrice); // logs 100
  console.log(stopWatch.brand); // logs 'Timex'
  console.log(stopWatch.type); // logs 'Analog'
  console.log(stopWatch.start); // logs 'function'
  console.log(stopWatch.end); // logs 'function'
  
  function SmartWatch() {
    Gadget.call(this);
    this.brand = 'Apple';
    this.type = 'Digital';
  }
  
  SmartWatch.prototype = new Gadget();
  SmartWatch.prototype.connectToInternet = function() {
    console.log('Connecting to the internet');
  };
  
  const smartWatch1 = new SmartWatch();
  const smartWatch2 = new SmartWatch();
  console.log(smartWatch1.connectToInternet); // logs 'function'
  console.log(smartWatch2.connectToInternet); // logs 'function'
  
  smartWatch1.connectToInternet(); // logs 'Connecting to the internet'
  smartWatch2.connectToInternet(); // logs 'Connecting to the internet'
  