import React from "react";
import "./style.css";

export const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="div">
        <div className="text-wrapper">Create Account</div>
        <img className="la-facebook" alt="La facebook" src="la-facebook.svg" />
        <img className="icomoon-free-google" alt="Icomoon free google" src="icomoon-free-google-plus3.svg" />
        <img className="entypo-social" alt="Entypo social" src="entypo-social-linkedin-with-circle.svg" />
        <p className="p">or use your email account</p>
        <div className="overlap">
          <div className="text-wrapper-2">Enter your name</div>
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-2">Enter your name</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-2">Enter your name</div>
        </div>
        <div className="frame">
          <div className="text-wrapper-3">Sign Up</div>
        </div>
        <div className="text-wrapper-4">Forgot your password?</div>
        <div className="overlap-2">
          <img className="carbon-logo-slack" alt="Carbon logo slack" src="carbon-logo-slack.svg" />
          <div className="overlap-3">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-5">Sign In</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-6">Already have an account?</div>
      </div>
      <div className="text-wrapper-7">Start New Journey!</div>
    </div>
  );
};
