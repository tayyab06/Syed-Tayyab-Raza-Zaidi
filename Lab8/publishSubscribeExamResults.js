function publishSubscribeExamResults() {
    const subscribers = [];
  
    return {
      subscribe: function(subscriber) {
        subscribers.push(subscriber);
      },
      publish: function(message) {
        subscribers.forEach(function(subscriber) {
          subscriber(message);
        });
      }
    };
  }
  
  const examResults = publishSubscribeExamResults();
  
  const subscriber1 = function(message) {
    console.log(`Subscriber 1 received message: ${message}`);
  };
  
  const subscriber2 = function(message) {
    console.log(`Subscriber 2 received message: ${message}`);
  };
  
  examResults.subscribe(subscriber1);
  examResults.subscribe(subscriber2);
  examResults.publish('Exam results are now available');
  // logs:
  // Subscriber 1 received message: Exam results are now available
  // Subscriber 2 received message: Exam results are now available
  