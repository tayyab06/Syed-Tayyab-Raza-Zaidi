import React from "react";

function StudentForm() {
  return (
    <form>
      <label for="first-name">First Name</label>
      <input type="text" id="first-name" placeholder="Enter first name" />
      <br />
      <label for="last-name">Last Name</label>
      <input type="text" id="last-name" placeholder="Enter last name" />
      <br />
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter email" />
      <br />
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter password" />
      <br />
      <label for="confirm-password">Confirm Password</label>
      <input type="password" id="confirm-password" placeholder="Confirm password" />
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default StudentForm;
