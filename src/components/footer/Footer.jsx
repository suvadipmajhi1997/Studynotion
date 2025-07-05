import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-dark text-light">
      <div className="container py-5 border-bottom border-secondary">
        <div className="row g-4">
          {/* Section 1 */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-6 col-md-4 mb-4">
                <img src={Logo} alt="Logo" className="img-fluid mb-3" />
                <h5 className="fw-semibold">Company</h5>
                <ul className="list-unstyled">
                  {["About", "Careers", "Affiliates"].map((ele, i) => (
                    <li key={i}>
                      <Link
                        to={ele.toLowerCase()}
                        className="text-decoration-none text-secondary d-block py-1"
                      >
                        {ele}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="d-flex gap-2 fs-5">
                  <FaFacebook />
                  <FaGoogle />
                  <FaTwitter />
                  <FaYoutube />
                </div>
              </div>

              <div className="col-6 col-md-4 mb-4">
                <h5 className="fw-semibold">Resources</h5>
                <ul className="list-unstyled">
                  {Resources.map((ele, i) => (
                    <li key={i}>
                      <Link
                        to={ele.split(" ").join("-").toLowerCase()}
                        className="text-decoration-none text-secondary d-block py-1"
                      >
                        {ele}
                      </Link>
                    </li>
                  ))}
                </ul>
                <h5 className="fw-semibold mt-4">Support</h5>
                <Link
                  to="/help-center"
                  className="text-decoration-none text-secondary d-block py-1"
                >
                  Help Center
                </Link>
              </div>

              <div className="col-12 col-md-4 mb-4">
                <h5 className="fw-semibold">Plans</h5>
                <ul className="list-unstyled">
                  {Plans.map((ele, i) => (
                    <li key={i}>
                      <Link
                        to={ele.split(" ").join("-").toLowerCase()}
                        className="text-decoration-none text-secondary d-block py-1"
                      >
                        {ele}
                      </Link>
                    </li>
                  ))}
                </ul>
                <h5 className="fw-semibold mt-4">Community</h5>
                <ul className="list-unstyled">
                  {Community.map((ele, i) => (
                    <li key={i}>
                      <Link
                        to={ele.split(" ").join("-").toLowerCase()}
                        className="text-decoration-none text-secondary d-block py-1"
                      >
                        {ele}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="col-lg-6">
            <div className="row">
              {FooterLink2.map((ele, i) => (
                <div className="col-6 col-md-4 mb-4" key={i}>
                  <h5 className="fw-semibold">{ele.title}</h5>
                  <ul className="list-unstyled">
                    {ele.links.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.link}
                          className="text-decoration-none text-secondary d-block py-1"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container py-3">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center text-secondary small">
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start mb-2 mb-lg-0">
            {BottomFooter.map((ele, i) => (
              <span
                key={i}
                className={`px-3 ${
                  i !== BottomFooter.length - 1 ? "border-end border-secondary" : ""
                }`}
              >
                <Link
                  to={ele.split(" ").join("-").toLowerCase()}
                  className="text-decoration-none text-secondary"
                >
                  {ele}
                </Link>
              </span>
            ))}
          </div>
          <div className="text-center">Made with ❤️ Suvadip © 2023 Studynotion</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
