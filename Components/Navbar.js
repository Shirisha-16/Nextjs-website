// components/Navbar.js
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light mt-5">
  <div
    className="container-fluid position-fixed p-5"
    style={{
      backgroundColor: "rgb(255 255 255 / 30%)",
      backdropFilter: "blur(3px)"
    }}
  >
    <a href="Masco.html" className="navbar-brand">
      <span>
        <img src="web logo.png" />
      </span>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#main-nav"
      aria-controls="main-nav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse justify-content-center align-center"
      id="main-nav"
    >
      <ul className="navbar-nav fw-bold">
        <li className="nav-item ms-3">
          <a className="nav-link" href="#Home">
            Home
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#Features">
            Features
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#Service">
            Service
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#About">
            About
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#Team">
            Team
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#Testimonial">
            Testimonial
          </a>
        </li>
      </ul>
    </div>
    <a
      href="#login"
      className="d-none d-md-block text-secondary text-decoration-none fw-bold"
    >
      <span>Login</span>
    </a>
    <button
      className="btn ms-4 px-3 py-1 d-none d-md-block fw-bold"
      style={{ backgroundColor: "rgb(255 153 102)" }}
    >
      SignUp
    </button>
  </div>
</nav>

  );
}
