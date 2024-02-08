import React from "react";



export const Signup = () => {
  return (
    <div className="signup-page">
      <div className="div">
        <div className="text-wrapper">Create Account</div>
        <img className="facebook-logo" alt="La facebook" src="./assets/images/facebook.svg" />
        <img className="google-logo" alt="Icomoon free google" src="./assets/images/google-plus.svg" />
        <img className="linkedin-logo" alt="Entypo social" src="./assets/images/linkedIn.svg" />
        <p className="p">or use your email account</p>

        <form action="/signup" method='post'>
          <div className="overlap">
          <input id='email' type="text" className="input-field" placeholder="Enter your email" />
          </div>
          <div className="overlap-group">
          <input id='password' type="password" className="input-field" placeholder="Enter your password  " />
           </div>
          <div className="div-wrapper">
          <input id='name' type="text" className="input-field" placeholder="Enter your name" />
          </div>
          <div className="frame">
          <button className="text-wrapper-3">Sign Up</button>
          </div>  
        </form>
        
        <div className="text-wrapper-4">Forgot your password?</div>
        <div className="overlap-2">
          <img className="slack-logo" alt="LOGO" src="" />
          <div className="overlap-3">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <button className="text-wrapper-5">Sign In</button>
              </div>
            </div>
            <div className="text-wrapper-6">Already have an account?</div>
          </div>
          <div className="text-wrapper-7">Start New Journey!</div>
        </div>
      </div>
    </div>
  );
};

export default Signup;