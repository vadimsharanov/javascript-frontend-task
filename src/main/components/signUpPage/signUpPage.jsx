import React from "react";

const SignUpPage = () => {
  return (
    <body>
      <div class='background'></div>
      <main>
        <div class='left-column'></div>
        <div class='right-column'>
          <form class='form'>
            <div class='form-row'>
              <label for='email'>Email</label>
              <input id='email' placeholder='Email...' type='email' required />
            </div>
            <div class='form-row flex-row'>
              <button type='submit'>Sign up</button>
            </div>
          </form>
        </div>
      </main>
    </body>
  );
};

export default SignUpPage;
