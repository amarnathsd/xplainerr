import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import companyLogo from "../Assets/company-logo.webp";
import laptop from "../Assets/laptop-img.svg";

const Header = () => {
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const [showCohortDropdown, setShowCohortDropdown] = useState(false);
  const [showQuizDropdown, setShowQuizDropdown] = useState(false);

  const navigate = useNavigate();


  return (
    <div>
      <div className="header">
        <div className="topHeaderstripe flex justify-center p-2">
          <p className="text-center font-bold text-white">
            🎉 Get additional discount of 10% on Tech For Product Manager
            cohort. Promo code: XPHP 🎉
          </p>
        </div>
        <div className="flex items-center justify-between mx-5">
          <div className="flex items-center justify-center">
            <img
              className="company-logo"
              alt="Company Logo"
              src={companyLogo}
              width="30"
              height="30"
              loading="lazy"
            />
            <a className="">
              <h2 className="font-bold text-lg">Xplainerr</h2>
            </a>
          </div>

          <div className="button-container">
            <div className="flex gap-5 ">
              <div
                className="relative"
                onMouseEnter={() => setShowCoursesDropdown(true)}
                onMouseLeave={() => setShowCoursesDropdown(false)}
              >
                <button className="nav-tag flex items-center py-3">
                  Courses
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="20"
                    width="20"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {showCoursesDropdown && (
                  <div className="dropdown-menu">
                    <a onClick={() => navigate('/LandingPage')}>API Product Manager </a>
                    <a onClick={() => navigate('/Atozpricing')}>A to Z Pricing and Monitization</a>
                    <a onClick={() => navigate('/uxdesigning')}>UX Writing</a>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setShowCohortDropdown(true)}
                onMouseLeave={() => setShowCohortDropdown(false)}
              >
                <button className="nav-tag flex items-center gap-x-1 py-3 outline-none">
                  Cohort
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {showCohortDropdown && (
                  <div className="dropdown-menu ">
                    <div className="flex items-center">
                      <div className="pe-1">
                        <img src={laptop} alt="laptop img" loading="lazy"  width="20" />
                      </div>
                      <div>
                        <a href="/">
                          Tech for Product Manager{" "}
                          <div>
                            <span>save ₹7000</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setShowQuizDropdown(true)}
                onMouseLeave={() => setShowQuizDropdown(false)}
              >
                <button className="nav-tag flex items-center gap-x-1 py-3 outline-none">
                  Quiz
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {showQuizDropdown && (
                  <div className="dropdown-menu">
                    <a className="" href="/">
                      Product Management
                    </a>
                    <a href="/">Growth & GTM</a>
                    <a href="/">Software Engineering</a>
                  </div>
                )}
              </div>

              <button className="nav-tag py-3 " href="/">
                PM Interview Prep
                <span className="new-badge">New</span>
              </button>
              <button className="nav-tag py-3 hover:text-primary_bold" href="/blog">
                Blog
              </button>
            </div>
          </div>

          <div className=" ">
            <button className="signin-btn py-3 mx-3">Signup</button>
            <button className="login-btn p-1 px-4 text-sm font-semibold">
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
