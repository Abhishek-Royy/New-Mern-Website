import React, { useEffect } from "react";
import Typed from "typed.js";
import "../stylesheets/footer.css";

function Footer() {
  useEffect(() => {
    const typed = new Typed(".input", {
      strings: ["Instagram", "Linkedin", "Facebook", "Telegram"],
      typeSpeed: 90,
      backSpeed: 85,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <div className="footer-container">
        <div className="text">
          <h1>
            #Join us on <span className="input"></span>
          </h1>
        </div>

        <div className="footer-lists">
          <div className="left-footer">
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/abhishek-roy-4a5244239/"
                target="_blank"
              >
                <i class="ri-linkedin-fill"></i>
              </a>
              <a href="#">
                <i class="ri-telegram-line"></i>
              </a>
              <a
                href="https://www.instagram.com/itz.abhishek2.o/"
                target="_blank"
              >
                <i class="ri-instagram-line"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100033861155295"
                target="_blank"
              >
                <i class="ri-facebook-fill"></i>
              </a>
              <a href="https://github.com/Abhishek-Royy" target="_blank">
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="right-footer">
            <div className="about">
                <ul>
                    <li>Courses</li>
                    <li>Privacy</li>
                    <li>Policy</li>
                    <li>Condition</li>
                    <li>Refund</li>
                    <li>Community</li>
                </ul>
            </div>
          </div>
        </div>
        <p>Copyright © 2023 happycoding Technology. All Rights Reserved</p>
      </div>
    </main>
  );
}

export default Footer;
