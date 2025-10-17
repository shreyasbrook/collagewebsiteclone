import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Contact Us</h3>
          <p>
            The Principal<br />
            SDM Polytechnic,<br />
            Ujire – 574 240, Belthangady Taluk, D.K., Karnataka, India
          </p>
          <p>
            <strong>Phone</strong> : 08256-236600, 9845893731, 9880724085
          </p>
          <p>
            <strong>Email</strong> : principal@sdmpolytechnic.in / office@sdmpolytechnic.in
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul className="list">
            <li><a href="#">Photo Gallery</a></li>
            <li><a href="#">Student Space</a></li>
            <li><a href="#">AICTE Mandatory Disclosure</a></li>
            <li><a href="#">EOA report 2025-26</a></li>
          </ul>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
        <a href="/week08.pdf" target="_blank" rel="noopener noreferrer">
          <button type="button">8</button>
        </a>
        <a href="/answers.pdf" target="_blank" rel="noopener noreferrer">
          <button type="button">answers</button>
        </a>
      </div>
      <div className="copyright">
        © SDM Polytechnic. All Rights Reserved. | Powered by SDMES
      </div>
    </footer>
  );
}

export default Footer;


