import React from "react";

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="frame">
        <div className="text-wrapper">Pecunia</div>
        <div className="div-wrapper">
          <button className="div">Sign Up</button>
        </div>
      </div>
      <div className="frame-2">
        <div className="frame-wrapper">
          <div className="frame-3">
            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper-2">Login now</div>
              </div>
              <div className="frame-6">
                <div className="text-wrapper-3">Welcome back :)</div>
              </div>
            </div>
            <div className="frame-7">
              <div className="frame-8">
                <div className="frame-9">
                  <div className="text-wrapper-4">Email</div>
                </div>
                <div className="frame-10">
                  <div className="frame-11">
                    <input
                      type="text"
                      className="text-wrapper-5 input-field"
                      placeholder="Enter your email id"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-12">
                <div className="frame-13">
                  <div className="frame-14">
                    <div className="text-wrapper-4">Password</div>
                  </div>
                  <div className="frame-15">
                    <input
                      type="password"
                      className="text-wrapper-5 input-field"
                      placeholder="Enter your password"
                    />
                    {/* <img className="basil-eye-closed" alt="Basil eye closed" src="basil-eye-closed-solid.svg" /> */}
                  </div>
                </div>
                <div className="frame-16">
                  <div className="frame-17">
                    <div className="frame-18">
                      <input
                          type="checkbox"
                          id="rememberMe"
                          className="checkbox"
                      />
                      <label htmlFor="rememberMe" className="text-wrapper-6">
                          Remember Me
                      </label>
                    </div>
                    <a href="/forgot-password" className="text-wrapper-7">Forgot Password?</a>
                  </div>
                  <div className="frame-19">
                    <div className="frame-20">
                      <button className="text-wrapper-8">Login</button>
                    </div>
                    <div className="not-registered-yet-wrapper">
                      <p className="not-registered-yet">
                        <span className="span">Not registered yet?</span>
                        <span className="text-wrapper-9">&nbsp;</span>
                        <a href="/signup" className="text-wrapper-10">Create an account</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="image" alt="login" src="./assets/images/image2.png" />
      </div>
    </div>
  );
};
