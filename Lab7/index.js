class Library {
    constructor() {
      this.sections = [];
      this.books = [];
      this.manager = "";
      this.openingTime = "";
      this.closingTime = "";
    }
  
    manageLibrary = () => {
      console.log("Managing library...");
    };
  
    issueBooks = () => {
      return new Promise((resolve, reject) => {
        console.log("Issuing books...");
        resolve(this.books);
      });
    };
  
    addNewSection = () => {
      console.log("Adding new section...");
    };
  
    openLibrary = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("Opening library...");
          resolve(this.openingTime);
        }, 2000);
      });
    };
  
    closeLibrary = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("Closing library...");
          resolve(this.closingTime);
        }, 1000);
      });
    };
  }
  
  const library1 = new Library();
  const library2 = new Library();
  
  library1.manageLibrary();
  library1.issueBooks().then((books) => console.log(books));
  library1.addNewSection();
  
  (async () => {
    const openingTime = await library1.openLibrary();
    console.log(openingTime);
  })();
  
  (async () => {
    const closingTime = await library1.closeLibrary();
    console.log(closingTime);
  })();
  
  for (const key in library2) {
    console.log(key);
  }
  