export class University {
    constructor(name, image) {
      this.name = name;
      this.image = image;
    }
  
    setImage(imageUrl) {
      this.image = imageUrl;
    }
  }

  import axios from 'axios';

export class University {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }

  setImage() {
    // Fetch the SSUET logo from the SSUET website using axios GET method and set it to image property
    axios.get('https://www.ssuet.edu.pk/themes/ssuet/images/logo.png')
      .then((response) => {
        this.image = response.data;
      });
  }
}

// Create a new instance and call setImage method on the instance
const ssuet = new University('SSUET');
ssuet.setImage();

// Validate if the image property has been set
console.log(ssuet.image);

import sqlite3 from 'sqlite3';

// Create and open database
const db = new sqlite3.Database('universities.db');

// Create University table using properties from University class created above
db.run('CREATE TABLE IF NOT EXISTS University (name TEXT, image BLOB)');

// Create two University instances
const ssuet1 = new University('SSUET');
const ku = new University('Karachi University');

// Call setImage method on both the instances
ssuet.setImage();
ku.setImage();

// Insert both the instances using their name and image properties
const stmt = db.prepare('INSERT INTO University (name, image) VALUES (?, ?)');
stmt.run(ssuet1.name, ssuet.image);
stmt.run(ku.name, ku.image);

// Close the statement
stmt.finalize();

// Close the database
db.close();


  