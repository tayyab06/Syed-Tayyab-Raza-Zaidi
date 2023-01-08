async function ClassAlarm() {
    const AlarmPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Class is over');
      }, 30 * 60 * 1000);
    });
  
    try {
      const message = await AlarmPromise;
      console.log(message);
    } catch (error) {
      console.error(error);
    }
  }
  
  ClassAlarm(); // logs 'Class is over' after 30 minutes
  