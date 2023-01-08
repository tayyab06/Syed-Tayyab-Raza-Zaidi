async function getProgramResults() {
    const runProgramPromise = new Promise((resolve, reject) => {
      // simulate a long-running program
      setTimeout(() => {
        const result = 'Program completed';
        resolve(result);
      }, 5000);
    });
  
    try {
      const result = await runProgramPromise;
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  getProgramResults(); // logs 'Program completed' after 5 seconds
  