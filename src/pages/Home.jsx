/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useHomepageClick } from '../components/Homepage';

function Home() {

  const totalSlides = 2;
  const {onClickLeft, onClickRight } = useHomepageClick(totalSlides);
  return (
    <div>
      <header className="header">
        <div className="header_wrapper wrapper">
          <div className="header_left">
            <ul className="header_left_list">
              <li className="header_left_list_item">Find Talent</li>
              <li className="header_left_list_item">Find Sources</li>
              <li className="header_left_list_item">Find Work</li>
              <li className="header_left_list_item">Why Pecunia</li>
            </ul>
          </div>
          <div className="header_right">
            <div className="header_right_btns">
              <button className="btn_primary">Log In</button>
              <button className="btn_secondary">Sign Up</button>
            </div>
          </div>
        </div>
      </header>

      <section className="section_1 wrapper">
        <div className="section_1_bottom">
          <div className="section_1_bottom_left">
            <h1 className="title-1">Dive into<br />INNOVATION</h1>
            <h3 className="title-3">Where Ideas Swim and<br />Dreams Take a Bite!</h3>
            <div className="section_1_bottom_left_btns">
              <button className="btn_secondary">Get started</button>
            </div>
            <div className="section_1_bottom_left_companies_logo">
              <h4 className="title-4">Trusted by</h4>
              <div>
                <img src="./assets/images/CoC.png" alt="" width="100" height="100" />
                <img src="./assets/images/GDSC.png" alt="" width="100" height="100" />
              </div>
            </div>
          </div>

          <div className="section_1_bottom_right">
            <img src="./assets/images/image4.png" alt="" />
          </div>
        </div>
      </section>

      <section className="section_4 wrapper">
        <div className="section_4_background_img">
          <img src="./assets/images/find-talent.webp" alt="find_talent" />
        </div>
        <div className="section_4_body">
          <div className="section_4_body_row_1">
            <h1>What is</h1>
            <h1>Pecunia?</h1>
          </div>

          <div className="section_4_body_row_2">
            <h5>
              Welcome to our online innovation hub,<br />
              where entrepreneurs, startups, and students dive<br /> into the future.
            </h5>
          </div>

          <div className="section_4_body_row_4">
            <div className="section_4_body_row_4_card">
              <button>
                <span>Companies</span>
                <span>
                  Remarkable enterprises
                  <img src="./assets/images/right-arrow.svg" alt="right-arrow" />
                </span>
              </button>
            </div>
            <div className="section_4_body_row_4_card">
              <button>
                <span>Startups</span>
                <span>
                  Innovative ventures
                  <img src="./assets/images/right-arrow.svg" alt="right-arrow" />
                </span>
              </button>
            </div>
            <div className="section_4_body_row_4_card">
              <button>
                <span>Students<br /></span>
                <span>
                  Aspiring learners
                  <img src="./assets/images/right-arrow.svg" alt="right-arrow" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section_5 wrapper">
        <div className="section_5_left">
          <div className="section_5_left_info">
            <h1 className="section_5_left_info_title">
              Why companies<br />
              turn to Pecunia?
            </h1>
            <div className="section_5_left_info_item">
              <div className="section_5_left_info_item_left">
                <img src="./assets/images/star-circle.svg" alt="" />
              </div>
              <div className="section_5_left_info_item_right">
                <h3>Proof of quality</h3>
                <p>
                  Check any applicant’s work samples, reviews, and <br />identity
                  verification.
                </p>
              </div>
            </div>
            <div className="section_5_left_info_item">
              <div className="section_5_left_info_item_left">
                <img src="./assets/images/doller-circle.svg" alt="" />
              </div>
              <div className="section_5_left_info_item_right">
                <h3>No cost until you find talent</h3>
                <p>
                  Interview potential fits for your job, negotiate rates, and<br />
                  only pay for work you approve.
                </p>
              </div>
            </div>
            <div className="section_5_left_info_item">
              <div className="section_5_left_info_item_left">
                <img src="./assets/images/check-circle.svg" alt="" />
              </div>
              <div className="section_5_left_info_item_right">
                <h3>Safe and secure</h3>
                <p>
                  Get your work done knowing we help protect your data<br />
                  and privacy. We’re here with 24/7 support if you need it.
                </p>
              </div>
            </div>
          </div>
          <div className="section_5_left_img">
            <img src="./assets/images/reading.png" alt="" />
          </div>
        </div>
        <div className="section_5_right">
          <div className="section_5_right_info">
            <h3>
              We’re<br />
              the world’s best<br />
              work marketplace
            </h3>
            <div className="section_5_right_info_item">
              <img src="./assets/images/start-white.svg" alt="" />
              <div>
                <h3>4.2/5</h3>
                <p>Companies rate professionals on Pecunia</p>
              </div>
            </div>
            <div className="section_5_right_info_item">
              <img src="./assets/images/group.svg" alt="" />
              <div>
                <h3>Award winner</h3>
                <p>G2’s 2024 Best Software Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_3 wrapper">
        <div className="section_3_left">
          <div className="section_3_left_header">
            <h3>For startups</h3>
            <h1>
              Scale with<br />
              Startup Suite
            </h1>
            <span>
              A fast and secure way to achieve long-term success for your
              <br />business goals.
            </span>
          </div>
          <div className="section_3_left_details">
            <div>
              <img src="./assets/images/Skills.svg" alt="skills" />
              <p>Access expert talent to fill your skill needs</p>
            </div>
            <div>
              <img src="./assets/images/Briefcase.svg" alt="briefcase" />
              <p>Control your workflow: hire and pay your talent</p>
            </div>
            <div>
              <img src="./assets/images/Support.svg" alt="support" />
              <p>Partner with Pecunia for end-to-end support</p>
            </div>
          </div>
          <div className="section_left_btn">
            <button className="btn_primary">Learn More</button>
          </div>
        </div>
        <div className="section_3_right">
          <img src="./assets/images/image2.png" alt="enterprise" />
        </div>
      </section>

      <section className="section_6 wrapper">
        <div className="section_6_left">
          <img src="./assets/images/find-great-work.jpg" alt="" />
        </div>
        <div className="section_6_right">
          <div className="section_6_right_top">
            <h3>For students</h3>
            <h1>
              Find great<br />
              workplace
            </h1>
            <p>
              Meet successful companies and startups to work with & take <br /> your career to new heights.
            </p>
          </div>
          <hr />
          <div className="section_6_right_middle">
            <p id="text-1">
              Get experience<br />
              for every stage of<br />
              your career<br />
            </p>

            <p>
              Control when,<br />
              where, and how <br />you work
            </p>

            <p>
              Explore different<br />
              ways to hire
            </p>
          </div>
          <div className="section_6_right_bottom">
            <button className="btn_primary">Find Opportunities</button>
          </div>
        </div>
      </section>

      <section className="section_7 wrapper">
        <h1>
          Trusted by leading<br />
          committees
        </h1>
        <div className="section_7_container">
          <div
            onClick={onClickLeft}
            className="section_7_reviews_list_controls_left"
          >
            <img src="./assets/images/arrow-right.svg" alt="Left Arrow"/>
          </div>
          <div
            onClick={onClickRight}
            className="section_7_reviews_list_controls_right"
          >
            <img src="./assets/images/arrow-right.svg" alt="Right Arrow"/>
          </div>
          <div className="section_7_reviews_carousel">
            <div className="section_7_reviews_list">
              {/* Item 1 */}
              <div className="section_7_reviews_list_box_1">
                <div className="section_7_reviews_list_item item_1">
                  <div className="section_7_reviews_list_item_top">
                    <img src="./assets/images/CoC.png" alt="" width="100" height="100" />
                    <h4>
                      “Pecunia enables us to differentiate<br />
                      ourselves from our competitors and <br />produce content at
                      a higher caliber.”
                    </h4>
                    <p>Siddhant Baheti, Mentor</p>
                  </div>
                  <div className="section_7_reviews_list_item_bottom">
                    <h5>Results</h5>
                    <hr />
                    <div className="section_7_reviews_list_item_bottom_results">
                      <div>
                        <h4>Oscar Winning</h4>
                        <p>
                          YouTube Watch<br />
                          program
                        </p>
                      </div>
                      <div>
                        <h4>Millions</h4>
                        <p>
                          of impressions generated<br />
                          per client
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="section_7_reviews_list_box_1">
                <div className="section_7_reviews_list_item item_2">
                  <div className="section_7_reviews_list_item_top">
                    <img src="./assets/images/CoC.png" alt="" width="100" height="100" />
                    <h4>
                      “One of the advantages of utilizing<br />
                      freelancers is finding talent with different<br />
                      skills quickly as our needs change.”
                    </h4>
                    <p>Dev Bhuva, Mentor</p>
                  </div>
                  <div className="section_7_reviews_list_item_bottom">
                    <h5>Results</h5>
                    <hr />
                    <div className="section_7_reviews_list_item_bottom_results">
                      <div>
                        <h4>69% Faster</h4>
                        <p>launch of projects</p>
                      </div>
                      <div>
                        <h4>69</h4>
                        <p>projects completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 3 */}
              <div className="section_7_reviews_list_box_2">
                <div className="section_7_reviews_list_item item_3">
                  <div className="section_7_reviews_list_item_top">
                    <img src="./assets/images/GDSC.png" alt="" />
                    <h4>
                      “I don’t think business would have grown<br />
                      as fast or as well if not for the freelancers’<br />
                      expertise and ability to adapt.”
                    </h4>
                    <p>Amir Zakaria, Who?</p>
                  </div>
                  <div className="section_7_reviews_list_item_bottom">
                    <h5>Results</h5>
                    <hr />
                    <div className="section_7_reviews_list_item_bottom_results">
                      <div>
                        <h4>69-Hour</h4>
                        <p>average turnaround on websites</p>
                      </div>
                      <div>
                        <h4>0.69x Faster</h4>
                        <p>launch of new program</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 4 */}
              <div className="section_7_reviews_list_box_2">
                <div className="section_7_reviews_list_item item_4">
                  <div className="section_7_reviews_list_item_left">
                    <img src="./assets/images/company-logos-cover.webp" alt="" />
                  </div>
                  <div className="section_7_reviews_list_item_right">
                    <h5>And many more</h5>
                    {/* Add logos here if needed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_8 wrapper">
      <div className="section_8_left">
        <a type="button">Top companies</a>
        <a type="button">Trending startups</a>
        <a type="button">Top skills</a>
      </div>
      <div className="section_8_middle">
        <a type="button">Video Editors</a>
        <a type="button">Data Analyst</a>
        <a type="button">Android Developer</a>
        <a type="button">Content Writer</a>
        <a type="button">Copywriter</a>
        <a type="button">Data Scientist</a>
        <a type="button">Front-End Developer</a>
        <a type="button">Game Developer</a>
        <a type="button">Graphic Designer</a>
      </div>
      <div className="section_8_right">
        <a type="button">Logo Designer</a>
        <a type="button">Mobile App Developer</a>
        <a type="button">Python Developer</a>
        <a type="button">Resume Writer</a>
        <a type="button">Social Media Manager</a>
        <a type="button">Software Developer</a>
        <a type="button">Software Engineer</a>
        <a type="button">UI/UX Designer</a>
        <a type="button">Web Designer</a>
      </div>
    </section>

    <footer className="footer">
      <div className="wrapper">
        <div className="footer_top">
          <div className="footer_top_list">
            <h5>For Companies</h5>
            <ul>
              <li><a href="#">How to Hire</a></li>
              <li><a href="#">Talent Marketplace</a></li>
              <li><a href="#">Project Menu</a></li>
              <li><a href="#">Talent Scout</a></li>
              <li>
                <a href="#">Hire an Agency</a>
              </li>
              <li>
                <a href="#">Enterprise</a>
              </li>
              <li>
                <a href="#">Payroll Services</a>
              </li>
              <li>
                <a href="#">Direct Contracts</a>
              </li>
              <li>
                <a href="#">Hire Worldwide</a>
              </li>
              <li>
                <a href="#">Hire in Kuwait</a>
              </li>
            </ul>
          </div>

          <div className="footer_top_list">
            <h5>For Startups</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Success Story</a></li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Programs</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          <div className="footer_top_list">
            <h5>For Students</h5>
            <ul>
              <li><a href="#">How to Find Work</a></li>
              <li><a href="#">Direct Contracts</a></li>
              <li>
                <a href="#">Find Freelance Jobs Worldwide</a>
              </li>
              <li>
                <a href="#">Find Freelance Jobs in the USA</a>
              </li>
            </ul>
          </div>

          <div className="footer_top_list">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Leadership</a></li>
              <li>
                <a href="#">Help & Support</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Trust, Safety & Security</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer_middle">
          <div className="footer_middle_left">
            <h5>Follow Us</h5>
            <div className="footer_middle_left_list">
              <div className="footer_icons">
                <img src="./assets/images/facebook.svg" alt="facebook" />
              </div>
              <div className="footer_icons">
                <img src="./assets/images/linkedIn.svg" alt="linkedIn" />
              </div>
              <div class="footer_icons">
                <img src="./assets/images/twitter.svg" alt="twitter" />
              </div>
              <div class="footer_icons">
                <img src="./assets/images/youtube.svg" alt="youtube" />
              </div>
              <div class="footer_icons">
                <img src="./assets/images/instagram.svg" alt="instagram" />
              </div>
            </div>
          </div>

          <div className="footer_middle_right">
            {/* Additional content for the middle right if needed */}
          </div>
        </div>

        <div className="footer_bottom">
          <p>© 2023 - 20XX Pecunia® </p>
          <ul className="footer_bottom_list">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Settings</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Home;