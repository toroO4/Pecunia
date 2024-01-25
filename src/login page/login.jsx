/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          {/* // eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img className="image" alt="Image"  src="https://c.animaapp.com/O6jmtek0/img/image-4.png" />
          <div className="group">
            <div className="div">
              <div className="group-2">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="div-wrapper">
                      <div className="text-wrapper">Login</div>
                    </div>
                    <div className="text-wrapper-2">Register</div>
                  </div>
                </div>
                <div className="welcome-to-pecunia">Welcome to&nbsp;&nbsp;Pecunia</div>
              </div>
              <div className="div">
                <div className="overlap-2">
                  <div className="group-3">
                    <img
                      className="rectangle"
                      alt="Rectangle"
                      src="https://c.animaapp.com/O6jmtek0/img/rectangle-80.svg"
                    />
                    <div className="user-name"> User name</div>
                    <div className="text-wrapper-3">Enter your User name</div>
                  </div>
                  <div className="group-4">
                    <div className="overlap-3">
                      <div className="group-5">
                        <div className="overlap-group-2">
                          <div className="text-wrapper-4">Enter your Password</div>
                        </div>
                        <div className="text-wrapper-5">Password</div>
                        <div className="text-wrapper-6">Enter your Username</div>
                      </div>
                      <img
                        className="invisible"
                        alt="Invisible"
                        src="https://c.animaapp.com/O6jmtek0/img/invisible-1.svg"
                      />
                    </div>
                  </div>
                  <p className="lorem-ipsum-is">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and&nbsp;&nbsp;
                    <br /> typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="group-6">
              <div className="rectangle-2" />
              <div className="text-wrapper-7">Rememebr me</div>
              <div className="text-wrapper-8">Forgot Password ?</div>
            </div>
            <div className="group-7">
              <div className="overlap-4">
                <div className="text-wrapper-9">Login</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
